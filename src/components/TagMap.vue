<template>
  <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Etiquetas</h2>

    <ul class="space-y-3">
      <li
        v-for="tag in tags"
        :key="tag.id"
        class="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
      >
        <span class="text-gray-700 font-medium">{{ tag.label }}</span>

        <div class="space-x-2">
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition"
            @click="editTag(tag)"
          >
            Editar
          </button>
          <button
            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition"
            @click="deleteTag(tag.id)"
          >
            Eliminar
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Tags } from '@/Interfaces/ITags';
import { useTagsStore } from '@/stores/tags';

const tagsStore = useTagsStore();


const tags = tagsStore.tags;


function editTag(tag: Tags) {
  const newLabel = prompt('Editar etiqueta', tag.label);
  if (newLabel) {
    tagsStore.updateTag({ ...tag, label: newLabel });
  }
}


function deleteTag(tagId: string) {
  if (confirm('¿Estás seguro de eliminar esta etiqueta?')) {
    tagsStore.deleteTag(tagId);
  }
}
</script>
