<script setup lang="ts">
  import hero60Image from '../../assets/images/hero60.png'
  import hero40Image from '../../assets/images/hero40.png'
  import heroBg from '../../assets/images/herobg.png'
  import vetorIcon from '../../components/icons/Vetor.vue'
</script>

<template>
  <section class="relative overflow-hidden bg-forest-900 text-white bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${heroBg})` }">
    <div class="mx-auto flex max-w-content flex-col items-center gap-10 px-6 pb-16 pt-10 sm:pb-20 lg:flex-row lg:px-10 lg:pt-16">
      <div class="w-full lg:w-[52%]">
        <h1 class="text-[2.25rem] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[2.75rem] md:text-[3rem] lg:text-[4rem] lg:leading-[66px]" data-aos="fade-down" data-aos-delay="100">Encontre os talentos para <span class="text-brand-green">transformar a sua empresa</span></h1>
        
        <p class="mt-10 max-w-md text-white/60 sm:mt-8" data-aos="fade-up" data-aos-delay="200">Ajudamos nossos clientes a contratar o talento certo com as competências mais relevantes para os negócios.</p>
        
        <div class="mt-10 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-6" data-aos="fade-up" data-aos-delay="300">
          <a href="#contato" class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-brand-green px-4 py-2.5 text-sm font-semibold text-forest-950">
            Quero contratar

            <div class="grid h-7 w-7 place-items-center rounded-full bg-forest-950">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 10.8993C-0.0976311 11.2899 -0.0976311 11.923 0.292893 12.3136C0.683418 12.7041 1.31658 12.7041 1.70711 12.3136L1 11.6064L0.292893 10.8993ZM12.6066 0.999844C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156063L2.6066 -0.000155937C2.05432 -0.000156274 1.6066 0.447559 1.6066 0.999844C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L12.6066 0.999844ZM1 11.6064L1.70711 12.3136L12.3137 1.70695L11.6066 0.999844L10.8995 0.292737L0.292893 10.8993L1 11.6064Z" fill="#fff" /></svg>
            </div>
          </a>
          <a href="#contato" class="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold" data-aos="fade-up" data-aos-delay="400">
            Conheça as soluções

            <div class="grid h-7 w-7 place-items-center rounded-full">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 10.8993C-0.0976311 11.2899 -0.0976311 11.923 0.292893 12.3136C0.683418 12.7041 1.31658 12.7041 1.70711 12.3136L1 11.6064L0.292893 10.8993ZM12.6066 0.999844C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156063L2.6066 -0.000155937C2.05432 -0.000156274 1.6066 0.447559 1.6066 0.999844C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.5521 12.6066 10.5521 12.6066 9.99984L12.6066 0.999844ZM1 11.6064L1.70711 12.3136L12.3137 1.70695L11.6066 0.999844L10.8995 0.292737L0.292893 10.8993L1 11.6064Z" fill="#3ddc7a" /></svg>
            </div>
          </a>
        </div>
      </div>

      <div class="relative mt-10 flex w-full items-start justify-center gap-3 sm:mt-10 sm:gap-5 lg:mt-0 lg:w-[48%] lg:justify-start" data-aos="fade" data-aos-delay="100">
        <div>
          <img :src="hero40Image" alt="Consultora sorrindo em ambiente corporativo" class="w-full rounded-2xl object-cover" />
        </div>
        
        <div class="mt-10">
          <img :src="hero60Image" alt="Equipe colaborando" class="w-full rounded-2xl object-cover" />
        </div>

        <div class="absolute bottom-[8%] left-[48%] -translate-x-1/2 sm:bottom-[10%] sm:left-[50%] lg:bottom-[12%] lg:left-[53%]" data-aos="fade-left" data-aos-delay="500">
          <vetorIcon class="h-auto w-10 sm:w-12 lg:w-full hidden sm:block" />
        </div>
      </div>
    </div>
  </section>
</template>