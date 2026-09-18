<script setup lang="ts">
import recruitmentImage from '../../assets/images/recruitment.png'
import executiveImage from '../../assets/images/executive.png'
import techImage from '../../assets/images/tech.png'
import enterpriseImage from '../../assets/images/enterprise.png'

import userIcon from '../../components/icons/User.vue'
import user2Icon from '../../components/icons/User2.vue'
import user3Icon from '../../components/icons/User3.vue'
import user4Icon from '../../components/icons/User4.vue'
import vetor4Icon from '../../components/icons/Vetor.vue'

import { ref, computed, type Component } from 'vue'

interface SolutionCard {
  title: string
  description: string
  linkLabel: string
  icon: Component
}

interface Tab {
  key: string
  label: string
  image: string
  color: string
  cards: SolutionCard[]
}

const Tabs: Tab[] = [
  {
    key: 'recruitment',
    label: 'Recruitment',
    image: recruitmentImage,
    color: '#3A834B',
    cards: [
      {
        title: 'Recrutamento Spot',
        description: 'Recrutamento e seleção de posições profissionais, técnicas, gerenciais e estratégicas.',
        linkLabel: 'Explorar Recrutamento',
        icon: userIcon,
      },
      {
        title: 'Recrutamento In house',
        description: 'Recrutamento terceirizado para alto volume de contratações com equipes dedicadas.',
        linkLabel: 'Explorar RPO',
        icon: user2Icon,
      },
      {
        title: 'Recrutamento On demand',
        description: 'Curadoria e recrutamento de lideranças, C-Level, conselheiros e posições críticas.',
        linkLabel: 'Explorar Executive Search',
        icon: user3Icon,
      },
      {
        title: 'Professional Outsourcing',
        description: 'Executivos interinos e profissionais para projetos ou demandas temporárias.',
        linkLabel: 'Explorar IPP',
        icon: user4Icon,
      },
    ],
  },
  {
    key: 'executive',
    label: 'Executive',
    image: executiveImage,
    color: '#378EBD',
    cards: [
      {
        title: 'Executive Search',
        description: 'Encontramos os executivos certos para as posições estratégicas da sua empresa.',
        linkLabel: 'Explorar Recrutamento',
        icon: userIcon,
      },
      {
        title: 'Executive As a Service',
        description: 'Contrate um executivo de mercado part-time para o seu negócio e recebe insights estratégicos.',
        linkLabel: 'Explorar RPO',
        icon: user2Icon,
      },
    ],
  },
  {
    key: 'tech',
    label: 'Tech & Digital',
    image: techImage,
    color: '#6A70D9',
    cards: [
      {
        title: 'Recrutamento Spot',
        description: 'Recrutamento e seleção de posições profissionais, técnicas, gerenciais e estratégicas.',
        linkLabel: 'Explorar Recrutamento',
        icon: userIcon,
      },
      {
        title: 'Recrutamento In house',
        description: 'Recrutamento terceirizado para alto volume de contratações com equipes dedicadas.',
        linkLabel: 'Explorar RPO',
        icon: user2Icon,
      },
      {
        title: 'Recrutamento On demand',
        description: 'Curadoria e recrutamento de lideranças, C-Level, conselheiros e posições críticas.',
        linkLabel: 'Explorar Executive Search',
        icon: user3Icon,
      },
      {
        title: 'Professional Outsourcing',
        description: 'Executivos interinos e profissionais para projetos ou demandas temporárias.',
        linkLabel: 'Explorar IPP',
        icon: user4Icon,
      },
    ],
  },
  {
    key: 'enterprise',
    label: 'Enterprise',
    image: enterpriseImage,
    color: '#FCA468',
    cards: [
      {
        title: 'Recrutamento Spot',
        description: 'Recrutamento e seleção de posições profissionais, técnicas, gerenciais e estratégicas.',
        linkLabel: 'Explorar Recrutamento',
        icon: userIcon,
      },
      {
        title: 'Recrutamento In house',
        description: 'Recrutamento terceirizado para alto volume de contratações com equipes dedicadas.',
        linkLabel: 'Explorar RPO',
        icon: user2Icon,
      },
    ],
  },
]

