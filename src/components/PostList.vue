<template>
  <div v-for="post in PostStore.posts" :key="post.no"
    class="block p-6 bg-gray-100 border shadow-slate-400 shadow-xl rounded-lg hover:bg-gray-200 my-8 mx-10">
    <h6 class="mb-2 text-2xl font-bold tracking-tight text-sky-700">
      <router-link :to="`/post/${post.no}`">
        {{ post.Title }}
      </router-link>
    </h6>
    <p class="font-normal text-gray-700 ">
      {{ post.body }}
    </p>
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
