import { defineStore } from "pinia";

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: JSON.parse(atob(window.asoneData)),
    post: null,
    loading: false,
    error: null,
    searchQuery: '',
  }),
  getters: {
    filteredList(state) {
      // Check if there is a search query
      if (state.searchQuery) {
        return state.posts.filter(post =>
          post.Title.toLowerCase().includes(state.searchQuery)
        );
      } else {
        return state.posts;
      }
    },
  },
  actions: {
    getPosts() {
      //
    },
    async getPost(id) {
      this.post = null
      this.loading = true
      //title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')
      for (var d in this.posts) {
        //console.log(this.posts[d])
        if (this.posts[d]['Title'].replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '') == id ) {
          this.post = this.posts[d]
          this.loading = false
          break
        }
      }
    },
  }
})

