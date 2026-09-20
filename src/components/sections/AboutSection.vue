<script setup lang="ts">
  interface Stat {
    value: string
    label: string
    bg: string
  }

  const stats: Stat[] = [
    { value: '48h', label: 'SLA médio de tempo de resposta', bg: 'bg-brand-mint/50' },
    { value: '+35k', label: 'Talentos na base de dados', bg: 'bg-brand-blush' },
    { value: '97%', label: 'de aprovação dos clientes', bg: 'bg-brand-mint' },
    { value: '12+', label: 'anos de experiência em RH', bg: 'bg-brand-peach' },
  ]
</script>

<template>
  <section class="bg-white lg:pt-24">
    <div class="mx-auto max-w-content px-6 lg:px-10">
      <span class="inline-block rounded-full bg-brand-mint/50 px-4 py-1.5 text-xs font-medium text-forest-950/70" data-aos="fade-right" data-aos-delay="100">Quem somos</span>

      <h2 class="mt-6 text-2xl font-bold leading-[1.2] text-forest-950 sm:mt-8 sm:text-3xl lg:mt-10 lg:text-[2.375rem]" data-aos="fade-right" data-aos-delay="200">Somos uma consultoria que oferece soluções completas de RH que vão desde o recrutamento e seleção em todos os níveis e formatos de trabalho, <span class="text-forest-950/40">apoiando os talentos em toda a sua jornada.</span></h2>

      <div class="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(stat, index) in stats" :key="stat.label" class="relative sm:h-[140px]" data-aos="fade-up" :data-aos-delay="(index + 1) * 300">
          <div :class="[stat.bg, 'group relative rounded-2xl p-5 sm:absolute sm:inset-x-0 sm:top-0 sm:z-10 sm:overflow-hidden sm:p-6 sm:transition-all sm:duration-300 sm:hover:h-auto']">
            <p class="text-3xl font-semibold text-forest-950 sm:text-4xl lg:text-[3.125rem]">{{ stat.value }}</p>

            <p class="mt-2 text-sm leading-snug">{{ stat.label }}</p>

            <div class="mt-5 sm:grid sm:grid-rows-[0fr] sm:mt-0 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:mt-6 sm:group-hover:grid-rows-[1fr] sm:group-hover:opacity-100">
              <div class="min-h-0 overflow-hidden">
                <a href="#contato" class="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-forest-900 px-3 py-2 text-xs font-semibold text-white/85 sm:px-4 sm:py-2.5 sm:text-sm">
                  Fale com um consultor
                  
                  <div class="grid h-7 w-7 place-items-center rounded-full bg-brand-green">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 10.8993C-0.0976311 11.2899 -0.0976311 11.923 0.292893 12.3136C0.683418 12.7041 1.31658 12.7041 1.70711 12.3136L1 11.6064L0.292893 10.8993ZM12.6066 0.999844C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156063L2.6066 -0.000155937C2.05432 -0.000156274 1.6066 0.447559 1.6066 0.999844C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L12.6066 0.999844L10.8995 0.292737L0.292893 10.8993L1 11.6064Z" fill="#10211F"/></svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>