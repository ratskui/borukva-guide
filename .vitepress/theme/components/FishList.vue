<script setup>
import {fishList} from "../../data/general";

</script>

<template>
    <div class="fishes-container">
      <div v-for="(fishes, index) in fishList" :key="index" class="fishes-section">
        <h3 class="fishes-section-title">{{ fishes.title }}</h3>
        <table>
          <tr v-for="(item, itemIndex) in fishes.items" :key="itemIndex">  <!-- tr for each row -->
            <td><span>{{ item.name }}</span></td>
            <td><img :src="item.image" :alt="item.name" class="fishes-item-img antialiasing-off"></td>
            <td><span>{{ item.description }}</span></td>
            <td><span>{{ item.craft }}</span></td>
          </tr>
        </table>
      </div>
    </div>
  </template>






<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.fishes-container {
  font-family: 'Roboto', sans-serif;
}

.fishes-section {
  margin-bottom: 1rem;
}

.fishes-section-title {
  color: var(--vp-c-brand-light);
  margin-bottom: 0.5rem;
  padding-bottom: 0.1rem;
}
.fishes-item-img {
  max-width: 32px;
  width: 32px;
  height: 32px;
}
/*
.fishes-item {
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

.fishes-item:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}



.fishes-item span {
  color: var(--vp-c-text-1);
  font-size: 1rem;
  font-weight: bold;
}
*/
</style>