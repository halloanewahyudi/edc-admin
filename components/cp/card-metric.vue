<template>
  <div class="p-6 lg:p-8 bg-neutral-900 border border-neutral-700  w-full  rounded-xl flex flex-col justify-end items-end relative overflow-hidden">
    <p class="text-sm font-medium py-2 px-4 rounded-r-full bg-neutral-700 text-primary absolute top-0 left-0">{{ props.title }}</p>
    <h2 class="text-xl lg:text-6xl xl:text-7xl font-bold ">{{ props.number }}</h2>
    <p class="lg:text-xl text-neutral-100">{{ props.subtitle }}</p>
  </div>
</template>


<script lang="ts" setup>
type Props = {
  title: string,
 number: number,
 subtitle: string

}
const props = defineProps<Props>()
</script>

<style>

</style>