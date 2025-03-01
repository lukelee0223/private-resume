<template>
  <div class="portfolio-container">
    <h1 class="fade-in">工作經歷 (近10年)</h1>
    <p class="fade-in delay" style="color: coral;">Work Experience</p>
    <!-- ✅ 縱向時間線 -->
    <div class="timeline">
      <div class="timeline-item" v-for="(item, index) in timelineData" :key="index">
        <div class="timeline-content">
          <h2 class="fade-in">{{ item.year }}</h2>
          <h3>{{ item.title }}</h3>
          <h4>{{ item.company }}</h4>
          <h4 class="fade-in delay" style="color:coral;">{{ item.years }}</h4>
          <p class="fade-in delay" style="color:gold; font-weight: 700;" v-for="(line, idx) in item.description" :key="idx">{{ line }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const timelineData = ref([
  {
    year: "202306 - Now",
    title: "後端工程師",
    company: "暫不公開",
    years:"在職中",
    description: [
      "不動產經營業(前三大) 履保系統開發",
      "食品製造業(前三大) 生管系統開發",
      "(.net core WebAPI, MSSQL)",
      "(.net core MVC + Vue + Js, Oracle)",
    ],
  },
  {
    year: "202111 - 202306",
    title: "客服主管",
    company: "巨匠雲科技教育(股)有限公司",
    years:"1年7個月",
    description: [
      "部門人員管理及培訓",
      "部門工作指導及績效管理",
      "工作流程優化及品質管理",
      "客訴及消保案件處理",
      "內部知識系統規劃及開發",
      "(.net Webform + jQuery, MSSQL)",
    ],
  },
  {
    year: "201805-202111",
    title: "Web系統工程師",
    company: "巨匠雲科技教育(股)有限公司",
    years:"3年6個月",
    description: [
      "企業學習數位平台 規劃開發維護",
      "資料庫設計維護",
      "(.net Webform + jQuery, MSSQL)",
    ],
  },
  {
    year: "201704 - 201804",
    title: "軟體支援工程師",
    company: "大維凱斯特國際有限公司",
    years:"1年",
    description: [
      "內部系統設備維護",
      "網頁設計及開發",
      "(HTML, CSS, JavaScript)",
    ],
  },
  {
    year: "201309 - 201703",
    title: "線上技服工程師",
    company: "巨匠電腦(股)有限公司",
    years:"3年7個月",
    description: [
      "線上課程系統問題排除",
      "線上學員問題及時處理",
      "講師及學員設備問題排除",
      "部門設備維護"
    ],
  },
]);
</script>

<style scoped>
/* ✅ Portfolio 整體容器 */
.portfolio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  padding-top: 80px; /* ✅ 避免被選單擋住 */
  padding-bottom: 50px; /* ✅ 確保不會超出 Footer */
  min-height: 100vh; /* ✅ 讓內容至少撐滿整個視窗 */
  overflow: hidden; /* ✅ 避免時間線超出畫面 */
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

/* ✅ 縱向時間線 */
.timeline {
  position: relative;
  margin-top: 10px;
  padding: 20px 0;
  width: 100%;
  max-width: 800px;
}

/* ✅ 時間線的縱向線條 */
.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  width: 4px;
  height: 100%;
  background: #fff;
  transform: translateX(-50%);
}

/* ✅ 預設標題靠右（適用於奇數項目） */
.timeline-item h2 {
  text-align: right;
}
.timeline-item p {
  text-align: right;
  padding: 0;
}

/* ✅ 偶數項目時標題靠左 */
.timeline-item:nth-child(even) h2 {
  text-align: left;
}
.timeline-item:nth-child(even) p {
  text-align: left;
  padding: 0;
}



/* ✅ 每一個時間線的項目 */
.timeline-item {
  position: relative;
  width: 50%;
  padding: 10px 20px;
  box-sizing: border-box;
}

/* ✅ 交錯排列 - 左右對齊 */
.timeline-item:nth-child(odd) {
  text-align: right;
  left: 0;
}

.timeline-item:nth-child(even) {
  text-align: left;
  left: 50%;
}

/* ✅ 時間節點 (圓點) */
.timeline-item::before {
  content: "";
  position: absolute;
  left: 100%;
  top: 15px;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  transform: translateX(-50%);
}

.timeline-item:nth-child(even)::before {
  left: 0%;
}

@media (max-width: 768px) {

}


</style>
