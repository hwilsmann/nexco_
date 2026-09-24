<script setup lang="ts">
  import about60Image from '../../assets/images/about60.png'
  import about40Image from '../../assets/images/about40.png'

  interface Stat {
    value: string
    label: string
    bg: string
  }

  const stats: Stat[] = [
    { value: '+35k', label: 'Talentos na base de dados', bg: 'bg-brand-blush' },
    { value: '48h', label: 'SLA médio de tempo de resposta', bg: 'bg-[#EDF8F6]' },
    { value: '97%', label: 'de aprovação dos clientes', bg: 'bg-brand-mint' },
    { value: '12+', label: 'anos de experiência em RH', bg: 'bg-brand-peach/50' },
  ]
</script>

<template>
  <section class="py-12 lg:py-24">
    <div class="mx-auto max-w-content px-6 lg:px-10">

      <div>
        <span class="inline-block rounded-full bg-[#DEEAE8] px-4 py-1.5 text-[10px] font-medium uppercase">Quem somos</span>

        <div class="grid grid-cols-2 mt-6 sm:mt-8 lg:mt-10 gap-12 sm:gap-14 lg:gap-16">
          <div>
            <h2 class="text-2xl font-medium leading-[29px] tracking-[-3%] text-forest-950 sm:text-3xl sm:leading-[36px] lg:text-[38px] lg:leading-[46px]">Somos uma consultoria que oferece soluções completas de RH que vão desde o recrutamento e seleção em todos os níveis e formatos de trabalho, <span class="text-forest-950/40">apoiando os talentos em toda a sua jornada.</span></h2>
          </div>

          <div>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(stat, index) in stats" :key="stat.label" :class="index < 2 ? 'relative lg:left-32' : ''">
                <div :class="[stat.bg, 'relative rounded-2xl p-5 sm:p-6']">
                  <p class="font-semibold tracking-[-3%] text-forest-950 lg:text-[50px]">{{ stat.value }}</p>

                  <p class="mt-2 text-sm leading-snug">{{ stat.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 lg:mt-24">
        <div class="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          <div>
            <img :src="about40Image" class="rounded-2xl object-cover" />

            <img :src="about60Image" class="rounded-2xl object-cover lg:mt-[-10rem] lg:ml-[-4rem]" />
          </div>

          <div class="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8">
            <span class="inline-block rounded-full bg-[#DEEAE8] px-4 py-1.5 text-[10px] font-medium uppercase">História</span>

            <h2 class="text-2xl font-semibold leading-[29px] tracking-[-3%] text-forest-950 sm:text-3xl sm:leading-[42px] lg:text-[48px] lg:leading-[52px]">Mais de uma década formando as equipes que movem o Brasil</h2>
            
            <p>A Nexco nasceu da convicção de que recrutamento eficiente não é só preencher vagas, é construir equipes que impulsionam negócios. Começamos como uma boutique de headhunting em São Paulo e crescemos para uma consultoria completa de RH.</p>
            <p>Hoje, atendemos mais de 50 empresas, de startups em hypergrowth a corporações listadas, em setores que vão de Tecnologia e Digital a Operações e Supply Chain.</p>

            <a class="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-forest-900 px-3 py-2 text-xs font-semibold text-white/85 sm:px-4 sm:py-2.5 sm:text-sm">
                Fale com um consultor

                <div class="grid h-7 w-7 place-items-center rounded-full bg-brand-green">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 10.8993C-0.0976311 11.2899 -0.0976311 11.923 0.292893 12.3136C0.683418 12.7041 1.31658 12.7041 1.70711 12.3136L1 11.6064L0.292893 10.8993ZM12.6066 0.999844C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156063L2.6066 -0.000155937C2.05432 -0.000156274 1.6066 0.447559 1.6066 0.999844C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L10.8995 0.292737L0.292893 10.8993L1 11.6064Z" fill="#10211F"/></svg>
                </div>
              </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>