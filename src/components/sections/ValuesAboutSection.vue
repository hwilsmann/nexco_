<script setup lang="ts">
  import valueImage from '../../assets/images/valueimage.png'

  import userIcon from '../../components/icons/User.vue'
  import vetorIcon from '../../components/icons/VetorYellow.vue'
  import IconGlobe from '../icons/Globe2.vue'
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="flex flex-col gap-20 mx-auto max-w-content rounded-2xl bg-brand-peach/40 px-6 py-8 pb-40 sm:px-8 sm:py-10 sm:pb-48 lg:px-20 lg:py-20">
      <div class="flex flex-col items-center text-center relative">
        <div class="absolute right-[calc(100%-5rem)] top-[3rem] hidden sm:block">
          <vetorIcon />
        </div>

        <span class="inline-block rounded-full bg-brand-peach px-4 py-1.5 text-[10px] font-medium uppercase text-forest-950/70 aos-init aos-animate">Valores</span>

        <h2 class="mt-6 text-[48px] font-semibold leading-[52px] tracking-[-3%]">O que guia cada decisão<br />que tomamos</h2>
      </div>

      <div>

        <div class="mx-auto grid grid-cols-1 gap-10 md:h-[669px] md:grid-cols-[1fr_397px_1fr] md:grid-rows-[1fr_1fr]">
          
          <!-- Card: Especialização -->
          <div class="flex flex-col justify-between rounded-2xl bg-white p-5 sm:p-6">
            <span class="grid h-9 w-9 place-items-center rounded-xl text-base bg-[#ffc76d]"><userIcon /></span>

            <div>
              <h3 class="text-[34px] font-medium leading-[58px] tracking-[-3%]">Especialização</h3>

              <p class="mt-2">Nossos consultores têm profundo conhecimento dos mercados em que atuam, garantindo matches precisos entre empresa e talento.</p>
            </div>
          </div>




          <!-- Imagem central -->
          <div class="relative row-span-2 h-[669px] w-[397px] overflow-hidden rounded-xl">
            <img :src="valueImage" alt="Consultora de RH" class="h-full w-full object-cover" />

            <div class="absolute bottom-4 left-4 right-4 flex items-start justify-between gap-4 rounded-2xl bg-[#ffc76d] p-4 text-forest-950 sm:bottom-6 sm:left-6 sm:right-6 sm:p-5 lg:bottom-8 lg:left-8 lg:right-8">
              <div class="min-w-0">
                <p class="text-4xl font-semibold leading-none sm:text-[2.75rem] lg:text-[3.125rem]">12+</p>
                <p class="mt-4 max-w-[220px] text-sm leading-relaxed sm:max-w-[260px]">anos de experiência em RH</p>
              </div>

              <div class="shrink-0"><IconGlobe /></div>
            </div>
          </div>






          <!-- Card: Transparência -->
          <div class="flex flex-col justify-between rounded-2xl bg-white p-5 sm:p-6">
            <span class="grid h-9 w-9 place-items-center rounded-xl text-base bg-[#ffc76d]"><userIcon /></span>

            <div>
              <h3 class="text-[34px] font-medium leading-[58px] tracking-[-3%]">Transparência</h3>

              <p class="mt-2">Construímos relações baseadas em honestidade e clareza em cada etapa do processo, com candidatos e clientes.</p>
            </div>
          </div>

          <!-- Card: Agilidade -->
          <div class="flex flex-col justify-between rounded-2xl bg-white p-5 sm:p-6">
            <span class="grid h-9 w-9 place-items-center rounded-xl text-base bg-[#ffc76d]"><userIcon /></span>

            <div>
              <h3 class="text-[34px] font-medium leading-[58px] tracking-[-3%]">Agilidade</h3>

              <p class="mt-2">SLA médio de 48h para primeiras indicações. Processos ágeis sem comprometer a qualidade das entregas.</p>
            </div>
          </div>

          <!-- Card: Impacto -->
          <div class="flex flex-col justify-between rounded-2xl bg-white p-5 sm:p-6">
            <span class="grid h-9 w-9 place-items-center rounded-xl text-base bg-[#ffc76d]"><userIcon /></span>

            <div>
              <h3 class="text-[34px] font-medium leading-[58px] tracking-[-3%]">Impacto</h3>
              
              <p class="mt-2">Medimos nosso sucesso pelo crescimento dos nossos clientes e pelo avanço na carreira dos profissionais que apoiamos.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>