<script setup lang="ts">
  import IconX from './icons/X.vue'
  import IconInstagram from './icons/Instagram.vue'
  import IconLinkedIn from './icons/LinkedIn.vue'
  import IconThreads from './icons/Threads.vue'

  interface FooterColumn {
    title: string
    links: { label: string; href: string }[]
  }

  const columns: FooterColumn[] = [
    {
      title: 'Para Empresas',
      links: [
        { label: 'Talent Acquisition', href: '#' },
        { label: 'HR as a Service', href: '#' },
        { label: 'Enterprise', href: '#' },
        { label: 'Contato', href: '#contato' },
      ],
    },
    {
      title: 'Para Talentos',
      links: [
        { label: 'Vagas', href: '#' },
        { label: 'Envie seu currículo', href: '#' },
        { label: 'Talent Trends', href: '#' },
        { label: 'Insights', href: '#' },
      ],
    },
    {
      title: 'Institucional',
      links: [
        { label: 'Sobre a Nexco', href: '#sobre' },
        { label: 'Assessoria', href: '#' },
        { label: 'Imprensa', href: '#' },
        { label: 'Contato', href: '#contato' },
      ],
    },
  ]

  const socials = [
    { label: 'X', href: '#', icon: IconX },
    { label: 'Instagram', href: '#', icon: IconInstagram },
    { label: 'LinkedIn', href: '#', icon: IconLinkedIn },
    { label: 'Threads', href: '#', icon: IconThreads },
  ]
</script>

