import type {Tags} from "@/Interfaces/ITags";
import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";



export const useTagStore = defineStore('tag',()=>{
  const tags= ref<Tags[]>(JSON.parse(localStorage.getItem('tags')||'[]'))


function addTag(tag:Omit<Tags,'id'>){
  const newTag:Tags={
    ...tag,
    id:crypto.randomUUID(),
  }
  tags.value.push(newTag)
}


return {tags,addTag}

})
