<template>
  <comment-section />
</template>

<script setup>
import CommentSection from "./components/CommentSection.vue";
</script>

<style lang="scss">
body {
  background: #ddf0ec;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  #app {
    height: 100%;
    width: 100%;
  }
}
</style>
