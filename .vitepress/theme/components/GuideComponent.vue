<script setup>
import {sectionList} from "../../data/general";

</script>

<template>
  <div class="guide-container">
    <h1 class="guide-title">Гайди серверу</h1>
    <p class="guide-subtitle">Ці статті допоможуть вам ознайомитись з кастомним контентом серверу.</p>
    
    <div v-for="(section, index) in sectionList" :key="index" class="guide-section">
  <h2 class="guide-section-title">{{ section.title }}</h2>
  <div class="guide-grid">
    <div v-for="(item, itemIndex) in section.items" :key="itemIndex" class="guide-item">
      <a :href="item.link" class="guide-item-link" style="text-decoration: none;">
        <img :src="item.image" :alt="item.name" :class="['antialiasing-off', item.customClass || '']">
        <span>{{ item.name }}</span>
      </a>
    </div>
  </div>
</div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.guide-container {
  font-family: 'Roboto', sans-serif;
  background-color: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 2rem auto;
}

.guide-title {
  color: var(--vp-c-brand);
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.guide-subtitle {
  color: var(--vp-c-text-1);
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 3rem;
}

.guide-section {
  margin-bottom: 3rem;
}

.guide-section-title {
  color: var(--vp-c-brand-light);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--vp-c-brand-light);
  padding-bottom: 0.5rem;
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.guide-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--vp-c-bg-mute);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.guide-item:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.guide-item img {
  padding: 3px;
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid var(--vp-c-brand);
  transition: all 0.3s ease;
  
}

.guide-item span {
  color: var(--vp-c-text-1);
  font-size: 1rem;
  font-weight: bold;
}
.guide-img-cover {
  object-fit: cover !important;
}

</style>