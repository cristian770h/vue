<template>
  <div class="bg-white w-96 shadow-lg rounded-xl border border-gray-200 p-4">
    <div class="space-y-4">
      
      <h3 class="text-lg font-semibold text-gray-900">{{ note.title }}</h3>

      
      <p class="text-gray-600">{{ note.description }}</p>

    
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tagId in note.tag.filter((tagId) => getTagLabel(tagId) !== 'Desconocido')"
          :key="tagId"
          class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
        >
          {{ getTagLabel(tagId) }}
        </span>
      </div>

      
      <div class="grid grid-cols-2 gap-2 text-sm text-gray-500">
        <div>
          <span class="font-medium text-gray-700">Inicio:</span>
          <time :datetime="note.dateStart">{{ formatDueDate(note.dateStart) }}</time>
        </div>
        <div>
          <span class="font-medium text-gray-700">Fin:</span>
          <time :datetime="note.dateEnd">{{ formatDueDate(note.dateEnd) }}</time>
        </div>
      </div>

      
      <div class="flex justify-between">
        <Button
          class="bg-red-300 hover:bg-red-600 text-white py-2 rounded-md transition"
          @click="deleteNote(note.id)"
        >
          Eliminar
        </Button>
        <RouterLink
        :to="{ name: 'Edit', params: { id: note.id.toString() } }"
        >
          <Button
          class="bg-blue-300 hover:bg-blue-600 text-white py-2 rounded-md transition"
          
        >
          Editar
        </Button>
        </RouterLink>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Notes } from '@/Interfaces/INotes';
import Button from '../common/Button.vue';
import { useTagsStore } from '@/stores/tags';
import { useNotesStore } from '@/stores/notes';

const props = defineProps<{ note: Notes }>();


const noteStorage= useNotesStore();
const tagsStore = useTagsStore();


function getTagLabel(tagId: string) {
  const tag = tagsStore.tags.find((tag) => tag.id === tagId);
  return tag ? tag.label : 'Desconocido';
}

function deleteNote(noteId:string){
  if(confirm('Deseas eliminar esta nota')){
    noteStorage.deleteNotes(noteId)
  }
}



const formatDueDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(date);
};
</script>