<script setup>
import { ref, onMounted, watch, mergeProps } from "vue"
import moment from "moment"
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

const startDates = ref()
const endDates = ref()
const submitValue = ref("")
const fnHandleClose = () => {
  submitValue.value = ""
  onclose()
}
moment.locale("th")
</script>

<template>
  <v-dialog :model-value="open" width="450px" persistent>
    <v-card class="w-full rounded-lg">
      <v-card-text>
        <div class="flex items-center justify-center">
          <v-scroll-x-transition hide-on-leave>
            <div
              v-if="!submitValue"
              class="text-title opacity-subTitle leading-[22px] font-[600] tracking-31"
            >
              ดาวน์โหลดข้อมูลคำสั่งซื้อ
            </div>
            <div
              v-else
              class="text-title opacity-subTitle leading-[22px] font-[600] tracking-31"
            >
              ยืนยันการดาวน์โหลด
            </div>
          </v-scroll-x-transition>
          <div class="absolute right-5">
            <v-icon
              size="20"
              @click="fnHandleClose"
              class="cursor-pointer hover:text-[#084F93] transition-all"
              >fa-solid fa-close</v-icon
            >
          </div>
        </div>
        <v-scroll-x-transition hide-on-leave>
          <div v-if="!submitValue">
            <div class="mt-2 flex gap-2">
              <div class="w-[calc(50%-8px)]">
                <div class="font-[14px] text-[#74777F] leading-5 tracking-23">
                  เริ่มจาก
                </div>
                <div>
                  <v-menu
                    class="menu-bar"
                    location="center center"
                    :close-on-content-click="false"
                  >
                    <template v-slot:activator="{ props: menu }">
                      <v-text-field
                        v-bind="mergeProps(menu)"
                        variant="outlined"
                        readonly
                        :model-value="moment(startDates).format('D MMMM YYYY')"
                        class="mt-3 w-full icon-center"
                        hide-details
                      >
                        <template v-slot:prepend-inner="{ isFocused }">
                          <v-icon class="mb-1">fa-regular fa-calendar</v-icon>
                        </template>
                      </v-text-field>
                    </template>
                    <v-list>
                      <v-date-picker v-model="startDates"></v-date-picker>
                    </v-list>
                  </v-menu>
                </div>
              </div>

              <div class="w-[calc(50%-8px)]">
                <div class="font-[14px] text-[#74777F] leading-5 tracking-23">
                  จนถึง
                </div>
                <div>
                  <v-menu
                    class="menu-bar"
                    location="center center"
                    :close-on-content-click="false"
                  >
                    <template v-slot:activator="{ props: menu }">
                      <v-text-field
                        v-bind="mergeProps(menu)"
                        variant="outlined"
                        readonly
                        :min="startDates"
                        :model-value="moment(endDates).format('D MMMM YYYY')"
                        class="mt-3 w-full icon-center"
                        hide-details
                      >
                        <template v-slot:prepend-inner="{ isFocused }">
                          <v-icon class="mb-1">fa-regular fa-calendar</v-icon>
                        </template>
                      </v-text-field>
                    </template>
                    <v-list>
                      <v-date-picker v-model="endDates"></v-date-picker>
                    </v-list>
                  </v-menu>
                </div>
              </div>
            </div>

            <div class="w-full mt-2">
              <div class="font-[14px] text-[#74777F] leading-5 tracking-23">
                รูปแบบ
              </div>
              <div class="mt-2 rounded-lg border border-[#EEEDF1] pl-2 py-1">
                <v-checkbox
                  class="checkbox-change-status"
                  hide-details
                  label="คำสั่งซื้อ"
                  true-value="fail"
                  color="#084F93"
                  false-icon="fa-regular fa-circle"
                  true-icon="fa-regular fa-circle-dot"
                ></v-checkbox>
              </div>
              <div class="mt-2 rounded-lg border border-[#EEEDF1] pl-2 py-1">
                <v-checkbox
                  class="checkbox-change-status"
                  hide-details
                  label="รายการสินค้า"
                  true-value="fail"
                  color="#084F93"
                  false-icon="fa-regular fa-circle"
                  true-icon="fa-regular fa-circle-dot"
                ></v-checkbox>
              </div>
            </div>

            <div class="flex mt-2">
              <v-btn
                variant="flat"
                class="!bg-[#084F93] text-white !rounded-lg mt-4 mb-2 min-h-[45px] w-full"
                @click="() => (submitValue = 'asd')"
                >สร้าง</v-btn
              >
            </div>
          </div>

          <div v-else>
            <div class="mt-4">
              <div class="font-[14px] text-[#74777F] leading-5 tracking-23">
                ยืนยันเพื่อดาวน์โหลด
              </div>
              <div class="mt-2 rounded-lg border border-[#EEEDF1] pl-3 py-2">
                <div
                  class="text-subTitle font-[600] tracking-23 leading-5 opacity-title"
                >
                  จำนวนคำสั่งซื้อ
                </div>
                <div
                  class="text-subTitle tracking-23 leading-5 opacity-subTitle"
                >
                  582 รายการ
                </div>
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
                  @click="() => onsubmit()"
                  >สร้าง</v-btn
                >
              </div>
            </div>
          </div>
        </v-scroll-x-transition>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style>
.icon-center div div div div .v-field__prepend-inner {
  @apply !bg-red-500;
}
</style>
