<script setup lang="ts"></script>

<template>
  <section id="top" class="relative overflow-hidden bg-forest-900 text-white">
    <div class="mx-auto grid max-w-content items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-2 lg:px-10 lg:pt-16">
      <div>
        <h1 class="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
          Encontre os talentos para
          <span class="text-brand-green">transformar a sua empresa</span>
        </h1>

        <p class="mt-6 max-w-md text-white/60">
          Ajudamos nossos clientes a contratar o talento certo com as
          competências mais relevantes para os negócios.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-6">
          <a
            href="#contato"
            class="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-forest-950 transition-transform hover:scale-[1.03]"
          >
            Quero contratar
            <span class="grid h-5 w-5 place-items-center rounded-full bg-forest-950 text-brand-green">↗</span>
          </a>
          <a href="#solucoes" class="inline-flex items-center gap-1.5 text-sm font-medium text-white/85 hover:text-white">
            Conheça as soluções ↗
          </a>
        </div>
      </div>

      <div class="relative">
        <div class="overflow-hidden rounded-[28px]">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80&auto=format&fit=crop"
            alt="Consultora sorrindo em ambiente corporativo"
            class="h-[340px] w-full object-cover sm:h-[420px]"
          />
        </div>

        <div class="absolute -bottom-8 -left-6 hidden w-44 overflow-hidden rounded-2xl border-4 border-forest-900 shadow-xl sm:block lg:-left-10">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80&auto=format&fit=crop"
            alt="Equipe colaborando"
            class="h-28 w-full object-cover"
          />
        </div>

        <svg
          class="absolute -bottom-10 left-1/2 hidden text-brand-green sm:block"
          width="90"
          height="34"
          viewBox="0 0 90 34"
          fill="none"
        >
          <path
            d="M2 30 L18 4 L34 30 L50 4 L66 30 L82 4"
            stroke="currentColor"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </section>
</template>
