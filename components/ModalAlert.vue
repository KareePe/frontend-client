<script setup>
import { ref, onMounted, watch } from "vue"

const { open, onsubmit, onclose, type, errorText, successText } = defineProps({
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
  },
  type: {
    type: String,
    default: "success"
  },
  successText: String,
  errorText: String
})

// onUpdated(() => {
//   setTimeout(() => {
//     onclose()
//   }, 1000);
// })
</script>

<template>
  <v-dialog :model-value="open" width="350px" persistent>
    <v-card v-if="type === 'error'" class="w-full rounded-lg">
      <v-card-text>
        <div class="absolute right-5">
          <v-icon
            size="20"
            @click="
              () => {
                onclose()
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
          <div
            class="text-center text-[12px] leading-4 opacity-subTitle mt-2 mb-2"
          >
            {{ errorText}}
          </div>
        </div>
      </v-card-text>
    </v-card>
    <v-card v-else class="w-full rounded-lg">
      <v-card-text>
        <div class="absolute right-5">
          <v-icon
            size="20"
            @click="
              () => {
                onclose()
              }
            "
            class="cursor-pointer hover:text-[#084F93] transition-all"
            >fa-solid fa-close</v-icon
          >
        </div>

        <div class="flex justify-center items-center flex-col">
          <div
            class="bg-[#12B76A] w-[50px] h-[50px] rounded-full flex justify-center items-center"
          >
            <v-icon size="40" color="#fff">fa-solid fa-check</v-icon>
          </div>

          <div class="mt-4 text-title font-[600] leading-[22px] tracking-31">
            สำเร็จ
          </div>
          <div
            class="text-center text-[12px] leading-4 opacity-subTitle mt-2 mb-2"
          >
            {{ successText }}
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
