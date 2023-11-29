<script setup>
import { ref, onMounted, watch } from "vue";

const { open } = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["onClose"]);

const fnHandleClose = () => {
  emit("onClose");
};
</script>

<template>
  <v-dialog :model-value="open" width="680px" persistent>
    <v-card class="w-full rounded-lg">
      <v-card-text>
        <div class="flex justify-between">
          <div class="leading-5 font-bold opacity-title text-black">ทำเคลม</div>
          <v-icon
            size="20"
            @click="fnHandleClose"
            class="cursor-pointer hover:text-[#084F93] transition-all"
            >fa-solid fa-close</v-icon
          >
        </div>
        <div class="flex items-center gap-3 mt-3">
          <div class="leading-5 text-subTitle w-[140px]">หมายเลขออเดอร์</div>
          <v-text-field
            variant="outlined"
            hide-details
            density="compact"
          ></v-text-field>
        </div>
        <div class="flex items-center gap-3 mt-3">
          <div class="leading-5 text-subTitle w-[140px]">หมายเหตุ</div>
          <v-text-field
            variant="outlined"
            hide-details
            density="compact"
          ></v-text-field>
        </div>

        <div class="flex gap-2">
          <v-btn
            variant="outlined"
            color="#084F93"
            class="!rounded-lg mt-4 mb-2 min-h-[45px] w-[calc(50%-8px)]"
            @click="fnHandleClose"
            >ยกเลิก</v-btn
          >
          <v-btn
            variant="flat"
            class="!bg-[#084F93] text-white !rounded-lg mt-4 mb-2 min-h-[45px] w-[calc(50%-8px)]"
            >ตกลง</v-btn
          >
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
