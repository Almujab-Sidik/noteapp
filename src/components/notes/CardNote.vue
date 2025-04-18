<script setup lang="ts">
import Button from "../ui/button/Button.vue";
import { useNoteStore } from "../../stores/noteStore.ts";
import Card from "../ui/card/Card.vue";
import CardContent from "../ui/card/CardContent.vue";
import CardFooter from "../ui/card/CardFooter.vue";
import { computed } from "vue";

const store = useNoteStore();

type Note = {
  id: number;
  content: string;
};

const props = defineProps<{
  note: Note;
}>();

const deleteNote = () => {
  store.deleteNote(props.note.id);
};

const editNote = () => {
  store.update(props.note.id, props.note.content);
};

const characterLength = computed(() => {
  const length = props.note.content.length;
  const desc = props.note.content.length === 1 ? "character" : "characters";
  return `${length} ${desc}`;
});
</script>

<template>
  <Card>
    <CardContent class="text-sm tracking-tight flex flex-col">
      {{ props.note.content }}

      <span class="text-right mt-4 text-muted-foreground text-xs">{{
        characterLength
      }}</span>
    </CardContent>
    <CardFooter class="flex overflow-hidden gap-2">
      <RouterLink :to="`/edit/${props.note.id}`" class="flex-1">
        <Button
          @click="editNote"
          size="sm"
          variant="outline"
          class="w-full cursor-pointer"
        >
          Edit
        </Button>
      </RouterLink>
      <Button
        @click="deleteNote"
        size="sm"
        variant="destructive"
        class="flex-1 cursor-pointer"
      >
        Delete
      </Button>
    </CardFooter>
  </Card>
</template>
