<template>
  <section class="w-full max-w-7xl mx-auto px-4">
    <h1 class="text-blue-500 text-6xl md:text-8xl lg:text-7xl font-sans leading-tight mb-12 mt-16 text-center">
      <strong>Serviços</strong>
    </h1>

    <div class="relative overflow-hidden rounded-lg shadow-xl max-w-4xl mx-auto">
      <!-- Imagem Principal -->
      <div class="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <TransitionGroup name="fade">
          <img
            v-for="(image, index) in images"
            :key="image.src"
            :src="image.src"
            :alt="image.alt"
            v-show="currentIndex === index"
            class="absolute inset-0 w-full h-full object-contain bg-gray-100"
          />
        </TransitionGroup>
      </div>

      <!-- Controles -->
      <button
        @click="prev"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        @click="next"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Indicadores -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        <button
          v-for="(_, index) in images"
          :key="index"
          @click="currentIndex = index"
          class="w-3 h-3 rounded-full transition-colors"
          :class="currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'"
        ></button>
      </div>
    </div>

    <!-- Miniaturas -->
    <div class="flex justify-center gap-4 mt-6 overflow-x-auto pb-4 max-w-4xl mx-auto">
      <button
        v-for="(image, index) in images"
        :key="image.src"
        @click="currentIndex = index"
        class="relative flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden transition-transform hover:scale-105"
        :class="currentIndex === index ? 'ring-2 ring-blue-500' : ''"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-contain bg-gray-50"
        />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Importar as imagens
import v1 from '@/assets/images/v1.png';
import v2 from '@/assets/images/v2.png';
import v3 from '@/assets/images/v3.png';

const images = [
  { src: v1, alt: 'Serviço 1' },
  { src: v2, alt: 'Serviço 2' },
  { src: v3, alt: 'Serviço 3' }
];

const currentIndex = ref(0);
let autoplayInterval = null;

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const startAutoplay = () => {
  stopAutoplay();
  autoplayInterval = setInterval(next, 5000);
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.overflow-x-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>