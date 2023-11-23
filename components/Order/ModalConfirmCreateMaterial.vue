<template>
  <v-dialog :model-value="open" width="auto" persistent>
    <v-card class="min-w-[380px] rounded-lg">
      <v-card-text>
        <div class="flex justify-center items-center">
          <v-scroll-x-transition :hide-on-leave="true">
            <div
              v-if="!error"
              class="text-[16px] font-[600] tracking-[-0.05px] leading-[22px] opacity-[0.6]"
            >
              ยืนยันการสร้างเลขพัสดุ
            </div>
            <div
              v-else
              class="text-[16px] font-[600] tracking-[-0.05px] leading-[22px] opacity-[0.6]"
            >
              เครดิตคงเหลือไม่เพียงพอ
            </div>
          </v-scroll-x-transition>
          <v-icon
            size="20"
            @click="
              () => {
                onclose()
                error = false
              }
            "
            class="!absolute right-4 cursor-pointer hover:text-[#084F93] transition-all"
            >fa-solid fa-close</v-icon
          >
        </div>

        <v-scroll-x-transition :hide-on-leave="true">
          <div
            v-if="!error"
            class="flex justify-center items-center mt-2 leading-5 tracking-[-0.032px] opacity-[0.87]"
          >
            กรุณาตรวจสอบข้อมูลก่อนทำรายการ
          </div>
          <div
            v-else
            class="flex justify-center items-center mt-2 leading-5 tracking-[-0.032px] opacity-[0.87]"
          >
            กรุณาตรวจสอบข้อมูลก่อนทำรายการ
          </div>
        </v-scroll-x-transition>
      </v-card-text>

      <v-card-text>
        <v-scroll-x-transition :hide-on-leave="true">
          <div v-if="!error" class="flex justify-center items-center">
            <img src="~/assets/images/9.svg" />
          </div>
          <div v-else class="flex justify-center items-center">
            <img src="~/assets/images/10.svg" />
          </div>
        </v-scroll-x-transition>
      </v-card-text>
      <v-card-text>
        <div
          class="rounded-lg border border-[#EEEDF1] grid grid-cols-2 p-4 gap-1"
        >
          <div class="typography-primary">จำนวนออเดอร์</div>
          <div class="typography-secondary">16 รายการ</div>
          <div class="typography-primary">ยอดเครดิตที่จะถูกจอง</div>
          <div class="typography-secondary">1,600.00 ฿</div>
          <div class="typography-primary">ยอดคงเหลือปัจจุบัน</div>
          <div class="typography-secondary">100,000.00 ฿</div>
          <v-scroll-x-transition :hide-on-leave="true">
            <div v-if="error" class="typography-primary">เครดิตที่ขาด</div>
          </v-scroll-x-transition>
          <v-scroll-x-transition :hide-on-leave="true">
            <div v-if="error" class="typography-secondary">1,000.00 ฿</div>
          </v-scroll-x-transition>
        </div>

        <v-scroll-x-transition :hide-on-leave="true">
          <div
            v-if="!error"
            class="mt-4 space-x-1 box-border flex justify-between"
          >
            <v-btn
              color="#084F93"
              variant="outlined"
              class="!rounded-lg w-1/2 box-border mb-2 min-h-[45px]"
              >ยกเลิก</v-btn
            >
            <v-btn
              variant="flat"
              class="!bg-[#084F93] text-white !rounded-lg w-1/2 box-border mb-2 min-h-[45px]"
              @click="error = !error"
              >ทำรายการเลย</v-btn
            >
          </div>
          <div v-else class="mt-4 space-x-1 box-border flex justify-between">
            <v-btn
              variant="flat"
              class="!bg-[#084F93] text-white !rounded-lg w-full box-border mb-2 min-h-[45px]"
              @click="error = !error"
              >ไปหน้าเติมเงิน</v-btn
            >
          </div>
        </v-scroll-x-transition>
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
const error = ref(false)
</script>

<style scoped>
.typography-primary {
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.032px;
}

.typography-secondary {
  text-align: right;
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.032px;
}
</style>
