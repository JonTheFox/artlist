<template>
  <div class="add-comment">
    <InputField name="email" @input="handleInput($event, 'email')" />
    <InputField name="text" @input="handleInput($event, 'text')" />
    <div class="submit-btn--wrapper">
      <button class="btn btn--submit" @click="addComment" :disabled="!isValid">
        Submit
      </button>
    </div>
  </div>
</template>
<script setup>
import InputText from "primevue/inputtext";
import InputField from "@/components/InputField.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const commentBody = ref("");
const commentEmail = ref("");
// const commentImgUrl = ref("");

function handleInput({ fieldName = "", value = "" }) {
  switch (fieldName) {
    case "email":
      commentEmail.value = value;
      break;
    case "text":
      commentBody.value = value;
      break;
    default:
      return;
  }
}

const isValid = computed(() => commentEmail.value && commentBody.value);

function addComment() {
  // validate first
  if (!isValid.value) return;
  store.dispatch("comments/addComment", {
    body: commentBody.value,
    email: commentEmail.value,
    // img: commentImgUrl.value,
  });
}
</script>
<style lang="scss">
.submit-btn--wrapper {
  display: flex;
  margin-top: 12px;
}
</style>
