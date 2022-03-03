<template>
  <Card class="comment">
    <template #content>
      <Avatar
        :image="
          props.comment?.img ||
          'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'
        "
        class="comment--avatar"
        size="xlarge"
        shape="circle"
      />
      <div class="comment--email-and-text">
        <span class="comment--email">{{ props.comment?.email }}</span>
        <div class="comment--text">{{ props.comment?.body }}</div>
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
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";

const props = defineProps({
  comment: {
    email: {
      type: String,
      default: "",
    },
    body: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss">
$color_green: rgb(209, 255, 228);

// for screens larger than mobile (tablets, laptops, desktops, etc.)
@media only screen and (min-width: 601px) {
  .comment.p-card {
    opacity: 0.85;
    &:hover {
      opacity: 1;
      transform: scale(1.05);
    }
  }
}

// for mobile
@media only screen and (max-width: 600px) {
  .comment.p-card {
    opacity: 1;
    &:hover {
      transform: scale(1);
    }
  }
}

.comment.p-card {
  margin: 16px;
  border-radius: 8px;
  transition: all 0.2s;
  max-width: 800px;

  .p-card-body {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 8px;
    padding-left: 8px;
  }

  .artlist-btn {
    border: none;
    background: transparent;
    color: gray;
    &.artlist-btn--like {
      margin-right: 8px;
    }
  }

  .comment--email-and-text {
    display: flex;
    flex-direction: column;
    .comment--email {
      font-size: 12px;
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
      background: $color_green;
      border-radius: 12px;
      padding: 6px;
    }
  }
}
</style>
