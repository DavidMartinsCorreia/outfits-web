<script setup lang="ts">
import Sales from "./Sales.vue";
import See_Outfits from "./See_Outfits.vue";
</script>

<template>
  <div class="relative w-full min-h-screen">
    <div
      class="relative flex flex-col items-start w-full h-auto px-4 pt-16 lg:pt-4 lg:flex-row gap-x-4 gap-y-6 lg:gap-y-0"
    >
      <div
        class="flex flex-col gap-y-4 flex-shrink-0 w-full lg:w-[30%] z-10 order-2 lg:order-1"
      >
        <div
          class="hidden p-6 border-2 lg:block rounded-3xl border-gold-custom text-gold-custom h-80"
        >
          <h2 class="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            LOGO – Well come to my app this is a test
          </h2>
        </div>
        <Sales />
      </div>

      <div
        class="flex justify-center items-center w-full lg:w-[40%] fixed inset-0 opacity-20 pointer-events-none z-0 lg:relative lg:opacity-100 lg:pointer-events-auto lg:z-20 lg:h-[90vh] lg:-mt-20 lg:order-2"
      >
        <img
          src="/character.png"
          alt="Character"
          class="object-contain h-full"
        />
      </div>

      <div
        class="flex flex-col justify-start w-full lg:w-[30%] text-center lg:text-right text-gold-custom z-10 order-3 lg:order-3"
      >
        <h2 class="hidden mb-4 text-xl font-bold lg:mb-0 lg:block">
          Wear it. Own it. Rule the room. Our outfits aren't just clothes,
          they're your crown.
        </h2>
        <See_Outfits />
      </div>
    </div>
  </div>
</template>
