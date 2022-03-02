<template>
  <comment-section />
</template>

<script setup>
import CommentSection from "./components/CommentSection.vue";
</script>

<style lang="scss">
html {
  height: 100%;
  width: 100%;
}
body {
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(
    to right,
    #afecbc,
    #bbf0c7,
    #c8f4d1,
    #d4f7dc,
    #e0fbe6
  );

  #app {
    height: 100%;
    width: 100%;
  }
}
</style>
