import type { Notes } from "@/Interfaces/INotes";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useNotesStore = defineStore('note', () => {
  const notes = ref<Notes[]>(JSON.parse(localStorage.getItem('notes') || '[]'));
  const loading = ref(false);

  const notesList = computed(() => notes.value);
  const noteTag = computed(() => notes.value.filter((note) => note.tag));

  async function fetchNotes() {
    loading.value = true;
    try {
      // Lógica para obtener las notas
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      loading.value = false;
    }
  }

  function addNotes(note: Omit<Notes, 'id' | 'createdAt'>) {
    const newNote: Notes = {
      ...note,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      tag: note.tag || [],
    };
    notes.value.push(newNote);
  }

  function assignTagsToNote(noteId: string, tagIds: string[]) {
    const note = notes.value.find((note) => note.id === noteId);
    if (note) {
      note.tag = tagIds;
    }
  }

  function updateNote(id: string, updatedNote: Partial<Notes>) {
    const index = notes.value.findIndex(note => note.id === id);
    if (index !== -1) {
      notes.value[index] = { ...notes.value[index], ...updatedNote };
    }
  }

  function deleteAll() {
    notes.value = [];
  }

  function removeTagFromNotes(tagId: string) {
    notes.value = notesList.value.map((note) => ({
      ...note,
      tag: note.tag.filter((tag) => tag !== tagId)
    }));
  }

  function deleteNotes(noteId: string) {
    notes.value = notesList.value.filter((note) => note.id !== noteId);
  }

  const getNoteById = (id: string) => {
    return notesList.value.find(note => note.id === id);
  };

  watch(
    notes,
    (newNotes) => {
      localStorage.setItem('notes', JSON.stringify(newNotes));
    },
    { deep: true },
  );

  return {
    notes,
    noteTag,
    addNotes,
    fetchNotes,
    notesList,
    deleteAll,
    assignTagsToNote,
    removeTagFromNotes,
    deleteNotes,
    getNoteById,
    updateNote,
  };
});
