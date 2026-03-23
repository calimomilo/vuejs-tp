<script setup>
import { useHashRoute } from './composables/useHashRoute.js';
import PageHome from './pages/PageHome.vue';
import PageTemperature from './pages/PageTemperature.vue';
import TheHeader from './components/TheHeader.vue';

const { currentPage } = useHashRoute();
console.log(currentPage.value);

</script>

<template>
  <TheHeader />
  <main>
    <PageHome v-if="currentPage === 'home'" />
    <PageTemperature v-if="currentPage === 'temperature'" />
  </main>

</template>

<style scoped>

</style>