const ActiveKey = ref(Tabs[0].key)

const ActiveTab = computed(
  () => Tabs.find((tab) => tab.key === ActiveKey.value) ?? Tabs[0],
)
</script>

<template>
  <section id="solucoes" class="bg-white py-24">
    <div class="mx-auto max-w-content px-6 text-center lg:px-10">
      <span class="inline-block rounded-full bg-brand-mint px-4 py-1.5 text-xs font-medium text-forest-950">Soluções</span>

      <h2 class="mx-auto mt-6 max-w-2xl text-3xl font-bold leading-snug text-forest-950 sm:text-4xl">Soluções de RH para diferentes momentos do negócio</h2>
    </div>

    <div class="mx-auto mt-12 max-w-content px-6 lg:px-10">
      <div class="flex flex-wrap gap-8 border-b border-forest-950/10 px-10">
        <button v-for="tab in Tabs" :key="tab.key" type="button" class="relative pb-4 text-sm font-semibold transition-colors" :class="ActiveKey === tab.key ? '' : 'text-forest-950/40 hover:text-forest-950/70'" :style="ActiveKey === tab.key ? { color: tab.color } : undefined" @click="ActiveKey = tab.key">
          {{ tab.label.toUpperCase() }}

          <span v-if="ActiveKey === tab.key" class="absolute inset-x-0 -bottom-px h-0.5 rounded-full" :style="{ backgroundColor: tab.color }"></span>
        </button>
      </div>

      <div class="mt-10 grid gap-8 lg:grid-cols-[380px_1fr] lg:items-start">
        <div class="relative">
          <img :src="ActiveTab.image" :alt="ActiveTab.label" class="h-[523px] w-full object-cover rounded-2xl" />

          <div class="absolute bottom-[9.5rem] left-[-9.2rem]">
            <vetor4Icon />
          </div>
        </div>

        <div>
          <div class="grid gap-6 sm:grid-cols-2">
            <article v-for="card in ActiveTab.cards" :key="card.title"class="rounded-2xl border border-forest-950/10 p-6">
              <span class="grid h-9 w-9 place-items-center text-base rounded-xl" :style="{backgroundColor: `${ActiveTab.color}50`,}"><component :is="card.icon" /></span>

              <h3 class="mt-4 text-base font-semibold text-forest-950">{{ card.title }}</h3>

              <p class="mt-2 text-sm text-forest-950/60">{{ card.description }}</p>

              <a href="#contato" class="mt-4 inline-block text-sm font-semibold hover:underline" :style="{ color: ActiveTab.color }">{{ card.linkLabel }}</a>
            </article>
          </div>
        </div>
      </div>

      <div class="flex mt-10 justify-end">
        <a href="#contato" class="inline-flex whitespace-nowrap items-center gap-2 rounded-full bg-forest-900 px-4 py-2.5 text-sm font-semibold text-white/85">
            Fale com um consultor

            <div class="grid h-7 w-7 place-items-center rounded-full bg-brand-green">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292893 10.8993C-0.0976311 11.2899 -0.0976311 11.923 0.292893 12.3136C0.683418 12.7041 1.31658 12.7041 1.70711 12.3136L1 11.6064L0.292893 10.8993ZM12.6066 0.999844C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156063L2.6066 -0.000155937C2.05432 -0.000156274 1.6066 0.447559 1.6066 0.999844C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L12.6066 0.999844ZM1 11.6064L1.70711 12.3136L12.3137 1.70695L11.6066 0.999844L10.8995 0.292737L0.292893 10.8993L1 11.6064Z" fill="#10211F"/>
              </svg>
            </div>
          </a>
      </div>
    </div>

  </section>
</template>