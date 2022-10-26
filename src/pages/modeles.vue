<script setup lang="ts">
import montreCarree from "@/components/montreCarree.vue"
import montreRonde from "@/components/montreRonde.vue"
import type { Montre } from '@/types';
import { colors } from '@/types';
</script>
<template>
    <section class="grid grid-cols-2">
        <router-link to="/">
            <div class="bg-gradient-to-t from-Bordeaux to-transparent rounded-lg m-2">
                <div class="bg-gradient-to-b from-white to-transparent rounded-lg  flex flex-col ">
                    <div class="flex justify-center">
                        <montreCarree ></montreCarree>
                    </div>
                    <h6 class="font-Merriweather text-2xl text-white text-center m-2">550€</h6>
                    <p class="text-2xl text-Doré text-center m-2">Modèle le plus populaire</p>
                </div>
            </div>
        </router-link>
        <router-link to="/">
            <div class="bg-gradient-to-t from-Bordeaux to-transparent rounded-lg  m-2">
                <div class="bg-gradient-to-b from-white to-transparent rounded-lg  flex flex-col">
                    <div class="flex justify-center">
                        <montreRonde></montreRonde>
                    </div>
                    <h6 class="font-Merriweather text-2xl text-white text-center m-2">550€</h6>
                    
                </div>
            </div>
        </router-link>
    </section>
</template>