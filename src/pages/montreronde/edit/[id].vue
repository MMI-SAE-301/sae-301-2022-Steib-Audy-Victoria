<script setup lang="ts">
import FormMontre from '@/components/FormMontreC.vue';
defineProps<{
    id: string;
}>();
</script>
<template>
    <FormMontre :id="id"></FormMontre>
</template>