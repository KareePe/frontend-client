<template>
  <v-dialog :model-value="open" width="auto" persistent>
    <v-card class="min-w-[380px] rounded-lg">
      <v-card-text>
        <div class="flex justify-center items-center">
          <div
            class="text-[16px] font-[600] tracking-[-0.05px] leading-[22px] opacity-[0.6]"
          >
            เลขติดตามสถานะ
          </div>
          <v-icon
            size="20"
            @click="
              () => {
                onclose()
                value = ''
              }
            "
            class="!absolute right-4 cursor-pointer hover:text-[#084F93] transition-all"
            >fa-solid fa-close</v-icon
          >
          <!-- <v-btn variant="text" icon="fa-solid fa-close" class="!absolute right-0"></v-btn> -->
        </div>
      </v-card-text>
      <v-card-text>
        <v-text-field
          placeholder="ระบุดลขติดตามสถานะ"
          class="!rounded-lg"
          variant="outlined"
          v-model="value"
          hide-details
        ></v-text-field>
        <v-btn
          variant="flat"
          class="!bg-[#084F93] text-white !rounded-lg w-full mt-4 mb-2 min-h-[45px]"
          @click="() => onsubmit(value)"
          >ยืนยัน</v-btn
        >
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
const value = ref("")
const { open, onsubmit, onclose } = defineProps({
  open: {
    type: Boolean,
    default: false
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
