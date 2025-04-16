<template>
    <section id="non-reactive-counter">
      <p>Counter: {{ nonReactiveCounter }}</p>
      <button @click="incrementNonReactive">Increment</button>
    </section>
</template>
<script setup lang="ts">
  let nonReactiveCounter = 0
  const incrementNonReactive = () => {
    nonReactiveCounter++
  }
</script>
  