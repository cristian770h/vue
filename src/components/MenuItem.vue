<template>
    <li class="relative group">
      <router-link
        :to="route.path"
        class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        active-class="bg-blue-100 text-blue-600"
        @click="$emit('close-mobile-menu')"
      >
        {{ route.meta.title }}
        <span v-if="hasChildren" class="ml-1">▼</span>
      </router-link>
  
      <!-- Submenú -->
      <ul
        v-if="hasChildren"
        class="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
      >
        <li v-for="child in filteredChildren" :key="child.path">
          <router-link
            :to="child.path"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            active-class="bg-blue-100 text-blue-600"
            @click="$emit('close-mobile-menu')"
          >
            {{ child.meta.title }}
          </router-link>
        </li>
      </ul>
    </li>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    route: {
      type: Object,
      required: true,
    },
  })
  
  const hasChildren = computed(() => props.route.children?.some((child) => child.meta?.menu))
  const filteredChildren = computed(
    () => props.route.children?.filter((child) => child.meta?.menu) || [],
  )
  </script>
  