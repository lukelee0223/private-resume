<template>
  <div class="home-container">
    <h1 class="fade-in">WELCOME HERE</h1>
    <p class="fade-in delay">
      The Simple Resume Site by
      <span class="gradient-text">Luke the ghostwriter</span>
    </p>
    <router-link to="/about" class="cta-button">ENTER</router-link>
  </div>
</template>


<script setup>
</script>

<style scoped>
/* ✅ 設計首頁容器 */
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  color: white;
  padding-top: 80px; /* ✅ 增加頂部間距，避免被選單擋住 */
}

.gradient-text {
  background: linear-gradient(90deg, #b37ceb, #8c68ad, #ba8be4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* ✅ 漸入動畫效果 */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out forwards;
}

.delay {
  animation-delay: 0.5s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ✅ CTA 按鈕設計 */
.cta-button {
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #822fd4, #7137a7,  #7137a7,#9640e0);
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
}

.cta-button:hover {
  transform: scale(1.05);
  filter: brightness(1.2);
}
</style>
