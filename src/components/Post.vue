<template>
  
 <div class="p-4">
    <h4 class="text-center">
      {{ post.Title }}
    </h4>
    
    <p v-html="post.Content">
    </p>
  </div>
</template>

<script>

export default {
  props: ['post'],

  setup(props) {


    return { };
  },

}
</script>

