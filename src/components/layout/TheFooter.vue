<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top grid grid-4">
        <div class="footer-col">
          <h3>Orange Academy</h3>
          <p>Excellence in education since 1995. Nurturing young minds to become future leaders through quality education and holistic development.</p>
        </div>
        
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/primary">Primary School</router-link></li>
            <li><router-link to="/secondary">Secondary School</router-link></li>
            <li><router-link to="/admission">Admission</router-link></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Programs</h4>
          <ul class="footer-links">
            <li><router-link to="/primary">Primary Curriculum</router-link></li>
            <li><router-link to="/secondary">Secondary Curriculum</router-link></li>
            <li><router-link to="/gallery">Sports & Activities</router-link></li>
            <li><router-link to="/about">School Calendar</router-link></li>
            <li><router-link to="/news">School News</router-link></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Contact Us</h4>
          <address class="contact-info">
            <p>123 Education Street<br>Academic District, 12345</p>
            <p>Email: <a href="mailto:info@orangeacademy.edu">info@orangeacademy.edu</a></p>
            <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
          </address>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">&copy; {{ currentYear }} Orange Academy. All Rights Reserved.</p>
        <div class="social-links">
          <a href="#" aria-label="Facebook"><span class="social-icon">Facebook</span></a>
          <a href="#" aria-label="Twitter"><span class="social-icon">Twitter</span></a>
          <a href="#" aria-label="Instagram"><span class="social-icon">Instagram</span></a>
          <a href="#" aria-label="LinkedIn"><span class="social-icon">LinkedIn</span></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-secondary-dark);
  color: white;
  padding: var(--space-8) 0 var(--space-4);
}

.footer-top {
  margin-bottom: var(--space-6);
}

.footer-col h3, .footer-col h4 {
  color: white;
  margin-bottom: var(--space-4);
  position: relative;
}

.footer-col h3::after, .footer-col h4::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--color-primary);
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: var(--space-2);
}

.footer-links a, .contact-info a {
  color: var(--color-neutral-300);
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block;
}

.footer-links a:hover, .contact-info a:hover {
  color: var(--color-primary);
  transform: translateX(5px);
}

.contact-info {
  font-style: normal;
  line-height: 1.6;
}

.contact-info p {
  margin-bottom: var(--space-2);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--space-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.copyright {
  color: var(--color-neutral-400);
  margin: 0;
}

.social-links {
  display: flex;
  gap: var(--space-3);
}

.social-links a {
  color: var(--color-neutral-300);
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--color-primary);
}

.social-icon {
  font-size: 0;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.social-links a:hover .social-icon {
  background-color: var(--color-primary);
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>