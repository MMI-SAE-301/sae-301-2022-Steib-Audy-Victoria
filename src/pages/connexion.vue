<script setup lang="ts">
import BtnConnexion from '@/components/btnConnexion.vue';
import BtnInscription from '@/components/btnInscription.vue';
import { supabase, user } from '../supabase';

</script>
<template>
    <div class="dark:bg-black">
    <div v-if="user" class="flex justify-center  dark:text-white">
                <button @pointerdown="supabase.auth.signOut()">
                    Se déconnecter ({{user.email}})
                </button>
    </div>
    <div v-else class="grid grid-cols-1 md:flex md:justify-evenly my-20  dark:text-white ">
        <div>
            <div class="my-2 flex flex-col">
                <label for="email">ADRESSE EMAIL :</label>
                <input  type="email" name="email" placeholder="Entrez votre adresse email ...">
            </div>
            <div class="my-2 flex flex-col">
                <label for="mot-de-passe">MOT DE PASSE :</label>
                <input type="password" name="mot-de-passe" placeholder="Entrez votre mot de passe ...">
            </div>
            <div>
                <BtnInscription></BtnInscription>
                <BtnConnexion></BtnConnexion>
            </div>
        </div>
        <hr class="border-black dark:border-white border-l h-auto">
        <div class="my-10">
            <button class="flex border dark:border-white border-black place-items-center rounded-md p-2 my-3 w-96" @pointerdown="supabase.auth.signIn({ provider: 'google' })">
                <span class="font-MerriweatherSans font-thin px-14" >Se connecter via Google</span>
                <img class="w-8" src="/public/Google.png" alt="Logo de Google">
            </button>
            <button class="flex border dark:border-white border-black place-items-center rounded-md p-2 my-3 w-96" @pointerdown="supabase.auth.signIn({ provider: 'facebook' })">
                <span class="font-MerriweatherSans font-thin px-14">Se connecter via Facebook</span>
                <img class="w-8" src="/public/facebook.png" alt="Logo de Facebook">
            </button>
        </div>
    </div>
    </div>
</template>