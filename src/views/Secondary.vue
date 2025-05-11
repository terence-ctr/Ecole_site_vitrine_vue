<script setup lang="ts">
const curriculum = [
  {
    subject: 'Language Arts',
    description: 'Advanced reading, writing, and critical analysis of literature, developing effective communication skills for academic and professional success.'
  },
  {
    subject: 'Mathematics',
    description: 'From algebra and geometry to calculus, students build advanced mathematical skills with real-world applications and problem-solving strategies.'
  },
  {
    subject: 'Sciences',
    description: 'Biology, chemistry, and physics with laboratory experiences that develop scientific inquiry, analysis, and research capabilities.'
  },
  {
    subject: 'History & Social Sciences',
    description: 'Exploring world history, geography, economics, and current events to understand societal dynamics and global interconnections.'
  },
  {
    subject: 'Foreign Languages',
    description: 'Options including French, Spanish, and Mandarin Chinese, developing linguistic skills and cultural understanding in our global society.'
  },
  {
    subject: 'Technology & Computer Science',
    description: 'Programming, digital literacy, and understanding of emerging technologies, preparing students for the digital future.'
  },
  {
    subject: 'Arts & Music',
    description: 'Opportunities to develop talents in visual arts, music, drama, and other creative disciplines for well-rounded education.'
  },
  {
    subject: 'Physical Education & Health',
    description: 'Promoting physical fitness, team sports, and healthy lifestyle choices for lifelong wellbeing.'
  }
]

