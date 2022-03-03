<template>
  <div class="add-comment">
    <InputText type="text" v-model="commentText" />
    <button class="btn btn--submit" @click="addComment">Submit</button>
  </div>
</template>
<script setup>
import InputText from "primevue/inputtext";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const commentText = ref("");

function addComment() {
  store.dispatch("addComment", commentText.value);
}
</script>

<style lang="scss"></style>
