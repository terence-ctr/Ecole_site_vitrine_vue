<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

const isHeaderTransparent = ref(true)
const route = useRoute()

// Change header on scroll
const handleScroll = () => {
  isHeaderTransparent.value = window.scrollY < 50
}

// Watch for route changes and scroll to top
watch(() => route.path, () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  
  // Animation for page elements
  const animateElements = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-up')
    
    elements.forEach(element => {
      const position = element.getBoundingClientRect()
      
      // Check if element is in viewport
      if (position.top < window.innerHeight * 0.9) {
        element.classList.add('visible')
      }
    })
  }
  
  window.addEventListener('scroll', animateElements)
  animateElements()
})
</script>

<template>
  <div class="app">
    <TheHeader :transparent="isHeaderTransparent" />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-in, .slide-up {
  opacity: 0;
}

.fade-in.visible {
  animation: fadeIn 0.8s ease-in-out forwards;
}

.slide-up.visible {
  animation: slideUp 0.8s ease-in-out forwards;
}
</style>