<script setup>
import { inject } from 'vue'

defineProps(['m'])

const emit = defineEmits(['click'])

const counter = inject('counter')
</script>

<template>
  <p class="m-12">{{ m }}</p>
  <button
    @click="emit('click', 'message from child')"
    class="bg-red-600 shadow-sm shadow-red-800 text-white hover:bg-red-700 transition p-2 rounded-2xl ml-15"
  >
    click
  </button>
  <div class="flex gap-3 mt-10 ml-6">
    <p class="mt-2">{{ counter }}</p>
    <button
      class="bg-purple-500 shadow-sm shadow-purple-800 text-white hover:bg-purple-700 transition p-2 rounded-2xl"
      @click="counter++"
    >
      increase
    </button>
    <button
      class="bg-purple-500 shadow-sm shadow-purple-800 text-white hover:bg-purple-700 transition p-2 rounded-2xl"
      @click="counter--"
    >
      decrease
    </button>
  </div>
</template>
