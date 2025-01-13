<template>
  <div class="block p-6 border rounded-lg   my-8 mx-10">
    <h6 class="mb-2 text-2xl font-bold  text-cyan-800">
      {{ post.Title }}
    </h6>
    
    <p v-html="post.Content">
    </p>
   
    
  </div>
</template>

<script>
import { useCommentStore } from "../stores/CommentStore";

export default {
  props: ['post', 'author'],

  setup(props) {
    console.log(props.post, props.author)
    const CommentStore = useCommentStore();

    //fetch comments
    CommentStore.getComments();

    return { CommentStore };
  },

}
</script>

