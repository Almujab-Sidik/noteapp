<script setup >
import CardNote from "@/components/notes/CardNote.vue";
import { useNoteStore } from "@/stores/noteStore.ts";
import Add from "./form/Add.vue";

const store = useNoteStore();
</script>

<template>
  <Add />
  <template v-if="store.getNotes.length === 0">
    <h1 class="text-center text-muted-foreground text-sm mt-4">
      No notes available
    </h1>
  </template>
  <template v-else>
    <CardNote v-for="note in store.getNotes" :key="note.id" :note="note" />
  </template>
</template>

<style scoped></style>
