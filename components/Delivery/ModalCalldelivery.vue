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
</script>

<template>
  <v-dialog :model-value="open" class="w-full" width="560px" persistent>
    <v-card class="rounded-lg">
      <v-card-text class="flex justify-between items-center">
        <div
          class="text-title opacity-subTitle leading-[22px] font-[600] tracking-31"
        >
          เรียกรถรายครั้ง
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
              เวลาเข้ารับพัสดุ
            </div>
            <v-text-field
              label="เลือกเวลา"
              variant="outlined"
              hide-details
              density="compact"
            >
              <template v-slot:prepend-inner>
                <v-icon size="16" class="mb-1">fa-regular fa-clock</v-icon>
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
            >เรียกรถ</v-btn
          >
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
