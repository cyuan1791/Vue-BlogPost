<template>
<div class="px-4">
<ul class="list-unstyled">
  <li v-for="post in PostStore.posts" :key="post.id"
    class="media">
    <img :src="post.SmallImg" class="p-2" alt="...">
    <div class="media-body p-2">

    <h5> {{ post.Date }}</h5>
    <h5 class="mt-0">
        {{ post.Title }}
    </h5>
    <p v-html="post.Summary"> </p>
    <h5 class="mt-0">
      <router-link :to="`/post/${post.Title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')}`">
        Read More
      </router-link>
    </h5>
    </div>
    </li>

  </ul>
  </div>
</template>


<script>
import { usePostStore } from "../stores/PostStore";
export default {
  setup() {
    const PostStore = usePostStore();

    PostStore.getPosts();

    return { PostStore };
  },
}
</script>
