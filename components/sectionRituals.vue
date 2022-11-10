<template>
    <div class="snap-center">
        <!-- tailwindcss an image on the left, and title on the right, with description below the title-->
        <div class="relative max-w-12xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 bg-white ">
            <div class="relative lg:grid lg:grid-cols-12 lg:gap-0 content-center">
                <!-- another div for col span 4-->
                <div class="lg:mt-0 lg:col-span-6">
                    <img src="~/assets/images/cminimodsrituals.png" alt="Rituals">
                </div>


                <div class="lg:col-span-6 content-center">
                    <div class="max-w-lg mx-auto sm:max-w-lg">
                        <h2 class="text-3xl tracking-tight text-white sm:text-4xl ">
                            <span class="font-extrabold block text-black">CUSTOM RITUALS</span>
                            <span class="text-2xl text-red-400">Custom Rituals to enhance your followers.</span>
                                                                    
                        </h2>
                        <p class="mt-4 text-lg text-black">Rituals to combine follower traits, level up, and reset cooldowns.</p>
                        <NuxtLink to="/rituals" class="mt-4 text-lg text-red-800">Read more about it here.</NuxtLink>
                        <!-- an image here on the right of the div-->
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>