<template>
  <div>
    <div>
      <h3>Groups</h3>
        <span v-for="group in store.groups" :key="group.id">
          <p>Group ID: {{ group.id }}</p>
          <p>Leader: {{ group.leader.name }}</p>
          <p>Students:</p>
            <span v-for="student in group.students" :key="student.id">
              {{ student.name }} (Leader: {{ student.isLeader ? 'Yes' : 'No' }})
            </span>
            <hr>
        </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGroupingStore, GroupingStore } from '@/store/state.ts';

defineProps<{ msg: string }>();

const store: GroupingStore = useGroupingStore();

// Fetch groups when the component is mounted
onMounted(() => {
  store.fetchGroups();
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
