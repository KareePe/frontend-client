<script setup>
import { ref, onMounted, watch } from "vue";

const { open, onsubmit, onclose, type, errorText, successText } = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
  onsubmit: {
    type: Function,
    default: () => {},
  },
  onclose: {
    type: Function,
    default: () => {},
  },
  type: {
    type: String,
    default: "success",
  },
  successText: String,
  errorText: String,
});
</script>

<template>
  <v-dialog :model-value="open" width="350px">
    <v-card class="w-full rounded-lg">
      <v-card-text>
        <div class="absolute right-5">
          <v-icon
            size="20"
            @click="
              () => {
                onclose();
              }
            "
            class="cursor-pointer hover:text-[#084F93] transition-all"
            >fa-solid fa-close</v-icon
          >
        </div>

        <div class="flex justify-center items-center flex-col">
          <v-icon size="40" color="#084F93"
            >fa-solid fa-arrow-rotate-left</v-icon
          >

          <div class="mt-4 text-title font-[600] leading-[22px] tracking-31">
            ตีพัสดุกลับ
          </div>
          <div
            class="text-center text-[12px] leading-4 opacity-subTitle mt-2 mb-2"
          >
            ตีพัสดุกลับสำเร็จ พัสดุของท่านอยู่ระหว่างตีกลับมายังคลัง
          </div>
        </div>

        <v-btn color="#084F93" variant="flat" class="rounded-lg w-full">
          ยืนยัน
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
