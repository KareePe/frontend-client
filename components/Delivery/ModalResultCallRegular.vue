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

const show = ref([
  {
    text: "จำนวนพัสดุประมาณการ",
    value: "16 รายการ",
  },
  {
    text: "รับพัสดุทุกวัน",
    value: "จันทร์, อังคาร, พุธ",
  },
  {
    text: "เวลาที่เข้ารับพัสดุ",
    value: "09.00",
  },
  {
    text: "ที่อยู่เข้ารับพัสดุ",
    value:
      "92/4 ชั้น 2 อาคารสาธรธานี2 ถ.สาทรเหนือ ต.สีลม อ.บางรัก กรุงเทพ 10500",
  },
  {
    text: "หมายเหตุ",
    value: "-",
  },
]);
</script>

<template>
  <v-dialog :model-value="open" class="w-full" width="500px" persistent>
    <v-card class="rounded-lg">
      <v-card-text class="flex justify-center items-center">
        <div
          class="text-title opacity-subTitle leading-[22px] font-[600] tracking-31"
        >
          ตั้งโปรแกรมเรียกรถประจำ
        </div>
        <div class="absolute right-4">
          <v-icon
            size="20"
            @click="fnHandleClose"
            class="cursor-pointer hover:text-[#084F93] transition-all"
            >fa-solid fa-close</v-icon
          >
        </div>
      </v-card-text>
      <v-card-text>
        <div class="flex justify-center">
          <img src="@/assets/images/07.svg" />
        </div>
        <div class="border border-[#EEEDF1] rounded-lg p-4 mt-4">
          <div
            class="flex justify-between opacity-title leading-5 tracking-23 text-subTitle"
          >
            <div class="w-1/3">ขนส่ง</div>
            <div class="flex gap-1">
              <img
                width="20"
                height="20"
                class="rounded-full"
                src="https://www.eksuwankased2001.co.th/wp-content/uploads/2019/10/flash-express-icon.jpg"
              />
              <div>Flash Express</div>
            </div>
          </div>
          <div
            v-for="(item, index) in show"
            :key="index"
            class="flex justify-between opacity-title leading-5 tracking-23 text-subTitle"
          >
            <div class="w-1/3">{{ item.text }}</div>
            <div class="text-right">{{ item.value }}</div>
          </div>
        </div>

        <div
          class="flex mt-3 w-full justify-between items-center gap-2 mb-[2px]"
        >
          <v-btn
            color="#084F93"
            class="rounded-lg w-[calc(50%-8px)]"
            variant="outlined"
            >ยกเลิก</v-btn
          >
          <v-btn
            color="#084F93"
            class="rounded-lg w-[calc(50%-8px)]"
            variant="flat"
            @click="fnHandleSubmit"
            >ยืนยัน</v-btn
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
