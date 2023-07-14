<template>
  <div class="flex items-center justify-center h-screen pb-40">
    <div>
      <div class="text-3xl">
        Doghouse EQ2 Emu
      </div>
      <div class="flex items-center justify-center pt-5">
        <div>
          <div class="pb-5">
            <button class="outline outline-1 bg-gray-300 rounded p-1" @click="testApiConnection">Test API
              Connection</button>
          </div>
          <div>
            {{ apiStatus }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
let apiStatus = ref('')

async function testApiConnection() {
  try {
    const response = await useApi('https://localhost:44335/test', { method: 'GET' })
    apiStatus.value = 'API is up and running!'
  }
  catch {
    apiStatus.value = 'API is down!'
  }
}

</script>
  