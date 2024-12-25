<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 "> <!-- searching -->
      <div class="flex items-center rounded-lg border border-neutral-300 overflow-hidden p-0 max-h-max">
        <button class="flex gap-1 bg-neutral-800 text-neutral-50 p-3">
          <icons-save></icons-save>
          <icons-chevron-down></icons-chevron-down>
        </button>
        <input type="search" class="p-2 w-full hover:bg-primary-50  focus:outline-none" placeholder="Search">
        <div class="bg-neutral-800 p-2 text-neutral-50">
          KQL
        </div>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap items-center gap-4">
        <cp-date id="tanggal"></cp-date>
        <button
          class="py-2 px-4 bg-neutral-800 text-neutral-50 rounded-lg hover:bg-neutral-700 duration-200 flex gap-2 items-center shrink-0">
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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <cp-card-metric title="Metric" subtitle="Transaction Today" number="1,024"></cp-card-metric>
          <cp-card-metric title="Metric" subtitle="Sucess" number="987"></cp-card-metric>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6"> <!-- cart ke dua -->
        <cp-card>
          <line-chart-single />
        </cp-card>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <cp-card-metric title="Metric" subtitle="Reversal" number="5"></cp-card-metric>
          <cp-card-metric title="Metric" subtitle="Timeout" number="58"></cp-card-metric>
          <cp-card-metric title="Metric" subtitle="Decline" number="69"></cp-card-metric>
        </div>

      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2  gap-6 "> <!-- cart ke dua -->
        <div> <!-- kiri -->
          <cp-card class="">
            <data-table></data-table>
          </cp-card>
        </div>
        <div class="flex flex-col gap-6"> <!-- kanan -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              class="l bg-red-300 text-red-900 border border-red-400 rounded-lg p-10 flex flex-col justify-center gap-0 h-max ">
              <span> Avg Sale BNI Resp </span>
              <p class="text-xl lg:text-4xl font-semibold"> 2896.42 ms</p>
            </div>
            <div
              class=" bg-green-300 text-green-900 border border-green-400 rounded-lg p-10 flex flex-col justify-center gap-0 h-max">
              Avg qris & Payment BNI Resp
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