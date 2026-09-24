<script setup lang="ts">
  import heroabout60Image from '../../assets/images/heroabout60.png'
  import heroabout40Image from '../../assets/images/heroabout40.png'
  import heroBg from '../../assets/images/herobg.png'
  import vetorIcon from '../../components/icons/Vetor.vue'
</script>

<template>
  <section class="relative overflow-hidden bg-forest-900 text-white bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${heroBg})` }">
    <div class="mx-auto flex max-w-content flex-col items-center gap-10 px-6 pb-16 pt-10 sm:pb-20 lg:flex-row lg:px-10 lg:pt-16">
      <div class="w-full lg:w-[52%]">
        <h1 class="text-[2.25rem] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[2.75rem] md:text-[3rem] lg:text-[4rem] lg:leading-[66px]">Conectamos talentos e empresas que <span class="text-brand-green">transformam o mercado</span></h1>
        
        <p class="mt-10 max-w-md text-white/60 sm:mt-8">RH que combina expertise humana e tecnologia para conectar os melhores profissionais às melhores oportunidades.</p>
      </div>

      <div class="relative mt-10 flex w-full items-start justify-center gap-3 sm:mt-10 sm:gap-5 lg:mt-0 lg:w-[48%] lg:justify-start">
        <div>
          <img :src="heroabout40Image" class="w-full rounded-2xl object-cover" />
        </div>
        
        <div class="mt-10">
          <img :src="heroabout60Image" class="w-full rounded-2xl object-cover" />
        </div>

        <div class="absolute bottom-[8%] left-[48%] -translate-x-1/2 sm:bottom-[10%] sm:left-[50%] lg:bottom-[12%] lg:left-[53%]">
          <vetorIcon class="h-auto w-10 sm:w-12 lg:w-full hidden sm:block" />
        </div>
      </div>
    </div>
  </section>
</template>