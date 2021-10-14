<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts"/>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue' 
import { ref } from 'vue'

export default {
  name: 'Home',
  components: { PostList },
  // beginning of composition API
  setup() {
    const posts = ref([
      { title: 'welcome to the blog', body: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores repellendus nam rerum pariatur atque quaerat expedita accusantium nobis voluptatibus alias commodi porro excepturi quae, adipisci corrupti ad dolores voluptas.', id : 1},
      { title: 'top 5 CSS tips', body: '  Lorem ipsum dolor .', id : 2}
    ])

    const showPosts = ref(true)

    return { posts, showPosts }
  },

}
</script>
