<template>
    <div>
        <SectionRituals/>

        <!--tailwind bordered cards with an image and a title and a description-->
        <div class="relative max-w-12xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 bg-white ">
            <div class="relative lg:grid lg:grid-cols-12 lg:gap-2 content-center">
                <!-- another div for col span 4-->
                
                <div class="lg:mt-0 lg:col-span-3" v-for="structures in data" :key="structures.name">
                    <!--bordered card -->
                    <div class="bg-white shadow-xl overflow-hidden sm:rounded-lg">
                        <div class="px-4 py-5 sm:px-6">
                            <div :class="'h-96 ' + structures.className">
                                <nuxt-img class="" :src="`/images/`+structures.animation"  alt="Structures"/>
                            </div>

                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                <span class="font-extrabold block text-black">COMMAND</span>
                                <span class="text-2xl text-red-400">{{structures.name}}</span>
                            </h3>
                            <p class="mt-1 max-w-2xl text-sm text-gray-500">{{structures.description}}</p>

                        </div>
                    </div>
                </div>
                
                
                
                
            </div>
        </div>






    </div>
    
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

    const router = useRoute()
    const data = [
        {
            name: "Fusion Ritual",
            description: "Sacrifice a follower. Another follower gains their traits.",
            className: "n",
            animation: "Follower-devotion-devotion-collect-loop.gif",
        },
        {
            name: "Distribution Ritual",
            description: "Distribute wealth and level all followers.",
            className: "n",
            animation: "Follower-reactions-react-happy1.gif",
        },
        {
            name: "Ritual Frenzy",
            description: "Resets all ritual cooldowns.",
            className: "n",
            animation: "Lamb-idle-big.gif",
        },
        ]
</script>

<style scoped>
.crystalmines {
    background-image: url('~/assets/images/crystalmines.png');
    background-position: left;
    background-repeat: no-repeat;
}

.silkmines {
    background-image: url('~/assets/images/silkmines.png');
    background-position: left;
    background-repeat: no-repeat;
}

.bonemines {
    background-image: url('~/assets/images/bonemines.png');
    background-position: left;
    background-repeat: no-repeat;
}

.cotlpc {
    background-image: url('~/assets/images/cotlpc.png');
    background-position: left;
    background-repeat: no-repeat;
}

.pond {
    background-image: url('~/assets/images/Icon_Pond.png');
    background-position: left;
    background-repeat: no-repeat;
}

.chefdesk {
    background-image: url('~/assets/images/chefdesk.png');
    background-position: right;
    background-repeat: no-repeat;
}

.waiterdesk {
    background-image: url('~/assets/images/waiterdesk.png');
    background-position: right;
    background-repeat: no-repeat;
}
</style>