<script setup lang="ts">
import FormMontre from '@/components/FormMontreR.vue';
</script>
<template>
    <div class="dark:bg-black ">
    <FormMontre></FormMontre>
    <div class="my-12 dark:text-white ">
        <h3>FRÉQUEMMENT ACHETER AVEC :</h3>
        <div class="grid grid-cols-3 ">
            <div class="flex flex-col justify-center items-center">
                <img src="/public/fa1.png" alt="Coque et protection d’écran total en silicone pour montre carré">
                <p>Coque - Protection d’écran total silicone</p>
                <p>10 €</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="/public/fa2.png" alt="Coque en plastique et en silicone pour montre carré">
                <p>Coque en plastique et silicone</p>
                <p>10€</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="/public/fa3.png" alt="Coque de protection d’écran total en silicone pour montre ronde">
                <p>Coque de protection d’écran silicone</p>
                <p>10€</p>
            </div>
        </div>
    </div></div>
</template>