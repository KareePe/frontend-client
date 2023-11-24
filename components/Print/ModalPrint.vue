<script setup>
import { ref, onMounted, watch } from "vue"

const { open, onsubmit, onclose } = defineProps({
  open: {
    type: Boolean,
    default: true
  },
  onsubmit: {
    type: Function,
    default: () => {}
  },
  onclose: {
    type: Function,
    default: () => {}
  }
})
</script>

<template>
  <v-dialog :model-value="open" width="350px" persistent>
    <v-card class="w-full rounded-lg">
      <v-card-text>
        <div class="absolute right-5">
          <v-icon
            size="20"
            @click="
              () => {
                onclose()
                value = ''
              }
            "
            class="cursor-pointer hover:text-[#084F93] transition-all"
            >fa-solid fa-close</v-icon
          >
        </div>

        <div class="flex justify-center items-center flex-col">
          <v-icon size="50" color="#BA1A1A"
            >fa-solid fa-circle-exclamation</v-icon
          >
          <div class="mt-4 text-title font-[600] leading-[22px] tracking-31">
            คำเตือน!
          </div>
          <div class="text-center text-[12px] leading-4 opacity-subTitle mt-2">
            คุณยังไม่ได้ทำเครื่องหมายว่าพิมพ์แล้ว
          </div>
        </div>

        <div class="flex gap-2">
          <v-btn
            variant="outlined"
            color="#084F93"
            class="!rounded-lg mt-4 mb-2 min-h-[45px] w-[calc(50%-8px)]"
            >ยกเลิก</v-btn
          >
          <v-btn
            variant="flat"
            class="!bg-[#084F93] text-white !rounded-lg mt-4 mb-2 min-h-[45px] w-[calc(50%-8px)]"
            @click="() => onsubmit(value)"
            >ตกลง</v-btn
          >
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
