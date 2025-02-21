import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { Tags } from '@/Interfaces/ITags';
import { useNotesStore } from './notes';

export const useTagsStore = defineStore('tags', () => {

  const tags = ref<Tags[]>(JSON.parse(localStorage.getItem('tags') || '[]'));
  const loading = ref(false)
  const notesStore = useNotesStore();


  watch(
    tags,
    (newTags) => {
      localStorage.setItem('tags', JSON.stringify(newTags));
    },
    { deep: true },
  );

  async function fetchTags() {
    loading.value = true
    try {

    } catch (error) {
      console.error('Error fetching tasks:', error)
    } finally {
      loading.value = false
    }
  }



  function createTag(newTag: Omit<Tags, 'id'>) {
    const tag: Tags = {
      ...newTag,
      id: crypto.randomUUID(),
    };
    tags.value.push(tag);
  }

  function updateTag(updatedTag: Tags) {
    const index = tags.value.findIndex((tag) => tag.id === updatedTag.id);
    if (index !== -1) {
      tags.value[index] = updatedTag;
    }
  }


  function deleteTag(tagId: string) {

    tags.value = tags.value.filter((tag) => tag.id !== tagId);


    notesStore.removeTagFromNotes(tagId);
  }

  return {
    tags,
    createTag,
    updateTag,
    deleteTag,
    fetchTags,
  };
});
