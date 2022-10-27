<script setup lang="ts">
import { colors } from "@/types";
defineProps<{
    name?: string;
    label?: string;
}>();
</script>
<template>
    <FormKit :name="name" :label="label" value="#FFFFFF" 
        type="radio" :options="colors"
        :sections-schema="{inner:{$el:null}, decorator: {$el:null}}"
        outer-class="my-10"
        input-class="peer sr-only"
        options-class="flex gap-3" 
        legend-class="font-MerriweatherSans text-xl font-thin ">
        <template #label="context">
            <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                :style="{ backgroundColor: context.option.value }" ></div>
            <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>
</template>