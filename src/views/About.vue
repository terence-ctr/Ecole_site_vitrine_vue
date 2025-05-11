<script setup lang="ts">
const stats = [
  { value: '30+', label: 'Years of Excellence' },
  { value: '200+', label: 'Qualified Teachers' },
  { value: '2,500+', label: 'Students Enrolled' },
  { value: '98%', label: 'Graduation Rate' }
]

const team = [
  {
    name: 'Dr. Sarah Johnson',
    position: 'Principal',
    bio: 'With over 20 years of experience in education, Dr. Johnson leads our school with vision and dedication.',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Prof. Michael Chen',
    position: 'Academic Director',
    bio: 'Professor Chen ensures our curriculum meets the highest standards while fostering creativity and critical thinking.',
    image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Ms. Emily Rodriguez',
    position: 'Head of Primary Education',
    bio: 'Ms. Rodriguez specializes in early childhood education and has transformed our primary program.',
    image: 'https://images.pexels.com/photos/3783958/pexels-photo-3783958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Mr. David Thompson',
    position: 'Head of Secondary Education',
    bio: 'Mr. Thompson brings innovation to our secondary curriculum, preparing students for university and beyond.',
    image: 'https://images.pexels.com/photos/8422140/pexels-photo-8422140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
]
</script>

<template>
  <div class="about">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title slide-up">About Orange Academy</h1>
        <div class="breadcrumbs slide-up">
          <router-link to="/">Home</router-link> <span>/</span> <span>About Us</span>
        </div>
      </div>
      <div class="page-header-overlay"></div>
    </section>
    
    <section class="about-intro section">
      <div class="container">
        <div class="about-content grid grid-2">
          <div class="about-text slide-up">
            <h2>Our Story</h2>
            <p>Founded in 1995, Orange Academy has been a beacon of educational excellence for over three decades. What began as a small primary school with just 50 students has grown into a comprehensive educational institution serving over 2,500 students across primary and secondary levels.</p>
            <p>Our journey has been marked by a steadfast commitment to academic rigor, character development, and fostering a love for lifelong learning in every student who walks through our doors.</p>
            <router-link to="/contact" class="btn btn-primary">Get in Touch</router-link>
          </div>
          <div class="about-image slide-up">
            <img src="https://images.pexels.com/photos/8617631/pexels-photo-8617631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="School building" />
          </div>
        </div>
      </div>
    </section>
    
    <section class="mission-vision section bg-light">
      <div class="container">
        <div class="mission-vision-wrapper grid grid-2">
          <div class="mission-card card slide-up">
            <div class="card-header bg-primary">
              <h3 class="text-white">Our Mission</h3>
            </div>
            <div class="card-body">
              <p>To provide a nurturing and inclusive learning environment that inspires academic excellence, creative thinking, and personal growth, preparing students to become responsible global citizens who contribute positively to society.</p>
            </div>
          </div>
          
          <div class="vision-card card slide-up">
            <div class="card-header bg-secondary">
              <h3 class="text-white">Our Vision</h3>
            </div>
            <div class="card-body">
              <p>To be a leading educational institution recognized for developing well-rounded individuals who excel academically, demonstrate strong character, embrace diversity, and are prepared to meet the challenges of a rapidly changing world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid grid grid-4">
          <div v-for="(stat, index) in stats" :key="index" class="stat-item slide-up">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="values-section section">
      <div class="container">
        <h2 class="section-title text-center slide-up">Our Core Values</h2>
        <div class="values-grid grid grid-3">
          <div class="value-card card slide-up">
            <div class="value-icon">E</div>
            <h3>Excellence</h3>
            <p>We strive for excellence in all aspects of education, pushing ourselves and our students to achieve their highest potential.</p>
          </div>
          
          <div class="value-card card slide-up">
            <div class="value-icon">I</div>
            <h3>Integrity</h3>
            <p>We uphold the highest standards of ethics, honesty, and accountability in all our interactions and decisions.</p>
          </div>
          
          <div class="value-card card slide-up">
            <div class="value-icon">R</div>
            <h3>Respect</h3>
            <p>We foster an environment of mutual respect, recognizing and celebrating the uniqueness and dignity of each individual.</p>
          </div>
          
          <div class="value-card card slide-up">
            <div class="value-icon">I</div>
            <h3>Innovation</h3>
            <p>We embrace innovative teaching methods and technologies to enhance learning and prepare students for the future.</p>
          </div>
          
          <div class="value-card card slide-up">
            <div class="value-icon">C</div>
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork and partnership between students, teachers, parents, and the community.</p>
          </div>
          
          <div class="value-card card slide-up">
            <div class="value-icon">S</div>
            <h3>Service</h3>
            <p>We encourage a spirit of service and commitment to making a positive difference in the lives of others.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="team-section section bg-light">
      <div class="container">
        <h2 class="section-title text-center slide-up">Our Leadership Team</h2>
        <div class="team-grid grid grid-4">
          <div v-for="member in team" :key="member.name" class="team-card card slide-up">
            <div class="team-image">
              <img :src="member.image" :alt="member.name" />
            </div>
            <div class="card-body">
              <h3>{{ member.name }}</h3>
              <div class="team-position">{{ member.position }}</div>
              <p>{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  height: 300px;
  background-image: url('https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg');
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

.about-content {
  align-items: center;
}

.about-text h2 {
  margin-bottom: var(--space-4);
  color: var(--color-primary);
}

.about-text p {
  margin-bottom: var(--space-3);
  line-height: 1.6;
}

.about-text .btn {
  margin-top: var(--space-3);
}

.about-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.about-image:hover img {
  transform: scale(1.05);
}

.mission-vision-wrapper {
  gap: var(--space-5);
}

.mission-card, .vision-card {
  height: 100%;
}

.card-header {
  padding: var(--space-4);
}

.card-header h3 {
  margin: 0;
}

.stats-section {
  background-color: var(--color-primary);
  color: white;
  padding: var(--space-8) 0;
}

.stat-item {
  text-align: center;
  padding: var(--space-4);
}

.stat-value {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--space-2);
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

.value-card {
  text-align: center;
  padding: var(--space-4);
}

.value-icon {
  width: 70px;
  height: 70px;
  line-height: 70px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 auto var(--space-4);
}

.value-card h3 {
  color: var(--color-primary-dark);
  margin-bottom: var(--space-3);
}

.team-image {
  height: 250px;
  overflow: hidden;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-card:hover .team-image img {
  transform: scale(1.05);
}

.team-position {
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: var(--space-3);
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column-reverse;
  }
  
  .about-image {
    margin-bottom: var(--space-5);
  }
  
  .stat-value {
    font-size: 2.5rem;
  }
}
</style>