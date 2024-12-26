<script setup lang="ts">
const { loggedIn, user, fetch: refreshSession } = useUserSession()
const credentials = reactive({
  email: '',
  password: '',
})

const nologin = ref('')
async function login() {
  $fetch('/api/login', {
    method: 'POST',
    body: credentials
  })
    .then(async () => {
      // Refresh the session on client-side and redirect to the home page
      await refreshSession()
      await navigateTo('/admin')
    })
    .catch(() => {
      nologin.value = 'Login Failed'
    })
}

const isPasswordVisible = ref(false)

// Mengatur tipe input berdasarkan visibility
const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>
  <div class="login-page bg-gradient-to-tr from-neutral-900 via-neutral-950 to-neutral-850">
    <div class="flex flex-col h-full min-h-screen justify-center items-center ">
      
      <div class="max-w-sm px-8 w-full relative text-center z-50">
        <h2 class="text-2xl lg:text-4xl font-semibold">EDC</h2>
      <p class="text-primary"> Dashboard</p>
        <h2 class="text-center font-semibold mb-5">Login</h2>
        <p class="text-red-500 mb-5" v-if="nologin"> {{ nologin }}</p>
        <form @submit.prevent="login" class="flex flex-col gap-4">
          <label for="email" class="relative">
            <input v-model="credentials.email" type="email" placeholder="Email" class="form-control" />
            <IconsMail class="absolute right-2 top-1/2 transform -translate-y-1/2 "/>
          </label>
          
          <label for="password" class="relative">
            <input :type="isPasswordVisible ? 'text' : 'password'" v-model="credentials.password" type="password" placeholder="Password" class="form-control" />
            <span class="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" @click="togglePasswordVisibility">
              <IconsEye v-if="!isPasswordVisible" />
              <IconsEyeSlash v-else />
            </span>
          </label>
         
          <button type="submit"
            class="py-3 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary/80 duration-200">Login</button>
        </form>
      </div>
    </div>
    <div class="oval"></div>
  </div>
</template>
<style scoped>
.login-page {

}
.oval {
 @apply absolute left-0 bottom-0  right-0 bg-gradient-to-t  from-neutral-900 to-primary/70 w-screen h-48 rounded-t-full blur-3xl opacity-40;
}
</style>
