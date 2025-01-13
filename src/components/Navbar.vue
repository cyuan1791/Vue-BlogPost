<template>
  <nav class="bg-sky-800 p-4 mx-auto md:flex md:justify-between md:items-center sticky top-0">
    <div class="flex items-center justify-between">
      <router-link to="/" class="
            text-xl
            font-bold
            text-white
            italic
            md:text-2xl
            hover:text-slate-200">BLOG!
      </router-link>
      <!-- Mobile menu button -->
      <div @click="toggleNav" class="flex md:hidden">
        <button type="button" class="
              text-white
              hover:text-indigo-500
              focus:outline-none focus:text-gray-400
            ">
          <i class="material-icons">menu</i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul :class="showMenu ? 'flex' : 'hidden'" class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        ">
      <li class="flex items-center text-white hover:text-slate-200">
        <p class="px-1">
          <router-link to="/postList">
            PostsList
          </router-link>
        </p>
        <i class="material-icons">rss_feed</i>
      </li>
      <li class="flex items-center text-white hover:text-slate-200">
        <p class="px-1">
          <router-link to="/add">
            Create
          </router-link>
        </p>
        <i class="material-icons">post_add</i>
      </li>
      <li class="flex items-center text-white hover:text-slate-200">
        <p class="px-1">
          <router-link to="/search">
            Search
          </router-link>
        </p>
        <i class="material-icons"> manage_search</i>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue';
let title = 'dfja fadf gjj 3# !';
console.log(title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, ''));
// @ts-ignore
let data = JSON.parse(atob(window.asoneData));
console.log(data);
export default {
  setup() {
 
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>