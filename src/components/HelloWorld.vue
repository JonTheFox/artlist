<template>
  <div class="hello">
    <h1>{{ scriptSetupTest }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
const scriptSetupTest = ref("scriptSetupTest");
</script>

<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
