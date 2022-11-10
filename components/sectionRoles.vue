<template>
    <div class="snap-center">
        <!-- tailwindcss inverted an image on the left, and title on the right, with description below the title-->

        <div class="relative max-w-12xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 bg-black">
            <div class="relative lg:grid lg:grid-cols-12 lg:gap-0">
                <div class="lg:col-span-6">
                    <div class="max-w-lg mx-auto sm:max-w-lg lg:mx-24">
                        <h2 class="text-3xl tracking-tight text-white sm:text-4xl">
                            <span class="font-extrabold block text-white">CUSTOM ROLES</span>
                            <span class="text-2xl text-red-400">Custom Roles. More Jobs for followers.</span>
                                                                    
                        </h2>
                        <p class="mt-4 text-lg text-white">New Jobs for your followers to help automate the cult a little more!</p>
                        <a href="#" class="mt-4 text-lg text-orange-800">Read more about it here.</a>
                        <!-- an image here on the right of the div-->
                    </div>
                </div>
                <!-- another div for col span 4-->
                <div class="mt-12 lg:mt-0 lg:col-span-2">
                    <img class="mt-8 h-48" src="~/assets/images/Follower-cook.gif" alt="stuff">
                </div>
                <div class="mt-12 lg:mt-0 lg:col-span-2">
                    <img class="mt-8 h-48" src="~/assets/images/Follower-fishing-fishing.gif" alt="stuff">
                </div>
                <div class="mt-12 lg:mt-0 lg:col-span-2">
                    <img class="mt-8 h-48" src="~/assets/images/Follower-food-food-run.gif" alt="stuff">
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.bonemines {
    background-image: url('~/assets/images/bonemines.png');
    background-repeat: no-repeat;
    background-position: bottom;
}

.silkmines {
    background-image: url('~/assets/images/silkmines.png');
    background-repeat: no-repeat;
    background-position: bottom;
}

.crystalmines {
    background-image: url('~/assets/images/crystalmines.png');
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>