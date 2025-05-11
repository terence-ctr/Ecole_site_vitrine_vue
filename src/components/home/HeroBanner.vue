<script setup lang="ts">
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title slide-up">Inspirez. Éduquez. Transformez.</h1>
      <p class="hero-subtitle slide-up">Une institution d'apprentissage de premier plan pour l'éducation primaire et secondaire</p>
      <div class="hero-buttons slide-up">
        <router-link to="/admission" class="btn btn-primary">Postuler Maintenant</router-link>
        <router-link to="/about" class="btn btn-outline">En Savoir Plus</router-link>
      </div>
    </div>
    <div class="hero-overlay"></div>
  </section>
</template>

<style scoped>
.hero {
  height: 90vh;
  min-height: 600px;
  background-image: url('https://images.pexels.com/photos/8617855/pexels-photo-8617855.jpeg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(45, 80, 130, 0.9), rgba(255, 126, 0, 0.7));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 var(--space-4);
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--space-3);
  animation-delay: 0.3s;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: var(--space-5);
  animation-delay: 0.5s;
}

.hero-buttons {
  display: flex;
  gap: var(--space-3);
  justify-content: center;
  animation-delay: 0.7s;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: var(--space-2);
    align-items: center;
  }
  
  .btn {
    width: 80%;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4rem;
  }
  
  .hero-subtitle {
    font-size: 1.75rem;
  }
}
</style>