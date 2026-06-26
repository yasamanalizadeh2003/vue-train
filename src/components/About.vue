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
          Est. 2017 — Lisbon
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
          A studio that <br />
          makes things <br />
          slowly.
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
          Studio Form is a design studio and collection based in Lisbon. We work with a small
          network of independent makers across Portugal, Spain, Denmark, the Netherlands, and Japan
          to produce objects for the everyday.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
