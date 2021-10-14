<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"/>
        
    </div>
  </div>
</template>

<script>
import {onUnmounted,onMounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

export default {
    components: {SinglePost},
    props: ['posts'],
    setup(props) {
        onMounted(() => console.log("component mounted"))
        onUnmounted(() => console.log("component unmounted"))
        onUpdated(() => console.log("component updated"))
    }
}
</script>

<style>

</style>