<script setup></script>

<template>
  <div class="flex items-center justify-center">
    <!-- Left -->
    <div class="w-1/2">
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
        class="text-[#d7c777] px-10 pb-6 font-mono"
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
        class="text-6xl font-serif px-10"
      >
        Objects <br />
        made to <br />
        last.
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
        class="text-gray-500 px-10 mt-10 leading-7"
      >
        A curated studio of furniture, ceramics, and <br />
        everyday objects — designed for longevity, made <br />
        by hand.
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
      class="w-1/2 overflow-hidden min-h-screen"
    >
      <img class="w-full h-screen object-cover" src="/images/images.jpg" alt="" />
    </div>
  </div>
</template>
