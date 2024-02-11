<template>Input: {{ number }}</template>

<script setup>
const FIZZ = {
  label: 'FIZZ',
  multiplier: 3
}

const BUZZ = {
  label: 'BUZZ',
  multiplier: 5
}

defineProps({
  number: {
    type: Number,
    required: true
  }
})

function print(number) {
  let printReturn = ''

  if (isMultiply(number, FIZZ.multiplier)) printReturn += FIZZ.label

  if (isMultiply(number, BUZZ.multiplier)) printReturn += BUZZ.label

  if (printReturn) return printReturn

  return number
}

function isMultiply(number, divider) {
  return number % divider === 0
}
</script>
