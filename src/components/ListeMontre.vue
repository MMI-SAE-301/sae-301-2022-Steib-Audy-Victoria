<script setup lang="ts">
import { supabase } from "@/supabase";
import montreCarree from "./montreCarree.vue";

const props = defineProps<{
    max?: number;
}>();
const { data: montres, error } = await supabase
    .from("Montre")
    .select("*")
    .limit(props.max ?? 100);
if (error) {
    console.log("n'a pas pu récupérer les montres", { error });
}
</script>
<template>
    <ul>
        <li v-for="Montre in montres" :key="Montre.id">
            <router-link :to="{ name: 'montrecarree-edit-id', params: { id: Montre.id } }">
                <montreCarree v-bind="Montre" />
            </router-link>
        </li>
    </ul>
</template>