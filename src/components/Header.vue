<template>
  <header class="header">
    
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

.user {
  font-size: 0.9rem;
}
</style>
