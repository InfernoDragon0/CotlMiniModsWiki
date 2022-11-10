<template>
    <div class="snap-y snap-mandatory h-screen scroll-smooth">
        <!-- add a tailwindcss parallax hero image -->
        <div class="fixed w-full h-full background bg-gray-800">
            <div class=" flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-hero-image">
                <div class="absolute inset-0 bg-gray-600 mix-blend-multiply" aria-hidden="true">
                    
                </div>
            </div>
        </div>

        <!-- tailwindcss section with cards description-->
        


        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 snap-center">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">COTL MINI MODS</h1>
            <p class="mt-6 max-w-3xl text-xl text-gray-300">A collection of mini mods for Cult of the Lamb.</p>

            <div class="mt-10 sm:flex">
                <div class="rounded-md shadow">
                    <a href="https://cult-of-the-lamb.thunderstore.io/package/InfernoDragon0/CotLMiniMods/" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10">
                        Nexusmods
                    </a>
                </div>
                <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a href="https://cult-of-the-lamb.thunderstore.io/package/InfernoDragon0/CotLMiniMods/" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-400 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                        Thunderstore
                    </a>
                </div>
            </div>
            
        </div>
        <SectionNewVersion/>

        <SectionStructures/>

        <SectionRituals/>

        <SectionRoles/>

        <SectionCommands/>
        
        <div class="bg-cover bg-center h-screen bg-hero-image snap-center">
            <div class="flex items-center justify-center h-full semibg">
                <div class="text-center">
                    <h1 class="text-6xl text-white font-bold">COTL MINI MODS</h1>
                    <p class="text-2xl text-white">A collection of <a href="https://cult-of-the-lamb.thunderstore.io/package/InfernoDragon0/CotLMiniMods/" class="text-red-600 hover:text-red-700">Mini Mods</a> for the game Cult of the Lamb</p>
                </div>
            </div>
        </div>
        <Footer/>

    </div>
</template>

<style scoped>

.bg-hero-image {
    background-image: url('~/assets/images/hero-image.png');
}

.background {
    z-index: -1;
}

.semibg {
    background-color: rgba(0,0,0,0.75);
}
</style>