<script setup lang="ts">
  import vetorIcon from '../../components/icons/Vetor.vue'

  import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

  const leaders = [
    {
      name: 'Samanta Ramos',
      role: 'CHRO',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Daniel Moraes',
      role: 'CHRO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Mariana Cardoso',
      role: 'CHRO',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Mariana Pianta',
      role: 'CHRO',
      image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Lucas Martins',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const carousel = ref(null)

  const CARD_WIDTH = 342
  const GAP = 32
  const ITEM_WIDTH = CARD_WIDTH + GAP
  const TOTAL = leaders.length

  const carouselItems = [...leaders, ...leaders, ...leaders]

  const getSetWidth = () => TOTAL * ITEM_WIDTH

  const normalizePosition = () => {
    const element = carousel.value
    if (!element) return

    const setWidth = getSetWidth()

    if (element.scrollLeft >= setWidth * 2) {
      element.style.scrollBehavior = 'auto'
      element.scrollLeft -= setWidth
      element.style.scrollBehavior = 'smooth'
    }

    if (element.scrollLeft <= 0) {
      element.style.scrollBehavior = 'auto'
      element.scrollLeft += setWidth
      element.style.scrollBehavior = 'smooth'
    }
  }

  const scroll = async (direction) => {
    const element = carousel.value
    if (!element) return

    element.scrollBy({
      left: direction === 'next' ? ITEM_WIDTH : -ITEM_WIDTH,
      behavior: 'smooth',
    })

    await nextTick()

    setTimeout(() => {
      normalizePosition()
    }, 500)
  }

  const handleScroll = () => {
    normalizePosition()
  }

  onMounted(() => {
    if (!carousel.value) return

    const setWidth = getSetWidth()

    carousel.value.style.scrollBehavior = 'auto'
    carousel.value.scrollLeft = setWidth
    carousel.value.style.scrollBehavior = 'smooth'

    carousel.value.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    carousel.value?.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <section class="relative overflow-hidden py-16 md:py-20">
    <div class="mx-auto max-w-content">
      <div class="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8">
        <span class="inline-block rounded-full bg-[#DEEAE8] px-4 py-1.5 text-[10px] font-medium uppercase">Jornada</span>

        <div class="flex items-start gap-8 sm:gap-10 lg:gap-12">
          <h2 class="text-2xl font-medium leading-[29px] tracking-[-3%] text-forest-950 sm:text-3xl sm:leading-[42px] lg:text-[48px] lg:leading-[52px]">Líderes que contam<br />a nossa história</h2>

          <div class="max-w-[506px]">
            <p>A Nexco nasceu da convicção de que recrutamento eficiente não é só preencher vagas, é construir equipes que impulsionam negócios. Começamos como uma boutique de headhunting em São Paulo e crescemos para uma consultoria completa de RH.</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="mt-6 mb-6 flex justify-end gap-2">
          <button type="button" aria-label="Anterior" class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest-900 text-white transition-opacity hover:opacity-80" @click="scroll('prev')">
              <svg class="rotate-[225deg]" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 10.8993C-0.0976311 11.2899 -0.0976311 11.923 0.292893 12.3136C0.683418 12.7041 1.31658 12.7041 1.70711 12.3136L1 11.6064L0.292893 10.8993ZM12.6066 0.999844C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156063L2.6066 -0.000155937C2.05432 -0.000156274 1.6066 0.447559 1.6066 0.999844C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L12.6066 0.999844ZM1 11.6064L1.70711 12.3136L12.3137 1.70695L11.6066 0.999844L10.8995 0.292737L0.292893 10.8993L1 11.6064Z" fill="#fff" /></svg>
            </button>

            <button type="button" aria-label="Próximo" class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest-900 text-white transition-opacity hover:opacity-80" @click="scroll('next')">
              <svg class="rotate-45" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 10.8993C-0.0976311 11.2899 -0.0976311 11.923 0.292893 12.3136C0.683418 12.7041 1.31658 12.7041 1.70711 12.3136L1 11.6064L0.292893 10.8993ZM12.6066 0.999844C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156063L2.6066 -0.000155937C2.05432 -0.000156274 1.6066 0.447559 1.6066 0.999844C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L12.6066 0.999844ZM1 11.6064L1.70711 12.3136L12.3137 1.70695L11.6066 0.999844L10.8995 0.292737L0.292893 10.8993L1 11.6064Z" fill="#fff" /></svg>
            </button>
        </div>

        <div class="pointer-events-none absolute -left-[190px] top-[170px] z-10 hidden xl:block">
          <vetorIcon />
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-content">
      <div ref="carousel" class="flex w-[calc(100vw-((100vw-100%)/2))] gap-8 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <article v-for="(leader, index) in carouselItems" :key="`${leader.name}-${index}`" class="w-[342px] min-w-[342px]">
          <div class="h-[315px] overflow-hidden mb-4">
            <img :src="leader.image" :alt="leader.name" class="h-full w-full object-cover object-center rounded-2xl" />
          </div>

          <div class="flex h-[100px] flex-col justify-center rounded-2xl bg-[#002217] px-6">
            <h3 class="text-[20px] font-semibold leading-none text-white">{{ leader.name }}</h3>

            <span class="mt-2 text-[16px] font-medium uppercase leading-none text-brand-green">{{ leader.role }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>