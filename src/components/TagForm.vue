<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-white rounded-xl p-6 shadow-xl border border-gray-100 space-y-6"
  >
    <div class="space-y-1">
      <label for="tagName">
        Nombre del Tag
      </label>
      <input id="tagName" v-model="form.tagName" type="text" required
        placeholder="Nombre del tag"
        class="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray"
      >
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
          Crear Tag
        </Button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import Button from '../common/Button.vue';
import type { Tag } from '@/Interfaces/ITag';

const emit = defineEmits<{
  (e: 'submit', tag: Omit<Tag, 'id'>): void
}>();

const initialForm = {
  tagName: ''
};

const form = reactive({ ...initialForm });

const handleSubmit = () => {
  emit('submit', { ...form });
  resetForm();
};

const resetForm = () => {
  Object.assign(form, initialForm);
};
</script>
