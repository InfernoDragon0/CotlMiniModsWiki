<template>
    <div>
        <SectionCommands/>

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
            name: "Divorce",
            description: "Allows you to divorce followers.",
            className: "n",
            animation: "Follower-reactions-react-grieve-sad.gif",
        },
        {
            name: "Knucklebones",
            description: "Play knucklebones with your follower.",
            className: "n",
            animation: "Follower-reactions-react-happy1.gif",
        },
        {
            name: "Flip Coin",
            description: "Flip a coin with the follower.",
            className: "n",
            animation: "Follower-reactions-react-happy1.gif",
        },
        {
            name: "All Miner",
            description: "Commands to mine from Mines.",
            className: "bonemines",
            animation: "followermining.gif",
        },
        {
            name: "Waiter",
            description: "Command follower to serve food.",
            className: "waiterdesk",
            animation: "Follower-food-food-run.gif",
        },
        {
            name: "Chef",
            description: "Command follower to cook food.",
            className: "chefdesk",
            animation: "Follower-cook.gif",
        },
        {
            name: "Fisher",
            description: "Commands to use custom loot table for fishing.",
            className: "n",
            animation: "Follower-fishing-fishing.gif",
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