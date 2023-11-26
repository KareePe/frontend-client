<script setup>
const { open, subTitle, title } = defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  open: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <v-snackbar
    multi-line
    :model-value="open"
    location="top"
    timeout="1500"
    class="[&>div]:bg-[#D1FADF] [&>div]:rounded-md [&>div]:box-border [&>div]:border-l-8 [&>div]:border-[#12B76A]"
  >
    <div class="flex items-center space-x-4">
      <v-icon color="#12B76A">mdi-check-circle</v-icon>
      <div>
        <div class="text-black font-bold text-[14px]">
          {{ title }}
        </div>
        <div class="text-black text-[14px]">
          <!-- ตัวเลือกของสินค้าประเภท{{ snackbarFocus }} -->
          {{ subTitle }}
        </div>
      </div>
    </div>
  </v-snackbar>
</template>
