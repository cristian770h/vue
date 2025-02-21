<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-white rounded-xl p-6 shadow-xl border border-gray-100 space-y-6"
  >
    
    <div class="space-y-1">
      <label for="title"> Título </label>
      <input
        id="title"
        v-model="form.title"
        type="text"
        required
        placeholder="Título de la tarea"
        class="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray"
      />
    </div>

    
    <div class="space-y-1">
      <label for="description"> Descripción </label>
      <textarea
        id="description"
        v-model="form.description"
        required
        placeholder="Descripción de la nota"
        rows="3"
        class="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray"
      ></textarea>
    </div>

   
    <div class="space-y-1">
      <label class="block text-sm font-medium text-gray-700"> Etiquetas </label>
      <div v-for="tag in predefinedTags" :key="tag.id" class="flex items-center">
        <input
          type="checkbox"
          :value="tag.id"
          v-model="form.selectedTags"
          class="mr-2"
        />
        <span>{{ tag.label }}</span>
      </div>
    </div>

    
    <div class="space-y-1">
      <label for="dateStart" class="block text-sm font-medium text-gray-700">
        Fecha de Inicio <span class="text-red-500">*</span>
      </label>
      <input
        id="dateStart"
        v-model="form.dateStart"
        type="date"
        required
        class="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
      />
    </div>

    
    <div class="space-y-1">
      <label for="dateEnd" class="block text-sm font-medium text-gray-700">
        Fecha de Fin <span class="text-red-500">*</span>
      </label>
      <input
        id="dateEnd"
        v-model="form.dateEnd"
        type="date"
        required
        class="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
      />
    </div>

    
    <div class="pt-6 border-t border-gray-100">
      <div class="flex sm:flex-row sm:justify-end gap-3">
        <Button
          type="button"
          @click="resetForm"
          class="w-full sm:w-auto px-6 py-2.5"
        >
          Limpiar Formulario
        </Button>
        <Button type="submit" class="w-full sm:w-auto px-6 py-2.5">
          Crear Tarea
        </Button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import Button from '../common/Button.vue';
import type { Notes } from '@/Interfaces/INotes';
import { useTagsStore } from '@/stores/tags';

const emit = defineEmits<{
  (e: 'submit', note: Omit<Notes, 'id' | 'createdAt'>): void;
}>();


const tagsStore = useTagsStore();
const predefinedTags = tagsStore.tags;

const initialForm = {
  title: '',
  description: '',
  selectedTags: [] as string[], 
  dateStart: '',
  dateEnd: '',
};

const form = reactive({ ...initialForm });

const handleSubmit = () => {
  emit('submit', {
    ...form,
    tag: form.selectedTags, 
    dateStart: new Date(form.dateStart),
    dateEnd: new Date(form.dateEnd),
  });
  resetForm();
};

const resetForm = () => {
  Object.assign(form, initialForm);
};
</script>