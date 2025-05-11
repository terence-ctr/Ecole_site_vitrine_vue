<template>
  <div class="news-page">
    <h1>School News & Updates</h1>
    
    <div class="news-filters">
      <button 
        v-for="category in categories" 
        :key="category"
        :class="{ active: activeCategory === category }"
        @click="filterByCategory(category)"
      >
        {{ category }}
      </button>
    </div>
    
    <div class="news-grid">
      <div 
        v-for="(article, index) in filteredArticles" 
        :key="index"
        class="news-card"
      >
        <div class="news-image">
          <img :src="article.image" :alt="article.title">
          <div class="news-category">{{ article.category }}</div>
        </div>
        <div class="news-content">
          <span class="news-date">{{ article.date }}</span>
          <h2>{{ article.title }}</h2>
          <p class="news-excerpt">{{ article.excerpt }}</p>
          <button class="read-more" @click="openArticle(index)">Read More</button>
        </div>
      </div>
    </div>
    
    <!-- Article Modal -->
    <div class="article-modal" v-if="selectedArticle">
      <div class="modal-content">
        <button class="close-button" @click="closeArticle">&times;</button>
        <div class="modal-header">
          <img :src="selectedArticle.image" :alt="selectedArticle.title">
          <div class="modal-category">{{ selectedArticle.category }}</div>
        </div>
        <div class="modal-body">
          <span class="modal-date">{{ selectedArticle.date }}</span>
          <h2>{{ selectedArticle.title }}</h2>
          <div class="article-content" v-html="selectedArticle.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'NewsView',
  setup() {
    // Sample news data - in a real app, this would come from an API
    const articles = ref([
      {
        title: 'Annual Science Fair Winners Announced',
        excerpt: 'Congratulations to all participants in this year\'s Science Fair. The projects displayed exceptional creativity and scientific rigor.',
        content: `<p>We are proud to announce the winners of our Annual Science Fair that took place last week. Students from all grades participated with innovative projects spanning various scientific disciplines.</p>
        <p>The grand prize went to Sarah Johnson from Grade 10 for her project on "Sustainable Microplastic Filtration Systems." The judges were particularly impressed by the practical applications of her research and the working prototype she developed.</p>
        <p>Other notable winners include:</p>
        <ul>
          <li>James Wilson (Grade 8) - "Solar-Powered Water Purification"</li>
          <li>Aisha Patel (Grade 9) - "Effects of Music on Plant Growth"</li>
          <li>Michael Chang (Grade 7) - "Biodegradable Packaging Alternatives"</li>
        </ul>
        <p>All winners will receive certificates and science equipment prizes during the upcoming school assembly. Their projects will also be displayed in the main hall for the next two weeks.</p>
        <p>We thank all participants for their hard work and dedication to scientific inquiry. The standard of projects continues to rise each year, reflecting our school's commitment to excellence in STEM education.</p>`,
        image: 'https://via.placeholder.com/600x400?text=Science+Fair',
        date: 'May 5, 2025',
        category: 'Academic'
      },
      {
        title: 'School Basketball Team Reaches Regional Finals',
        excerpt: 'Our senior basketball team has qualified for the regional finals after an impressive victory against Westside Academy.',
        content: `<p>In an exciting match last Friday, our senior basketball team defeated Westside Academy 78-65 to secure their place in the regional finals.</p>
        <p>Team captain David Rodriguez led the scoring with 24 points, while newcomer Marcus Lee contributed an impressive 18 points and 12 rebounds. Coach Williams praised the team's defensive effort, which held Westside's star player to just 14 points.</p>
        <p>"The team has shown tremendous growth throughout the season," said Coach Williams. "Their dedication during practice and their ability to execute our game plan under pressure has been outstanding."</p>
        <p>The regional finals will take place at Central Stadium on May 20th. We encourage all students and parents to attend and support our team. The school will arrange transportation for students who wish to attend.</p>
        <p>This is the first time in five years that our basketball team has reached the regional finals, marking a significant achievement for our athletic program.</p>`,
        image: 'https://via.placeholder.com/600x400?text=Basketball+Team',
        date: 'May 3, 2025',
        category: 'Sports'
      },
      {
        title: 'New Library Wing Opening Next Month',
        excerpt: 'We are excited to announce that the new library wing, featuring advanced digital resources and collaborative study spaces, will open on June 15th.',
        content: `<p>After months of construction and preparation, we are thrilled to announce that our new library wing will officially open on June 15th, 2025.</p>
        <p>The new wing features:</p>
        <ul>
          <li>An expanded collection of over 5,000 new books</li>
          <li>Digital research stations with access to academic databases</li>
          <li>Collaborative study pods with interactive screens</li>
          <li>A dedicated multimedia section with audio-visual resources</li>
          <li>A quiet reading lounge with comfortable seating</li>
        </ul>
        <p>The library expansion is part of our ongoing commitment to providing students with the best resources for academic excellence. The project was made possible through generous donations from our parent association and alumni network.</p>
        <p>An opening ceremony will be held on June 15th at 10:00 AM, with the Mayor and other dignitaries in attendance. All students and parents are invited to join us for this momentous occasion.</p>
        <p>Library orientation sessions will be scheduled for all classes during the first week after the opening to familiarize students with the new resources and facilities.</p>`,
        image: 'https://via.placeholder.com/600x400?text=New+Library',
        date: 'April 28, 2025',
        category: 'Facilities'
      },
      {
        title: 'International Cultural Day Celebration',
        excerpt: 'Join us on May 15th for our annual International Cultural Day, featuring performances, food, and exhibitions representing our diverse school community.',
        content: `<p>We are excited to invite all students, parents, and community members to our annual International Cultural Day celebration on May 15th, 2025, from 10:00 AM to 4:00 PM.</p>
        <p>This beloved tradition celebrates the rich cultural diversity of our school community. This year's event will feature:</p>
        <ul>
          <li>Cultural performances including traditional dances, music, and theatrical presentations</li>
          <li>International food stalls offering cuisines from around the world</li>
          <li>Art and craft exhibitions showcasing traditional and contemporary cultural expressions</li>
          <li>Interactive workshops where visitors can learn traditional crafts and cultural practices</li>
          <li>A fashion show featuring traditional attire from different countries</li>
        </ul>
        <p>Students have been preparing for this event for several weeks, working with teachers and parent volunteers to create authentic and educational presentations.</p>
        <p>We encourage all attendees to participate in our "Cultural Passport" activity, where you can collect stamps from different cultural stations and learn interesting facts about various countries and traditions.</p>
        <p>This event is open to the public, so feel free to invite friends and family members. There is no admission fee, though donations to support our school's cultural exchange program are welcome.</p>`,
        image: 'https://via.placeholder.com/600x400?text=Cultural+Day',
        date: 'April 20, 2025',
        category: 'Events'
      },
      {
        title: 'Environmental Initiative: Campus Goes Green',
        excerpt: 'Our school has launched a comprehensive sustainability program aimed at reducing our carbon footprint and promoting environmental awareness.',
        content: `<p>We are proud to announce the launch of our "Campus Goes Green" initiative, a comprehensive sustainability program designed to reduce our environmental impact and foster ecological awareness among our students.</p>
        <p>Key components of the initiative include:</p>
        <ul>
          <li>Installation of solar panels on the main building roof, which will provide up to 30% of our energy needs</li>
          <li>Implementation of a school-wide recycling and composting system</li>
          <li>Replacement of single-use plastics in the cafeteria with biodegradable alternatives</li>
          <li>Creation of a student-managed vegetable garden that will supply produce to our cafeteria</li>
          <li>Integration of environmental education across the curriculum</li>
        </ul>
        <p>The initiative was developed by our newly formed Sustainability Committee, comprising teachers, students, and parents, with input from environmental experts.</p>
        <p>"This is more than just an environmental project—it's an educational opportunity," says Ms. Garcia, the committee chairperson. "We want our students to understand the importance of sustainability and develop habits that they will carry throughout their lives."</p>
        <p>Students interested in joining the Sustainability Club can sign up with Ms. Garcia. The club will meet every Wednesday after school and will play a key role in implementing and monitoring the initiative's progress.</p>`,
        image: 'https://via.placeholder.com/600x400?text=Green+Campus',
        date: 'April 15, 2025',
        category: 'Environment'
      },
      {
        title: 'Alumni Spotlight: Former Student Wins National Award',
        excerpt: 'We are proud to announce that our alumnus, Dr. James Chen (Class of 2015), has received the National Science Foundation\'s Young Researcher Award.',
        content: `<p>It is with great pride that we announce that Dr. James Chen, who graduated from our school in 2015, has been awarded the prestigious National Science Foundation's Young Researcher Award for his groundbreaking work in renewable energy technology.</p>
        <p>After graduating from our school, James went on to earn his Bachelor's degree in Chemical Engineering from MIT and his Ph.D. from Stanford University. His current research focuses on developing more efficient solar cell technology that could significantly reduce the cost of solar energy.</p>
        <p>"My interest in science was first sparked in Mr. Peterson's chemistry class," says Dr. Chen. "The hands-on experiments and his enthusiasm for scientific discovery showed me how exciting and important scientific research could be."</p>
        <p>Dr. Chen will be visiting our school next month to give a special presentation to our science students about his research and career path. This is an excellent opportunity for our current students to learn from and be inspired by one of our distinguished alumni.</p>
        <p>We continue to take pride in the achievements of all our alumni and are always eager to share their success stories. If you are an alumnus with news to share, please contact our Alumni Relations Office.</p>`,
        image: 'https://via.placeholder.com/600x400?text=Alumni+Award',
        date: 'April 10, 2025',
        category: 'Alumni'
      }
    ])

    // Get unique categories
    const categories = computed(() => {
      const allCategories = articles.value.map(article => article.category)
      return ['All', ...new Set(allCategories)]
    })

    const activeCategory = ref('All')
    const selectedArticle = ref(null)

    const filterByCategory = (category: string) => {
      activeCategory.value = category
    }

    const filteredArticles = computed(() => {
      if (activeCategory.value === 'All') {
        return articles.value
      }
      return articles.value.filter(article => article.category === activeCategory.value)
    })

    const openArticle = (index: number) => {
      selectedArticle.value = filteredArticles.value[index]
    }

    const closeArticle = () => {
      selectedArticle.value = null
    }

    return {
      articles,
      categories,
      activeCategory,
      filteredArticles,
      selectedArticle,
      filterByCategory,
      openArticle,
      closeArticle
    }
  }
})
</script>

