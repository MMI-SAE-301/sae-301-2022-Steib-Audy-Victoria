<script setup lang="ts">
import BtnPersonnalisation from '@/components/btnPersonnalisation.vue';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";

</script>
<template>
  <!-- Section 1 -->
  <section>
    <div class="flex">
      <div class="flex flex-col place-content-center m-4">
        <h3 class="font-MerriweatherSans text-xl text-center mb-8">Grâce à <span class="font-Merriweather font-bold">TiK•TaK</span> personnaliser votre montre connectée !</h3>
        <p >
          Connectée avec votre smartphone, elle vous informera d’un nouveau message ou d’une notification. Elle vous permettra
          également de répondre à un appel, de vous rappeler d’un événement de votre agenda, ou de vous donner la météo. Elle
          suivra votre activité physique quotidienne et votre fréquence cardiaque en temps réel.
        </p>
        <p class=" mt-4">
          Elle vous accompagnera partout grâce à son design sobre et élégant !
        </p>
      </div>
      <img src="/public/MontreNoir.webp" alt="Montre">
    </div>
    <div class="flex justify-center">
      <BtnPersonnalisation></BtnPersonnalisation>
    </div>
  </section>

  <!-- Section 2 -->
  <section class="bg-GrisMoyen py-4">
    <h4 class="text-white font-MerriweatherSans text-center text-lg">Vos personnalisation</h4>
    <div class="flex justify-center">
      <ChevronLeftIcon class="w-10 text-white"></ChevronLeftIcon>
      <div>

      </div>
      <ChevronRightIcon class="w-10 text-white"></ChevronRightIcon>
    </div>
    <a class="text-white text-center underline text-lg" href=""><p>Voir plus de mes personnalisations</p></a>
  </section>

  <!-- Section 3 -->
  <section>
    <div class="flex">
      <div>
        <img src="/public/MontreBeige.webp" alt="Montre">
      </div>
      <div class=" flex flex-col place-content-center">
        <p class="my-3">Cette montre connectée personnalisable est universelle et unisexe, et elle fonctionne avec tous les systèmes
        d’exploitation existant !</p>
        <p class="my-3">L’autonomie de cette montre est variable, entre 4 à 6 jours selon l’utilisation !</p>
        <p class="my-3">En plus de posséder les fonctions d’ECG et de Cardiofréquencemètre, cette montre est étanche jusqu’à 1m de profondeur
        pendant 30 min, grâce à la norme IP67 !</p>
      </div>
    </div>
  </section>
</template>