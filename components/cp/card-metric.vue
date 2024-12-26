<template>
  <div class="p-6 lg:p-8 bg-white backdrop-blur-xl bg-opacity-65 border border-primary/60 w-full  rounded-xl flex flex-col justify-end items-end relative overflow-hidden">
    <p class="text-sm font-medium py-2 px-4 rounded-r-full bg-primary text-white absolute top-0 left-0">{{ props.title }}</p>
    <h2 class="text-xl lg:text-6xl xl:text-7xl font-bold text-neutral-900">{{ props.number }}</h2>
    <p class="lg:text-xl">{{ props.subtitle }}</p>
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