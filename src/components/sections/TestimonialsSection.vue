<script setup lang="ts">
  import IconGlobe from '../icons/Globe.vue'
  import depoimentosImage from '../../assets/images/depoimentos.png'
  import { ref, computed } from 'vue'

  interface Testimonial {
    quote: string
    author: string
  }

  const testimonials: Testimonial[] = [
    { quote: 'A Nexco combinou experiência em recrutamento e gestão de pessoas com um profundo conhecimento das áreas em que atuamos. O processo foi rápido e muito bem conduzido do início ao fim. A Nexco combinou experiência em recrutamento e gestão de pessoas com um profundo conhecimento das áreas em que atuamos. O processo foi rápido e muito bem conduzido do início ao fim.', author: 'PwC' },
    { quote: 'A equipe da Nexco entendeu exatamente o perfil que precisávamos e trouxe candidatos alinhados à nossa cultura e às competências técnicas exigidas pela posição.', author: 'Ittl' },
    { quote: 'Contar com a Nexco para posições estratégicas fez toda a diferença.', author: 'Samsung' },
  ]

  const active = ref(0)

  const visibleTestimonials = computed(() => {
    const first = testimonials[active.value]
    const second = testimonials[(active.value + 1) % testimonials.length]
    return [first, second]
  })

  function prev() {
    active.value = (active.value - 1 + testimonials.length) % testimonials.length
  }

  function next() {
    active.value = (active.value + 1) % testimonials.length
  }
</script>

<template>
  <section class="bg-white lg:pt-24">
    <div class="mx-auto max-w-content px-5 sm:px-6 lg:px-0">
      <span class="inline-block rounded-full bg-brand-mint/50 px-4 py-1.5 text-xs font-medium text-forest-950/70" data-aos="fade-up" data-aos-delay="100">Depoimentos</span>

      <div class="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-12">
        <div class="min-w-0">
          <h2 class="text-3xl font-bold leading-[1.2] text-forest-950 sm:text-4xl lg:text-[2.5rem]" data-aos="fade-up" data-aos-delay="200">O sucesso dos nossos clientes é a nossa melhor referência</h2>

          <div class="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 items-start">
            <div v-for="(testimonial, index) in visibleTestimonials" data-aos="fade-up" :data-aos-delay="(index + 1) * 300" :key="testimonial.author" class="min-w-0 rounded-2xl bg-brand-mint/35 p-4 sm:p-5">
              <blockquote class="text-sm leading-relaxed italic sm:text-base">“{{ testimonial.quote }}”</blockquote>

              <p class="mt-5 text-sm font-semibold text-forest-950 sm:mt-6 sm:text-base">{{ testimonial.author }}</p>
            </div>
          </div>

          <div class="mt-6 flex justify-end gap-3 sm:mt-8">
            <button type="button" aria-label="Depoimento anterior" class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest-900 text-white transition-opacity hover:opacity-80" @click="prev" data-aos="fade-left" data-aos-delay="300">
              <svg class="rotate-[225deg]" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 10.8993C-0.0976311 11.2899 -0.0976311 11.923 0.292893 12.3136C0.683418 12.7041 1.31658 12.7041 1.70711 12.3136L1 11.6064L0.292893 10.8993ZM12.6066 0.999844C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156063L2.6066 -0.000155937C2.05432 -0.000156274 1.6066 0.447559 1.6066 0.999844C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L12.6066 0.999844ZM1 11.6064L1.70711 12.3136L12.3137 1.70695L11.6066 0.999844L10.8995 0.292737L0.292893 10.8993L1 11.6064Z" fill="#fff" /></svg>
            </button>

            <button type="button" aria-label="Próximo depoimento" class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest-900 text-white transition-opacity hover:opacity-80" @click="next" data-aos="fade-left" data-aos-delay="400">
              <svg class="rotate-45" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 10.8993C-0.0976311 11.2899 -0.0976311 11.923 0.292893 12.3136C0.683418 12.7041 1.31658 12.7041 1.70711 12.3136L1 11.6064L0.292893 10.8993ZM12.6066 0.999844C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156063L2.6066 -0.000155937C2.05432 -0.000156274 1.6066 0.447559 1.6066 0.999844C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L12.6066 0.999844ZM1 11.6064L1.70711 12.3136L12.3137 1.70695L11.6066 0.999844L10.8995 0.292737L0.292893 10.8993L1 11.6064Z" fill="#fff" /></svg>
            </button>
          </div>
        </div>

        <div class="relative h-[420px] w-full overflow-hidden rounded-[24px] sm:h-[480px] sm:rounded-[28px] lg:h-[543px]" data-aos="fade-left" data-aos-delay="500">
          <img :src="depoimentosImage" alt="Depoimentos Nexco" class="h-full w-full object-cover" />

          <div class="absolute bottom-4 left-4 right-4 flex items-start justify-between gap-4 rounded-2xl bg-forest-950 p-4 text-white sm:bottom-6 sm:left-6 sm:right-6 sm:p-5 lg:bottom-8 lg:left-8 lg:right-8">
            <div class="min-w-0">
              <p class="text-4xl font-semibold leading-none text-brand-green sm:text-[2.75rem] lg:text-[3.125rem]">+100</p>
              <p class="mt-1 max-w-[220px] text-xs leading-relaxed text-white sm:max-w-[260px]">empresas já contaram profissionais com a Nexco</p>
            </div>

            <div class="shrink-0"><IconGlobe /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>