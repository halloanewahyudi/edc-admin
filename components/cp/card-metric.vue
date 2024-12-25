<template>
  <div class="p-6 lg:p-8 bg-white w-full border rounded-lg flex flex-col justify-center items-center">
    <p class="text-sm font-medium">{{ props.title }}</p>
    <h2 class="text-xl lg:text-6xl font-semibold text-neutral-700">{{ props.number }}</h2>
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