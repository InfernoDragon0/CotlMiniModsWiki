<template>
    <div class="snap-center">
        <!-- tailwindcss inverted an image on the left, and title on the right, with description below the title-->

        <div class="relative max-w-12xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 bg-black">
            <div class="relative lg:grid lg:grid-cols-12 lg:gap-0">
                <div class="lg:col-span-6">
                    <div class="max-w-lg mx-auto sm:max-w-lg lg:mx-24">
                        <h2 class="text-3xl tracking-tight text-white sm:text-4xl">
                            <span class="font-extrabold block text-white">CUSTOM STRUCTURES</span>
                            <span class="text-2xl text-red-400">Custom Structures. New things to do.</span>
                                                                    
                        </h2>
                        <p class="mt-4 text-lg text-white">Many new structures are available, such as Follower Manager, mines, and desks.</p>
                        <a href="#" class="mt-4 text-lg text-orange-800">Read more about it here.</a>
                        <!-- an image here on the right of the div-->
                    </div>
                </div>
                <!-- another div for col span 4-->
                <div class="mt-12 lg:mt-0 lg:col-span-2 bonemines">
                    <img class="mt-8" src="~/assets/images/Follower-mining-cat.gif" alt="Rituals">
                </div>
                <div class="mt-12 lg:mt-0 lg:col-span-2 crystalmines">
                    <img class="mt-8" src="~/assets/images/followermining.gif" alt="Rituals">
                </div>
                <div class="mt-12 lg:mt-0 lg:col-span-2 silkmines">
                    <img class="mt-8" src="~/assets/images/Follower-mining-fox.gif" alt="Rituals">
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