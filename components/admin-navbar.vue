<template>
  <div class="fixed top-0 left-0 w-full z-50">
    <div class="bg-neutral-800 py-2 text-sm"> <!-- nav atas -->
      <div class="container">
        <div class="flex items-center justify-between w-full gap-5">
          <div>
            <h4 class="text-white">Logo</h4>
          </div>
          <div class="relative w-full max-w-[400px]">
            <input type="serarch" class="form-control-sm bg-neutral-200" placeholder="Search">
            <IconsSearch class="absolute right-2 top-1/4 " />
          </div>
          <div class="flex items-center gap-3">
            <IconsLifebuoy class="text-white" />
            <IconsUser class="text-white" />
          </div>
        </div>
      </div>
    </div> <!-- end nav atas -->
    <div class="bg-white border-b py-2"> <!-- nav bawah -->
      <div class="container">
        <div class="flex flex-wrap justify-between items-center gap-4 lg:gap-10">
          <div class="flex flex-wrap items-center gap-4 lg:gap-10"> <!-- kiri -->
            <Button @click="toggleSidebar" class="text-xl">
              <IconsMenu />
            </Button>
            <div class="w-7 h-7 flex justify-center items-center rounded-lg bg-red-500 text-white">B</div>
            <ul class="breadcrumb">
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
const { openSidebar, toggleSidebar } = useForsidebar()
</script>

<style>
.breadcrumb {
  @apply flex items-center gap-1 bg-neutral-100 px-2 py-1 rounded-md text-sm;
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