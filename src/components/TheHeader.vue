<script setup>
  import { ref } from 'vue';
  import BaseButton from './BaseButton.vue';
import TheNav from './TheNav.vue';

  const theme = ref('light');

  function switchTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }
</script>

<template>
  <header>
    <h1>Converter App</h1>
    <TheNav direction="row" />
  </header>
</template>

<style scoped>
  h1 {
    color: white;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    /* background-color: #333; */
    border-bottom: solid #333;
    margin-bottom: 40px;
  }
</style>