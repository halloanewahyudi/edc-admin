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
</script>

<template>
  <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center bg-primary-300">
    <div class="flex flex-col h-full justify-center items-center text-white">
      <h2 class="text-2xl lg:text-4xl font-semibold">Login</h2>
      <p>ADC Dashboard</p>
    </div>
    <div class="bg-white flex flex-col justify-center items-center lg:min-h-screen p-10">
      <div class="max-w-sm w-full">
        <p class="text-red-500 mb-5" v-if="nologin"> {{ nologin }}</p>
        <form @submit.prevent="login" class="flex flex-col gap-4">
          <input v-model="credentials.email" type="email" placeholder="Email" class="form-control" />
          <input v-model="credentials.password" type="password" placeholder="Password" class="form-control" />
          <button type="submit"
            class="py-2 px-4  rounded-lg bg-primary-600 text-white hover:bg-primary-500 duration-200">Login</button>
        </form>
      </div>

    </div>
  </div>
</template>
