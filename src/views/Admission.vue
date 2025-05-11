<template>
  <div class="admission-page">
    <h1>Admission Information</h1>
    
    <div class="admission-content">
      <section class="admission-section">
        <h2>Admission Process</h2>
        <p>Welcome to our admission page. We are delighted that you are considering our school for your child's education. Our admission process is designed to be straightforward and supportive.</p>
        
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Application Submission</h3>
            <p>Complete and submit the online application form along with the required documents.</p>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <h3>Assessment</h3>
            <p>Students may be required to take an assessment test appropriate for their age and grade level.</p>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <h3>Interview</h3>
            <p>Selected candidates and their parents will be invited for an interview with our admissions team.</p>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <h3>Admission Decision</h3>
            <p>Admission decisions will be communicated within two weeks of the interview.</p>
          </div>
        </div>
      </section>
      
      <section class="admission-section">
        <h2>Required Documents</h2>
        <ul class="document-list">
          <li>Completed application form</li>
          <li>Birth certificate (original and photocopy)</li>
          <li>Previous academic records (last 2 years)</li>
          <li>Passport-sized photographs (4)</li>
          <li>Transfer certificate from previous school (if applicable)</li>
          <li>Medical record and immunization history</li>
        </ul>
      </section>
      
      <section class="admission-section">
        <h2>Fees and Financial Information</h2>
        <p>Our fee structure is designed to provide quality education at reasonable costs. The fee details for the current academic year are as follows:</p>
        
        <div class="fee-table">
          <table>
            <thead>
              <tr>
                <th>Grade Level</th>
                <th>Application Fee</th>
                <th>Annual Tuition</th>
                <th>Other Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pre-Primary</td>
                <td>$50</td>
                <td>$3,500</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Primary (Grades 1-5)</td>
                <td>$75</td>
                <td>$4,200</td>
                <td>$350</td>
              </tr>
              <tr>
                <td>Secondary (Grades 6-10)</td>
                <td>$100</td>
                <td>$5,500</td>
                <td>$450</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p class="fee-note">Note: A 5% discount is offered for full payment of annual fees. Sibling discounts are also available.</p>
      </section>
      
      <section class="admission-section">
        <h2>Contact Admissions Office</h2>
        <div class="contact-info">
          <p><strong>Email:</strong> admissions@schoolname.edu</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Office Hours:</strong> Monday to Friday, 8:00 AM - 4:00 PM</p>
        </div>
        
        <div class="cta-button">
          <button>Apply Now</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AdmissionView'
})
</script>

<style scoped>
.admission-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.admission-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.admission-section {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #3498db;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.step {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
}

.step-number {
  position: absolute;
  top: -15px;
  left: -15px;
  width: 40px;
  height: 40px;
  background-color: #3498db;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.document-list {
  list-style-type: none;
  padding-left: 0;
}

.document-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
  position: relative;
  padding-left: 1.5rem;
}

.document-list li:before {
  content: "✓";
  color: #3498db;
  position: absolute;
  left: 0;
}

.fee-table {
  overflow-x: auto;
  margin: 1.5rem 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

th {
  background-color: #e3f2fd;
  color: #2c3e50;
}

tr:nth-child(even) {
  background-color: #f8f9fa;
}

.fee-note {
  font-style: italic;
  color: #6c757d;
  margin-top: 1rem;
}

.contact-info {
  margin-bottom: 1.5rem;
}

.cta-button {
  text-align: center;
  margin-top: 1rem;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .process-steps {
    grid-template-columns: 1fr;
  }
  
  .admission-page {
    padding: 1rem;
  }
}
</style>
