<script setup lang="ts">
import { ref, computed } from 'vue'

interface SolutionCard {
  title: string
  description: string
  linkLabel: string
  icon: string
}

interface Tab {
  key: string
  label: string
  image: string
  cards: SolutionCard[]
}

const tabs: Tab[] = [
  {
    key: 'recruitment',
    label: 'Recruitment',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&q=80&auto=format&fit=crop',
    cards: [
      {
        title: 'Recrutamento Spot',
        description: 'Recrutamento e seleção de posições profissionais, técnicas, gerenciais e estratégicas.',
        linkLabel: 'Explorar Recrutamento',
        icon: '🧑‍🤝‍🧑',
      },
      {
        title: 'Recrutamento In house',
        description: 'Recrutamento terceirizado para alto volume de contratações com equipes dedicadas.',
        linkLabel: 'Explorar RPO',
        icon: '🏢',
      },
      {
        title: 'Recrutamento On demand',
        description: 'Curadoria e recrutamento de lideranças, C-Level, conselheiros e posições críticas.',
        linkLabel: 'Explorar Executive Search',
        icon: '🎯',
      },
      {
        title: 'Professional Outsourcing',
        description: 'Executivos interinos e profissionais para projetos ou demandas temporárias.',
        linkLabel: 'Explorar IPP',
        icon: '🔄',
      },
    ],
  },
  {
    key: 'executive',
    label: 'Executive',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80&auto=format&fit=crop',
    cards: [
      {
        title: 'Executive Search',
        description: 'Mapeamento e seleção de lideranças estratégicas para posições C-Level.',
        linkLabel: 'Explorar Executive Search',
        icon: '🎯',
      },
      {
        title: 'Board Advisory',
        description: 'Curadoria de conselheiros e membros de board para empresas em crescimento.',
        linkLabel: 'Explorar Board Advisory',
        icon: '🧭',
      },
    ],
  },
  {
    key: 'tech',
    label: 'Tech & Digital',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80&auto=format&fit=crop',
    cards: [
      {
        title: 'Tech Recruiting',
        description: 'Times especializados em contratar perfis de tecnologia, produto e dados.',
        linkLabel: 'Explorar Tech Recruiting',
        icon: '💻',
      },
      {
        title: 'Squad as a Service',
        description: 'Montagem de squads completos sob demanda para projetos digitais.',
        linkLabel: 'Explorar Squads',
        icon: '⚙️',
      },
    ],
  },
  {
    key: 'enterprise',
    label: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80&auto=format&fit=crop',
    cards: [
      {
        title: 'HR as a Service',
        description: 'Estrutura completa de RH para empresas em expansão ou operação enxuta.',
        linkLabel: 'Explorar HRaaS',
        icon: '🧩',
      },
      {
        title: 'Workforce Planning',
        description: 'Planejamento estratégico de força de trabalho para grandes operações.',
        linkLabel: 'Explorar Planning',
        icon: '📊',
      },
    ],
  },
]

const activeKey = ref(tabs[0].key)
const activeTab = computed(() => tabs.find((t) => t.key === activeKey.value)!)
</script>

<template>
  <section id="solucoes" class="bg-white pb-24">
    <div class="mx-auto max-w-content px-6 text-center lg:px-10">
      <span class="inline-block rounded-full bg-forest-950/5 px-4 py-1.5 text-xs font-medium text-forest-950/70">
        Soluções
      </span>
      <h2 class="mx-auto mt-6 max-w-2xl text-3xl font-bold leading-snug text-forest-950 sm:text-4xl">
        Soluções de RH para diferentes momentos do negócio
      </h2>
    </div>

    <div class="mx-auto mt-12 max-w-content px-6 lg:px-10">
      <div class="flex flex-wrap justify-center gap-8 border-b border-forest-950/10">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="relative pb-4 text-sm font-semibold transition-colors"
          :class="activeKey === tab.key ? 'text-brand-green' : 'text-forest-950/40 hover:text-forest-950/70'"
          @click="activeKey = tab.key"
        >
          {{ tab.label.toUpperCase() }}
          <span
            v-if="activeKey === tab.key"
            class="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand-green"
          />
        </button>
      </div>

      <div class="mt-10 grid gap-8 lg:grid-cols-[380px_1fr] lg:items-start">
        <div class="relative overflow-hidden rounded-[28px]">
          <img :src="activeTab.image" :alt="activeTab.label" class="h-[380px] w-full object-cover" />
          <svg
            class="absolute -bottom-6 -left-8 hidden text-brand-green sm:block"
            width="90"
            height="34"
            viewBox="0 0 90 34"
            fill="none"
          >
            <path
              d="M2 30 L18 4 L34 30 L50 4 L66 30 L82 4"
              stroke="currentColor"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div>
          <div class="grid gap-6 sm:grid-cols-2">
            <article
              v-for="card in activeTab.cards"
              :key="card.title"
              class="rounded-2xl border border-forest-950/10 p-6"
            >
              <span class="grid h-9 w-9 place-items-center rounded-full bg-brand-mint text-base">
                {{ card.icon }}
              </span>
              <h3 class="mt-4 text-base font-semibold text-forest-950">{{ card.title }}</h3>
              <p class="mt-2 text-sm text-forest-950/60">{{ card.description }}</p>
              <a href="#contato" class="mt-4 inline-block text-sm font-semibold text-emerald-600 hover:underline">
                {{ card.linkLabel }}
              </a>
            </article>
          </div>

          <div class="mt-8 flex justify-end">
            <a
              href="#contato"
              class="inline-flex items-center gap-2 rounded-full bg-forest-900 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Fale com um consultor
              <span class="grid h-5 w-5 place-items-center rounded-full bg-brand-green text-forest-950">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