<style scoped>
.news-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.news-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.news-filters button {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  color: #495057;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.news-filters button.active {
  background-color: #3498db;
  color: white;
  border-color: #3498db;
}

.news-filters button:hover {
  background-color: #e9ecef;
}

.news-filters button.active:hover {
  background-color: #2980b9;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.news-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background-color: white;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.news-image {
  position: relative;
  height: 200px;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-category {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #3498db;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.news-content {
  padding: 1.5rem;
}

.news-date {
  color: #6c757d;
  font-size: 0.9rem;
}

.news-content h2 {
  margin: 0.5rem 0 1rem;
  color: #2c3e50;
  font-size: 1.3rem;
}

.news-excerpt {
  color: #495057;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.read-more {
  background-color: transparent;
  color: #3498db;
  border: 1px solid #3498db;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.read-more:hover {
  background-color: #3498db;
  color: white;
}

/* Modal styles */
.article-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}

.modal-header {
  position: relative;
}

.modal-header img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.modal-category {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #3498db;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.modal-body {
  padding: 2rem;
}

.modal-date {
  color: #6c757d;
  font-size: 0.9rem;
}

.modal-body h2 {
  margin: 0.5rem 0 1.5rem;
  color: #2c3e50;
  font-size: 1.8rem;
}

.article-content {
  color: #495057;
  line-height: 1.7;
}

.article-content p {
  margin-bottom: 1rem;
}

.article-content ul {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-header img {
    height: 200px;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
}
</style>
