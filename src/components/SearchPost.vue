<template>
  <div class="d-flex justify-content-center">
    <div class="flex items-center">
      <input type="text" v-model="searchQuery" placeholder="Search Post …" @input="searchPosts"
        class="p-2 m-2 border-2 border-gray-300 rounded-lg w-96" />
    </div>
  </div>
  <div class="mx-auto">
    <ul class="list-unstyled">
    <li v-for="(post, index) in filteredPosts" :key="index"
      class="p-2">
      <h6 >
        <router-link :to="`/post/${post.Title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')}`">
          {{ post.Title }}
        </router-link>
      </h6>
    </li>
    </ul>
  </div>
</template>

<script>
import { usePostStore } from '../stores/PostStore';
import { ref, computed } from 'vue';

export default {
  setup() {
    const postStore = usePostStore();
    const searchQuery = ref('');

    // Define a computed property to get the filtered list of posts
    const filteredPosts = computed(() => {
      if (searchQuery.value) {
        return postStore.filteredList.filter(post =>
          post.Title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      } else {
        return [];
      }
    });

    const searchPosts = () => {
      // Update the searchQuery in the store
      postStore.searchQuery = searchQuery.value;
    };

    return {
      searchQuery,
      filteredPosts,
      searchPosts
    };
  }
};
</script>
