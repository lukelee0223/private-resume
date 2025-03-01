<template>
  <div class="skill-container">
    <h1 class="fade-in">技術背景</h1>
    <p class="fade-in delay" style="color: coral;">Skills Statement</p>

    <!-- ✅ 技能圓圈 -->
    <div class="skills-grid">
      <div class="skill" v-for="skill in skills" :key="skill.name">
        <div class="circle">
          <svg viewBox="0 0 36 36" class="circular-chart">
            <defs>
              <!-- 橘紅漸層 (低於60%) -->
              <linearGradient id="grad-orange-red" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#ff8c00"/>
                <stop offset="100%" stop-color="#ff4500"/>
              </linearGradient>

              <!-- 黃綠漸層 (61-75%) -->
              <linearGradient id="grad-yellow-green" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#b0ff92"/>
                <stop offset="100%" stop-color="#00a86b"/>
              </linearGradient>

              <!-- 藍灰漸層 (76-89%) -->
              <linearGradient id="grad-blue-gray" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#5b8bd7"/>
                <stop offset="100%" stop-color="#8693a3"/>
              </linearGradient>

              <!-- 紫白漸層 (90-100%) -->
              <linearGradient id="grad-purple-white" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#c084fc"/>
                <stop offset="100%" stop-color="#f3e8ff"/>
              </linearGradient>
            </defs>

            <path class="circle-bg" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path class="circle-progress"
              :stroke="getGradient(skill.percentage)"
              :stroke-dasharray="`${skill.animatedPercentage}, 100`"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831" />
            <text x="18" y="20.35" class="percentage-text">{{ skill.animatedPercentage }}%</text>
          </svg>
        </div>
        <p class="fade-in delay">{{ skill.name }}</p>
      </div>
    </div>

    <!-- ✅ 技能表格 (RWD 支援) -->
    <div class="skill-table">
      <table>
        <thead>
          <tr>
            <th>種類</th>
            <th>說明</th>
            <th>備註</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="skill in skillDetails" :key="skill.name">
            <td class="fade-in">{{ skill.name }}</td>
            <td>{{ skill.description }}</td>
            <td>{{ skill.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// ✅ 技能數據
const skills = ref([
  { name: "FrontEnd", percentage: 75, animatedPercentage: 0 },
  { name: "BackEnd", percentage: 90, animatedPercentage: 0 },
  { name: "Database", percentage: 80, animatedPercentage: 0 },
  { name: "SysMgmt", percentage: 75, animatedPercentage: 0 },
  { name: "Others", percentage: 75, animatedPercentage: 0 }
]);

// ✅ 技能表格數據
const skillDetails = ref([
  { name: "FrontEnd", description: "HTML, CSS, JavaScript, jQuery, Vue.js, Blazor WebAssembly (few)", note: "can read and modify" },
  { name: "BackEnd", description: "C#, .NET Core API, .NET MVC, WebForm, Python (few)", note: "" },
  { name: "Database", description: "MSSQL, Oracle (few), MySQL (few)", note: "Most Exp on MSSQL" },
  { name: "System Management", description: "Windows Server, Linux (few), service build, mgmt, and so on", note: "" },
  { name: "Others", description: "Git, AI Local Deployment(ing), everything interested in, and so on", note: "" }
]);

// ✅ 根據百分比設定漸層顏色
const getGradient = (percentage) => {
  if (percentage <= 60) {
    return "url(#grad-orange-red)";
  } else if (percentage <= 75) {
    return "url(#grad-yellow-green)";
  } else if (percentage <= 89) {
    return "url(#grad-blue-gray)";
  } else {
    return "url(#grad-purple-white)";
  }
};

// ✅ 讓百分比動畫從 0% 增長到設定值
onMounted(() => {
  skills.value.forEach((skill) => {
    let start = 0;
    const end = skill.percentage;
    const duration = 1000; // 1 秒內完成動畫
    const step = end / (duration / 16); // 計算每幀增加數值

    function animate() {
      if (start < end) {
        start += step;
        skill.animatedPercentage = Math.min(Math.round(start), end); // 確保不超過目標值
        requestAnimationFrame(animate);
      }
    }
    animate();
  });
});
</script>

<style scoped>
/* ✅ 技能區塊 */
.skill-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  padding-top: 80px;
  padding-bottom: 50px;
  min-height: 100vh;
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


/* ✅ 技能圓圈 */
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 120px;
}

/* ✅ 百分比圓圈樣式 */
.circular-chart {
  width: 80px;
  height: 80px;
}

.circle-bg {
  fill: none;
  stroke: #ddd;
  stroke-width: 3.8;
}

.circle-progress {
  fill: none;
  stroke-width: 3.8;
  stroke-linecap: round;
  transition: stroke-dasharray 0.6s ease-in-out;
}

/* ✅ 百分比文字動畫 */
.percentage-text {
  fill: white;
  font-size: 10px;
  font-weight: bold;
  text-anchor: middle;
  alignment-baseline: middle;
  transition: opacity 0.3s ease-in-out;
}

/* ✅ 技能表格樣式 */
.skill-table {
  margin-top: 30px;
  width: 80%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px;
  border: 1px solid white;
  text-align: left;
}

th {
  background: #726542;
  color: white;
}

td {
  background: rgba(255, 255, 255, 0.1);
}

/* ✅ RWD - 手機版 */
@media (max-width: 768px) {
  .skills-grid {
    flex-wrap: wrap;
    gap: 20px;
  }

  .skill {
    width: 100px;
  }

  .skill-table {
    width: 100%;
    overflow-x: scroll;
  }

  table {
    font-size: 14px;
  }
}
</style>
