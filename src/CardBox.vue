<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 px-24 py-12">
    <div class="border-2 border-gray-200 rounded-sm shadow-sm shadow-gray-300 h-96 w-full">
      <slot name="header" ></slot>
      <slot name="text" ></slot>
    </div>

    <div class="border-2 border-gray-200 rounded-sm shadow-sm shadow-gray-300 h-96 w-full">
      <slot name="header" ></slot>
      <slot name="text"></slot>
    </div>

    <div class="border-2 border-gray-200 rounded-sm shadow-sm shadow-gray-300 h-96 w-full">
      <slot name="header" ></slot>
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script setup></script>
