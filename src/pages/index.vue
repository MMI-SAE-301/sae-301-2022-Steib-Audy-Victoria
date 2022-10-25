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
        <p class="font-MerriweatherSans text-lg">
          Connectée avec votre smartphone, elle vous informera d’un nouveau message ou d’une notification. Elle vous permettra
          également de répondre à un appel, de vous rappeler d’un événement de votre agenda, ou de vous donner la météo. Elle
          suivra votre activité physique quotidienne et votre fréquence cardiaque en temps réel.
        </p>
        <p class="font-MerriweatherSans text-lg mt-3">
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
    <h4 class="text-white text-center text-lg">Vos personnalisation</h4>
    <div class="flex justify-center">
      <ChevronLeftIcon class="w-10 text-white"></ChevronLeftIcon>
      <div>

      </div>
      <ChevronRightIcon class="w-10 text-white"></ChevronRightIcon>
    </div>
    <a class="text-white text-center underline text-lg" href=""><p>Voir plus de mes personnalisations</p></a>
  </section>
</template>