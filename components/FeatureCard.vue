<template>
    <div
      class="flex items-center p-4 border rounded-lg shadow-md bg-white gap-4 hover:shadow-lg transition"
    >
      <!-- Ícone -->
      <div class="text-blue-500 text-5xl">
        <FontAwesomeIcon :icon="icon" />
      </div>
      <!-- Texto -->
      <div class="flex flex-col">
        <span class="font-semibold text-gray-800 text-lg">{{ name }}</span>
        <p v-if="description" class="text-sm text-gray-600">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  
  defineProps({
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  });
  </script>
  
  <style scoped>
  </style>
  