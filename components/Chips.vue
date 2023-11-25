<template>
  <span
    class="bg-[#EEEDF1] text-[#0BA5EC] whitespace-nowrap text-sm font-medium me-2 py-[2px] px-[12px] rounded-full select-none cursor-pointer"
    >{{ text }}</span
  >
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
const { text } = defineProps(["text"]);
</script>
