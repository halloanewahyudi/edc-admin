<script setup>


const { response } = useResponse()

// 📌 SHORT FILTER: Ambil hanya 5 item pertama dari dataset
const shortfilter = computed(() => {
   return Array.isArray(response.value) ? response.value : []
/*   switch (sortType.value) {
    case 'top':
    return response.value.slice(-5).reverse() || Array.isArray(response.value) ? response.value : []
    case 'bottom':
      return response.value.slice(-5).reverse() || Array.isArray(response.value) ? response.value : []
    default:
    return Array.isArray(response.value) ? response.value : []
  } */

})

// 📌 PAGINASI PADA SHORT FILTER
const currentPage = ref(1)
const itemsPerPage = 10 // Item per halaman

// Menghitung Total Halaman Berdasarkan Short Filter
const totalPages = computed(() => Math.ceil(shortfilter.value.length / itemsPerPage))

// Data yang Ditampilkan Berdasarkan Halaman Aktif
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage

   return shortfilter.value.slice(start, end)
})

// Fungsi Navigasi Halaman
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<template>
  <div>
    <h2 class="text-xl mb-3">Response Code</h2>
    <table class="table-auto w-full border rounded-lg text-sm">
      <thead class="bg-primary-50">
        <tr>
          <th class="px-4 py-1 ">Code</th>
          <th class="px-4 py-1">Desc</th>
          <th class="px-4 py-1">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in paginatedItems" :key="index">
          <td class="border px-4 py-1">{{ item.code }}</td>
          <td class="border px-4 py-1">{{ item.desc }}</td>
          <td class="border px-4 py-1">{{ item.total }}</td>
        </tr>
      </tbody>
    </table>
    
    <!-- Kontrol Paginasi -->
    <div class="pagination">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Prev</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

.pagination {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

button {
  padding: 5px 10px;
}
</style>
