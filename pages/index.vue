<template>
  <div class="bg-gray-100">

    <div class="mb-8 container m-auto">
      <div class="text-sm text-gray-400">
        Dashboard
      </div>
      <div class="text-2xl font-bold">
        [P3t3R] An Eq2 Emu Server
      </div>
    </div>

    <!-- Tiles -->
    <div class="grid grid-cols-12 container m-auto gap-9">
      <div class="col-span-3 border border-gray-100 rounded shadow-lg h-20 flex items-center p-5 bg-white">
        <div>
          <div class="text-sm text-gray-400">
            Accounts
          </div>
          <div class="font-bold">
            {{ serverStats.accounts }}
          </div>
        </div>
      </div>
      <div class="col-span-3 border border-gray-100 rounded shadow-lg h-20 flex items-center p-5 bg-white">
        <div>
          <div class="text-sm text-gray-400">
            Items
          </div>
          <div class="font-bold">
            {{ serverStats.items }}
          </div>
        </div>
      </div>
      <div class="col-span-3 border border-gray-100 rounded shadow-lg h-20 flex items-center p-5 bg-white">
        <div>
          <div class="text-sm text-gray-400">
            Characters
          </div>
          <div class="font-bold">
            {{ serverStats.characters }}
          </div>
        </div>
      </div>
      <div class="col-span-3 border border-gray-100 rounded shadow-lg h-20 flex items-center p-5 bg-white">
        <div>
          <div class="text-sm text-gray-400">
            Guilds
          </div>
          <div class="font-bold">
            {{ serverStats.guilds }}
          </div>
        </div>
      </div>
    </div>

    <!-- online players -->
    <div class="container m-auto grid grid-cols-12 mt-8">
      <div class="col-span-6 border border-gray-100 rounded shadow-lg flex items-center bg-white">
        <div class="w-full">
          <div class="flex justify-end w-full font-bold p-5">
            Players Online ({{ onlinePlayers.length }})
          </div>

          <div class="grid grid-cols-5 bg-slate-100 border-t border-b h-10 flex items-center pl-3">
            <div class="col-span-1 text-gray-500 p-2">
              Player
            </div>
            <div class="col-span-1 text-gray-500 p-2">
              Level
            </div>
            <div class="col-span-1 text-gray-500 p-2">
              Zone
            </div>
            <div class="col-span-1 text-gray-500 p-2">
              Client
            </div>
            <div class="col-span-1 text-gray-500 p-2">
              IP
            </div>
          </div>

          <div class="pl-3">
            <div v-for="player in onlinePlayers" :key="player.Id" class="grid grid-cols-5">
              <div class="col-span-1 font-semibold p-2">
                {{ player.name }}
              </div>
              <div class="col-span-1 font-semibold p-2">
                {{ player.level }}
              </div>
              <div class="col-span-1 font-semibold p-2">
                {{ player.currentZone }}
              </div>
              <div class="col-span-1 font-semibold p-2">
                {{ player.lastClientVersion }}
              </div>
              <div class="col-span-1 font-semibold p-2">
                {{ player.ipAddress }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const { $api } = useNuxtApp()

let isLoading = ref(false)
let serverStats = ref({})
let onlinePlayers = ref([])

onMounted(() => {
  getOnlinePlayers()
  getServerStats()
})

async function getOnlinePlayers() {
  try {
    const response = await useApi('https://eq2dev-api.null.services/serverStats/onlinePlayers', { method: 'GET' })
    onlinePlayers.value = response
  }
  catch {
  }
}

async function getServerStats() {
  try {
    const response = await useApi('https://eq2dev-api.null.services/serverStats/stats', { method: 'GET' })
    serverStats.value = response
  }
  catch {
  }
}
</script>
  