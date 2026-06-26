<script setup>

</script>

<template>
    <div>
        <div class="flex justify-center items-center text-gray-500 hover:text-gray-700 transition focus:text-black
        gap-7 mt-6">
<router-link to="/home">home</router-link>
<router-link to="/product">product</router-link>
<router-link to="/about">about</router-link>


        </div>
        <hr class="border-gray-200 mt-6">
        <router-view></router-view>
    </div>
</template>

<style scoped>
.router-link-exact-active {
  color: black;
  text-decoration: underline;
  text-decoration-color: rgb(96, 96, 244);
 text-underline-offset: 6px;
}
</style>