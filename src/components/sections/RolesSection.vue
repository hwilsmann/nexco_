<script setup lang="ts">
interface Role {
  label: string
  tone: 'mint' | 'peach' | 'blush' | 'neutral'
}

const rowOne: Role[] = [
  { label: 'Financeiro', tone: 'blush' },
  { label: 'Analista', tone: 'neutral' },
  { label: 'Desenvolvedores', tone: 'mint' },
  { label: 'DevOps', tone: 'neutral' },
  { label: 'Designer', tone: 'peach' },
  { label: 'Marketing', tone: 'mint' },
  { label: 'Front-End Developer', tone: 'blush' },
  { label: 'Recrutador', tone: 'neutral' },
]

const rowTwo: Role[] = [
  { label: 'Analista', tone: 'neutral' },
  { label: 'Analista de Sistema', tone: 'mint' },
  { label: 'Engenheiro', tone: 'peach' },
  { label: 'Designer', tone: 'neutral' },
  { label: 'Diretor Executivo', tone: 'blush' },
  { label: 'Coordenador', tone: 'mint' },
  { label: 'Engenheiro', tone: 'neutral' },
  { label: 'Designer', tone: 'peach' },
]

const toneClasses: Record<Role['tone'], string> = {
  mint: 'bg-brand-mint text-emerald-800',
  peach: 'bg-brand-peach text-orange-900',
  blush: 'bg-brand-blush text-rose-900',
  neutral: 'bg-white text-forest-950/70 border border-forest-950/10',
}
</script>

<template>
  <section class="bg-white py-24">
    <div class="mx-auto max-w-content px-6 text-center lg:px-10">
      <p class="text-sm text-forest-950/60">
        Alocação estratégica com +150 cargos diferentes para a sua empresa
      </p>
    </div>

    <div class="mt-8 space-y-4">
      <div class="flex flex-wrap justify-center gap-3 px-6">
        <span
          v-for="(role, i) in rowOne"
          :key="`r1-${i}`"
          :class="[toneClasses[role.tone], 'rounded-full px-5 py-2.5 text-sm font-medium']"
        >
          {{ role.label }}
        </span>
      </div>
      <div class="flex flex-wrap justify-center gap-3 px-6">
        <span
          v-for="(role, i) in rowTwo"
          :key="`r2-${i}`"
          :class="[toneClasses[role.tone], 'rounded-full px-5 py-2.5 text-sm font-medium']"
        >
          {{ role.label }}
        </span>
      </div>
    </div>
  </section>
</template>
