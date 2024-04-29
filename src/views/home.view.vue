<script setup>

import {onMounted, ref} from "vue";

const contador = ref(0);

function updateCount(amount){
    contador.value = contador.value + amount;
    localStorage.setItem('contador', contador.value);
    
}

function resetCount(amount){
  contador.value = amount;
}

function deleteCount(amount){
  resetCount(0);
  localStorage.clear();
}

onMounted(()=>{
if (localStorage.contador){
    contador.value = JSON.parse(localStorage.contador);
}
})

</script>

<template>
  <div>
<h1>Este es el home</h1>
  {{contador}}
    <button @click="updateCount(1)">Incrementar</button>
    <button @click="updateCount(-1)">Decrementar</button>
    <button @click="deleteCount()">ResetStorage</button>

  </div>

</template>

<style scoped>

</style>