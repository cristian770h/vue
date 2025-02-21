<template>
  <div class="flex flex-col md:flex-row gap-6 p-6 max-w-6xl mx-auto">
   
    <div class="md:w-1/3 w-full bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Agregar Nota</h2>
      <NotesForm @submit="handleNoteSubmit" />
    </div>

    
    <div class="md:w-2/3 w-full">
      
      <div class="flex flex-wrap md:flex-nowrap justify-between items-center mb-4 gap-4">
        <select
          v-model="selectedTag"
          class="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Todas las notas</option>
          <option v-for="tag in tags" :key="tag.id" :value="tag.id">
            {{ tag.label }}
          </option>
        </select>

        <p class="text-sm text-gray-700">Total de notas: <span class="font-semibold">{{ notesCount }}</span> </p>

        <Button
          class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md transition"
          @click="deleteAll"
        >
          Eliminar todo
        </Button>
      </div>

      
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-[70vh] p-4 bg-white shadow-lg rounded-xl border border-gray-200"
      >
        <NotesMap
          v-for="note in filteredNotes"
          :key="note.id"
          :note="note"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NotesForm from '@/components/Notes/NotesForm.vue';
import NotesMap from '@/components/Notes/NotesMap.vue';
import type { Notes } from '@/Interfaces/INotes';
import Button from '@/components/common/Button.vue';
import { useNotesStore } from '@/stores/notes';
import { useTagsStore } from '@/stores/tags';
import { onMounted, computed, ref } from 'vue';

const notesStore = useNotesStore();
const tagsStore = useTagsStore();

onMounted(async () => {
  await notesStore.fetchNotes();
});

const notes = computed(() => notesStore.notesList);
const tags = computed(() => tagsStore.tags);

const selectedTag = ref('');

const notesCount = computed(() => filteredNotes.value.length);

const filteredNotes = computed(() => {
  if (!selectedTag.value) {
    return notes.value; 
  }
  return notes.value.filter((note) => note.tag.includes(selectedTag.value));
});



function handleNoteSubmit(noteData: Omit<Notes, 'id' | 'createdAt'>) {
  notesStore.addNotes(noteData);
}

function deleteAll() {
  notesStore.deleteAll();
}
</script>

<style scoped>

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
