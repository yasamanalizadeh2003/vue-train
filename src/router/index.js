import { createRouter, createWebHistory } from 'vue-router'
import ParentComponent from '/src/ParentComponent.vue'
import Header from '/src/components/Header.vue'
import Home from '/src/components/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/parent',
      name: 'parent',
      component: ParentComponent,
    },
     {
      path: '/',
      name: 'home',
      component: Header,
    },
     {
      path: '/home',
      name: 'home',
      component: Home,
    },
      {
      path: '/product',
      name: 'product',
      component: Header,
    },
  {
      path: '/about',
      name: 'about',
      component: Header,
    },


  ],
})

export default router
