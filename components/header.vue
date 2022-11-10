<template>
    <div class="sticky top-0 z-50 ">
        <!-- tailwindcss header without moving-->
        
        <nav class="flex items-center justify-between flex-wrap bg-zinc-800 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight"><a href="https://cult-of-the-lamb.thunderstore.io/package/InfernoDragon0/CotLMiniMods/">COTL MINI MODS</a></span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <NuxtLink to="/" class="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-white mr-4">
                        Home
                    </NuxtLink>
                    
                    <NuxtLink to="/structures" class="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-white mr-4">
                        Structures
                    </NuxtLink>
                    <NuxtLink to="/rituals" class="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-white mr-4">
                        Rituals
                    </NuxtLink>
                    <NuxtLink to="/roles" class="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-white mr-4">
                        Roles
                    </NuxtLink>
                    <NuxtLink to="/commands" class="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-white mr-4">
                        Commands
                    </NuxtLink>
                    <a href="https://github.com/InfernoDragon0/CotLMods" target="blank" class="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-white mr-4">
                        Github
                    </a>
                    <NuxtLink to="/changelog" class="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-white mr-4">
                        Changelog
                    </NuxtLink>
                    <NuxtLink to="/credits" class="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-white mr-4">
                        Credits
                    </NuxtLink>
                </div>
            </div>
        </nav>
    </div>
</template>