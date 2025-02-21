import type { Notes } from "@/Interfaces/INotes";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";



export const useNotesStore = defineStore('note',()=>{
  const notes =ref<Notes[]>(JSON.parse(localStorage.getItem('notes')||'[]'))
  const loading = ref(false)


  const notesList = computed(()=>notes.value)
  //const notesCount = computed(()=> notesList.value.length)
//const notesTagCount =computed(()=>notes.value.length)
const noteTag= computed(()=>notes.value.filter((notes)=>notes.tag))



 async function fetchNotes() {
    loading.value = true
    try {

    } catch (error) {
      console.error('Error fetching tasks:', error)
    } finally {
      loading.value = false
    }
  }



function addNotes(note:Omit<Notes,'id'|'createdAt'>){
  const newNote:Notes={
    ...note,
    id:crypto.randomUUID(),
    createdAt:new Date(),
    tag: note.tag||[],
  }
  notes.value.push(newNote)
}

function assignTagsToNote(noteId: string, tagIds: string[]) {
  const note = notes.value.find((note) => note.id === noteId);
  if (note) {
    note.tag = tagIds; 
  }
}

watch(
  notes,
  (newNotes)=>{
    localStorage.setItem('notes',JSON.stringify
      (newNotes)
    )},
    {deep:true},
)

function deleteAll(){
  notes.value=[]
}


function removeTagFromNotes(tagId: string) {
  notes.value = notesList.value.map((note) => ({
    ...note,
    tags: note.tag.filter((tag) => tag !== tagId)  
  }));
}



function deleteNotes(noteId: string) {
  notes.value = notesList.value.filter((note) => note.id !== noteId);
}



return{notes,noteTag,addNotes,fetchNotes,notesList,deleteAll,assignTagsToNote,removeTagFromNotes,deleteNotes}
})



