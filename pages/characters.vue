<template>
    <div>
        <div v-for="character in characters" :key="character.id" class="py-4">
            {{ `${character.name} (${character.level}, ${character.tradeskillLevel}) race: ${character.race} class:
                        ${character.class} gender:
                        ${character.gender} Current Zone: ${character.currentZoneId}` }}
        </div>
    </div>
</template>


<script setup>
const { $api } = useNuxtApp()

let characters = ref([])
let isLoading = ref(false)

onMounted(() => {
    getCharacters()
})

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