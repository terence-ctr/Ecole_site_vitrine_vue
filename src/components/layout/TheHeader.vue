<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

defineProps<{
  transparent: boolean
}>()

const mobileMenuOpen = ref(false)
const route = useRoute()

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/primary', label: 'Primary School' },
  { path: '/secondary', label: 'Secondary School' },
  { path: '/admission', label: 'Admission' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/news', label: 'News' },
  { path: '/contact', label: 'Contact' }
]
</script>

<template>
  <header :class="['header', { 'transparent': transparent, 'active': !transparent }]">
    <div class="container header-container">
      <div class="logo">
        <router-link to="/">
          <span class="logo-text">Orange Academy</span>
        </router-link>
      </div>
      
      <nav class="desktop-nav">
        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link.path">
            <router-link :to="link.path" :class="{ 'active': route.path === link.path }">
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </nav>
      
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      
      <transition name="slide">
        <nav v-if="mobileMenuOpen" class="mobile-nav">
          <ul class="mobile-nav-links">
            <li v-for="link in navLinks" :key="link.path">
              <router-link :to="link.path" :class="{ 'active': route.path === link.path }" @click="closeMobileMenu">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
}

.header.transparent {
  background-color: transparent;
}

.header.active {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.logo-text {
  color: var(--color-primary);
  font-weight: 700;
  display: flex;
  align-items: center;
}

.header.transparent .logo-text {
  color: white;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: var(--space-4);
}

.nav-links a {
  color: var(--color-neutral-800);
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
}

.header.transparent .nav-links a {
  color: white;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.bar {
  width: 2rem;
  height: 3px;
  background-color: var(--color-primary);
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.header.transparent .bar {
  background-color: white;
}

.mobile-nav {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: var(--space-4);
}

.mobile-nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.mobile-nav-links a {
  display: block;
  padding: var(--space-2);
  color: var(--color-neutral-800);
  font-weight: 500;
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
}

.mobile-nav-links a:hover,
.mobile-nav-links a.active {
  border-left-color: var(--color-primary);
  color: var(--color-primary);
  padding-left: var(--space-3);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
}
</style>