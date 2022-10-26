<template>
  <header>
    <nav class="flex justify-between my-6">
      <div>
        <router-link to="/"><h1 class="font-Merriweather font-bold text-4xl ml-4">TiK•TaK</h1></router-link>
      </div>
      <div>
        <router-link class="mx-5 font-MerriweatherSans text-2xl" to="/modeles">Nos modèles</router-link>
        <router-link class="mx-5 font-MerriweatherSans text-2xl" to="/">Personnaliser</router-link>
        <router-link class="mx-5 font-MerriweatherSans text-2xl border border-black rounded-md p-2" to="/connexion">Connexion</router-link>
      </div>
    </nav>
    <hr class="border-black border-2 mx-7">
  </header>

  <!-- Affiche les pages -->
  <main>
    <Suspense>
      <router-view class=" p-4" />
    </Suspense>
  </main>

  <footer class="bg-GrisClair bg-[url('/public/LineFooter.svg')] p-10">
    <nav class="grid">
      <router-link class=" font-MerriweatherSans text-lg border-l-black border-l-2 p-2 mb-5" to="/connexion">Connexion</router-link>
      <router-link class=" font-MerriweatherSans text-lg border-l-black border-l-2 p-2 mb-5" to="/modeles">Nos modèles</router-link>
      <router-link class=" font-MerriweatherSans text-lg border-l-black border-l-2 p-2 mb-5" to="/">Personnaliser</router-link>
      <router-link class=" font-MerriweatherSans text-lg border-l-black border-l-2 p-2 mb-5" to="/enregistrer">Mes enregistrements</router-link>
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
