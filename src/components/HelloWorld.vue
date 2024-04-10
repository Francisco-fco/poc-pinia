<template>
  <div>
    <Header />
    <div>
      <h3>Groups</h3>
      <hr>
      <span v-for="group in store.groups" :key="group.id">
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
      <h3>Post</h3>
      <form @submit.prevent="addPost">
        <label>Text: </label>
        <input v-model="input" type="text" id="input" required>
        <!-- <label for="isLeader"> Is Leader:</label>
        <input v-model="isLeader" type="checkbox" id="isLeader">
        <label for="selectedGroup"> Select Group:</label>
        <select v-model="selectedGroup" id="selectedGroup">
          <option v-for="group in store.groups" :key="group.id" :value="group.id">
            {{ group.id }}
          </option>
        </select> -->
        <button type="submit">Post text</button>
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
    const input = ref('');

    onMounted(() => {
      console.log('MOUNTED')
    });
    
    let idCounter = 1;
    const addPost = () => {
      const newPost = {
        id: idCounter++,
        text: input.value,
      };
      console.log("new post: ", newPost)
        store.createPost(newPost);
      }

    return { store, input, addPost };
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
