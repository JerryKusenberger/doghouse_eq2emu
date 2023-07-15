import CharacterApi from '@/api/characterApi'

export default defineNuxtPlugin(() => {
  const factories = {
    characterApi: CharacterApi(),
  }

  return {
    provide: {
      api: factories,
    },
  }
})
