<template>
  <Card class="comment">
    <template #title>
      <span class="comment--email">{{ props.email }}</span>
    </template>
    <template #content>
      <Avatar
        :image="
          props.img ||
          'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'
        "
        class="comment--avatar mr-2"
        size="xlarge"
        shape="circle"
      />
      <div class="comment--text">{{ props.text }}</div>
    </template>
    <template #footer>
      <Button class="artlist-btn artlist-btn--like" :disabled="true">
        Like
      </Button>
      <Button class="artlist-btn artlist-btn--reply" :disabled="true">
        Reply
      </Button>
    </template>
  </Card>
</template>

<script setup>
import { defineProps } from "vue";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";

const props = defineProps({
  email: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss">
.comment.p-card {
  margin: 16px;
  border-radius: 6px;
  transition: all 0.2s;
  opacity: 0.85;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
  .p-card-title {
    span {
      display: flex;
      font-size: 12px;
    }
  }
  .p-card-footer {
    display: flex;
    margin-left: 55px;
  }
  .p-card-content {
    display: flex;
    flex-direction: row;
    padding: 0;

    .p-avatar-image {
      margin-right: 6px;
      padding: 2px;
      height: 100%;
      width: 100%;
      max-width: 48px;
      max-height: 48px;
      margin: auto;
      margin-right: 6px;
    }

    .comment--text {
      background: rgb(209, 255, 228);
      border-radius: 12px;
      padding: 6px;
    }
  }
}
</style>