const programs = [
  {
    title: 'Advanced Placement (AP) Courses',
    description: 'College-level courses that challenge high-achieving students and can earn college credits.',
    image: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Career Exploration Program',
    description: 'Internships, job shadowing, and career guidance to help students discover potential career paths.',
    image: 'https://images.pexels.com/photos/5905919/pexels-photo-5905919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Model United Nations',
    description: 'Students develop leadership, public speaking, and diplomatic skills through simulated UN conferences.',
    image: 'https://images.pexels.com/photos/8422579/pexels-photo-8422579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
]
</script>

<template>
  <div class="secondary-school">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title slide-up">Secondary School</h1>
        <div class="breadcrumbs slide-up">
          <router-link to="/">Home</router-link> <span>/</span> <span>Secondary School</span>
        </div>
      </div>
      <div class="page-header-overlay"></div>
    </section>
    
    <section class="secondary-intro section">
      <div class="container">
        <div class="grid grid-2">
          <div class="intro-image slide-up">
            <img src="https://images.pexels.com/photos/5212350/pexels-photo-5212350.jpeg" alt="Secondary classroom" />
          </div>
          <div class="intro-content slide-up">
            <h2>Preparing Future Leaders</h2>
            <p>Our Secondary School program builds on the foundation established in the primary years, challenging students to excel academically while developing the character and skills needed for success in university and beyond.</p>
            <p>Through rigorous academics, diverse extracurricular opportunities, and personalized guidance, we prepare students not just for college admission, but for meaningful contributions to society as informed, ethical, and capable adults.</p>
            <div class="intro-features">
              <div class="feature">
                <div class="feature-icon">✓</div>
                <div>Challenging academic curriculum with honors and advanced courses</div>
              </div>
              <div class="feature">
                <div class="feature-icon">✓</div>
                <div>College and career counseling throughout secondary years</div>
              </div>
              <div class="feature">
                <div class="feature-icon">✓</div>
                <div>Comprehensive extracurricular opportunities</div>
              </div>
              <div class="feature">
                <div class="feature-icon">✓</div>
                <div>Leadership development and community service initiatives</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="curriculum-section section bg-light">
      <div class="container">
        <h2 class="section-title text-center slide-up">Secondary Curriculum</h2>
        <p class="section-subtitle text-center slide-up">A comprehensive program designed to challenge students and prepare them for university and beyond</p>
        
        <div class="curriculum-grid grid grid-2">
          <div v-for="subject in curriculum" :key="subject.subject" class="curriculum-card card slide-up">
            <h3 class="subject-title">{{ subject.subject }}</h3>
            <p>{{ subject.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="outcomes-section section">
      <div class="container">
        <h2 class="section-title text-center slide-up">Student Outcomes</h2>
        <p class="section-subtitle text-center slide-up">Our secondary education builds the foundation for future success</p>
        
        <div class="outcomes-stats grid grid-3">
          <div class="outcome-stat slide-up">
            <div class="stat-value">98%</div>
            <div class="stat-label">University Acceptance Rate</div>
          </div>
          <div class="outcome-stat slide-up">
            <div class="stat-value">85%</div>
            <div class="stat-label">Graduates Attending Top-Tier Universities</div>
          </div>
          <div class="outcome-stat slide-up">
            <div class="stat-value">$2.5M+</div>
            <div class="stat-label">Scholarship Funds Awarded Annually</div>
          </div>
        </div>
        
        <div class="university-logos slide-up">
          <div class="logo-text">Our graduates attend prestigious universities worldwide</div>
        </div>
      </div>
    </section>
    
    <section class="programs-section section bg-light">
      <div class="container">
        <h2 class="section-title text-center slide-up">Special Programs</h2>
        <p class="section-subtitle text-center slide-up">Enriching experiences that enhance the secondary education journey</p>
        
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
    
    <section class="extracurricular-section section">
      <div class="container">
        <div class="grid grid-2">
          <div class="extracurricular-content slide-up">
            <h2>Beyond the Classroom</h2>
            <p>At Orange Academy, we believe that education extends beyond classroom walls. Our diverse extracurricular activities allow students to discover passions, develop skills, and build character in different contexts.</p>
            
            <div class="activities-grid grid grid-2">
              <div class="activity-category">
                <h3>Athletics</h3>
                <ul>
                  <li>Soccer</li>
                  <li>Basketball</li>
                  <li>Volleyball</li>
                  <li>Tennis</li>
                  <li>Track & Field</li>
                  <li>Swimming</li>
                </ul>
              </div>
              <div class="activity-category">
                <h3>Arts</h3>
                <ul>
                  <li>Orchestra</li>
                  <li>Choir</li>
                  <li>Theater</li>
                  <li>Visual Arts Club</li>
                  <li>Photography</li>
                  <li>Creative Writing</li>
                </ul>
              </div>
              <div class="activity-category">
                <h3>Clubs</h3>
                <ul>
                  <li>Debate Team</li>
                  <li>Robotics Club</li>
                  <li>Environmental Club</li>
                  <li>Language Exchange</li>
                  <li>Chess Club</li>
                  <li>Student Government</li>
                </ul>
              </div>
              <div class="activity-category">
                <h3>Community</h3>
                <ul>
                  <li>Service Learning</li>
                  <li>Peer Tutoring</li>
                  <li>Mentorship Programs</li>
                  <li>Community Outreach</li>
                  <li>International Partnerships</li>
                  <li>Leadership Development</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="extracurricular-image slide-up">
            <div class="image-grid">
              <img src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg" alt="Sports" />
              <img src="https://images.pexels.com/photos/4968631/pexels-photo-4968631.jpeg" alt="Arts" />
              <img src="https://images.pexels.com/photos/8847465/pexels-photo-8847465.jpeg" alt="Clubs" />
              <img src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" alt="Community" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="cta-section">
      <div class="container">
        <div class="cta-wrapper slide-up">
          <h2>Prepare Your Child for Future Success</h2>
          <p>Give your child the advantage of a comprehensive secondary education that prepares them for university admission and lifelong achievement.</p>
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
  background-image: url('https://images.pexels.com/photos/8617865/pexels-photo-8617865.jpeg');
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
  color: var(--color-secondary);
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
  background-color: var(--color-secondary);
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

.outcomes-stats {
  margin: var(--space-6) 0;
}

.outcome-stat {
  text-align: center;
  padding: var(--space-4);
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.stat-label {
  font-size: 1.1rem;
  color: var(--color-neutral-700);
}

.university-logos {
  text-align: center;
  margin-top: var(--space-6);
}

.logo-text {
  font-size: 1.2rem;
  color: var(--color-neutral-700);
  font-style: italic;
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

.extracurricular-content h2 {
  color: var(--color-secondary);
  margin-bottom: var(--space-4);
}

.extracurricular-content p {
  margin-bottom: var(--space-5);
  line-height: 1.6;
}

.activities-grid {
  gap: var(--space-4);
}

.activity-category h3 {
  color: var(--color-primary);
  margin-bottom: var(--space-3);
  font-size: 1.3rem;
}

.activity-category ul {
  list-style-type: none;
  padding: 0;
}

.activity-category li {
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--color-neutral-200);
}

.activity-category li:last-child {
  border-bottom: none;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--space-3);
}

.image-grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.image-grid img:hover {
  transform: scale(1.05);
}

.cta-section {
  background-color: var(--color-secondary);
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
  
  .image-grid {
    grid-template-columns: 1fr;
  }
}
</style>