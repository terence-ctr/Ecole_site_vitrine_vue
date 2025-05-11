<script setup lang="ts">
const features = [
  {
    id: 1,
    title: 'Qualified Teachers',
    description: 'Our highly qualified and experienced teachers are dedicated to providing the best education.',
    icon: '👨‍🏫'
  },
  {
    id: 2,
    title: 'Modern Facilities',
    description: 'State-of-the-art classrooms, laboratories, and sports facilities for comprehensive learning.',
    icon: '🏫'
  },
  {
    id: 3,
    title: 'Holistic Education',
    description: 'We focus on academic excellence along with character development and critical thinking skills.',
    icon: '🧠'
  },
  {
    id: 4,
    title: 'Extracurricular Activities',
    description: 'A wide range of sports, arts, and cultural activities to develop well-rounded individuals.',
    icon: '🏆'
  }
]
</script>

<template>
  <section class="features section">
    <div class="container">
      <h2 class="section-title text-center slide-up">Why Choose Orange Academy</h2>
      <p class="section-subtitle text-center slide-up">We provide a nurturing environment where every student can excel</p>
      
      <div class="features-grid grid grid-4">
        <div v-for="feature in features" :key="feature.id" class="feature-card card slide-up">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  background-color: var(--color-neutral-50);
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

.features-grid {
  margin-top: var(--space-6);
}

.feature-card {
  padding: var(--space-5);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: var(--space-4);
  background-color: rgba(255, 126, 0, 0.1);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
}

.feature-card h3 {
  margin-bottom: var(--space-3);
  font-size: 1.5rem;
  color: var(--color-primary-dark);
}

.feature-card p {
  color: var(--color-neutral-700);
  margin: 0;
}
</style>