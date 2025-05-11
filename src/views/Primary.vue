<script setup lang="ts">
const curriculum = [
  {
    subject: 'English Language',
    description: 'Developing strong reading, writing, speaking, and listening skills through engaging literature and communication activities.'
  },
  {
    subject: 'Mathematics',
    description: 'Building fundamental numeracy skills and problem-solving abilities through hands-on activities and real-world applications.'
  },
  {
    subject: 'Science',
    description: 'Exploring the natural world through observation, experimentation, and inquiry-based learning that stimulates curiosity.'
  },
  {
    subject: 'Social Studies',
    description: 'Learning about communities, history, geography, and cultures to develop a broader understanding of the world.'
  },
  {
    subject: 'Art & Music',
    description: 'Fostering creativity and self-expression through various artistic mediums and musical experiences.'
  },
  {
    subject: 'Physical Education',
    description: 'Promoting physical fitness, teamwork, and healthy habits through age-appropriate activities and sports.'
  },
  {
    subject: 'Technology',
    description: 'Introducing digital literacy and responsible use of technology with age-appropriate tools and applications.'
  },
  {
    subject: 'Character Education',
    description: 'Developing positive character traits, social skills, and emotional intelligence through integrated lessons and activities.'
  }
]

const programs = [
  {
    title: 'Reading Buddies',
    description: 'Pairs older and younger students for reading practice, building confidence and mentorship relationships.',
    image: 'https://images.pexels.com/photos/8471767/pexels-photo-8471767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Math Olympics',
    description: 'Fun math competitions and challenges that make learning mathematics exciting and engaging.',
    image: 'https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Young Scientists Club',
    description: 'Hands-on science experiments and projects that foster curiosity and scientific thinking.',
    image: 'https://images.pexels.com/photos/8961245/pexels-photo-8961245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
]
</script>

<template>
  <div class="primary-school">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title slide-up">Primary School</h1>
        <div class="breadcrumbs slide-up">
          <router-link to="/">Home</router-link> <span>/</span> <span>Primary School</span>
        </div>
      </div>
      <div class="page-header-overlay"></div>
    </section>
    
    <section class="primary-intro section">
      <div class="container">
        <div class="grid grid-2">
          <div class="intro-content slide-up">
            <h2>A Strong Foundation for Learning</h2>
            <p>Our Primary School program is designed to nurture a love of learning in a caring and supportive environment. We focus on helping each child develop academically, socially, and emotionally during these crucial formative years.</p>
            <p>Through a balanced curriculum and personalized attention, we ensure that every student builds the solid foundation necessary for future academic success and lifelong learning.</p>
            <div class="intro-features">
              <div class="feature">
                <div class="feature-icon">✓</div>
                <div>Small class sizes with personalized attention</div>
              </div>
              <div class="feature">
                <div class="feature-icon">✓</div>
                <div>Engaging, hands-on learning experiences</div>
              </div>
              <div class="feature">
                <div class="feature-icon">✓</div>
                <div>Balanced focus on academics, arts, and physical activity</div>
              </div>
              <div class="feature">
                <div class="feature-icon">✓</div>
                <div>Strong emphasis on character development</div>
              </div>
            </div>
          </div>
          <div class="intro-image slide-up">
            <img src="https://images.pexels.com/photos/8187648/pexels-photo-8187648.jpeg" alt="Primary classroom" />
          </div>
        </div>
      </div>
    </section>
    
    <section class="curriculum-section section bg-light">
      <div class="container">
        <h2 class="section-title text-center slide-up">Our Primary Curriculum</h2>
        <p class="section-subtitle text-center slide-up">A balanced approach focusing on core academic subjects and the development of essential skills</p>
        
        <div class="curriculum-grid grid grid-2">
          <div v-for="subject in curriculum" :key="subject.subject" class="curriculum-card card slide-up">
            <h3 class="subject-title">{{ subject.subject }}</h3>
            <p>{{ subject.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="approach-section section">
      <div class="container">
        <div class="grid grid-2">
          <div class="approach-image slide-up">
            <img src="https://images.pexels.com/photos/8471039/pexels-photo-8471039.jpeg" alt="Learning approach" />
          </div>
          <div class="approach-content slide-up">
            <h2>Our Teaching Approach</h2>
            <p>At Orange Academy's Primary School, we embrace a child-centered approach to teaching and learning. We recognize that each child is unique, with different learning styles, strengths, and areas for growth.</p>
            <div class="approach-features">
              <div class="approach-feature">
                <h3>Active Learning</h3>
                <p>Students are active participants in their learning journey, engaging in hands-on activities and meaningful discussions.</p>
              </div>
              <div class="approach-feature">
                <h3>Differentiated Instruction</h3>
                <p>Teachers adapt their teaching methods to meet the diverse needs and learning styles of all students.</p>
              </div>
              <div class="approach-feature">
                <h3>Inquiry-Based Learning</h3>
                <p>We encourage curiosity and critical thinking by allowing students to ask questions and seek answers through guided exploration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="programs-section section bg-light">
      <div class="container">
        <h2 class="section-title text-center slide-up">Special Programs</h2>
        <p class="section-subtitle text-center slide-up">Enriching experiences that enhance the primary education journey</p>
        
        <div class="programs-grid grid grid-3">
          <div v-for="program in programs" :key="program.title" class="program-card card slide-up">
            <div class="program-image">
              <img :src="program.image" :alt="program.title" class="card-img" />
            </div>
            <div class="card-body">
              <h3>{{ program.title }}</h3>
              <p>{{ program.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="cta-section">
      <div class="container">
        <div class="cta-wrapper slide-up">
          <h2>Ready to Enroll Your Child?</h2>
          <p>Begin your child's journey with Orange Academy's Primary School and provide them with the foundation they need to thrive.</p>
          <div class="cta-buttons">
            <router-link to="/admission" class="btn btn-primary">Apply Now</router-link>
            <router-link to="/contact" class="btn btn-outline">Schedule a Visit</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  height: 300px;
  background-image: url('https://images.pexels.com/photos/8471803/pexels-photo-8471803.jpeg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
}

.page-header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(45, 80, 130, 0.8), rgba(255, 126, 0, 0.7));
  z-index: 1;
}

.page-title {
  position: relative;
  z-index: 2;
  margin-bottom: var(--space-2);
}

.breadcrumbs {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  color: rgba(255, 255, 255, 0.8);
}

.breadcrumbs a {
  color: white;
  text-decoration: none;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}

.intro-content h2 {
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.intro-content p {
  margin-bottom: var(--space-3);
  line-height: 1.6;
}

.intro-features {
  margin-top: var(--space-5);
}

.feature {
  display: flex;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
  align-items: center;
}

.feature-icon {
  width: 28px;
  height: 28px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.intro-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.intro-image img {
  width: 100%;
  height: auto;
  display: block;
}

.section-subtitle {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--space-6);
  color: var(--color-neutral-700);
}

.curriculum-card {
  padding: var(--space-4);
  height: 100%;
}

.subject-title {
  color: var(--color-secondary);
  margin-bottom: var(--space-3);
  position: relative;
  padding-bottom: var(--space-2);
}

.subject-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: var(--color-primary);
}

.approach-content h2 {
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.approach-content p {
  margin-bottom: var(--space-5);
  line-height: 1.6;
}

.approach-features {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.approach-feature h3 {
  color: var(--color-secondary);
  margin-bottom: var(--space-2);
  font-size: 1.3rem;
}

.approach-feature p {
  margin-bottom: 0;
}

.approach-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.approach-image img {
  width: 100%;
  height: auto;
  display: block;
}

.program-image {
  height: 200px;
  overflow: hidden;
}

.program-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.program-card:hover .program-image img {
  transform: scale(1.05);
}

.cta-section {
  background-color: var(--color-primary);
  color: white;
  padding: var(--space-8) 0;
}

.cta-wrapper {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-wrapper h2 {
  color: white;
  margin-bottom: var(--space-3);
}

.cta-wrapper p {
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
  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
  }
  
  .cta-buttons .btn {
    width: 80%;
  }
}
</style>