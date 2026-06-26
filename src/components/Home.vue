<script setup></script>

<template>
  <div class="flex flex-col-reverse lg:flex-row min-h-screen">
    <!-- Left -->
    <div class="w-full lg:w-1/2 flex items-center">
      <div class="px-6 md:px-10 py-12 lg:py-0">
        <!-- Collection -->
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: -20,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 600,
              delay: 100,
            },
          }"
          class="text-[#d7c777] pb-6 font-mono text-sm md:text-base"
        >
          Collection 2024
        </div>

        <!-- Title -->
        <div
          v-motion
          :initial="{
            opacity: 0,
            x: -60,
          }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              duration: 700,
              delay: 300,
            },
          }"
          class="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight max-w-lg"
        >
          Objects <br> made to <br> last.
        </div>

        <!-- Description -->
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 30,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 700,
              delay: 600,
            },
          }"
          class="text-gray-500 mt-8 leading-7 max-w-md text-sm md:text-base"
        >
          A curated studio of furniture, ceramics, and everyday objects —
          designed for longevity, made by hand.
        </div>
      </div>
    </div>

    <!-- Right Image -->
    <div
      v-motion
      :initial="{
        opacity: 0,
        x: 80,
        scale: 0.95,
      }"
      :enter="{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 900,
          delay: 400,
        },
      }"
      class="w-full lg:w-1/2"
    >
      <img
        class="w-full h-80 md:h-[500px] lg:h-screen object-cover"
        src="/images/images.jpg"
        alt="Furniture"
      />
    </div>
  </div>
</template>