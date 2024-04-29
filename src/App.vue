<script setup>
</script>

<template>
<router-view></router-view>

  <router-link to="/home">Home</router-link> |
  <router-link to="/summary">Summary</router-link>|
  <router-link to="/countPinia">CountPinia</router-link>|
  <router-link to="/homePinia">HomePinia</router-link> |
  <router-link to="/taskStore">TaskStore</router-link>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
