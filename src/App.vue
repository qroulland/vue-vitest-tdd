<template>
  <main>
    <h1>Kata: FIZZBUZZ</h1>
    <input type="number" placeholder="Enter a number" v-model="state.number" />
    <FizzBuzz :number="state.number" />
  </main>
</template>

<script setup>
import { reactive } from "vue";
import FizzBuzz from '@/components/FizzBuzz.vue'

const state = reactive({
  number: null
})
</script>
