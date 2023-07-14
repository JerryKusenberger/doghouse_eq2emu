export const useApi = async (url, options) => {

  const config = useRuntimeConfig()

  let defaultHeaders = {
    'Content-Type': 'application/json',
  }

  let mergedOptions = {
   // baseURL: config.public.apiBaseURL,
    headers: { ...defaultHeaders, ...options.headers },
    ...options,
  }

  try {
    const response = await $fetch(url, mergedOptions)
    return response
  } catch (error) {
    throw error
  }
}
