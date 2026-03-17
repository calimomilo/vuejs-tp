<script setup>
import { computed, ref, watch } from 'vue';
import Conversion from './components/Conversion.vue';

const baseTemp = ref(283.15);
const kelvin = computed({
  get: () => baseTemp.value,
  set: (val) => {
    celsius.value = val - 273.15;
  }
});

const celsius = computed({
  get: () => kelvin.value - 273.15,
  set: (val) => {
    kelvin.value = val + 273.15;
    fahrenheit.value = val * 1.8 + 32;
  },
});

const fahrenheit = computed({
  get: () => celsius.value * 1.8 + 32,
  set: (val) => {
    celsius.value = val - 32 / 1.8;
  },
});

watch(baseTemp, () => {
  console.log(`Kelvin : ${kelvin.value} | Celsius : ${celsius.value} | Fahrenheit : ${fahrenheit.value}`);
})

const logValues = () => {
  // console.log(Math.floor(Math.random()*400))
  baseTemp.value = Math.floor(Math.random()*400) + 0.15;
}

// setInterval(logValues, 1000);

</script>

<template>
  <Conversion/>
</template>
