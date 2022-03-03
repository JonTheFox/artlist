<template>
  <div class="add-comment">
    <InputText type="text" v-model="commentBody" />
    <InputText type="text" v-model="commentEmail" />
    <InputText type="text" v-model="commentImgUrl" />
    <button class="btn btn--submit" @click="addComment">Submit</button>
  </div>
</template>
<script setup>
import InputText from "primevue/inputtext";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const commentBody = ref("");
const commentEmail = ref("");
const commentImgUrl = ref("");

function addComment() {
  store.dispatch("comments/addComment", {
    body: commentBody.value,
    email: commentEmail.value,
    img: commentImgUrl.value,
  });
}
</script>

<style lang="scss"></style>
