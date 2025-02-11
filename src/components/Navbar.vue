<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router= useRouter();
const menuRoutes = computed(()=>{
  return router.options.routes.filter(
    (route)=> route.meta?.menu && !route.redirect)
})

</script>

<template>
  <nav class="bg-white shadow-sm">
<div class="max-w-8xl mx-auto px-4">
<div class="flex justify-between h-16">
<RouterLink to="/" class="flex items-center text-xl font-bold">
  Notas
</RouterLink>
<ul class="hidden md:flex space-x-2">
          <MenuItem
            class="place-content-center"
            v-for="route in menuRoutes"
            :key="route.path"
            :route="route"
          />
        </ul>
</div>
</div>
  </nav>
</template>
