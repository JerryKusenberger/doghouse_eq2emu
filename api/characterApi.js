import { useApi } from '~/composables/useApi'
export default () => ({
  async getCharacters() {
    const response = await useApi(`https://eq2dev-api.null.services/test/characters`, { method: 'GET' })
    return response
  },
})