<template>
  <footer class="bg-forest-950 pt-12 text-white sm:pt-16">
    <div class="mx-auto grid max-w-content gap-10 px-6 pb-10 sm:gap-12 sm:pb-14 lg:grid-cols-[1.2fr_2fr] lg:px-10">
      <div>
        <a href="#top" class="text-brand-green">
          <svg width="104" height="23" viewBox="0 0 104 23" fill="currentColor">
            <path d="M0 22.1847V9.64739C0 7.72075 0.424995 6.03493 1.27499 4.58995C2.15331 3.14496 3.35746 2.02581 4.88744 1.23249C6.41743 0.41083 8.15991 0 10.1149 0C12.0982 0 13.8407 0.41083 15.3423 1.23249C16.8723 2.02581 18.0623 3.14496 18.9123 4.58995C19.7906 6.03493 20.2298 7.72075 20.2298 9.64739V22.1847H16.3198V9.68989C16.3198 8.38657 16.0223 7.26742 15.4273 6.33243C14.8607 5.36911 14.0957 4.63245 13.1324 4.12245C12.1974 3.61246 11.1915 3.35746 10.1149 3.35746C9.03823 3.35746 8.01824 3.61246 7.05492 4.12245C6.11993 4.63245 5.35494 5.36911 4.75995 6.33243C4.19329 7.26742 3.90996 8.38657 3.90996 9.68989V22.1847H0Z" />
            <path d="M34.8521 22.1847C32.4722 22.1847 30.3614 21.7456 28.5197 20.8673C26.6781 19.9606 25.2331 18.6998 24.1848 17.0848C23.1648 15.4415 22.6548 13.529 22.6548 11.3474C22.6548 9.19406 23.0939 7.26742 23.9723 5.56744C24.8506 3.83912 26.0689 2.47914 27.6272 1.48748C29.1855 0.495828 30.9989 0 33.0672 0C35.3055 0 37.1613 0.481661 38.6346 1.44498C40.1363 2.40831 41.2554 3.71163 41.9921 5.35494C42.7287 6.96992 43.0971 8.78323 43.0971 10.7949C43.0971 11.1065 43.0829 11.4324 43.0546 11.7724C43.0546 12.1124 43.0262 12.4099 42.9696 12.6649H26.8197C26.9614 13.9965 27.4006 15.1298 28.1372 16.0648C28.8739 16.9715 29.8089 17.6656 30.9422 18.1473C32.1038 18.6006 33.3788 18.8273 34.7671 18.8273H40.4196V22.1847H34.8521ZM26.7772 9.90239H39.1446C39.1446 9.36406 39.0879 8.7974 38.9746 8.20241C38.8613 7.57908 38.6629 6.98409 38.3796 6.41743C38.0963 5.82244 37.7138 5.29827 37.2321 4.84494C36.7788 4.36328 36.198 3.98079 35.4896 3.69746C34.8096 3.41413 34.0022 3.27246 33.0672 3.27246C32.0755 3.27246 31.1972 3.47079 30.4322 3.86746C29.6955 4.23579 29.058 4.74578 28.5197 5.39744C27.9814 6.02077 27.5706 6.72909 27.2872 7.52241C27.0039 8.31574 26.8339 9.10906 26.7772 9.90239Z" />
            <path d="M92.6101 22.6947C90.4001 22.6947 88.4451 22.1989 86.7452 21.2073C85.0452 20.1873 83.6994 18.8273 82.7077 17.1273C81.716 15.399 81.2202 13.4723 81.2202 11.3474C81.2202 9.2224 81.716 7.30992 82.7077 5.60994C83.6994 3.88162 85.0452 2.52164 86.7452 1.52998C88.4451 0.509993 90.4001 0 92.6101 0C94.8201 0 96.775 0.509993 98.475 1.52998C100.203 2.52164 101.549 3.86746 102.512 5.56744C103.504 7.26742 104 9.19406 104 11.3474C104 13.4723 103.504 15.399 102.512 17.1273C101.549 18.8273 100.203 20.1873 98.475 21.2073C96.775 22.1989 94.8201 22.6947 92.6101 22.6947ZM92.6101 19.3373C94.1117 19.3373 95.415 18.9831 96.52 18.2748C97.625 17.5665 98.4892 16.6173 99.1125 15.4273C99.7358 14.209 100.048 12.849 100.048 11.3474C100.048 9.84572 99.7358 8.4999 99.1125 7.30992C98.4892 6.0916 97.625 5.12828 96.52 4.41995C95.415 3.71162 94.1117 3.35746 92.6101 3.35746C91.1368 3.35746 89.8335 3.71162 88.7001 4.41995C87.5951 5.12828 86.731 6.0916 86.1077 7.30992C85.4843 8.4999 85.1727 9.84572 85.1727 11.3474C85.1727 12.849 85.4843 14.209 86.1077 15.4273C86.731 16.6173 87.5951 17.5665 88.7001 18.2748C89.8335 18.9831 91.1368 19.3373 92.6101 19.3373Z" />
            <path d="M44.2163 22.1845L51.6537 12.1971C50.3221 11.7438 49.1463 11.0921 48.1263 10.2422C47.1346 9.36383 46.3413 8.34384 45.7463 7.18219C45.1796 5.9922 44.8963 4.73139 44.8963 3.39973V0.509766H48.8488V3.39973C48.8488 4.44806 49.1179 5.41138 49.6562 6.2897C50.1946 7.16803 50.9171 7.87635 51.8237 8.41468C52.7304 8.953 53.7079 9.293 54.7562 9.43467L61.3011 0.509766H65.6361L58.5811 10.0722C60.0545 10.4972 61.3153 11.163 62.3636 12.0696C63.4403 12.948 64.2761 14.0104 64.8711 15.2571C65.4661 16.4754 65.7636 17.8071 65.7636 19.2521V22.1845H61.8536V19.2521C61.8536 18.1187 61.5703 17.0987 61.0036 16.1921C60.437 15.2571 59.672 14.5063 58.7086 13.9396C57.7453 13.3446 56.6403 12.9905 55.3937 12.8771L48.5938 22.1845H44.2163Z" />
            <path d="M77.9862 22.1845C75.7479 22.1845 73.7504 21.7029 71.9938 20.7395C70.2371 19.7762 68.8488 18.4871 67.8288 16.8721C66.8088 15.2288 66.2988 13.3871 66.2988 11.3471C66.2988 9.30717 66.8088 7.47969 67.8288 5.86471C68.8488 4.22139 70.2371 2.91807 71.9938 1.95475C73.7504 0.991428 75.7479 0.509766 77.9862 0.509766H80.5362V3.86723H77.8587C76.4137 3.86723 75.1104 4.20722 73.9487 4.88722C72.8154 5.53888 71.9088 6.43137 71.2288 7.56469C70.5771 8.69801 70.2513 9.95883 70.2513 11.3471C70.2513 12.7355 70.5771 13.9963 71.2288 15.1296C71.9088 16.2629 72.8154 17.1696 73.9487 17.8496C75.1104 18.5012 76.4137 18.8271 77.8587 18.8271H80.5362V22.1845H77.9862Z" />
          </svg>
        </a>

        <address class="mt-6 max-w-xs text-sm not-italic leading-relaxed text-white/70">
          São Paulo<br />
          Alameda Grajaú, 219 · 3º andar<br />
          Alphaville, Barueri · SP<br />
          06454-050
        </address>
      </div>

      <div class="grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 sm:grid-cols-3 sm:gap-6 lg:gap-8">
        <div v-for="(col, index) in columns" :key="col.title">
          <h3 class="text-sm font-semibold text-brand-green">{{ col.title }}</h3>

          <ul class="mt-4 space-y-1">
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href" class="text-sm transition-colors hover:text-brand-green">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mx-auto flex max-w-content flex-col gap-6 px-6 pb-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
      <a href="#contato" class="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-forest-800/30 px-4 py-2.5 text-sm font-semibold">
        Fale com um consultor

        <div class="grid h-7 w-7 place-items-center rounded-full bg-brand-green">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 10.8993C-0.0976311 11.2899 -0.0976311 11.923 0.292893 12.3136C0.683418 12.7041 1.31658 12.7041 1.70711 12.3136L1 11.6064L0.292893 10.8993ZM12.6066 0.999844C12.6066 0.447559 12.1589 -0.000156485 11.6066 -0.000156063L2.6066 -0.000155937C2.05432 -0.000156274 1.6066 0.447559 1.6066 0.999844C1.6066 1.55213 2.05432 1.99984 2.6066 1.99984L10.6066 1.99984L10.6066 9.99984C10.6066 10.5521 11.0543 10.9998 11.6066 10.9998C12.1589 10.9998 12.6066 10.5521 12.6066 9.99984L12.6066 0.999844ZM1 11.6064L1.70711 12.3136L12.3137 1.70695L11.6066 0.999844L10.8995 0.292737L0.292893 10.8993L1 11.6064Z" fill="#10211F"/></svg>
        </div>
      </a>

      <ul class="flex items-center gap-3">
        <li v-for="(s, index) in socials" :key="s.label">
          <a :href="s.href" :aria-label="s.label" class="grid h-10 w-10 place-items-center rounded-full bg-forest-800 sm:h-11 sm:w-11">
            <component :is="s.icon" />
          </a>
        </li>
      </ul>
    </div>

    <div class="border-t border-white/10">
      <div class="mx-auto flex max-w-content flex-col gap-4 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© 2026 Nexco. Todos os direitos reservados.</p>
        
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#" class="hover:text-white">Termos e condições</a>
          <a href="#" class="hover:text-white">Políticas de Privacidade</a>
        </div>
      </div>
    </div>
  </footer>
</template>