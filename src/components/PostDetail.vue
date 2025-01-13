<template>
  <div>
    <div v-if="PostStore.loading">Loading posts ...</div>
    <div v-if="PostStore.post">
      <Post :post="PostStore.post"  />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { usePostStore } from "../stores/PostStore";
import { useAuthorStore } from '../stores/AuthorStore';
import Post from './Post.vue'

export default {
  components: { Post },
  setup() {
    const route = useRoute();
    const PostStore = usePostStore();
    const AuthorStore = useAuthorStore();
    const AuthorsStore = useAuthorStore();

    PostStore.getPost(route.params.id);
    AuthorsStore.getAuthors();
    const post = PostStore.post;

    return { PostStore, post, AuthorStore }

  }
}
</script>
