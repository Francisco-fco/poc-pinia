<template>
<Drawer />
<div style="width: 50vw; height: 100vh">
  <Header />
  <HelloWorld />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Drawer from "./components/Drawer.vue";
import Header from "./components/Header.vue";

</script>

<style scoped>

</style>
