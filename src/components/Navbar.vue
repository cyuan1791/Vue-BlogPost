<template>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <div class="d-flex justify-content-center p-1" >
    
          <router-link to="/postList">
            <button class="btn btn-primary">PostsList</button>
          </router-link>
      &nbsp;
          <router-link to="/search">
           <button class="btn btn-info"> Search</button>
          </router-link>
      
    </div>
  
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
<style lang="css" scoped>
ul {
  list-style-type: none;
}
ul > li {
    display: inline-block;
}
</style>