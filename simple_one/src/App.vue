<template>
  <div id="app">
    <SiteHeader />
    <router-view></router-view>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>

<style>
/* 全局樣式 */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
