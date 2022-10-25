<template>
  <header>
    <nav class="flex justify-between my-6">
      <div>
        <router-link to="/"><h1 class="font-Merriweather font-bold text-5xl ml-4">TiK•TaK</h1></router-link>
      </div>
      <div>
        <router-link class="mx-5 font-MerriweatherSans text-3xl" to="/">Nos modèles</router-link>
        <router-link class="mx-5 font-MerriweatherSans text-3xl" to="/">Personnaliser</router-link>
        <router-link class="mx-5 font-MerriweatherSans text-3xl border border-black rounded-md p-2" to="/">Connexion</router-link>
      </div>
    </nav>
    <hr class="border-black border-2 mx-7">
  </header>

  <!-- Affiche les pages -->
  <main>
    <Suspense>
      <router-view class="m-2 border-2 p-2" />
    </Suspense>
  </main>

  <footer class="bg-GrisClair bg-[url('/public/LineFooter.svg')] p-10">
    <nav class="grid">
      <router-link class=" font-MerriweatherSans text-lg border-l-black border-l-2 p-2 mb-5" to="/">Connexion</router-link>
      <router-link class=" font-MerriweatherSans text-lg border-l-black border-l-2 p-2 mb-5" to="/">Nos modèles</router-link>
      <router-link class=" font-MerriweatherSans text-lg border-l-black border-l-2 p-2 mb-5" to="/">Personnaliser</router-link>
      <router-link class=" font-MerriweatherSans text-lg border-l-black border-l-2 p-2 mb-5" to="/">Mes enregistrements</router-link>
      <router-link class=" font-MerriweatherSans text-lg border-l-black border-l-2 p-2 mb-5" to="/">Mon compte</router-link>
      <router-link class=" font-MerriweatherSans text-lg border-l-black border-l-2 p-2 mb-5" to="/">Mention Légales</router-link>
      <div>
        <router-link class=" font-MerriweatherSans text-lg border-l-black border-l-2 p-2 mb-5" to="/">CGU
        </router-link>
        <router-link class=" font-MerriweatherSans text-lg border-l-black border-l-2 p-2 mb-5" to="/">CGV
        </router-link>
      </div>
    </nav>
    <div>
      <h2 class="text-center font-Merriweather text-6xl font-bold">TiK•TaK</h2>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";

</script>
