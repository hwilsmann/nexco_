<script setup lang="ts">
import { ref, computed } from 'vue'

interface Testimonial {
  quote: string
  author: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'A Nexco combinou experiência em recrutamento e gestão de pessoas com um profundo conhecimento das áreas em que atuamos. O processo foi rápido e muito bem conduzido do início ao fim.',
    author: 'PwC',
  },
  {
    quote:
      'A equipe da Nexco entendeu exatamente o perfil que precisávamos e trouxe candidatos alinhados à nossa cultura e às competências técnicas exigidas pela posição.',
    author: 'Ittl',
  },
  {
    quote:
      'Contar com a Nexco para posições estratégicas fez toda a diferença. O acompanhamento próximo trouxe segurança para decisões críticas de contratação.',
    author: 'Samsung',
  },
]

const active = ref(0)
const current = computed(() => testimonials[active.value])

function prev() {
  active.value = (active.value - 1 + testimonials.length) % testimonials.length
}
function next() {
  active.value = (active.value + 1) % testimonials.length
}
</script>

<template>
  <section class="bg-white py-24">
    <div class="mx-auto max-w-content px-6 lg:px-10">
      <span class="inline-block rounded-full bg-forest-950/5 px-4 py-1.5 text-xs font-medium text-forest-950/70">
        Depoimentos
      </span>
      <h2 class="mt-6 max-w-sm text-3xl font-bold leading-snug text-forest-950">
        O sucesso dos nossos clientes é a nossa melhor referência
      </h2>

      <div class="mt-10 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
        <div>
          <blockquote class="max-w-xl text-lg italic leading-relaxed text-forest-950/70">
            “{{ current.quote }}”
          </blockquote>
          <p class="mt-6 text-base font-semibold text-forest-950">{{ current.author }}</p>

          <div class="mt-8 flex gap-3">
            <button
              aria-label="Depoimento anterior"
              class="grid h-10 w-10 place-items-center rounded-full bg-forest-950/5 text-forest-950 transition-colors hover:bg-forest-950 hover:text-white"
              @click="prev"
            >
              ←
            </button>
            <button
              aria-label="Próximo depoimento"
              class="grid h-10 w-10 place-items-center rounded-full bg-forest-950/5 text-forest-950 transition-colors hover:bg-forest-950 hover:text-white"
              @click="next"
            >
              →
            </button>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-[28px]">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&q=80&auto=format&fit=crop"
            alt="Profissional sorrindo"
            class="h-[420px] w-full object-cover"
          />
          <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-forest-950/90 px-5 py-4 text-white backdrop-blur">
            <div>
              <p class="text-2xl font-extrabold">+100</p>
              <p class="text-xs text-white/70">empresas já contaram profissionais com a Nexco</p>
            </div>
            <span class="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-white/30 text-sm">
              🌐
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
