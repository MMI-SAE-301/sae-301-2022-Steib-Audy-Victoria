<template>
  <div  :class="!isDark ? 'dark' : ''" >
  <header class="dark:bg-black py-6">
    <nav class="flex justify-between pb-2">
      <div>
        <router-link to="/"><h1 class="font-Merriweather font-bold text-4xl ml-4 dark:text-white">TiK•TaK</h1></router-link>
      </div>
      <!--Bouton Darkmode-->
      <div class=" gap-3 flex items-center">
        <p class="hidden sm:flex text-lg dark:text-white duration-700">Dark Mode</p>
        <!-- Début Bouton Switch -->
        <label class="switch relative dark:border-transparent dark:hover:border-white border-2 rounded-full duration-700">
          <input type="checkbox"  @click="isDark = !isDark">
          <span class="slider round bg-white before:bg-[#222] dark:before:bg-GrisMoyen"></span>
        </label>
        <!-- Fin Bouton Switch -->
      </div>
      <!--Fin du bouton darkmode-->
      <div class="dark:text-white">
        <router-link class="mx-5 font-MerriweatherSans text-2xl" to="/modeles">Nos modèles</router-link>
        <router-link class="mx-5 font-MerriweatherSans text-2xl" to="/personnaliser">Personnaliser</router-link>
        <router-link class="mx-5 font-MerriweatherSans text-2xl border border-black dark:border-white rounded-md p-2" to="/connexion">Connexion</router-link>
      </div>
    </nav>

    <hr class="border-black border-2 mx-7 dark:border-white">

  </header>


  <!-- Affiche les pages -->
  <main>
    <Suspense>
      <router-view class=" p-4" />
    </Suspense>
  </main>

  <footer class="bg-GrisClair dark:bg-GrisFonce bg-[url('/public/LineFooter.svg')] p-10">
    <nav class="grid font-MerriweatherSans text-lg dark:text-white">
      <router-link class="border-l-black dark:border-l-white border-l-2 p-2 mb-5" to="/connexion">Connexion</router-link>
      <router-link class="border-l-black dark:border-l-white border-l-2 p-2 mb-5" to="/modeles">Nos modèles</router-link>
      <router-link class="border-l-black dark:border-l-white border-l-2 p-2 mb-5" to="/">Personnaliser</router-link>
      <router-link class="border-l-black dark:border-l-white border-l-2 p-2 mb-5" to="/enregistrer">Mes enregistrements</router-link>
      <router-link class="border-l-black dark:border-l-white border-l-2 p-2 mb-5" to="/">Mon compte</router-link>
      <router-link class="border-l-black dark:border-l-white border-l-2 p-2 mb-5" to="/">Mention Légales</router-link>
      <div>
        <router-link class="border-l-black dark:border-l-white border-l-2 p-2 mb-5" to="/">CGU
        </router-link>
        <router-link class="border-l-black dark:border-l-white border-l-2 p-2 mb-5" to="/">CGV
        </router-link>
      </div>
    </nav>
    <div>
      <h2 class="text-center font-Merriweather text-6xl font-bold dark:text-white">TiK•TaK</h2>
    </div>
  </footer>
  </div>
</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";

</script>

<script lang="ts">
export default {
  data() {
    return {
      isDark: true,
    };
  },

};
</script>

<style scoped>
.switch {
  width: 60px;
  height: 34px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  -webkit-transition: .4s;
  transition: .4s;

}

.slider:before {
  position: absolute;
  content: "";
  height: 23px;
  width: 23px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #FFF;
}

input:focus+.slider {
  box-shadow: 0 0 1px #222;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.button1 {
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  transition-duration: 300ms;
}

.v-enter-active,
.v-leave-active {
  transition: 0.6s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  translate: 0px 150px;
}
</style>