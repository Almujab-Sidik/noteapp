<script setup lang="ts">
import Form from "./Form.vue";
import { useRoute, useRouter } from "vue-router";
import { useNoteStore } from "../../../stores/noteStore";
import { ref } from "vue";
import { onMounted } from "vue";
import { computed } from "vue";
import Button from "../../ui/button/Button.vue";

const route = useRoute();
const router = useRouter();
const store = useNoteStore();

const content = ref<string>("");
const noteId = route.params.id;
const char = ref<number>(120);

onMounted(() => {
  const note = store.getNotes.find((n) => n.id === Number(noteId));
  if (!note) {
    router.push("/");
    return;
  }
  content.value = note.content;
});

const isDisabled = computed(() => content.value.trim() === "");

function submit() {
  store.update(Number(noteId), content.value);
  router.push("/");
}
</script>

<template>
  <div class="flex flex-col">
    <Button
      class="text-xs mb-4 cursor-pointer self-start"
      size="sm"
      variant="outline"
      @click="router.back()"
    >
      Back
    </Button>
    <Form
      title="Edit Notes"
      v-model="content"
      @submit="submit"
      :disabled="isDisabled"
      btn-text="Update"
      :maximal-char="char"
    />
  </div>
</template>
