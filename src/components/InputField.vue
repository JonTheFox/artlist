<template>
  <div :class="`field ${props.name || 'unnamed'}-field`">
    <label :for="props.name">
      {{ props.name || "" }}
    </label>
    <InputText
      :id="props.name"
      type="text"
      :aria-describedby="`${name}-help`"
      :class="[`field ${name}-field`, !fieldValue && 'p-invalid']"
      v-model="fieldValue"
      @input="handleInput"
    />
    <small id="username2-help" class="p-error" v-if="!fieldValue"
      >Please enter your {{ props.name }}</small
    >
  </div>
</template>

<script setup>
import InputText from "primevue/inputtext";
import { defineEmits, defineProps, ref } from "vue";

const fieldValue = ref("");

const emit = defineEmits(["input"]);

function handleInput(event) {
  const text = event.target.value;
  emit("input", { value: text, fieldName: props.name });
}

const props = defineProps({
  name: {
    default: "",
    type: String,
  },
});
</script>
