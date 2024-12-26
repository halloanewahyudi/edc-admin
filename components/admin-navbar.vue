<template>
  <div class="fixed top-0 left-0 w-full z-50">
    <div class="bg-primary py-2 text-sm text-white"> <!-- nav atas -->
      <div class="container">
        <div class="flex  items-center justify-between w-full gap-5">
          <div>
            <h4 class="text-white font-medium">ADC Dashboard</h4>
          </div>
          <div class="relative w-full max-w-[400px] hidden lg:block">
            <input type="serarch" class="form-control-sm bg-neutral-50" placeholder="Search">
            <IconsSearch class="absolute right-2 top-1/4 text-primary" />
          </div>
          <div class="flex items-center gap-3">
            <IconsLifebuoy class="text-white" />
            <div class="flex items-center gap-2">
              <span class="text-white flex items-center gap-2"> <IconsUser class="text-white" /> {{ user?.name }} </span>
           <button @click="logout" class="flex gap-2 items-center rounded-full bg-red-500 py-0.5 px-2 "> <Icon icon="bi:unlock" class="text-white " /> Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- end nav atas -->
    <div class="bg-white backdrop-blur-xl bg-opacity-85 border-b py-2"> <!-- nav bawah -->
      <div class="container">
        <div class="flex flex-wrap justify-between items-center gap-4 lg:gap-10">
          <div class="flex flex-wrap items-center gap-4 lg:gap-10"> <!-- kiri -->
            <Button @click="toggleSidebar" class="text-xl">
              <IconsMenu />
            </Button>
            <div class="w-7 h-7 flex justify-center items-center rounded-lg bg-red-500 text-white">B</div>
            <ul class="breadcrumb ">
              <li>
                <NuxtLink to="/admin"> Dashboard </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/admin" class="active"> Bank BNI EDC android </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-wrap items-center gap-4 lg:gap-10"> <!--  kanan -->
            <button><IconsGlass /></button>
            <button><IconsFullScreen /></button>
         <button><IconsShare /></button>
          </div>
        </div>
      </div>
    </div> <!-- end nav bawah -->
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const { openSidebar, toggleSidebar } = useForsidebar()
const { user, clear: clearSession } = useUserSession()


async function logout() {
  await clearSession()
  await navigateTo('/login')
}
</script>

<style>
.breadcrumb {
  @apply hidden lg:flex items-center gap-1 bg-neutral-100 px-2 py-1 rounded-md text-sm;
}

.breadcrumb li a {
  @apply text-gray-600 flex items-center gap-1;
}

.breadcrumb li a.active {
  @apply text-primary;
}

.breadcrumb li a::after {
  content: '>';
  @apply text-gray-400;
}

.breadcrumb li:last-child a::after {
  content: '';
}
</style>