<template>
  <div class="comment-section">
    <Card>
      <h1>Users' Comments</h1>

      <Comment
        v-for="comment in comments"
        :key="comment.id"
        :email="comment.email"
        :text="comment.body" />
      <InfiniteLoading :comments="comments" @infinite="loadComments"
    /></Card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Comment from "./Comment";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

const comment = "yo";
const comments = ref([]);
const pageNum = ref(1);
const MAX_NUM_COMMENTS_IN_PAGE = 10;

async function loadComments(infiniteScroll) {
  const { loaded: setIsLoaded, complete: setIsComplete } = infiniteScroll;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_limit=${MAX_NUM_COMMENTS_IN_PAGE}&_page=` +
        pageNum.value
    );
    const newComments = await response.json();

    //replace icons
    // replace the css class

    if (newComments.length < 10) setIsComplete();
    else {
      comments.value.push(...newComments);
      setIsLoaded();
    }
    pageNum.value++;
  } catch (error) {
    console.log("***** error in loadComments(): ", error);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.comment-section {
  background: #ddf0ec;
}
</style>
