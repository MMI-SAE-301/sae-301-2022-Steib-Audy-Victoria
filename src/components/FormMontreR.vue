<script setup lang="ts">
import type { Montre } from '@/types';
import { colors, matBoitier, matBracelet } from '@/types';
import { ref } from 'vue';
import { supabase } from "@/supabase";

import montreRonde from "@/components/montreRonde.vue"
import FormKitListColors from './FormKitListColors.vue';

import { useRouter } from "vue-router";
import type { FormKitNode } from '@formkit/core';
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
        .eq("id", props.id);
    if (error || !data)
        console.log("n'a pas pu charger le table Montre :", error);
    else montre.value = data[0];
}

// @ts-ignore
async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("Montre").upsert(dataForm);
    if (error || !data) node.setErrors([error?.message]);
    else {
        node.setErrors([]);
        router.push({ name: "montrecarree-edit-id", params: { id: data[0].id } });
    }
}
</script>
<template>
        <section class="grid grid-cols-2">
            <div class="w-full">
                <FormKit class="w-full" type="form" v-model="montre" @submit="upsertMontre" submit-label="ENREGISTER" :submit-attrs="{ classes: { input: 'border border-Rouge p-2 rounded-lg font-MerriweatherSans text-2xl m-2 flex justify-center dark:text-white'}}">
                    <FormKitListColors  name="bracelet" label="Couleur du bracelet" />
                    <FormKit name="id_mat_bracelet" label="Matériaux du Bracelet" type="select" :options="matBracelet" label-class="font-MerriweatherSans text-xl font-thin dark:text-white"/>
                    <FormKitListColors name="boitier" label="Couleur du boitier" />
                    <FormKit name="id_mat_boitier" label="Matériaux du Boitier" type="select" :options="matBoitier" label-class="font-MerriweatherSans text-xl font-thin dark:text-white"/>
                    <FormKitListColors name="ecran" label="Couleur de fond de l'écran" />
                    <FormKitListColors name="texte" label="Couleur du texte" />

                </FormKit>
            </div>
            <div class="bg-gradient-to-t from-Bordeaux to-transparent rounded-lg  m-2">
                <div class="bg-gradient-to-b from-white to-transparent rounded-lg  flex flex-col">
                    <div class="flex justify-center">
                        <montreRonde v-bind="montre" id="Montre"></montreRonde>
                    </div>
                    <h6 class="font-Merriweather text-2xl text-white text-center m-2">550€</h6>
        
                </div>
            </div>
        </section>
</template>


