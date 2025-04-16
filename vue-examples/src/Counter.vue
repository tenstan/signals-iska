<template>
    <section id="counter">
        <p>Counter: {{ counter }}</p>
        <p>Double: {{ doubleCount }}</p>
        <button @click="increment">Increment</button>
    </section>
</template>
<script setup lang="ts">
import { computed, reactive, ref, watch, watchEffect } from 'vue';

const counter = ref(0)
const user = reactive({
  firstName: "john",
  lastName: "doe"
})
const doubleCount = computed(() => counter.value * 2)
const userFullname = computed({
    get() {
        return `${user.firstName} ${user.lastName}`;
    },
    set(newValue: string) {
        [user.firstName, user.lastName] = newValue.split(' ')
    }
}); // Mogelijk, maar geen best practise
watchEffect(() => {
  console.log(`Counter: ${counter.value}, Double Count: ${doubleCount.value}`)
})
watch(user, (oldCount, newCount) => {
    console.log(`user changed from ${user.firstName} to ${user.firstName}`)
}, )
const increment = () => {
    counter.value++
}
</script>