export default defineNuxtPlugin((nuxtApp) => {
  const userAuth = useCookie('token')
  // const config = useRuntimeConfig()

  const $api = $fetch.create({
    // baseURL: config.baseUrl as string,
    onRequest({ request, options, error }) {
      if (userAuth.value) {
        options.headers.set('Authorization', `Bearer ${userAuth.value}`)
      }
    },
    onResponse({ response }) {

    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
    },
  })
  return {
    provide: {
      api: $api,
    },
  }
})
