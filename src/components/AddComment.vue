<template>
  <div class="add-comment">
    <InputField name="email" @input="handleInput($event, 'email')" />
    <InputField name="text" @input="handleInput($event, 'text')" />
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

function handleInput({ fieldName = "", value = "" }) {
  debugger;
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

function addComment() {
  store.dispatch("comments/addComment", {
    body: commentBody.value,
    email: commentEmail.value,
    img: commentImgUrl.value,
  });
}
</script>

<style lang="scss">
.field {
  label {
    margin-right: 8px;
  }
}
</style>
