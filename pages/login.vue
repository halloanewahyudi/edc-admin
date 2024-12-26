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
  <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center ">
    <div class="flex flex-col h-full justify-center items-center text-white bg-primary">
      <h2 class="text-2xl lg:text-4xl font-semibold">ADC</h2>
      <p> Dashboard</p>
    </div>
    <div class=" flex flex-col justify-center items-center lg:min-h-screen p-10">
      <div class="max-w-sm w-full">
        <h2 class="text-2xl  font-semibold mb-5">Login</h2>
        <p class="text-red-500 mb-5" v-if="nologin"> {{ nologin }}</p>
        <form @submit.prevent="login" class="flex flex-col gap-4">
          <input v-model="credentials.email" type="email" placeholder="Email" class="form-control" />
          <input v-model="credentials.password" type="password" placeholder="Password" class="form-control" />
          <button type="submit"
            class="btn">Login</button>
        </form>
      </div>

    </div>
  </div>
</template>
