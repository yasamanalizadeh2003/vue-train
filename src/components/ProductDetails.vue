<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

// 📦 Products data (demo)
const products = [
  {
    id: 1,
    name: 'Form Chair',
    price: '€680',
    description: 'Canvas & steel, reduced to what matters.',
    images: [
      '/images/p1-1.jpg',
      '/images/p1-2.jpg',
      '/images/p1-3.jpg',
    ],
  },
  {
    id: 2,
    name: 'Vessel Set',
    price: '€195',
    description: 'Three forms, one conversation.',
    images: [
      '/images/p2-1.jpg',
      '/images/p2-2.jpg',
      '/images/p2-3.jpg',
    ],
  },
]

// 🔍 find product by route id
const product = computed(() =>
  products.find((p) => p.id == route.params.id)
)

// 🖼 active image state
const activeImage = ref(0)

function setImage(index) {
  activeImage.value = index
}

// 🔙 back button
function goBack() {
  router.back()
}
</script>

<template>
  <div class="p-6 lg:p-16">

    <!-- BACK BUTTON -->
    <button
      @click="goBack"
      class="group flex items-center gap-2 px-4 py-2 mb-8
             bg-white/60 backdrop-blur-md
             border border-white/30
             rounded-full shadow-sm
             hover:shadow-lg hover:-translate-y-0.5
             transition-all duration-300
             hover:bg-white/80"
    >
      <ArrowLeft
        class="w-4 h-4 text-gray-700
               group-hover:-translate-x-1
               transition-transform duration-300"
      />

      <span class="text-sm text-gray-700 font-medium">
        Back
      </span>
    </button>

    <!-- PRODUCT -->
    <div v-if="product" class="min-h-screen flex flex-col lg:flex-row gap-10">

      <!-- IMAGE GALLERY -->
      <div class="lg:w-1/2">

        <!-- MAIN IMAGE -->
        <div class="overflow-hidden rounded-2xl shadow-lg">
          <img
            :key="activeImage"
            :src="product.images[activeImage]"
            class="w-full h-[300px] sm:h-[400px] lg:h-[500px]
                   object-cover transition-all duration-500 hover:scale-105"
          />
        </div>

        <!-- THUMBNAILS -->
        <div class="flex gap-3 mt-4">
          <div
            v-for="(img, index) in product.images"
            :key="index"
            @click="setImage(index)"
            class="cursor-pointer rounded-lg overflow-hidden border
                   transition-all duration-300"
            :class="activeImage === index
              ? 'border-black scale-105'
              : 'border-gray-200 opacity-70 hover:opacity-100'"
          >
            <img :src="img" class="w-20 h-20 object-cover" />
          </div>
        </div>

      </div>

      <!-- INFO -->
      <div class="lg:w-1/2 flex flex-col justify-center">

        <div class="text-3xl sm:text-4xl font-serif mb-3">
          {{ product.name }}
        </div>

        <div class="text-gray-500 mb-6 leading-7">
          {{ product.description }}
        </div>

        <div class="text-xl font-mono mb-8">
          {{ product.price }}
        </div>

        <button
          class="bg-black text-white px-6 py-3 rounded-xl
                 hover:bg-gray-800 transition-all duration-300
                 hover:scale-105 w-fit"
        >
          Add to Cart
        </button>

      </div>

    </div>

    <!-- NOT FOUND -->
    <div v-else class="min-h-screen flex items-center justify-center text-gray-400">
      Product not found
    </div>

  </div>
</template>