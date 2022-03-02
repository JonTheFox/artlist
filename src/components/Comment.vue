<template>
  <Card>
    <template #header>
      <div class="col-12 md:col-4">
        <div class="card">
          <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
          <Avatar
            icon="pi pi-user"
            class="mr-2"
            size="large"
            style="background-color: #2196f3; color: #ffffff"
            shape="circle"
          />
          <Avatar
            icon="pi pi-user"
            class="mr-2"
            style="background-color: #9c27b0; color: #ffffff"
            shape="circle"
          />
        </div>
      </div>
    </template>

    <template #content>
      <div>{{ props.email }}</div>
      <div>{{ props.text }}</div>
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
