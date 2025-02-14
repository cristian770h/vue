

<template>
<form
@submit.prevent="handleSubmit"
class="bg-white rounded-xl p-6 shadow-xl border border-gray-100 space-y-6"
>
<div class="space-y-1">
  <label for="title">
    Titulo
  </label>
  <input id="tittle" v-model="form.title" type="text" required
placeholder="Titulo de la tarea"
class="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border.blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray"
  >
</div>
<div class="space-y-1">
  <label for="description">
    Descripción
  </label>
  <input id="description" v-model="form.description" type="text" required
placeholder="descripción de la nota"
rows="3"
class="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border.blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray"
  >
</div>

<div class=" flex-col">
      <div class="space-y-1">
        <label for="priority" class="block text-sm font-medium text-gray-700"> Prioridad </label>
        <div class="relative">
          <select
            id="tag"
            v-model="form.tag"
            class="w-full pl-4 pr-10 py-2.5 appearance-none rounded-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          >
            <option value="trabajo">Trabajo</option>
            <option value="personal"> Personal</option>
            <option value="urgente">Alta Prioridad</option>
          </select>
        </div>
      </div>


      <div class="space-y-1">
        <label for="dueDate" class="block text-sm font-medium text-gray-700">
          Fecha de Vencimiento <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <input
            id="dateStart"
            v-model="form.dateStart"
            type="date"
            required
            class="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />

        </div>
      </div>

      <div class="space-y-1">
        <label for="dueDate" class="block text-sm font-medium text-gray-700">
          Fecha de Vencimiento <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <input
            id="dateEnd"
            v-model="form.dateEnd"
            type="date"
            required
            class="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />

        </div>
      </div>
</div>

<div class=" pt-6 border-t border-gray-100">
      <div class="flex  sm:flex-row sm:justify-end gap-3">
        <Button
          type="button"

          @click="resetForm"
          class="w-full sm:w-auto px-6 py-2.5"
        >
          Limpiar Formulario
        </Button>
        <Button type="submit"  class="w-full sm:w-auto px-6 py-2.5">

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

const emit = defineEmits<{
  (e:'submit',note:Omit<Notes, 'id' | 'createdAt'>):void}>()


const initialForm={
  title:'',
  description:'',
  tag: 'trabajo' as const ,
  dateStart: '',
  dateEnd:''
}

const form = reactive({...initialForm})

const handleSubmit=()=>{
  emit('submit',{
    ...form,
    dateStart:new Date(form.dateStart),
    dateEnd:new Date(form.dateEnd)
  })
  resetForm()
}
const resetForm=() =>{
  Object.assign(form,initialForm)
}

</script>
