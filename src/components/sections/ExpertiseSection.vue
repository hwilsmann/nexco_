<script setup lang="ts">
interface ExpertiseGroup {
  title: string
  image: string
  items: string[]
}

const groups: ExpertiseGroup[] = [
  {
    title: 'Tecnologia & Digital',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop',
    items: ['Tecnologia da Informação', 'Produto e Digital', 'E-commerce', 'Dados e IA'],
  },
  {
    title: 'Corporate Functions',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80&auto=format&fit=crop',
    items: ['Recursos Humanos', 'Financeiro e Tributário', 'Jurídico', 'Administrativo'],
  },
  {
    title: 'Marketing & Growth',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&q=80&auto=format&fit=crop',
    items: ['Vendas', 'Marketing', 'Customer Experience', 'Desenvolvimento de Negócios'],
  },
  {
    title: 'Operations & Logistics',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80&auto=format&fit=crop',
    items: ['Operações', 'Supply Chain e Logística', 'Engenharia', 'Manufatura'],
  },
]

const marqueeWords = ['Operation', 'Supply Chain', 'Tech', 'Marketing']
</script>

<template>
  <section class="relative overflow-hidden py-24">
    <div class="mx-auto max-w-content px-10 py-10 lg:px-20 lg:py-20 bg-brand-peach/40 rounded-2xl" style="padding-bottom: 20rem;">
      <span class="inline-block rounded-full bg-brand-peach px-4 py-1.5 text-xs font-medium text-forest-950/70">
        Expertises
      </span>

      <div class="mt-6 grid grid-cols-2 gap-6">
        <div>
          <h2 class="text-3xl font-bold leading-snug text-forest-950">
            Conhecimento especializado para cada mercado
          </h2>
        </div>

        <div class="flex gap-6 items-start">
          <p class="text-sm text-forest-950/60">
            Nossos consultores combinam experiência em recrutamento e gestão de
            pessoas com conhecimento das áreas em que os profissionais atuam.
          </p>

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

      <div class="relative z-10 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="group in groups" :key="group.title" class="p-5 overflow-hidden rounded-2xl bg-white">
          <img :src="group.image" :alt="group.title" class="h-28 w-full object-cover rounded-2xl" />
          <div class="mt-5">
            <h3 class="text-sm font-semibold text-forest-950">{{ group.title }}</h3>
            <ul class="mt-3 space-y-1.5 text-sm text-forest-950/60 list-disc list-inside">
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>

    <div class="pointer-events-none relative select-none overflow-hidden whitespace-nowrap" style="margin-top: -15rem;">
      <div class="animate-marquee flex w-max gap-10 text-7xl font-extrabold text-brand-yellow sm:text-8xl">
        <span v-for="n in 2" :key="n" class="flex items-center gap-4 font-medium tracking-tighter">
          <template v-for="(word, i) in marqueeWords" :key="word">
            {{ word }}
            <span v-if="i < marqueeWords.length - 1">
              <svg width="42" height="27" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.61152 27C7 27 5.53957 26.6966 4.23022 26.0899C2.95444 25.4494 1.93046 24.4719 1.15827 23.1573C0.386092 21.809 0 20.0899 0 18V0.606741H4.63309V18.809C4.63309 19.7191 4.81775 20.4944 5.18705 21.1348C5.55636 21.7753 6.04316 22.2472 6.64748 22.5506C7.2518 22.8539 7.88969 23.0056 8.56115 23.0056C9.23262 23.0056 9.8705 22.8539 10.4748 22.5506C11.0791 22.2135 11.566 21.7416 11.9353 21.1348C12.3381 20.4944 12.5396 19.7191 12.5396 18.809V8.79775C12.5396 6.80899 12.9089 5.17416 13.6475 3.89326C14.3861 2.57865 15.3933 1.60112 16.6691 0.960674C17.9448 0.320225 19.3885 0 21 0C22.6115 0 24.0552 0.320225 25.3309 0.960674C26.6067 1.60112 27.6139 2.57865 28.3525 3.89326C29.0911 5.17416 29.4604 6.80899 29.4604 8.79775V18.809C29.4604 19.7191 29.6451 20.4944 30.0144 21.1348C30.3837 21.7416 30.8705 22.2135 31.4748 22.5506C32.0791 22.8539 32.7338 23.0056 33.4389 23.0056C34.1439 23.0056 34.7818 22.8539 35.3525 22.5506C35.9233 22.2135 36.3933 21.7416 36.7626 21.1348C37.1319 20.4944 37.3166 19.7191 37.3166 18.809V0.606741H42V18C42 20.0899 41.6139 21.809 40.8417 23.1573C40.0695 24.4719 39.0288 25.4494 37.7194 26.0899C36.4436 26.6966 35.0168 27 33.4389 27C31.8945 27 30.4676 26.6966 29.1583 26.0899C27.8489 25.4494 26.7914 24.4719 25.9856 23.1573C25.2134 21.809 24.8273 20.0899 24.8273 18V8.08989C24.8273 7.14607 24.6427 6.37079 24.2734 5.76405C23.9041 5.1573 23.4341 4.7191 22.8633 4.44944C22.2926 4.14607 21.6715 3.99438 21 3.99438C20.3285 3.99438 19.6906 4.14607 19.0863 4.44944C18.5156 4.7191 18.0456 5.1573 17.6763 5.76405C17.3405 6.37079 17.1727 7.14607 17.1727 8.08989V18C17.1727 20.0899 16.7698 21.809 15.964 23.1573C15.1919 24.4719 14.1511 25.4494 12.8417 26.0899C11.5659 26.6966 10.1559 27 8.61152 27Z" fill="#0A1711"/>
              </svg>
            </span>
          </template>
        </span>
      </div>
    </div>
  </section>
</template>
