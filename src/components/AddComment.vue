<template>
  <div class="add-comment">
    <InputField name="email" />
    <InputField name="comment" />
    <button class="btn btn--submit" @click="addComment">Submit</button>
  </div>
</template>
<script setup>
import InputText from "primevue/inputtext";
import InputField from "@/components/InputField.vue";
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const commentBody = ref("");
const commentEmail = ref("");
const commentImgUrl = ref("");

function handleInput({ data }, fieldName) {
  commentEmail.value = data;
}

function addComment() {
  store.dispatch("comments/addComment", {
    body: commentBody.value,
    email: commentEmail.value,
    img: commentImgUrl.value,
  });
}
</script>

<style lang="scss"></style>
