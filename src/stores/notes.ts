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
//async function getNotes() {
//notesList.value=notes as Notes[]
//}

/*function addNotes(note:Notes){
  if(!notesList.value.some(((existingNotes)=>
  existingNotes.id===note.id
  ))){
    notesList.value.push(note)
  }
}*/
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
    createdAt:new Date()
  }
  notes.value.push(newNote)
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




return{notes,noteTag,addNotes,fetchNotes,notesList,deleteAll}
})



