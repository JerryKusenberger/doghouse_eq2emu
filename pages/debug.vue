<template>
    <div class="flex items-center justify-center h-screen pb-40">
        <div>
            <div class="text-3xl flex justify-center">
                EQ2 Emu
            </div>
            <div class="flex items-center justify-center pt-5">
                <div>
                    <div class="pb-5 flex justify-center">
                        <button class="outline outline-1 bg-gray-300 rounded p-1" @click="testApiConnection">Test API
                            Connection</button>
                    </div>
                    <div class="pb-5">
                        {{ apiStatus }}
                    </div>
                    <div class="pb-5 flex justify-center">
                        <button class="outline outline-1 bg-gray-300 rounded p-1" @click="getCharacters">Get
                            Characters</button>
                    </div>
                    <div v-if="isLoading">Getting Characters...</div>
                </div>
            </div>
            <div v-for="character in characters" :key="character.id">
                {{ character }}
            </div>

            <div>
                Server Stats..
            </div>
            <div class="pb-5 flex justify-center">
                <button class="outline outline-1 bg-gray-300 rounded p-1" @click="getOnlinePlayers">Get Server
                    Stats</button>
            </div>
            <div>
                {{ serverStats }}
            </div>
        </div>
    </div>
</template>


<script setup>
const { $api } = useNuxtApp()

let apiStatus = ref('')
let characters = ref([])
let isLoading = ref(false)
let serverStats = ref([])

async function testApiConnection() {
    try {
        const response = await useApi('https://eq2dev-api.null.services/test', { method: 'GET' })
        apiStatus.value = 'API is up and running!'
    }
    catch {
        apiStatus.value = 'API is down!'
    }
}

async function getOnlinePlayers() {
    try {
        const response = await useApi('https://eq2dev-api.null.services/serverStats', { method: 'GET' })
        serverStats.value = response
    }
    catch {

    }
}

async function getCharacters() {
    try {
        isLoading.value = true
        characters.value = []
        const response = await $api.characterApi.getCharacters()
        characters.value = response
    }
    catch {
    }
    finally {
        isLoading.value = false
    }
}

</script>
  