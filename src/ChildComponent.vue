<script setup>
defineProps(['m'])

const emit=defineEmits(["click"])
</script>

<template>
  <p class="m-12">{{ m }}</p>
  <button @click="emit('click','message from child')" class="bg-red-600 shadow-sm shadow-red-800 text-white
   hover:bg-red-700 transition p-2 rounded-2xl ml-15">click</button>
</template>
