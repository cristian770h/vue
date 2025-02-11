import type { Notes } from "@/Interfaces/INotes";
import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

//importammos las notas del json
import notes from '@/data/notes/notes.json';


export const useNotesStore = defineStore('notes',()=>{
  const notesList= ref([]) as Ref<Notes[]>

  const notesCount = computed(()=> notesList.value.length)

async function getNotes() {
notesList.value=notes as Notes[]
}

return{notesList,notesCount,getNotes}
})



