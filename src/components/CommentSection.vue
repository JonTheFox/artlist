<template>
  <div class="comment-section">
    <h1 class="comment-section--title">Users' Comments</h1>
    <Comment
      v-for="comment in comments"
      :key="comment.id"
      :email="comment.email"
      :text="comment.body"
    />
    <InfiniteLoading :comments="comments" @infinite="handleScroll" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Comment from "./Comment";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import loadComments from "../ajax/loadComments.js";

const comments = ref([]);
const pageNum = ref(1);
const MAX_NUM_COMMENTS_IN_PAGE = 20;

async function handleScroll(infiniteScroll) {
  const newComments = await loadComments({
    numCommentsInPage: MAX_NUM_COMMENTS_IN_PAGE,
    pageNum: pageNum.value,
  });

  const { loaded: setIsLoaded, complete: setIsComplete } = infiniteScroll;

  if (newComments.length < MAX_NUM_COMMENTS_IN_PAGE) {
    setIsComplete();
  } else {
    comments.value.push(...newComments);
    setIsLoaded();
  }

  pageNum.value++;
}
</script>

<style lang="scss">
@media only screen and (max-width: 600px) {
  .comment-section {
    padding: 0;
    .comment-section--title {
      font-size: 1rem;
    }
  }
}

@media only screen and (min-width: 601px) {
  .comment-section {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 16px;
    padding-left: 16px;
  }
}
</style>
