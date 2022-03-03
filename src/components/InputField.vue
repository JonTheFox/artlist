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
    <div class="error-container">
      <small :id="`${props.name}-help`" class="p-error" v-if="!fieldValue"
        >Please enter your {{ props.name }}</small
      >
    </div>
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

<style lang="scss">
.field {
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  margin-bottom: 8px;

  .error-container {
    display: flex;

    small {
      margin: auto 8px;
    }
  }

  label {
    margin-right: 8px;
    min-width: 50px;
    margin: auto 0;
    text-align: left;
  }
}
</style>
