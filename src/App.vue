<script setup lang="ts">
  import { RouterView } from 'vue-router'

  import TheHeader from './components/TheHeader.vue'
  import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <TheHeader />

    <main class="overflow-hidden">
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>