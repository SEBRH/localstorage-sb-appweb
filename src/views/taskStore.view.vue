<script setup>
import {useTaskStore} from "../stores/TaskStore.js";

const taskStore = useTaskStore();
taskStore.fetchTasks();
</script>

<template>
  <h1>Task store</h1>
  <div v-for="Task in taskStore.task">
    {{Task.title}}
  </div>
  <div>
    <h1>Filtro de tasks segun fav</h1>
    <div v-for="Task in taskStore.favs">
      {{Task.title}}
  </div>
  </div>
</template>

<style scoped>

</style>