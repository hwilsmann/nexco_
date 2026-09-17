<script setup lang="ts">
interface Stat {
  value: string
  label: string
  bg: string
}

const stats: Stat[] = [
  { value: '48h', label: 'SLA médio de tempo de resposta', bg: 'bg-forest-800/5' },
  { value: '+35k', label: 'Talentos na base de dados', bg: 'bg-brand-blush' },
  { value: '97%', label: 'de aprovação dos clientes', bg: 'bg-brand-mint' },
  { value: '12+', label: 'anos de experiência em RH', bg: 'bg-brand-peach' },
]
</script>

<template>
  <section id="sobre" class="bg-white py-20">
    <div class="mx-auto max-w-content px-6 lg:px-10">
      <span class="inline-block rounded-full bg-forest-950/5 px-4 py-1.5 text-xs font-medium text-forest-950/70">
        Quem somos
      </span>

      <h2 class="mt-6 max-w-3xl text-2xl font-bold leading-snug text-forest-950 sm:text-3xl">
        Somos uma consultoria que oferece soluções completas de RH que vão
        desde o recrutamento e seleção em todos os níveis e formatos de trabalho,
        <span class="text-forest-950/40">apoiando os talentos em toda a sua jornada.</span>
      </h2>

      <div class="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" :class="[stat.bg, 'rounded-2xl p-6']">
          <p class="text-3xl font-extrabold text-forest-950 sm:text-4xl">{{ stat.value }}</p>
          <p class="mt-2 text-sm text-forest-950/60">{{ stat.label }}</p>
        </div>
      </div>

      <div class="mt-6 flex justify-end lg:mt-[-3.75rem] lg:pr-6">
        <a
          href="#contato"
          class="inline-flex items-center gap-2 rounded-full bg-forest-900 px-5 py-2.5 text-sm font-semibold text-white"
        >
          Fale com um consultor
          <span class="grid h-5 w-5 place-items-center rounded-full bg-brand-green text-forest-950">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>
