<template>
  <div class="comment-section">
    <h1>Users' Comments</h1>

    <Comment
      v-for="comment in comments"
      :key="comment.id"
      :email="comment.email"
      :text="comment.body"
    />
    <InfiniteLoading :comments="comments" @infinite="loadComments" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Comment from "./Comment";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

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
    if (newComments.length < 10) {
      setIsComplete();
    } else {
      comments.value.push(...newComments);
      setIsLoaded();
    }

    pageNum.value++;
  } catch (error) {
    console.log("Error in loadComments(): ", error);
  }
}
</script>

<style lang="scss">
@media only screen and (min-width: 601px) {
  .comment-section {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 8px;
    padding-left: 8px;
  }
}

@media only screen and (max-width: 600px) {
  .comment-section {
    padding: 0;
  }
}
</style>
