import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParentComponent from '/src/ParentComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/parent',
      name: 'parent',
      component: ParentComponent,
    },
  ],
})

export default router
