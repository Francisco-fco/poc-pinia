<template>
  <div>
    <Header />
    <div>
      <h3>Posts</h3>
      <hr />
      <p v-for="post in store.posts" :key="post.id">
        {{ post }}
      </p>
      <hr />
    </div>

    <div>
      <form @submit.prevent="addPost">
        <label>Text: </label>
        <input v-model="input" type="text" id="input" required />
        <button type="submit">Post text</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { useStore, Store } from "@/store/state";
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
  setup() {
    const store: Store = useStore();
    const input = ref("");

    onMounted(() => {
      console.log("MOUNTED", store.startPolling());
      store.startPolling();
    });

    let idCounter = 1;
    const addPost = () => {
      const newPost = {
        id: idCounter++,
        text: input.value,
      };
      console.log("new post: ", newPost);
      store.createPost(newPost);
    };

    return { store, input, addPost };
  },
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
