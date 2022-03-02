<template>
  <Card class="comment">
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
      <div class="comment--email-and-text">
        <span class="comment--email">{{ props.email }}</span>
        <div class="comment--text">{{ props.text }}</div>
      </div>
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
  border-radius: 8px;
  transition: all 0.2s;
  opacity: 0.85;
  max-width: 800px;

  .p-card-body {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 8px;
    padding-left: 8px;
  }

  .artlist-btn--like {
    margin-right: 8px;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
  //   .p-card-title {
  //     span {
  //       display: flex;
  //       font-size: 12px;
  //     }
  //   }

  .comment--email-and-text {
    display: flex;
    flex-direction: column;
    .comment--email {
      text-align: left;

      margin-bottom: 4px;
    }
  }

  .p-card-footer {
    display: flex;
    margin-left: 55px;
    padding-top: 18px;
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
      margin-right: 6px;
      margin-top: 24px;
    }

    .comment--text {
      background: rgb(209, 255, 228);
      border-radius: 12px;
      padding: 6px;
    }
  }
}
</style>
