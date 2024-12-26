<template>
  <div>
    <AdminNavbar />
    <div class="admin dashboard ">
      <!--  sidebar dashboard -->
      <Transition
    enter-active-class="transform transition-transform duration-300"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transform transition-transform duration-300"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
        <div v-if="openSidebar" class="sidebar">
          <div class="p-6 lg:p-10">
            <h4 class="text-4xl font-semibold text-neutral-400">Sidebar</h4>
            <p>There is no sidebar menu yet</p>
          </div>
      </div>
      </Transition>
      <div class="w-screen">
        <div class="container py-10">
          <slot />
        </div>
      </div>  
    </div>
  </div>
</template>

<script lang="ts" setup>
const { openSidebar } = useForsidebar()
</script>

<style>
.dashboard {
  @apply grid grid-cols-1 lg:grid-cols-[240px_1fr] h-screen pt-[100px] lg:pt-20  relative overflow-x-hidden;
}

.sidebar {
  @apply fixed top-0 left-0 lg:relative pt-[130px] lg:pt-0 z-30 w-full min-h-screen h-full bg-white lg:max-w-[240px]  lg:border-r ;
}
</style>