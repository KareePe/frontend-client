<script setup>
const { open } = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["onSubmit", "onClose"]);

const fnHandleClose = () => {
  emit("onClose");
};
</script>

<template>
  <v-dialog :model-value="open" class="w-full" width="680px" persistent>
    <v-card class="rounded-lg">
      <v-card-text class="flex justify-between items-center">
        <div
          class="text-[20px] opacity-title leading-[24px] font-[400] tracking-31"
        >
          รายการเรียกรถ : 23102023CC
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
          <div class="flex items-center">
            <div
              class="w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              ขนส่ง
            </div>
            <div
              class="flex gap-1 items-center leading-5 text-subTitle tracking-23"
            >
              <div>:</div>
              <img
                width="40"
                height="40"
                class="rounded-full"
                src="https://www.eksuwankased2001.co.th/wp-content/uploads/2019/10/flash-express-icon.jpg"
              />
              <div>Flash Express</div>
            </div>
          </div>
          <div class="flex items-center leading-5 text-subTitle tracking-23">
            <div
              class="w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              สถานะ
            </div>
            <div>: รอรถเข้ารับ</div>
          </div>
          <div class="flex items-center leading-5 text-subTitle tracking-23">
            <div
              class="w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              จำนวนพัสดุ
            </div>
            <div>: 2</div>
          </div>
          <div class="flex items-center leading-5 text-subTitle tracking-23">
            <div
              class="w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              วันที่เข้ารับ
            </div>
            <div>: 23/10/2023</div>
          </div>
          <div class="flex items-center leading-5 text-subTitle tracking-23">
            <div
              class="w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              เวลาเข้ารับ
            </div>
            <div>: 09.00 น</div>
          </div>
          <div class="flex items-center leading-5 text-subTitle tracking-23">
            <div
              class="min-w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              ที่อยู่เข้ารับ
            </div>
            <div>
              : 92/4 ชั้น 2 อาคารสาธรธานี2 ถ.สาทรเหนือ ต.สีลม อ.บางรัก กรุงเทพ
              10500
            </div>
          </div>
          <div class="flex items-center leading-5 text-subTitle tracking-23">
            <div
              class="min-w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              ค่าขนส่ง
            </div>
            <div>
              : รอการตรวจสอบ
            </div>
          </div>
          <div class="flex items-center leading-5 text-subTitle tracking-23">
            <div
              class="min-w-[160px] opacity-title tracking-23 leading-5 text-subTitle"
            >
              หมายเหตุ
            </div>
            <div>
              : วัตถุแตกหัก
            </div>
          </div>
        </div>
        <div
          class="flex mt-3 w-full justify-between items-center gap-2 mb-[2px]"
        >
          <v-btn
            color="#BA1A1A"
            class="rounded-lg w-full"
            variant="outlined"
            >ยกเลิกรายการ</v-btn
          >
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
