<template>
  <div class="bg-white w-96 shadow-lg rounded-xl border border-gray-200 p-4">
    <div class="space-y-4">
      
      <h3 class="text-lg font-semibold text-gray-900">{{ note.title }}</h3>

      
      <p class="text-gray-600">{{ note.description }}</p>

     
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

      <div class=" bettween">
        <Button
        class=" bg-red-300 hover:bg-red-600 text-white py-2 rounded-md transition"
        @click="$emit('delete', note.id)"
      >
        Eliminar
      </Button>
      <Button
        class=" bg-red-300 hover:bg-red-600 text-white py-2 rounded-md transition"
        @click="$emit('delete', note.id)"
      >
        Eliminar
      </Button>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Notes } from '@/Interfaces/INotes';
import Button from '../common/Button.vue';

const props = defineProps<{ note: Notes }>();

defineEmits<{
  (e: 'delete', id: string): void;
}>();

const formatDueDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(date);
};
</script>
