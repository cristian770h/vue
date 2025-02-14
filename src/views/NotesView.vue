<script lang="ts" setup>
import NotesForm from '@/components/Notes/NotesForm.vue';
import NotesMap from '@/components/Notes/NotesMap.vue';
import type { Notes } from '@/Interfaces/INotes';
import Button from '@/components/common/Button.vue';
import { useNotesStore } from '@/stores/notes';
import { onMounted, computed } from 'vue';

const notesStore = useNotesStore();

onMounted(async () => {
  await notesStore.fetchNotes();
});

const notes = computed(() => notesStore.notesList);

function handleNoteSubmit(noteData: Omit<Notes, 'id' | 'createdAt'>) {
  notesStore.addNotes(noteData);
}

function deleteNote(note: string) {
  const index = notesStore.notes.findIndex((t) => t.id === note);
  if (index !== -1) {
    notesStore.notes.splice(index, 1);
  }
}

function deleteAll() {
  notesStore.deleteAll();
}
</script>

<template>
  <div class="flex flex-col md:flex-row gap-6 p-6">

    <div class="md:w-1/3 w-full bg-white shadow-md rounded-lg p-4">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Agregar Nota</h2>
      <NotesForm @submit="handleNoteSubmit" />
    </div>


    <div class="md:w-2/3 w-full">

      <div class="flex justify-end mb-4">

        <Button
          class="bg-red-200 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md transition"
          @click="deleteAll"
        >
          Eliminar todo
        </Button>

      </div>


      <div class="grid grid-cols-1 gap-4 overflow-y-auto max-h-[70vh] p-2 bg-white shadow-md rounded-lg border border-gray-200">
        <NotesMap
          v-for="note in notes"
          :key="note.id"
          :note="note"
          @delete="deleteNote"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Personalización del scroll */
div::-webkit-scrollbar {
  width: 8px;
}
div::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius: 4px;
}
div::-webkit-scrollbar-track {
  background: #f0f0f0;
}
</style>
