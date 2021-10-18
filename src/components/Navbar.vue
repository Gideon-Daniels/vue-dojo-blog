<template>
 <header>
    <h1> The Dojo Blog</h1>
    <nav>
        <router-link :to="'/'">Home</router-link>
        <router-link :to="'/Create'">Create Post</router-link>
    </nav>
 </header>
</template>

<script>
export default {

}
</script>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
    }
    header h1 {
        color: #dfdfdf;
        font-size: 48px;
        transition: all 0.3s ease-in-out;
    }
    header a {
        color: #bbb;
        text-decoration: none;
        margin-left: 20px;
        transition: all 0.5s ease-in-out;
    }
    header a.router-link-active {
        color: #444;
        font-weight: bold;
    }
    /* hover */
    header h1:hover {
        color: #ff8800;
    }

    header a:hover {
        color : #ff8800;
    }

</style>