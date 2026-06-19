<script setup>
import { ref } from 'vue';
import Child from './child.vue';

const message=ref("message from parent")
</script>

<template>
<Child v-bind:m="message"/>
</template>