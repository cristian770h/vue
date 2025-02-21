<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-200">
    <h1 class="text-2xl font-semibold mb-4">Editar Nota</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700">Título</label>
        <input
          type="text"
          id="title"
          v-model="note.title"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div class="mb-4">
        <label for="content" class="block text-sm font-medium text-gray-700">Contenido</label>
        <textarea
          id="content"
          v-model="note.content"
          rows="4"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="tag" class="block text-sm font-medium text-gray-700">Tag</label>
        <select
          id="tag"
          v-model="note.tag"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option v-for="tag in tags" :key="tag.id" :value="tag.id">{{ tag.label }}</option>
        </select>
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition"
        >
          Guardar
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineComponent, onMounted, ref } from 'vue';
import { useNotesStore } from '@/stores/notes';
import { useTagsStore } from '@/stores/tags';

const notesStore = useNotesStore();
const tagsStore = useTagsStore();

const props = defineProps({
  noteId: {
    type: String,
    required: true,
  },
});



</script>

<style scoped>
/* Añadir estilos personalizados si es necesario */
</style>
