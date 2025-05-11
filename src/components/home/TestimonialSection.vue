<script setup lang="ts">
import { ref, onMounted } from 'vue'

const testimonials = [
  {
    id: 1,
    text: "Maïsha Academy a fourni une expérience éducative exceptionnelle pour mon enfant. Les enseignants sont dévoués et le programme est stimulant tout en étant engageant.",
    author: "Marie Dubois",
    role: "Parent",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    text: "En tant qu'ancien élève, je peux témoigner de la qualité de l'éducation à Maïsha Academy. Les compétences et les valeurs que j'ai apprises ont été essentielles à mon succès.",
    author: "Pierre Martin",
    role: "Ancien Élève",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    text: "L'environnement propice et les méthodes d'enseignement excellentes à Maïsha Academy ont aidé mes enfants à développer la confiance et l'amour de l'apprentissage.",
    author: "Sophie Lemoine",
    role: "Parent",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]

const currentTestimonial = ref(0)

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.length) % testimonials.length
}

onMounted(() => {
  const interval = setInterval(() => {
    nextTestimonial()
  }, 6000)
  
  return () => clearInterval(interval)
})
</script>

<template>
  <section class="testimonials section">
    <div class="container">
      <h2 class="section-title text-center slide-up">Ce Que Disent Les Parents & Étudiants</h2>
      
      <div class="testimonial-slider">
        <button class="slider-nav prev" @click="prevTestimonial" aria-label="Previous testimonial">
          &lt;
        </button>
        
        <div class="testimonial-wrapper">
          <transition name="fade" mode="out-in">
            <div class="testimonial" :key="testimonials[currentTestimonial].id">
              <div class="testimonial-content">
                <div class="quote-icon">"</div>
                <p class="testimonial-text">{{ testimonials[currentTestimonial].text }}</p>
                <div class="testimonial-author">
                  <img :src="testimonials[currentTestimonial].image" :alt="testimonials[currentTestimonial].author" class="author-image" />
                  <div class="author-details">
                    <div class="author-name">{{ testimonials[currentTestimonial].author }}</div>
                    <div class="author-role">{{ testimonials[currentTestimonial].role }}</div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        
        <button class="slider-nav next" @click="nextTestimonial" aria-label="Next testimonial">
          &gt;
        </button>
      </div>
      
      <div class="testimonial-dots">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          :class="['dot', { active: index === currentTestimonial }]"
          @click="currentTestimonial = index"
          :aria-label="`Go to testimonial ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  background-color: var(--color-secondary);
  color: white;
  justify-content: center; 
  align-items: center
}

.section-title {
  color: white;
  margin-bottom: var(--space-6);
}

.testimonial-slider {
  display: flex;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
}

.testimonial-wrapper {
  flex: 1;
  position: relative;
  min-height: 280px;
  display: flex;
  align-items: center;
}

.testimonial {
  width: 100%;
}

.testimonial-content {
  background-color: rgba(255, 255, 255, 0.1);
  padding: var(--space-5);
  border-radius: 12px;
  position: relative;
}

.quote-icon {
  font-size: 3rem;
  line-height: 1;
  color: var(--color-primary);
  position: absolute;
  top: -15px;
  left: 15px;
  opacity: 0.7;
}

.testimonial-text {
  margin-bottom: var(--space-4);
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.6;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-primary);
}

.author-name {
  font-weight: 700;
  margin-bottom: 2px;
}

.author-role {
  font-size: 0.9rem;
  color: var(--color-neutral-300);
}

.slider-nav {
  background-color: var(--color-primary);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.slider-nav:hover {
  background-color: var(--color-primary-dark);
  transform: scale(1.1);
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-5);
}

.dot {
  width: 12px;
  height: 12px;
  background-color: rgba(56, 58, 56, 0.3);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.dot.active {
  background-color: var(--color-primary);
  transform: scale(1.2);
}

.dot:hover {
  background-color: var(--color-primary-light);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .testimonial-content {
    padding: var(--space-4);
  }
  
  .testimonial-text {
    font-size: 1rem;
  }
  
  .slider-nav {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  
  .testimonial-wrapper {
    min-height: 320px;
  }
}
</style>