import { defineStore, acceptHMRUpdate } from "pinia";
import { ref, watch } from "vue";

export const useNoteStore = defineStore("notes", () => {
  const id = ref<number>(parseInt(localStorage.getItem("id") || "0"));

  type Notes = {
    id: number;
    content: string;
  };

  const getNotes = ref<Notes[]>(
    JSON.parse(localStorage.getItem("notes") || "[]")
  );

  function add(notes: { content: string }) {
    if (!notes || !notes.content.trim()) {
      return;
    }

    const newNote = {
      id: id.value++,
      content: notes.content,
    };

    getNotes.value.unshift(newNote);

    localStorage.setItem("id", id.value.toString());
  }

  function deleteNote(id: number) {
    getNotes.value = getNotes.value.filter((note) => note.id !== id);
  }

  function edit(id: number, content: string) {
    const index = getNotes.value.findIndex((note) => note.id === id);
    if (index !== -1) {
      getNotes.value[index].content = content;
    }
  }

  function update(id: number, newContent: string) {
    const note = getNotes.value.find((note) => note.id === id);
    if (note) {
      note.content = newContent;
    }
  }

  watch(
    getNotes,
    (newNotes) => {
      localStorage.setItem("notes", JSON.stringify(newNotes));
    },
    { deep: true }
  );

  watch(id, (newId) => {
    localStorage.setItem("id", newId.toString());
  });

  return {
    getNotes,
    add,
    deleteNote,
    edit,
    update,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNoteStore, import.meta.hot));
}
