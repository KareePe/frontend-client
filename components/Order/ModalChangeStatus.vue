<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
const value = ref("");
const submitValue = ref("");
const cancelComment = ref([]);
const commentField = ref("");
const { open, onsubmit, onclose } = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  onsubmit: {
    type: Function,
    default: () => {},
  },
  onclose: {
    type: Function,
    default: () => {},
  },
});
</script>

<template>
  <v-dialog :model-value="open" width="380px" persistent>
    <v-card class="rounded-lg">
      <v-card-text>
        <div class="flex justify-center items-center">
          <v-scroll-x-transition hide-on-leave>
            <div
              v-if="submitValue !== 'cancel'"
              class="text-[16px] font-[600] tracking-[-0.05px] leading-[22px] opacity-[0.6]"
            >
              เปลี่ยนสถานะ
            </div>

            <div
              v-else
              class="text-[16px] font-[600] tracking-[-0.05px] leading-[22px] opacity-[0.6]"
            >
              เหตุผลในการยกเลิก
            </div>
          </v-scroll-x-transition>
          <v-icon
            size="20"
            @click="
              () => {
                onclose();
                value = '';
              }
            "
            class="!absolute right-4 cursor-pointer hover:text-[#084F93] transition-all"
            >fa-solid fa-close</v-icon
          >
        </div>
      </v-card-text>
      <v-scroll-x-transition hide-on-leave>
        <v-card-text v-if="submitValue !== 'cancel'">
          <div id="sending">
            <div class="text-subTitle leading-5 tracking-23 text-[#74777F]">
              ที่ต้องจัดส่ง
            </div>
            <div class="mt-2 rounded-lg border border-[#EEEDF1] pl-2 py-1">
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                v-model="value"
                label="รอดำเนินการ"
                true-value="wating"
                color="#084F93"
                false-icon="fa-regular fa-circle"
                true-icon="fa-regular fa-circle-dot"
              ></v-checkbox>
            </div>
            <div class="mt-2 rounded-lg border border-[#EEEDF1] pl-2 py-1">
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                true-value="prepare"
                v-model="value"
                label="เตรียมจัดส่ง"
                color="#084F93"
                false-icon="fa-regular fa-circle"
                true-icon="fa-regular fa-circle-dot"
              ></v-checkbox>
            </div>
            <div class="mt-2 rounded-lg border border-[#EEEDF1] pl-2 py-1">
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="รอส่งมอบให้ขนส่ง"
                true-value="transport"
                v-model="value"
                color="#084F93"
                false-icon="fa-regular fa-circle"
                true-icon="fa-regular fa-circle-dot"
              ></v-checkbox>
            </div>
          </div>
          <div id="success">
            <div
              class="mt-2 text-subTitle leading-5 tracking-23 text-[#74777F]"
            >
              เสร็จสิ้น
            </div>
            <div class="mt-2 rounded-lg border border-[#EEEDF1] pl-2 py-1">
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="จัดส่งสำเร็จ"
                true-value="success"
                v-model="value"
                color="#084F93"
                false-icon="fa-regular fa-circle"
                true-icon="fa-regular fa-circle-dot"
              ></v-checkbox>
            </div>
            <div class="mt-2 rounded-lg border border-[#EEEDF1] pl-2 py-1">
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="จัดส่งไม่สำเร็จ"
                true-value="fail"
                v-model="value"
                color="#084F93"
                false-icon="fa-regular fa-circle"
                true-icon="fa-regular fa-circle-dot"
              ></v-checkbox>
            </div>
          </div>
          <div id="cancel">
            <div
              class="mt-2 text-subTitle leading-5 tracking-23 text-[#74777F]"
            >
              ยกเลิก
            </div>
            <div class="mt-2 rounded-lg border border-[#EEEDF1] pl-2 py-1">
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="ยกเลิก"
                v-model="value"
                true-value="cancel"
                color="#084F93"
                false-icon="fa-regular fa-circle"
                true-icon="fa-regular fa-circle-dot"
              ></v-checkbox>
            </div>
          </div>
          <v-btn
            variant="flat"
            class="!bg-[#084F93] text-white !rounded-lg w-full mt-4 mb-2 min-h-[45px]"
            @click="
              () => {
                // onsubmit(value);
                // console.log(value)
                submitValue = value;
              }
            "
            >ยืนยัน</v-btn
          >
        </v-card-text>
        <v-card-text v-else>
          <v-checkbox
            class="checkbox-change-status"
            hide-details
            value="not-enought"
            label="สินค้าไม่เพียงพอต่อการจ่าย"
            color="#084F93"
            v-model="cancelComment"
          ></v-checkbox>
          <v-checkbox
            class="checkbox-change-status"
            hide-details
            label="ลูกค้าเปลี่ยนใจ"
            value="change"
            v-model="cancelComment"
            color="#084F93"
          ></v-checkbox>
          <v-checkbox
            class="checkbox-change-status"
            hide-details
            label="ลูกค้ายกเลิก"
            v-model="cancelComment"
            value="cancel"
            color="#084F93"
          ></v-checkbox>
          <v-checkbox
            class="checkbox-change-status"
            hide-details
            value="more"
            label="อื่นๆ"
            v-model="cancelComment"
            color="#084F93"
          ></v-checkbox>
          <v-textarea
            hide-details
            class="mt-1"
            label="ระบุเหตุผลอื่นๆ"
            v-model="commentField"
            variant="outlined"
          ></v-textarea>
          <div class="flex justify-between space-x-2">
            <v-btn
              variant="flat"
              class="!bg-[#BA1A1A] text-white !rounded-lg w-[calc(50%-4px)] mt-4 mb-2 min-h-[45px]"
              @click="
                () => {
                  // onsubmit(value);
                  onclose();
                  // console.log(value)
                }
              "
              >ยกเลิก</v-btn
            >
            <v-btn
              variant="outlined"
              color="#084F93"
              class="!rounded-lg w-[calc(50%-4px)] mt-4 mb-2 min-h-[45px]"
              @click="
                () => {
                  // onsubmit(value);
                  // submitValue = value;
                }
              "
              >ปิด</v-btn
            >
          </div>
        </v-card-text>
      </v-scroll-x-transition>
    </v-card>
  </v-dialog>
</template>

<style>
.checkbox-change-status .v-selection-control {
  min-height: auto !important;
}
.checkbox-change-status .v-selection-control label {
  @apply opacity-[1] !text-subTitle !leading-5 !tracking-23 text-[#1A1C1E];
}
</style>
