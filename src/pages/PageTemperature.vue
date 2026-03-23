<script setup>

import { ref, defineModel, watch } from 'vue';
import BaseInputNumber from '../components/BaseInputNumber.vue';

const baseTemp = ref(283.15);

const tempKelvin = defineModel('kelvin', {
  get: () => +(baseTemp.value.toFixed(2)),
  set: (val) => baseTemp.value = +val
});

const tempCelsius = defineModel('celsius', {
  get: () => +(baseTemp.value - 273.15).toFixed(2),
  set: (val) => baseTemp.value = +val + 273.15
});

const tempFahrenheit = defineModel('fahrenheit', {
  get: () => +((baseTemp.value - 273.15) * 1.8 + 32).toFixed(2),
  set: (val) => baseTemp.value = ((+val - 32) / 1.8) + 273.15
});

watch(baseTemp, () => {
  console.log(`Kelvin : ${tempKelvin.value} | Celsius : ${tempCelsius.value} | Fahrenheit : ${tempFahrenheit.value}`);
})

</script>

<template>

<h2>Température</h2>

<section>
<BaseInputNumber label="Kelvin (K)" v-model="tempKelvin" />
<BaseInputNumber label="Celsius (°C)" v-model="tempCelsius" />
<BaseInputNumber label="Fahrenheit (°F)" v-model="tempFahrenheit" />
</section>

</template>

<style scoped>
  section {
    display: grid;
    margin: 2rem;
    gap: 1rem;
  }
</style>