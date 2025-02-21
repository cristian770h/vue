<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 class="text-7xl font-bold text-blue-500">404</h1>
      <h2 class="text-2xl font-semibold text-gray-800 mt-4">Página no encontrada</h2>
      <p class="text-gray-600 mt-2 text-center max-w-md">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      
      <RouterLink
        to="/"
        class="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Volver al inicio
      </RouterLink>
    </div>
  </template>

  <script lang="ts" setup></script>
  