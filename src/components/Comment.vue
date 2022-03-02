<template>
  <Card class="comment">
    <template #title>
      <span>{{ props.email }}</span>
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
      <Button icon="pi pi-check" label="Save" />
      <Button
        icon="pi pi-times"
        label="Cancel"
        class="p-button-secondary"
        style="margin-left: 0.5em"
      />
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
  .p-card-title {
    span {
      display: flex;
      font-size: 12px;
    }
  }
  .p-card-content {
    display: flex;
    flex-direction: row;
    padding: 0;

    .p-avatar-image {
      width: 48px;
      min-width: 48px;
      height: 48px;

      margin-right: 6px;
      padding: 2px;
    }

    .comment--text {
      background: rgb(209, 255, 228);
      border-radius: 12px;
    }
  }
}
</style>
