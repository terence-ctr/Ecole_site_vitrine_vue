<script setup lang="ts">
const levels = [
  {
    id: 'primary',
    title: 'Primary School',
    grades: 'Grades 1-6',
    description: 'Our primary school provides a solid foundation for learning through a child-centered approach that fosters curiosity and a love for learning.',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
    link: '/primary'
  },
  {
    id: 'secondary',
    title: 'Secondary School',
    grades: 'Grades 7-12',
    description: 'The secondary program prepares students for higher education and future careers through rigorous academic standards and diverse extracurricular opportunities.',
    image: 'https://images.pexels.com/photos/8617865/pexels-photo-8617865.jpeg',
    link: '/secondary'
  }
]
</script>

<template>
  <section class="school-levels section">
    <div class="container">
      <h2 class="section-title text-center slide-up">Our Education Programs</h2>
      <p class="section-subtitle text-center slide-up">Comprehensive education pathways from primary through secondary levels</p>
      
      <div class="levels-grid">
        <div v-for="level in levels" :key="level.id" class="level-card slide-up">
          <div class="level-image">
            <img :src="level.image" :alt="level.title" />
          </div>
          <div class="level-content">
            <h3>{{ level.title }}</h3>
            <div class="level-grades">{{ level.grades }}</div>
            <p>{{ level.description }}</p>
            <router-link :to="level.link" class="btn btn-primary">Learn More</router-link>
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