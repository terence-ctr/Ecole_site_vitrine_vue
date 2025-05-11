<script setup lang="ts">
</script>

<template>
  <section class="cta">
    <div class="container">
      <div class="cta-content slide-up">
        <h2>Prêt à Rejoindre Notre Communauté Scolaire ?</h2>
        <p>Faites le premier pas vers l'offre d'une expérience éducative exceptionnelle à votre enfant. Notre équipe d'admissions est prête à vous guider dans le processus.</p>
        <div class="cta-buttons">
          <router-link to="/admission" class="btn btn-primary">Postuler Maintenant</router-link>
          <router-link to="/contact" class="btn btn-outline">Contactez-Nous</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background-image: linear-gradient(to right, var(--color-primary-dark), var(--color-primary));
  color: white;
  padding: var(--space-8) 0;
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  color: white;
  margin-bottom: var(--space-3);
  font-size: 2.5rem;
}

.cta-content p {
  margin-bottom: var(--space-5);
  font-size: 1.2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid white;
  color: white;
}

.btn-outline:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .cta-content p {
    font-size: 1.1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
  }
  
  .btn {
    width: 80%;
  }
}
</style>