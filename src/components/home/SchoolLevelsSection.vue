<script setup lang="ts">
const levels = [
  {
    id: 'primary',
    title: 'École Primaire',
    grades: 'Classes 1-6',
    description: "Notre école primaire offre une base solide pour l'apprentissage grâce à une approche centrée sur l'enfant qui favorise la curiosité et l'amour de l'apprentissage.",
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
    link: '/primary'
  },
  {
    id: 'secondary',
    title: 'École Secondaire',
    grades: 'Classes 7-12',
    description: "Le programme secondaire prépare les élèves à l'enseignement supérieur et aux carrières futures grâce à des normes académiques rigoureuses et des opportunités extrascolaires variées.",
    image: 'https://images.pexels.com/photos/8617865/pexels-photo-8617865.jpeg',
    link: '/secondary'
  }
]
</script>

<template>
  <section class="school-levels section">
    <div class="container">
      <h2 class="section-title text-center slide-up">Nos Programmes Éducatifs</h2>
      <p class="section-subtitle text-center slide-up">Des parcours éducatifs complets de l'école primaire au secondaire</p>
      
      <div class="levels-grid">
        <div v-for="level in levels" :key="level.id" class="level-card slide-up">
          <div class="level-image">
            <img :src="level.image" :alt="level.title" />
          </div>
          <div class="level-content">
            <h3>{{ level.title }}</h3>
            <div class="level-grades">{{ level.grades }}</div>
            <p>{{ level.description }}</p>
            <router-link :to="level.link" class="btn btn-primary">En Savoir Plus</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.school-levels {
  background-color: white;
}

.section-title {
  margin-bottom: var(--space-2);
}

.section-subtitle {
  margin-bottom: var(--space-6);
  font-size: 1.2rem;
  color: var(--color-neutral-600);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.levels-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-top: var(--space-6);
}

.level-card {
  display: flex;
  flex-direction: column;
  background-color: var(--color-neutral-50);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.level-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.level-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.level-card:hover .level-image img {
  transform: scale(1.05);
}

.level-content {
  padding: var(--space-5);
}

.level-content h3 {
  color: var(--color-primary);
  margin-bottom: var(--space-2);
  font-size: 1.75rem;
}

.level-grades {
  display: inline-block;
  background-color: var(--color-primary-light);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: var(--space-3);
  font-size: 0.9rem;
}

.level-content p {
  margin-bottom: var(--space-4);
  color: var(--color-neutral-700);
}

@media (min-width: 768px) {
  .level-card {
    flex-direction: row;
  }
  
  .level-card:nth-child(even) {
    flex-direction: row-reverse;
  }
  
  .level-image {
    width: 50%;
    height: auto;
  }
  
  .level-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>