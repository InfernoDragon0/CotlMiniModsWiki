<template>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 snap-center">
            <h1 class="text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">Save Converter</h1>
            <p class="mt-6 text-xl text-gray-700">Saves that created using COTL API 0.1.6 and below can be converted for 0.1.7 and above.</p>
            <p class="mt-6 text-gray-700">Upload the file from "AppData\LocalLow\Massive Monster\Cult Of The Lamb\saves\cotl_api_data.json".</p>
            <p class="mt-6 max-w-3xl text-xl text-gray-700">Coded by <a href="https://github.com/xhayper" class="text-red-400">hayper</a>.</p>
            <!--Upload file-->
            <div class="mt-6 max-w-3xl text-xl text-gray-700">
                <input type="file" id="file" ref="filez" @change="onFileChange" />
            </div>

            <!-- action button-->
            <div class="mt-8 flex">
                <div class="inline-flex rounded-md shadow">
                    <button @click="convert()" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Convert
                    </button>
                </div>
            </div>

            <!-- modal dialog with ok-->
            <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-if="showModal">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                        Results
                                    </h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            {{saveresult}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button @click="showModal = false" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
            
        </div>
</template>

<script setup lang="ts">
    import crypto from 'crypto';
    const filez = ref(null) as any
    const showModal = ref(false)
    const saveresult = ref("")
//onFileChange check if file is a json file
    const onFileChange = (e: any) => {
        console.log(filez.value?.files[0])
        if (filez.value?.files[0].type !== "application/json") {
            saveresult.value = "Please upload a json file."
            showModal.value = true
            filez.value = null
        }
        else if (filez.value?.files[0].size > 50000) {
            saveresult.value = "File size too large."
            showModal.value = true
            filez.value = null

        }

        
    };
    const convert = async () => {
        if (filez.value?.files[0] == null) {
            saveresult.value = "Please upload a file first."
            showModal.value = true
        }

        else if (filez.value?.files[0].type !== "application/json") {
            saveresult.value = "Please upload a json file."
            showModal.value = true
            filez.value = null
        }
        else if (filez.value?.files[0].size > 1000000) { //1000 kb or less
            saveresult.value = "File size too large."
            showModal.value = true
            filez.value = null
        }
        else {
            if (filez.value?.files[0]) {
                var reader = new FileReader();
                reader.readAsBinaryString(filez.value?.files[0]);
                //send to server converter.ts
                reader.onload = async function (evt) {
                    const {data:message} = await useAsyncData('message', () => $fetch('/api/converter', {
                            method: 'POST', 
                            body: {
                                datax: evt.target?.result,
                            }
                    }), {initialCache: false})

                    
                    var element = document.createElement('a');
                    element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(message.value!.toString()));
                    element.setAttribute('download', "io.github.xhayper.COTL_API.json");

                    element.style.display = 'none';
                    document.body.appendChild(element);

                    element.click();

                    document.body.removeChild(element);

                }
            }
        }
    }
</script>