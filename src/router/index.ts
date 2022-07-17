import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CarsView from '@/views/CarsView.vue'
import CarView from '@/views/CarView.vue'
import OfficesView from '@/views/OfficesView.vue'
import BookingsView from '@/views/BookingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cars',
      name: 'cars',
      component: CarsView
    },
    {
      path: '/cars/:id',
      name: 'car',
      component: CarView
    },
    {
      path: '/offices',
      name: 'offices',
      component: OfficesView
    },
    {
      path: '/bookings',
      name: 'bookings',
      component: BookingsView
    },
  ]
})

export default router
