<template>
  <div>
    <div v-if="PostStore.loading">Loading posts ...</div>
    <div v-if="PostStore.post">
      <Post :post="PostStore.post" />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { usePostStore } from "../stores/PostStore";
import Post from './Post.vue'


export default {
  components: { Post },
  setup() {
    const route = useRoute();
    const PostStore = usePostStore();
    

    PostStore.getPost(route.params.id);
    const post = PostStore.post;

    return { PostStore, post }

  }
}
</script>
