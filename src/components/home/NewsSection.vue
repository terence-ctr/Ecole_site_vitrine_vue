<script setup lang="ts">
const newsItems = [
  {
    id: 1,
    title: 'Annual Science Fair Winners Announced',
    date: 'June 15, 2025',
    excerpt: 'Congratulations to all participants in this year\'s Science Fair. The creativity and innovation displayed were truly impressive.',
    image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'New Sports Facilities Opening Next Month',
    date: 'May 28, 2025',
    excerpt: 'We are excited to announce the grand opening of our new state-of-the-art sports complex, featuring an Olympic-sized swimming pool and modern gymnasium.',
    image: 'https://images.pexels.com/photos/4427545/pexels-photo-4427545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Students Excel in National Mathematics Competition',
    date: 'May 10, 2025',
    excerpt: 'Our students have achieved outstanding results in the National Mathematics Competition, with five receiving gold medals and eight receiving silver.',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
]
</script>

<template>
  <section class="news section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title slide-up">Latest News & Events</h2>
        <router-link to="/news" class="view-all-link slide-up">View All News</router-link>
      </div>
      
      <div class="news-grid grid grid-3">
        <div v-for="item in newsItems" :key="item.id" class="news-card card slide-up">
          <div class="news-image">
            <img :src="item.image" :alt="item.title" class="card-img" />
            <div class="news-date">{{ item.date }}</div>
          </div>
          <div class="card-body">
            <h3 class="news-title">{{ item.title }}</h3>
            <p class="news-excerpt">{{ item.excerpt }}</p>
            <router-link to="/news" class="read-more">Read More</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.news {
  background-color: var(--color-neutral-50);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-6);
  flex-wrap: wrap;
  gap: var(--space-3);
}

.view-all-link {
  background-color: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.view-all-link:hover {
  background-color: var(--color-primary);
  color: white;
}

.news-grid {
  margin-top: var(--space-3);
}

.news-image {
  position: relative;
  overflow: hidden;
}

.news-date {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.news-title {
  margin-top: var(--space-2);
  margin-bottom: var(--space-3);
  font-size: 1.25rem;
  color: var(--color-secondary-dark);
}

.news-excerpt {
  color: var(--color-neutral-700);
  margin-bottom: var(--space-3);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  display: inline-block;
  color: var(--color-primary);
  font-weight: 500;
  position: relative;
}

.read-more::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.read-more:hover::after {
  width: 100%;
}
</style>