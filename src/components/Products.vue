<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const items = [
  { id: 1, name: 'Form Chair', category: 'SEATING', price: '€680', caption: 'Canvas & steel, reduced to what matters.' },
  { id: 2, name: 'Vessel Set', category: 'CERAMICS', price: '€195', caption: 'Three forms, one conversation.' },
  { id: 3, name: 'Shelf System', category: 'CERAMICS', price: '€195', caption: 'Three forms, one conversation.' },
  { id: 4, name: 'Vessel Set', category: 'STORAGE', price: '€1,240', caption: 'A shelf that thinks in columns.' },
]

const tabs = ['ALL', 'SEATING', 'CERAMICS', 'STORAGE', 'OBJECTS', 'LIGHTNING']

const activeTab = ref('ALL')

function setActive(tab) {
  activeTab.value = tab
}

const filteredItems = computed(() => {
  if (activeTab.value === 'ALL') return items
  return items.filter((item) => item.category === activeTab.value)
})

function goToDetail(id) {
  router.push(`/products/${id}`)
}
</script>

<template>
  <!-- Tabs -->
  <div class="overflow-x-auto mt-3">
    <div class="flex gap-4 min-w-max py-4 px-4 sm:px-6 md:px-10 font-mono">
      <div
        v-for="tab in tabs"
        :key="tab"
        @click="setActive(tab)"
        class="shrink-0 cursor-pointer transition text-sm sm:text-base"
        :class="
          activeTab === tab
            ? 'text-black border-b-2 border-b-red-900 pb-1'
            : 'text-gray-500 hover:text-gray-700'
        "
      >
        {{ tab }}
      </div>
    </div>
  </div>

  <hr class="border-gray-200 mt-3" />

  <div class="font-serif text-2xl sm:text-3xl lg:text-4xl px-10 pt-8">
    The collection
  </div>

  <!-- Items -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-10">

    <div
      v-for="(item, index) in filteredItems"
      :key="item.id"
      @click="goToDetail(item.id)"
      v-motion
      :initial="{
        opacity: 0,
        y: 30,
        scale: 0.95
      }"
      :enter="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 400,
          delay: index * 100
        }
      }"
      class="group bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 cursor-pointer
             shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >

      <!-- Category -->
      <div class="text-xs text-gray-400 uppercase tracking-widest mb-2">
        {{ item.category }}
      </div>

      <!-- Name -->
      <div class="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-black transition">
        {{ item.name }}
      </div>

      <!-- Caption -->
      <div class="text-sm text-gray-500 mt-1 line-clamp-2">
        {{ item.caption }}
      </div>

      <!-- Price -->
      <div class="mt-3 sm:mt-4 font-mono text-black font-medium">
        {{ item.price }}
      </div>

    </div>
  </div>
</template>