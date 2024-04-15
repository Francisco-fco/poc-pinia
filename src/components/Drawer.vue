<template>
  <div class="container">
    <label id="hamburger-menu" @click="toggleSidebar">Meny ☰</label>
    <nav id="sidebar-menu" :style="{ left: showSidebar ? '0' : '-350px' }">
      <button class="close-button" @click="toggleSidebar">✖</button> <!-- Close button -->
      <ul>
        <button><a href="/">Start</a></button>
        <hr>
        <li><a href="/my-page">Min sida</a></li>
        <hr>
        <li><a href="/emaillist">E-postlistor</a></li>
        <hr>
        <li><a href="/emaillist-measure">E-postlistor för åtgärd</a></li>
        <hr>
        <li><a href="/shared-maillist">Delade brevlådor</a></li>
        <hr>
        <li><a href="/resource-mailboxes">Resursbrevlådor</a></li>
        <hr>
        <li><a href="/resource-mailboxes-measure">Resursbrevlådor för åtgärd</a></li>
        <hr>
        <li><a href="/contacts">Kontakter</a></li>
        <hr>
        <li><a href="/admin">Administration -> DROPDOWN</a></li>
        <hr>
        <li><a href="/act-as">Agera som -> DROPDOWN</a></li>
        <hr>
      </ul>
    </nav>
    <div class="overlay" v-if="showSidebar" @click="toggleSidebar"></div>
    <main class="my-3"><router-view></router-view></main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showSidebar = ref(false);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<style scoped lang="scss">
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
}

img {
  width: 100%;
}

.border { 
  border: solid 1px;
  font-size: 12px;
  padding: 0.4vw;
}

#hamburger-menu {
  z-index: 1;
  position: fixed;
  top: 5px;
  right: 10px;
  width: 80px;
  border-radius: 15px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  background-color: #875e29;
  color: white;
}

#sidebar-menu {
  z-index: 1;
  position: fixed;
  top: 0;
  left: -350px;
  width: 300px;
  height: 100%;
  background-color: rgb(234, 234, 234);
  transition: 0.3s;
  box-sizing: border-box;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

#sidebar-menu ul {
  padding-right: 0px;
}

#sidebar-menu li {
  list-style-type: none;
  line-height: 2.8rem;
}

#sidebar-menu a {
  color: #875e29;
  font-size: 16px;
  text-decoration: none;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}
</style>
