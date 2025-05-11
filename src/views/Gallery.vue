<template>
  <div class="gallery-page">
    <h1>Our Gallery</h1>
    
    <div class="gallery-filters">
      <button 
        v-for="category in categories" 
        :key="category"
        :class="{ active: activeCategory === category }"
        @click="filterByCategory(category)"
      >
        {{ category }}
      </button>
    </div>
    
    <div class="gallery-grid">
      <div 
        v-for="(image, index) in filteredImages" 
        :key="index"
        class="gallery-item"
        @click="openLightbox(index)"
      >
        <img :src="image.src" :alt="image.alt">
        <div class="image-caption">
          <h3>{{ image.title }}</h3>
          <p>{{ image.description }}</p>
        </div>
      </div>
    </div>
    
    <!-- Lightbox -->
    <div class="lightbox" v-if="lightboxOpen">
      <div class="lightbox-content">
        <button class="close-button" @click="closeLightbox">&times;</button>
        <button class="nav-button prev" @click="prevImage">&lsaquo;</button>
        <img :src="currentImage.src" :alt="currentImage.alt">
        <button class="nav-button next" @click="nextImage">&rsaquo;</button>
        <div class="lightbox-caption">
          <h3>{{ currentImage.title }}</h3>
          <p>{{ currentImage.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'GalleryView',
  setup() {
    // Sample gallery data - in a real app, this might come from an API
    const images = ref([
      {
        src: 'https://via.placeholder.com/600x400?text=School+Building',
        alt: 'School Building',
        title: 'Our Main Campus',
        description: 'The main school building featuring modern architecture and facilities.',
        category: 'Campus'
      },
      {
        src: 'https://via.placeholder.com/600x400?text=Science+Lab',
        alt: 'Science Laboratory',
        title: 'Science Laboratory',
        description: 'State-of-the-art science lab where students conduct experiments.',
        category: 'Facilities'
      },
      {
        src: 'https://via.placeholder.com/600x400?text=Library',
        alt: 'School Library',
        title: 'Library',
        description: 'Our extensive library with thousands of books and digital resources.',
        category: 'Facilities'
      },
      {
        src: 'https://via.placeholder.com/600x400?text=Sports+Field',
        alt: 'Sports Field',
        title: 'Sports Field',
        description: 'Multi-purpose sports field for various athletic activities.',
        category: 'Sports'
      },
      {
        src: 'https://via.placeholder.com/600x400?text=Art+Class',
        alt: 'Art Class',
        title: 'Art Class',
        description: 'Students expressing creativity in our art studio.',
        category: 'Activities'
      },
      {
        src: 'https://via.placeholder.com/600x400?text=Music+Room',
        alt: 'Music Room',
        title: 'Music Room',
        description: 'Well-equipped music room for instrumental and vocal practice.',
        category: 'Facilities'
      },
      {
        src: 'https://via.placeholder.com/600x400?text=Computer+Lab',
        alt: 'Computer Lab',
        title: 'Computer Lab',
        description: 'Modern computer lab with the latest technology for digital learning.',
        category: 'Facilities'
      },
      {
        src: 'https://via.placeholder.com/600x400?text=Annual+Day',
        alt: 'Annual Day Celebration',
        title: 'Annual Day Celebration',
        description: 'Students performing during our annual day celebration.',
        category: 'Events'
      },
      {
        src: 'https://via.placeholder.com/600x400?text=Sports+Day',
        alt: 'Sports Day',
        title: 'Sports Day',
        description: 'Students participating in various sports competitions.',
        category: 'Sports'
      },
      {
        src: 'https://via.placeholder.com/600x400?text=Classroom',
        alt: 'Classroom',
        title: 'Modern Classroom',
        description: 'Spacious and well-lit classroom with interactive learning tools.',
        category: 'Facilities'
      },
      {
        src: 'https://via.placeholder.com/600x400?text=Cafeteria',
        alt: 'School Cafeteria',
        title: 'Cafeteria',
        description: 'Clean and spacious cafeteria serving nutritious meals.',
        category: 'Facilities'
      },
      {
        src: 'https://via.placeholder.com/600x400?text=Graduation',
        alt: 'Graduation Ceremony',
        title: 'Graduation Ceremony',
        description: 'Proud moment for our graduating students.',
        category: 'Events'
      }
    ])

    // Get unique categories
    const categories = computed(() => {
      const allCategories = images.value.map(img => img.category)
      return ['All', ...new Set(allCategories)]
    })

    const activeCategory = ref('All')
    const lightboxOpen = ref(false)
    const currentImageIndex = ref(0)

    const filterByCategory = (category: string) => {
      activeCategory.value = category
    }

    const filteredImages = computed(() => {
      if (activeCategory.value === 'All') {
        return images.value
      }
      return images.value.filter(img => img.category === activeCategory.value)
    })

    const openLightbox = (index: number) => {
      currentImageIndex.value = index
      lightboxOpen.value = true
    }

    const closeLightbox = () => {
      lightboxOpen.value = false
    }

    const currentImage = computed(() => {
      return filteredImages.value[currentImageIndex.value]
    })

    const nextImage = () => {
      if (currentImageIndex.value < filteredImages.value.length - 1) {
        currentImageIndex.value++
      } else {
        currentImageIndex.value = 0
      }
    }

    const prevImage = () => {
      if (currentImageIndex.value > 0) {
        currentImageIndex.value--
      } else {
        currentImageIndex.value = filteredImages.value.length - 1
      }
    }

    return {
      images,
      categories,
      activeCategory,
      filteredImages,
      lightboxOpen,
      currentImageIndex,
      currentImage,
      filterByCategory,
      openLightbox,
      closeLightbox,
      nextImage,
      prevImage
    }
  }
})
</script>

<style scoped>
.gallery-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.gallery-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.gallery-filters button {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  color: #495057;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-filters button.active {
  background-color: #3498db;
  color: white;
  border-color: #3498db;
}

.gallery-filters button:hover {
  background-color: #e9ecef;
}

.gallery-filters button.active:hover {
  background-color: #2980b9;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.image-caption {
  padding: 1rem;
  background-color: white;
}

.image-caption h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.image-caption p {
  margin: 0;
  color: #6c757d;
  font-size: 0.9rem;
}

/* Lightbox styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  margin: 0 auto;
}

.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.nav-button.prev {
  left: -60px;
}

.nav-button.next {
  right: -60px;
}

.lightbox-caption {
  color: white;
  text-align: center;
  margin-top: 1rem;
}

.lightbox-caption h3 {
  margin: 0 0 0.5rem 0;
}

.lightbox-caption p {
  margin: 0;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
  
  .nav-button.prev {
    left: -45px;
  }
  
  .nav-button.next {
    right: -45px;
  }
}

@media (max-width: 576px) {
  .gallery-page {
    padding: 1rem;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .nav-button.prev {
    left: 10px;
  }
  
  .nav-button.next {
    right: 10px;
  }
}
</style>
