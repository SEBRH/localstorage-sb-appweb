<script setup>
import { useContadorStore } from '../stores/contador.js'
const CounterStore = useContadorStore();

</script>

<template>
  <h1>Home pinia: {{CounterStore.count}}</h1>
  <h3>Nro Cambios: {{CounterStore.numberOfChanges}}</h3>
</template>

<style scoped>

</style>