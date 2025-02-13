import type { Notes } from "@/Interfaces/INotes";
import { defineStore } from "pinia";
import { computed, ref, watch, type Ref } from "vue";



export const useNotesStore = defineStore('note',()=>{
  const notes =ref<Notes[]>(JSON.parse(localStorage.getItem('notes')||'[]'))
  const notesList= ref([]) as Ref<Notes[]>

  const notesCount = computed(()=> notesList.value.length)
const notesTagCount =computed(()=>notes.value.length)
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

function getNotes(){
notesList.value=
}

function addNotes(note:Omit<Notes,'id'|'createdAt '>){
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
    localStorage.setItem('tasks',JSON.stringify
      (newNotes)
    )},
    {deep:true},
)




return{notesList,notesCount,notesTagCount,noteTag,addNotes}
})



