<template>
  <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
    <h2 class="text-lg font-semibold text-gray-800 mb-4">Crear Etiqueta</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="label" class="block text-sm font-medium text-gray-700">Nombre de la etiqueta:</label>
        <input
          id="label"
          v-model="newTag.label"
          type="text"
          required
          class="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Crear
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useTagsStore } from '@/stores/tags';

const tagsStore = useTagsStore();

const newTag = ref({
  label: '',
});


function handleSubmit() {
  if (newTag.value.label.trim() === '') return;
  tagsStore.createTag(newTag.value);
  newTag.value = { label: '' }; 
}
</script>
