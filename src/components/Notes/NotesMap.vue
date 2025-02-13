<template>

</template>


<script lang="ts" setup>
import { useNotesStore } from '@/stores/notes';
import { onMounted } from 'vue';

const notesStore = useNotesStore()

onMounted(()=>{
  notesStore.notesTagCount()
})

</script>
