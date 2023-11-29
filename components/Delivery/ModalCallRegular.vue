<script setup>
const { open } = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["onSubmit", "onClose"]);

const fnHandleClose = () => {
  emit("onClose");
};
const fnHandleSubmit = () => {
  emit("onSubmit");
};

const day = ref('')

</script>

<template>
  <v-dialog :model-value="open" class="w-full" width="560px" persistent>
    <v-card class="rounded-lg">
      <v-card-text class="flex justify-between items-center">
        <div
          class="text-title opacity-subTitle leading-[22px] font-[600] tracking-31"
        >
          เรียกรถประจำ
        </div>
        <v-icon
          size="20"
          @click="fnHandleClose"
          class="cursor-pointer hover:text-[#084F93] transition-all"
          >fa-solid fa-close</v-icon
        >
      </v-card-text>
      <v-card-text>
        <div class="flex flex-col gap-4">
          <div class="flex justify-center items-center">
            <div
              class="w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              ขนส่ง
            </div>
            <v-autocomplete
              placeholder="เลือกขนส่ง"
              density="compact"
              :items="[
                'Flash Express',
                'Kerry Express',
                'SCG Express',
                'Thailand Post',
              ]"
              variant="outlined"
              hide-details
            >
            </v-autocomplete>
          </div>
          <div class="flex justify-center items-center">
            <div
              class="w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              จำนวนพัสดุ
            </div>
            <v-text-field
              label="ใส่จำนวนพัสดุ*"
              variant="outlined"
              hide-details
              density="compact"
            ></v-text-field>
          </div>
          <div class="flex items-center">
            <div
              class="w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              รับพัสดุทุกวัน
            </div>
            <div class="flex flex-col">
              <v-checkbox
                v-for="(item, index) in [
                  'อาทิตย์',
                  'จันทร์',
                  'อังคาร',
                  'พุธ',
                  'พฤหัสบดี',
                  'ศุกร์',
                  'เสาร์',
                ]"
                :key="index"
                class="checkbox-change-status"
                hide-details
                v-model="day"
                :true-value="item"
                :label="item"
              ></v-checkbox>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div
              class="w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              วันที่เข้ารับพัสดุ
            </div>
            <v-text-field
              label="เลือกวันที่"
              variant="outlined"
              hide-details
              density="compact"
            >
              <template v-slot:prepend-inner>
                <v-icon size="16" class="mb-1">fa-regular fa-calendar</v-icon>
              </template>
            </v-text-field>
          </div>
          <div class="flex justify-center items-center">
            <div
              class="w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              ที่อยู่ที่เข้ารับพัสดุ
            </div>
            <v-autocomplete
              placeholder="เลือกขนส่ง"
              density="compact"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
              hide-details
            >
              <template v-slot:append>
                <div
                  class="text-[#74777F] leading-5 tracking-23 text-subTitle flex items-center justify-center gap-4"
                >
                  <v-icon size="16">fa-regular fa-map</v-icon>
                  <div>เพิ่มที่อยู่อื่น</div>
                </div>
              </template>
            </v-autocomplete>
          </div>
          <div class="flex justify-center items-center">
            <div
              class="w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              หมายเหตุ
            </div>
            <v-text-field
              label="หมายเหตุ"
              variant="outlined"
              hide-details
              density="compact"
            ></v-text-field>
          </div>
        </div>
        <div
          class="flex mt-3 w-full justify-between items-center gap-2 mb-[2px]"
        >
          <v-btn
            color="#084F93"
            class="rounded-lg w-[calc(50%-8px)]"
            variant="outlined"
            @click="fnHandleClose"
            >ยกเลิก</v-btn
          >
          <v-btn
            color="#084F93"
            class="rounded-lg w-[calc(50%-8px)]"
            variant="flat"
            @click="fnHandleSubmit"
            >เรียกรถ</v-btn
          >
        </div>
      </v-card-text>
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
