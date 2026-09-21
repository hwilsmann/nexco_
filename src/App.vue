<script setup lang="ts">
  import TheHeader from './components/TheHeader.vue'
  import TheFooter from './components/TheFooter.vue'
  import HeroSection from './components/sections/HeroSection.vue'
  import LogosSection from './components/sections/LogosSection.vue'
  import AboutSection from './components/sections/AboutSection.vue'
  import SolutionsSection from './components/sections/SolutionsSection.vue'
  import ExpertiseSection from './components/sections/ExpertiseSection.vue'
  import TestimonialsSection from './components/sections/TestimonialsSection.vue'
  import RolesSection from './components/sections/RolesSection.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <TheHeader />

    <main class="overflow-hidden">
      <HeroSection />
      <LogosSection />
      <AboutSection />
      <SolutionsSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <RolesSection />
    </main>

    <TheFooter />
  </div>
</template>