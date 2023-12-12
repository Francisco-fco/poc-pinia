<template>
  <div>
    <div>
      <h3>Groups</h3>
      <hr>
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

    <div>
      <h3>Add Student</h3>
      <form @submit.prevent="addStudent">
        <label for="studentName">Student Name:</label>
        <input v-model="newStudentName" type="text" id="studentName" required>
        <label for="isLeader">Is Leader:</label>
        <input v-model="isLeader" type="checkbox" id="isLeader">
        <label for="selectedGroup">Select Group:</label>
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

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore, Store } from '@/store/state.ts';

const store: Store = useStore();
const newStudentName = ref('');
const isLeader = ref(false);
const selectedGroup = ref(1); // Default group ID

// Fetch groups when the component is mounted
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
    // Add the new student to the selected group
    store.groups[groupIndex].students.push(newStudent);
    if (isLeader.value) {
      // If the new student is a leader, update the group leader
      store.groups[groupIndex].leader = newStudent;
    }

    // Add the new student to the global list of students
    store.addStudent(newStudent);
  }

  // Reset form fields
  newStudentName.value = '';
  isLeader.value = false;
  selectedGroup.value = 1; // Reset to default group ID
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
