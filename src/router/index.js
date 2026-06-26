import { createRouter, createWebHistory } from 'vue-router'
import ParentComponent from '/src/ParentComponent.vue'
import Header from '/src/components/Header.vue'
import Home from '/src/components/Home.vue'
import Products from '/src/components/Products.vue'
import ProductDetails from '/src/components/ProductDetails.vue'
import About from '/src/components/About.vue'


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
      name: 'header',
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
      component: Products,
     
    },
      {
      path: '/products/:id',
      name: 'product-details',
      component: ProductDetails,
    },
  {
      path: '/about',
      name: 'about',
      component: About,
    },


  ],
})

export default router
