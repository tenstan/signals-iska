<template>
  <section id="reactive-counter">
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0)
const increment = () => {
  counter.value++
}
</script>
