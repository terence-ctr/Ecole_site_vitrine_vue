<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    
    <div class="contact-container">
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you. Please feel free to reach out with any questions, feedback, or inquiries.</p>
        
        <div class="info-item">
          <div class="icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div class="details">
            <h3>Address</h3>
            <p>123 School Avenue, Education City<br>State, Country, 12345</p>
          </div>
        </div>
        
        <div class="info-item">
          <div class="icon">
            <i class="fas fa-phone"></i>
          </div>
          <div class="details">
            <h3>Phone</h3>
            <p>Main Office: (123) 456-7890<br>Admissions: (123) 456-7891</p>
          </div>
        </div>
        
        <div class="info-item">
          <div class="icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="details">
            <h3>Email</h3>
            <p>info@schoolname.edu<br>admissions@schoolname.edu</p>
          </div>
        </div>
        
        <div class="info-item">
          <div class="icon">
            <i class="fas fa-clock"></i>
          </div>
          <div class="details">
            <h3>Office Hours</h3>
            <p>Monday - Friday: 8:00 AM - 4:30 PM<br>Saturday: 9:00 AM - 12:00 PM</p>
          </div>
        </div>
        
        <div class="social-media">
          <h3>Connect With Us</h3>
          <div class="social-icons">
            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      
      <div class="contact-form">
        <h2>Send Us a Message</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              :class="{ 'error': errors.name }"
              required
            >
            <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
          </div>
          
          <div class="form-group">
            <label for="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              :class="{ 'error': errors.email }"
              required
            >
            <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
          </div>
          
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone"
              :class="{ 'error': errors.phone }"
            >
            <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
          </div>
          
          <div class="form-group">
            <label for="subject">Subject</label>
            <select 
              id="subject" 
              v-model="form.subject"
              :class="{ 'error': errors.subject }"
              required
            >
              <option value="" disabled selected>Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Admissions">Admissions</option>
              <option value="Academics">Academics</option>
              <option value="Athletics">Athletics</option>
              <option value="Events">Events</option>
              <option value="Other">Other</option>
            </select>
            <span class="error-message" v-if="errors.subject">{{ errors.subject }}</span>
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              v-model="form.message"
              :class="{ 'error': errors.message }"
              required
            ></textarea>
            <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
          </div>
          
          <div class="form-group checkbox-group">
            <input 
              type="checkbox" 
              id="consent" 
              v-model="form.consent"
              :class="{ 'error': errors.consent }"
              required
            >
            <label for="consent">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
            <span class="error-message" v-if="errors.consent">{{ errors.consent }}</span>
          </div>
          
          <button type="submit" :disabled="submitting">
            {{ submitting ? 'Sending...' : 'Send Message' }}
          </button>
          
          <div class="form-success" v-if="formSubmitted">
            Thank you for your message! We will get back to you shortly.
          </div>
        </form>
      </div>
    </div>
    
    <div class="map-container">
      <h2>Find Us</h2>
      <div class="map">
        <!-- In a real application, you would integrate Google Maps or another map service here -->
        <img src="https://via.placeholder.com/1200x400?text=School+Location+Map" alt="School Location Map">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'ContactView',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: false
    })
    
    const errors = reactive({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: ''
    })
    
    const submitting = ref(false)
    const formSubmitted = ref(false)
    
    const validateEmail = (email: string): boolean => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
    
    const validatePhone = (phone: string): boolean => {
      // Basic validation - in a real app you might want more sophisticated validation
      return phone === '' || phone.length >= 10
    }
    
    const validateForm = (): boolean => {
      let isValid = true
      
      // Reset errors
      Object.keys(errors).forEach(key => {
        errors[key as keyof typeof errors] = ''
      })
      
      if (!form.name.trim()) {
        errors.name = 'Name is required'
        isValid = false
      }
      
      if (!form.email.trim()) {
        errors.email = 'Email is required'
        isValid = false
      } else if (!validateEmail(form.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
      }
      
      if (form.phone && !validatePhone(form.phone)) {
        errors.phone = 'Please enter a valid phone number'
        isValid = false
      }
      
      if (!form.subject) {
        errors.subject = 'Please select a subject'
        isValid = false
      }
      
      if (!form.message.trim()) {
        errors.message = 'Message is required'
        isValid = false
      }
      
      if (!form.consent) {
        errors.consent = 'You must consent to submit the form'
        isValid = false
      }
      
      return isValid
    }
    
    const submitForm = async () => {
      if (!validateForm()) {
        return
      }
      
      submitting.value = true
      
      try {
        // In a real application, you would send the form data to your backend here
        // For demonstration purposes, we'll simulate an API call with a timeout
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Reset form after successful submission
        Object.keys(form).forEach(key => {
          if (key === 'consent') {
            form[key as keyof typeof form] = false
          } else {
            form[key as keyof typeof form] = ''
          }
        })
        
        formSubmitted.value = true
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          formSubmitted.value = false
        }, 5000)
      } catch (error) {
        console.error('Error submitting form:', error)
        // In a real app, you would handle the error appropriately
      } finally {
        submitting.value = false
      }
    }
    
    return {
      form,
      errors,
      submitting,
      formSubmitted,
      submitForm
    }
  }
})
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

h2 {
  color: #3498db;
  margin-bottom: 1.5rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.contact-info, .contact-form {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Contact Info Styles */
.info-item {
  display: flex;
  margin-bottom: 1.5rem;
}

.icon {
  width: 50px;
  height: 50px;
  background-color: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #3498db;
  font-size: 1.2rem;
}

.details h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.details p {
  margin: 0;
  color: #6c757d;
  line-height: 1.5;
}

.social-media {
  margin-top: 2rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  background-color: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3498db;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: #3498db;
  color: white;
}

/* Form Styles */
.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #495057;
  font-weight: 500;
}

input, select, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus, select:focus, textarea:focus {
  border-color: #3498db;
  outline: none;
}

input.error, select.error, textarea.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  display: block;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
}

.checkbox-group input {
  width: auto;
  margin-right: 0.5rem;
  margin-top: 0.25rem;
}

.checkbox-group label {
  margin-bottom: 0;
  font-weight: normal;
  font-size: 0.9rem;
  color: #6c757d;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

button:hover {
  background-color: #2980b9;
}

button:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

.form-success {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 4px;
  text-align: center;
}

/* Map Styles */
.map-container {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.map {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
}

.map img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .contact-page {
    padding: 1rem;
  }
  
  .contact-info, .contact-form, .map-container {
    padding: 1.5rem;
  }
}
</style>
