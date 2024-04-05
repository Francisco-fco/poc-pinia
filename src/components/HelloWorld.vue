<template>
  <div>
    <Header />
    <div>
      <h3>Groups</h3>
      <hr>
      <span v-for="group in store.groups" :key="group.id">
        <p><strong>Group ID:</strong> {{ group.id }}</p>
        <p><strong>Leader:</strong> {{ group.leader.name }}</p>
        <p>
        <span v-for="student in group.students" :key="student.id">
          {{ student.name }} (Leader: {{ student.isLeader ? 'Yes' : 'No' }})
        </span>
        </p>
        <hr>
      </span>
    </div>

    <div>
      <h3>Add Student</h3>
      <form @submit.prevent="addStudent">
        <label for="studentName">Student Name: </label>
        <input v-model="newStudentName" type="text" id="studentName" required>
        <label for="isLeader"> Is Leader:</label>
        <input v-model="isLeader" type="checkbox" id="isLeader">
        <label for="selectedGroup"> Select Group:</label>
        <select v-model="selectedGroup" id="selectedGroup">
          <option v-for="group in store.groups" :key="group.id" :value="group.id">
            {{ group.id }}
          </option>
        </select>
        <button type="submit">Add Student</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { useStore, Store } from '@/store/state';
import Header from '../components/Header.vue'

export default {
  components: {
    Header,
  },
  setup() {
    const store: Store = useStore();
    const newStudentName = ref('');
    const isLeader = ref(false);
    const selectedGroup = ref(1); // Default group ID

    onMounted(() => {
      store.fetchGroups();
    });

    const addStudent = () => {
      const newStudent = {
        id: store.totalStudents + 1, // Incrementing the ID for simplicity (you might want to handle this differently)
        name: newStudentName.value,
        isLeader: isLeader.value,
      };

      const groupIndex = store.groups.findIndex(group => group.id === selectedGroup.value);
      if (groupIndex !== -1) {
        store.groups[groupIndex].students.push(newStudent);
        if (isLeader.value) {
          store.groups[groupIndex].leader = newStudent;
        }

        store.addStudent(newStudent);
      }

      newStudentName.value = '';
      isLeader.value = false;
      selectedGroup.value = 1; // Reset to default group ID
    };

    return { store, newStudentName, isLeader, selectedGroup, addStudent };
  }
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
button {
  margin-left: 1vw;
}
</style>
