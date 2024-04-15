import { defineStore, Store } from 'pinia';
import axios from 'axios';

interface Post {
  id: number;
  text: string;
}

interface State {
  posts: Post[];
}

export const useStore = defineStore({
  id: 'grouping',
  state: (): State => ({
    posts: [],
  }),

  // Actions to update the state
  actions: {
    addPost(post: Post) {
      console.log('newPost in state: ', post)
      this.posts.push(post);
    },

    async fetchPosts() {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        this.posts = response.data;
      } catch (error) {
        console.error('Error:', error);
      }
    },

    async createPost(post: Post) {
      try {
        console.log('NewPost: ', post)

        const response = await axios.post('http://localhost:3000/posts', post);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    },

    startPolling() {
      console.log('In POLLING')
      const delay = 10000;
      let intervalCount = 0;
    
      const fetchData = () => {
        const polledPosts = this.fetchPosts();
        intervalCount++;
        if (intervalCount < 5) {
          console.log(intervalCount)
          setTimeout(fetchData, delay + (intervalCount * 10000));
        }
        console.log(polledPosts)
        console.log("POLLED: ", this.posts)
      };
      setTimeout(fetchData, delay);
    },
  },

  getters: {
    totalPosts(): number {
        return this.posts.length;
      },
  },
});

export type GroupingStore = Store<'grouping', State, typeof useStore>;
