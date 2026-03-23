<script setup>
import BaseButton from './BaseButton.vue';


defineProps({
    direction: {
        type: String,
        default: 'row'
    }
})

</script>

<template>

<section :class="direction">
    <BaseButton label="Home"></BaseButton>
    <BaseButton label="Temperature"></BaseButton>
</section>

</template>

<style scoped>

section {
    display: flex;
    justify-content: space-around;
}

.row {
    flex-flow: row;
}

.column {
    flex-flow: column;
}

</style>