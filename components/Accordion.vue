<template>
  <div class="w-full">
    <button
      :class="`w-full text-left px-4 py-2 text-lg md:text-xl text-white focus:outline-none ${buttonColor}`"
      @click="toggleAccordion"
    >
      {{ title }}
    </button>
    <div
      v-show="isOpen"
      class="accordion-content px-4 py-2 text-white bg-gray-700"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";

const props = defineProps({
  title: String,
  buttonColor: {
    type: String,
    default: "bg-gray-800 hover:bg-gray-700",
  },
  id: {
    type: String,
    required: true,
  },
});

const openAccordionId = inject("openAccordionId");
const setOpenAccordionId = inject("setOpenAccordionId");

const isOpen = ref(false);

const toggleAccordion = () => {
  if (openAccordionId.value === props.id) {
    setOpenAccordionId(null);
  } else {
    setOpenAccordionId(props.id);
  }
};

watch(
  () => openAccordionId.value,
  (newId) => {
    isOpen.value = newId === props.id;
  }
);
</script>

<style scoped>
.accordion-content {
  transition: max-height 0.3s ease;
}
</style>
