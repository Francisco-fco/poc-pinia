<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }">EPIC</router-link>
      <router-link to="/min-sida" class="nav-item" :class="{ active: $route.path === '/' }">Min sida</router-link>
      <router-link to="/e-postlistor-for-atgard" class="nav-item" :class="{ active: $route.path === '/' }">E-postlistor för åtgärd</router-link>
      <router-link to="/kontakter" class="nav-item" :class="{ active: $route.path === '/' }">Kontakter</router-link>
    </nav>
    <div class="user">
      Logged in as: {{ "Francisco Mouat" }}
    </div>
  </header>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useStore } from '@/store/state'; // Assuming you have a Pinia store

export default {
  name: 'Header',
  setup() {
    const store = useStore();
    const user = computed(() => store.user);
    const route = useRoute();

    return { user, route };
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
}

.nav {
  display: flex;
}

.nav-item {
  margin-right: 1rem;
  color: #fff;
  text-decoration: none;
}

.nav-item.active {
  font-weight: bold;
}

.user {
  font-size: 0.9rem;
}
</style>
