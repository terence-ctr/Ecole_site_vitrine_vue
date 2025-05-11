import Home from '../views/Home.vue'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/primary',
    name: 'Primary',
    component: () => import('../views/Primary.vue')
  },
  {
    path: '/secondary',
    name: 'Secondary',
    component: () => import('../views/Secondary.vue')
  },
  {
    path: '/admission',
    name: 'Admission',
    component: () => import('../views/Admission.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

export default routes