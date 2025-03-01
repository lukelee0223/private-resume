<template>
  <header class="site-header" :class="{ 'scrolled': isScrolled }">
    <nav>
      <!-- ✅ LOGO - 左側顯示 (桌面版) -->
      <div class="logo">
        <img src="/images/logo.png" alt="Logo">
      </div>

      <!-- ✅ 選單 -->
      <ul :class="{ 'open': isMenuOpen }">
        <!-- ✅ RWD 下，Logo 也要出現在選單內 -->
        <li class="mobile-logo"><img src="/images/logo.png" alt="Logo"></li>
        <li>
          <router-link to="/" @click="closeMenu">
            <font-awesome-icon :icon="['fas', 'home']" class="menu-icon" />
            <span class="menu-text">首頁</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about" @click="closeMenu">
            <font-awesome-icon :icon="['fas', 'user']" class="menu-icon" />
            <span class="menu-text">自傳</span>
          </router-link>
        </li>
        <li>
          <router-link to="/portfolio" @click="closeMenu">
            <font-awesome-icon :icon="['fas', 'briefcase']" class="menu-icon" />
            <span class="menu-text">經歷</span>
          </router-link>
        </li>
        <li>
          <router-link to="/skill" @click="closeMenu">
            <font-awesome-icon :icon="['fab', 'microsoft']" class="menu-icon" />
            <span class="menu-text">技術</span>
          </router-link>
        </li>
        <li>
          <router-link to="/contact" @click="closeMenu">
            <font-awesome-icon :icon="['fas', 'envelope']" class="menu-icon" />
            <span class="menu-text">聯繫方式</span>
          </router-link>
        </li>
      </ul>

      <!-- ✅ RWD 漢堡選單按鈕 -->
      <button class="menu-toggle" @click="toggleMenu">
        ☰
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faMicrosoft, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'; // 這裡加上 Microsoft

// ✅ 加入 FontAwesome 圖示
library.add(faHome, faUser, faBriefcase, faEnvelope, faMicrosoft, faGoogle, faGithub);

// 控制選單展開/收合
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};

// 控制滾動時的固定效果
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* ✅ 修正導覽列對齊 */
.site-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(51, 51, 51, 0.7);
  padding: 10px 20px;
  transition: background 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ✅ 滾動時變深 */
.site-header.scrolled {
  background: rgba(0, 0, 0, 0.9);
}

/* ✅ LOGO 設定 */
.logo img {
  height: 50px;
  width: auto;
  max-width: 120px;
  filter: brightness(2);
}

/* ✅ 修正選單靠右 & 左移 40px */
nav {
  display: flex;
  align-items: center;
  width: 100%;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
  margin-left: auto;
  transform: translateX(-40px);
}

/* ✅ 選單項目 */
nav a {
  color: white;
  text-decoration: none;
  position: relative;
  transition: filter 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
}

/* ✅ 選單項目內的 FontAwesome 圖示 */
.menu-icon {
  font-size: 1.5rem;
  transition: opacity 0.3s ease-in-out;
}

/* ✅ 預設顯示圖示，隱藏文字 */
.menu-text {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

/* ✅ 滑鼠懸停時，顯示文字並隱藏圖示 */
nav a:hover .menu-text {
  opacity: 1;
  transform: translateY(0);
}

nav a:hover .menu-icon {
  opacity: 0;
}

/* ✅ 選單項目底線動畫 */
nav a::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -5px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #c7b4da, #7137a7, #ba8be4);
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}

nav a:hover {
  filter: brightness(1.5);
}

nav a:hover::after {
  width: 100%;
  left: 0;
}

/* ✅ 預設桌面版 `.mobile-logo` 隱藏 */
.mobile-logo {
  display: none;
}

/* ✅ RWD - 小螢幕適應 */
@media (max-width: 768px) {
  .logo {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  nav ul {
    display: none;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    padding: 10px 0;
    transition: opacity 0.3s ease-in-out;
  }

  /* ✅ 確保 `mobile-logo` 在選單頂部顯示 */
  .mobile-logo {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }

  .mobile-logo img {
    height: 40px;
    max-width: 80px;
    filter: brightness(2);
  }

  /* ✅ RWD 下選單內容置中 */
  nav ul.open {
    display: flex !important;
    opacity: 1;
    align-items: center;
    text-align: center;
  }

  nav ul.open li {
    width: 100%;
    text-align: center;
  }

  nav ul.open li a {
    display: flex;
    flex-direction: column; /* ✅ 讓 icon & 文字上下排列 */
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
  }

  /* ✅ RWD 下 `FontAwesome` 預設顯示，滑鼠懸停才顯示文字 */
  nav ul.open .menu-icon {
    opacity: 1;
  }

  nav ul.open .menu-text {
    opacity: 0;
    transform: translateY(10px);
  }

  nav ul.open li a:hover .menu-text {
    opacity: 1;
    transform: translateY(0);
  }

  nav ul.open li a:hover .menu-icon {
    opacity: 0;
  }
}
</style>
