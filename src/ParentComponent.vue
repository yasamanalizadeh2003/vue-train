<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue';

const message = ref('message from parent')

function handleChange(newData) {
  message.value = newData
}
</script>

<template>
  <p class="text-gray-700 font-mono mx-3 mt-8">{{ message }}</p>
  <ChildComponent @click="handleChange" />
</template>
