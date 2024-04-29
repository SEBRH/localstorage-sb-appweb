<script setup>
import {useContadorStore} from "../stores/contador.js";



const contador = useContadorStore();
</script>

<template>
  <h1>Counter Pinia</h1>
  <h1>Home pinia: {{contador.count}}</h1>
  <h3>Nro Cambios: {{contador.numberOfChanges}}</h3>

  <button @click="contador.increment()">Incrementar</button>
  <button @click="contador.decrement()">Decrementar</button>
  <button @click="contador.reset()">Reset</button>
  <br>
</template>

<style scoped>

</style>