<template>
  <hr />
  <div>
    dsadas
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { useStore, Store } from "@/store/state";

export default {
  components: {},
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
