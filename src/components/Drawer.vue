<template>
  <div class="container">
    <nav id="sidebar-menu" :style="{ left: showSidebar ? '0' : '-350px' }">
      <label
        id="hamburger-menu"
        :style="{ left: showSidebar ? 'calc(400px - 80px)' : '10px' }"
        style="background-color: #22458a"
        @click="toggleSidebar"
        >Meny ☰</label
      >
      <ul style="padding: 0; margin: 0">
        <li
          style="
            background-color: #22458a;
            padding: 0.8vw;
            display: flex;
            justify-content: end;
          "
        >
          <span style="font-size: 20px; color: white"
            ><a
              tabindex="0"    
              style="font-size: 19px; color: white; cursor: pointer"
              @click="toggleSidebar"
              @keyup.enter="toggleDropdown" 
              >Stäng ✖</a
            ></span
          >
        </li>
        <hr style="margin: 0" />
        <li><a href="/">Start</a></li>
        <hr />
        <li><a href="/my-page">Min sida</a></li>
        <hr />
        <li><a href="/emaillist">E-postlistor</a></li>
        <hr />
        <li><a href="/emaillist-measure">E-postlistor för åtgärd</a></li>
        <hr />
        <li><a href="/shared-maillist">Delade brevlådor</a></li>
        <hr />
        <li><a href="/resource-mailboxes">Resursbrevlådor</a></li>
        <hr />
        <li><a href="/resource-mailboxes">Resursbrevlådor</a></li>
        <hr />
        <li><a href="/contacts">Kontakter</a></li>
        <hr />
        <li>
          <a tabindex="0" style="cursor: pointer" @click="toggleDropdown('administration')"
            >Administration</a
          >
          <font-awesome-icon
          tabindex="0"
            @click="toggleDropdown('administration')"
            @keyup.enter="toggleDropdown"
            v-if="!dropdowns.administration"
            icon="fa-solid fa-caret-right"
            size="lg"
            style="margin-left: 5vw; cursor: pointer"
          />
          <font-awesome-icon
          tabindex="0"
            @click="toggleDropdown('administration')"
            @keyup.enter="toggleDropdown"   
            v-else
            icon="fa-solid fa-caret-down"
            size="lg"
            style="margin-left: 5vw; cursor: pointer;"
          />
          <ul v-if="dropdowns.administration" class="dropdown">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
          </ul>
        </li>
        <hr />
      </ul>
    </nav>
    <div class="overlay" v-if="showSidebar" @click="toggleSidebar"></div>
    <main class="my-3"><router-view></router-view></main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showSidebar = ref(false);
const dropdowns = ref({
  resourceMailboxes: false,
  administration: false,
  ageraSom: false,
});

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const toggleDropdown = (dropdownName: any) => {
  dropdowns.value[dropdownName] = !dropdowns.value[dropdownName];
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

li {
  padding-left: 1vw;
}

.border {
  border: solid 1px;
  font-size: 12px;
  padding: 0.4vw;
}

#hamburger-menu {
  z-index: 1;
  position: fixed;
  top: 1.6vh;
  width: 5vw;
  padding: 0.2vw;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  color: white;
  transition: 0.3s;
}

#sidebar-menu {
  z-index: 1;
  position: fixed;
  top: 0;
  left: -350px;
  width: 300px;
  height: 100%;
  background-color: rgb(244, 244, 244);
  transition: 0.3s;
  box-sizing: border-box;
}

.dropdown {
  list-style-type: none;
  padding-left: 1.5vw;
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
