<template>
  <div class="error-container">
    <h1 class="error-code">{{ error.statusCode }}</h1>
    <h2 v-if="error?.statusCode === 404" class="error-title">
      Page not found: {{ error.url || '' }}
    </h2>
    <h2 v-else class="error-title">
      {{ error?.message }}
    </h2>
    <div v-if="error?.statusCode === 404" class="error-message">
      Page not found: {{ error.url || error.message }}
    </div>
    <NuxtLink class="error-link" to="/">Go back home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps({
  error: {
    type: Object as () => NuxtError & { url?: string },
    default: () => ({ statusCode: 500, message: 'Unknown error' })
  }
})
</script>

<style scoped>
.error-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.error-code {
  font-size: 6rem;
  font-weight: 700;
  color: #0a1128;
  margin-bottom: 1.5rem;
  line-height: 1;
}
.error-title {
  font-size: 2rem;
  font-weight: 500;
  color: #0a1128;
  margin-bottom: 0.5rem;
  text-align: center;
}
.error-message {
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 2rem;
  text-align: center;
}
.error-link {
  font-size: 1rem;
  color: #0a1128;
  text-decoration: underline;
  font-weight: 500;
  margin-top: 1rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.error-link:hover {
  color: #2563eb;
}
</style>
