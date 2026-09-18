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
  mint: 'bg-brand-mint',
  peach: 'bg-brand-peach',
  blush: 'bg-brand-blush',
  neutral: 'bg-brand-mint/50',
}
</script>

<template>
  <section class="bg-white py-24">

    <div class="mx-auto max-w-content px-6 text-center lg:px-10">
      <p class="text-sm text-forest-950/60">Alocação estratégica com +150 cargos diferentes para a sua empresa</p>
    </div>

    <div class="relative mx-auto mt-8 max-w-content space-y-4 overflow-hidden whitespace-nowrap before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-80 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-80 after:bg-gradient-to-l after:from-white after:to-transparent">
      <div class="flex w-max animate-marquee-left">
        <div class="flex shrink-0 gap-3 px-3">
          <span v-for="(role, i) in rowOne" :key="`r1-a-${i}`" :class="[toneClasses[role.tone], 'rounded-full px-5 py-2.5 text-sm font-medium']">{{ role.label }}</span>
        </div>
        <div class="flex shrink-0 gap-3 px-3" aria-hidden="true">
          <span v-for="(role, i) in rowOne" :key="`r1-b-${i}`" :class="[toneClasses[role.tone], 'rounded-full px-5 py-2.5 text-sm font-medium']">{{ role.label }}</span>
        </div>
        <div class="flex shrink-0 gap-3 px-3" aria-hidden="true">
          <span v-for="(role, i) in rowOne" :key="`r1-c-${i}`" :class="[toneClasses[role.tone], 'rounded-full px-5 py-2.5 text-sm font-medium']">{{ role.label }}</span>
        </div>
      </div>

      <div class="flex w-max animate-marquee-right">
        <div class="flex shrink-0 gap-3 px-3" aria-hidden="true">
          <span v-for="(role, i) in rowTwo" :key="`r2-a-${i}`" :class="[toneClasses[role.tone], 'rounded-full px-5 py-2.5 text-sm font-medium']">{{ role.label }}</span>
        </div>
        <div class="flex shrink-0 gap-3 px-3">
          <span v-for="(role, i) in rowTwo" :key="`r2-b-${i}`" :class="[toneClasses[role.tone], 'rounded-full px-5 py-2.5 text-sm font-medium']">{{ role.label }}</span>
        </div>
        <div class="flex shrink-0 gap-3 px-3" aria-hidden="true">
          <span v-for="(role, i) in rowTwo" :key="`r2-c-${i}`" :class="[toneClasses[role.tone], 'rounded-full px-5 py-2.5 text-sm font-medium']">{{ role.label }}</span>
        </div>
      </div>
    </div>

  </section>
</template>
