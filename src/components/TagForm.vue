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
          class="w-full text-black mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p v-if="submitted && isLabelEmpty" class="text-red-500 text-sm mt-1">El nombre de la etiqueta no puede estar vacío</p>
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
import { ref, computed } from 'vue';
import { useTagsStore } from '@/stores/tags';

const tagsStore = useTagsStore();

const newTag = ref({
  label: '',
});

const submitted = ref(false);

const isLabelEmpty = computed(() => newTag.value.label.trim() === '');

function handleSubmit() {
  submitted.value = true;
  if (isLabelEmpty.value) return;
  tagsStore.createTag(newTag.value);
  newTag.value = { label: '' };
  submitted.value = false;
}
</script>
