<script setup lang="ts">
import type { Montre } from '@/types';
import { colors } from '@/types';
import { ref } from 'vue';
import { supabase } from "../supabase";

import montreCarree from "@/components/montreCarree.vue"
import FormKitListColors from './FormKitListColors.vue';

import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps<{
    data?: Montre;
    id?: string;
}>();

const montre = ref<Montre>(props.data ?? {});

if (props.id) {
    // On charge les données de la Montre   
    let { data, error } = await supabase
        .from("Montre")
        .select("*")
        .eq("Id_Montre", props.id);
    if (error || !data)
        console.log("n'a pas pu charger le table Montre :", error);
    else montre.value = data[0];
}

async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("Montre").upsert(dataForm);
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({ name: "montre-edit-id", params: { id: data[0].id } });
    }
}
</script>
<template>
        <section class="grid grid-cols-2">
            <div>
                <FormKit type="form" v-model="montre" @submit="upsertMontre">
                    <FormKitListColors name="bracelet" label="Bracelet" />
                    <FormKitListColors name="boitier" label="Boitier" />
                    <FormKitListColors name="ecran" label="Couleur de fond de l'écran" />
                    <FormKitListColors name="texte" label="Couleur du texte" />

                </FormKit>
            </div>
            <div class="bg-gradient-to-t from-Bordeaux to-transparent rounded-lg  m-2">
                <div class="bg-gradient-to-b from-white to-transparent rounded-lg  flex flex-col">
                    <div class="flex justify-center">
                        <montreCarree v-bind="montre" id="Montre"></montreCarree>
                    </div>
                    <h6 class="font-Merriweather text-2xl text-white text-center m-2">550€</h6>
        
                </div>
            </div>
        </section>
</template>


