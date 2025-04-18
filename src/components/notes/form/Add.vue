<script setup lang="ts">
import { ref, computed } from "vue";
import { useNoteStore } from "../../../stores/noteStore";
import Form from "./Form.vue";

const content = ref<string>("");
const store = useNoteStore();

const char = ref<number>(120);

const isDisabled = computed(() => {
  return content.value.trim() === "";
});

function submit() {
  if (!content.value.trim()) return;

  store.add({
    content: content.value,
  });
  content.value = "";
}
</script>

<template>
  <Form
    v-model="content"
    title="Add Notes"
    @submit="submit"
    :disabled="isDisabled"
    btn-text="Submit"
    :maximal-char="char"
  />
</template>
