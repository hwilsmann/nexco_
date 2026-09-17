<script setup lang="ts">
const logos = ['Samsung', 'PwC', 'NTT Data', 'DCBM', 'Devgo']
</script>

<template>
  <section class="border-b border-forest-950/10 bg-white">
    <div
      class="mx-auto flex max-w-content flex-col items-center gap-8 px-6 py-10 lg:flex-row lg:justify-between lg:gap-10 lg:px-10"
    >
      <p class="max-w-[180px] text-center text-xs font-semibold leading-snug text-forest-950/70 lg:text-left">
        Recrutamos +2k de profissionais para empresas globais
      </p>

      <ul class="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 grayscale">
        <li v-for="logo in logos" :key="logo" class="text-lg font-bold text-forest-950/70">
          {{ logo }}
        </li>
      </ul>
    </div>
  </section>
</template>
