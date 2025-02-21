<script setup lang="ts">
import TagForm from '@/components/TagForm.vue';
import TagMap from '@/components/TagMap.vue';
import { useTagsStore } from '@/stores/tags';
import { onMounted } from 'vue';

const tagStore = useTagsStore();

onMounted(() => {
  tagStore.fetchTags();
  console.log('hola',[tagStore.fetchTags()])
});
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-2xl font-semibold text-gray-800 mb-6">Gestión de Etiquetas</h1>

    <div class="grid md:grid-cols-2 gap-6">
      
      <div class="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
        <h2 class="text-lg font-semibold mb-4">Añadir Nueva Etiqueta</h2>
        <TagForm />
      </div>

      
      <div class="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">Lista de Etiquetas</h2>
        <TagMap />
      </div>

     
    </div>
  </div>
</template>

<style scoped>
/* Agregar un efecto sutil a los contenedores */
div:hover {
  transition: all 0.3s ease-in-out;
}
</style>
