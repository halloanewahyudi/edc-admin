<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 "> <!-- searching -->
      <div class="flex items-center rounded-lg ring-1  ring-neutral-700 overflow-hidden p-0 max-h-max">
        <button class="flex gap-1 bg-neutral-800 p-4 text-neutral-50">
          <icons-save></icons-save>
          <icons-chevron-down></icons-chevron-down>
        </button>
        <input type="search" class="p-3 w-full bg-neutral-800 hover:light-1 focus:outline-none" placeholder="Search">
        <div class="bg-neutral-800 p-3 text-neutral-50">
          KQL
        </div>
      </div>
      <div class="flex  items-center gap-4">
        <cp-date id="tanggal"></cp-date>
        <button
          class="btn flex gap-2 items-center shrink-0">
          <icons-refresh></icons-refresh> Refresh
        </button>
      </div>
      <div>
      </div>
    </div>

    <div class="flex flex-col gap-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6"> <!-- cart ke pertama -->
        <cp-card>
          <line-chart />
        </cp-card>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <cp-card-metric title="Metric" subtitle="Transaction Today" number="1,024"></cp-card-metric>
          <cp-card-metric title="Metric" subtitle="Sucess" number="987"></cp-card-metric>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6"> <!-- cart ke dua -->
        <cp-card>
          <line-chart-single />
        </cp-card>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <cp-card-metric title="Metric" subtitle="Reversal" number="5"></cp-card-metric>
          <cp-card-metric title="Metric" subtitle="Timeout" number="58"></cp-card-metric>
          <cp-card-metric title="Metric" subtitle="Decline" number="69"></cp-card-metric>
        </div>

      </div>

      <div class="grid grid-cols-1 md:grid-cols-2  gap-6 "> <!-- cart ke dua -->
        <div> <!-- kiri -->
          <cp-card class="h-full">
            <data-table></data-table>
          </cp-card>
        </div>
        <div class="flex flex-col gap-6"> <!-- kanan -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              class="bg-gradient-to-tr from-red-50/20 via-red-100/20 to-red-200/20  text-white border border-neutral-600 h-full rounded-lg p-10 flex flex-col justify-center gap-0 ">
              <span class="text-sm "> Avg Sale BNI Resp </span>
              <p class="text-xl lg:text-4xl font-semibold"> 2896.42 ms</p>
            </div>
            <div
              class=" bg-gradient-to-tr from-green-50/20 via-green-100/20 to-green-200/20  text-white border border-neutral-600 rounded-lg p-10 flex flex-col justify-center gap-0 h-max">
            <span class="text-sm "> Avg qris & Payment BNI Resp </span> 
              <p class="text-xl lg:text-4xl font-semibold"> 472.26 ms</p>
            </div>
          </div>

          <cp-card class="h-max">
            <line-chart-edc></line-chart-edc>
          </cp-card>
        </div> <!-- end kanan -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'admin',
  // middleware: 'auth',
  meta: {
    title: 'Admin',
    description: 'Admin'
  }
})

const dateInput = ref('')
onMounted(() => {
  dateInput.value = document.getElementById('tanggal') as HTMLInputElement;
  console.log(dateInput.value)
})

watchEffect(() => {
  console.log(dateInput.value)
})

const { response } = useResponse()
// Fungsi untuk menangkap perubahan nilai input


</script>

<style></style>