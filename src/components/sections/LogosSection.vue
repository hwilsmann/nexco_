<script setup lang="ts">
  import samsungLogo from '../../assets/images/samsung.png'
  import pwcLogo from '../../assets/images/pwc.png'
  import nttdataLogo from '../../assets/images/nttdata.png'
  import dcbmLogo from '../../assets/images/dcbm.png'
  import devgoLogo from '../../assets/images/devgo.png'

  interface Logo {
    title: string
    image: string
  }

  const groups: Logo[] = [
    {
      title: 'Samsung',
      image: samsungLogo,
    },
    {
      title: 'PWC',
      image: pwcLogo,
    },
    {
      title: 'NTTDATA',
      image: nttdataLogo,
    },
    {
      title: 'DCBM',
      image: dcbmLogo,
    },
    {
      title: 'DevGo',
      image: devgoLogo,
    },
  ]
</script>

<template>
  <section class="border-b border-forest-950/10 bg-white">
    <div class="mx-auto flex max-w-content flex-col items-center gap-6 px-6 py-8 sm:gap-8 sm:py-10 lg:flex-row lg:gap-40 lg:px-10">
      <p class="max-w-[220px] text-center text-xs font-semibold leading-snug text-forest-950/70 lg:max-w-[200px] lg:text-left" data-aos="fade" data-aos-delay="100">Recrutamos <strong class="font-semibold text-forest-950">+2k de profissionais para empresas globais.</strong></p>
      
      <ul class="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-5 grayscale sm:gap-x-12 sm:gap-y-6 lg:w-auto lg:gap-x-20 lg:gap-y-4">
        <li v-for="(logo, index) in groups" :key="index" data-aos="fade-right" :data-aos-delay="(index + 1) * 300">
          <img :src="logo.image" :alt="logo.title" class="h-5 w-auto object-contain sm:h-6 max-w-[6rem]" />
        </li>
      </ul>
    </div>
  </section>
</template>