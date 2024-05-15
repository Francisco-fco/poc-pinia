<template>
  <div class="container">
    <nav id="sidebar-menu" :style="{ left: showSidebar ? '0' : '-350px' }">
      <label
        id="hamburger-menu"
        :style="{ left: showSidebar ? 'calc(400px - 80px)' : '10px' }"
        style="background-color: #22458a"
        @click="toggleSidebar"
      >
        Meny ☰
      </label>
      <ul style="padding: 0; margin: 0">
        <li style="background-color: #22458a; padding: 0.8vw; display: flex; justify-content: end;">
          <span style="font-size: 20px; color: white;">
            <a
              tabindex="0"    
              style="font-size: 19px; color: white; cursor: pointer;"
              @click="toggleSidebar"
              @keyup.enter="toggleDropdown" 
            >
              Stäng ✖
            </a>
          </span>
        </li>
        <li style="padding: 0;" v-for="(menuItem, index) in menuItems" :key="index">
          <a style="padding-left: 1vw;" :href="menuItem.route">{{ menuItem.text }}</a>
          <hr v-if="index < menuItems.length - 1" />
        </li>
      </ul>
    </nav>
    <div class="overlay" v-if="showSidebar" @click="toggleSidebar"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

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

const menuItems = computed(() => [
  { route: "/", text: "Start" },
  { route: "/my-page", text: "Min sida" },
  { route: "/emaillist", text: "E-postlistor" },
  { route: "/emaillist-measure", text: "E-postlistor för åtgärd" },
  { route: "/shared-maillist", text: "Delade brevlådor" },
  { route: "/resource-mailboxes", text: "Resursbrevlådor" },
  { route: "/resource-mailboxes", text: "Resursbrevlådor" },
  { route: "/contacts", text: "Kontakter" },
]);

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

#sidebar-menu li {
  list-style-type: none;
  line-height: 2.8rem;
}

#sidebar-menu a {
  color: #875e29;
  font-size: 16px;
  text-decoration: none;
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
