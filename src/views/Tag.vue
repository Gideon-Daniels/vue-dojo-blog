<template>
  <div class="tag">
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
          <PostList :posts="postsWithTag"/>
      </div>
      <div v-else></div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {  
components: { PostList, Spinner },
setup(){
    const route = useRoute()
    const { posts, error, load } = getPosts()

    load() 
    // computed property to filter the post 
    const postsWithTag = computed( () => {
        return posts.value.filter( (p) => p.tags.includes(route.params.tag))
    })

    return { error, posts, postsWithTag }
}
}
</script>

<style>

</style>