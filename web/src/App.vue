<script setup>
import LogArea from "./components/HeroSection/Login/LogArea.vue";
import Hero from "./components/HeroSection/HeroSections/Hero.vue";
</script>

<template>
  <!-- Container principal centralizado -->
  <div
    class="flex items-center justify-center w-full h-screen bg-pricipal-background"
  >
    <!-- golden initial rectangle -->
    <div
      class="w-[95vw] h-[90vh] border-2 rounded-3xl border-gold-custom flex flex-col box-border pt-12 px-12 sm:pt-4 sm:px-4"
    >
      <div class="flex flex-col h-[90vh] overflow-hidden">
        <LogArea />
        <Hero />
      </div>
    </div>
  </div>
</template>
