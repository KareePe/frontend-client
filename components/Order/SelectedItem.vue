<template>
  <div>
    <div class="flex justify-end">
      <v-btn
        prependIcon="fa-solid fa-chevron-down"
        variant="flat"
        size="large"
        class="rounded-lg !min-h-[50px] !bg-white mr-2 [&>span>i]:!text-[16px] !text-[#084F93] !border-[#084F93] !border"
      >
        คัดลอกลิ้งค์
      </v-btn>
      <v-btn
        prependIcon="fa-solid fa-print"
        variant="flat"
        size="large"
        color="#fff"
        class="rounded-lg !bg-white !min-h-[50px] mr-2 px-12 [&>span>i]:!text-[16px] !text-[#084F93] !border-[#084F93] !border"
      >
        สั่งพิมพ์
      </v-btn>
    </div>

    <div class="mt-4 flex flex-row">
      <div class="w-[70%]">
        <div class="p-4 border border-[#eeedf1] rounded-lg space-y-2">
          <div
            class="text-[14px] text-black opacity-[0.87] font-[600] tracking-[-0.021px]"
          >
            ข้อมูลลูกค้า
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex">
              <div
                class="mr-32 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                ชื่อ
              </div>
              <div
                class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                :
              </div>
              <div
                class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
              >
                {{ data.name }}
              </div>
            </div>

            <div class="flex">
              <div
                class="mr-32 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                เบอร์โทรศัพท์
              </div>
              <div
                class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                :
              </div>
              <div
                class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
              >
                097-234-5678
              </div>
            </div>
          </div>
        </div>

        <div class="flex space-x-4 mt-4">
          <div class="p-4 border border-[#eeedf1] rounded-lg space-y-2 w-1/2">
            <div class="space-y-2">
              <div
                class="text-[14px] text-black opacity-[0.87] font-[600] tracking-[-0.021px]"
              >
                ข้อมูลช่องทางการขาย
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  ช่องทางการขาย
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
                >
                  โซเชียลมีเดีย
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  แพลตฟอร์ม
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div class="flex justify-center items-center space-x-2">
                  <v-icon size="16" class="opacity-[0.6] mb-[2px]"
                    >fa-brands fa-facebook</v-icon
                  >
                  <div
                    class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
                  >
                    Facebook
                  </div>
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  วิธีการชำระเงิน
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
                >
                  COD
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 border border-[#eeedf1] rounded-lg space-y-2 w-1/2">
            <div class="space-y-2">
              <div
                class="text-[14px] text-black opacity-[0.87] font-[600] tracking-[-0.021px]"
              >
                ข้อมูลการชำระเงิน
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  ช่องทาง
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
                >
                  โอนเงิน/QR
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  บัญชีที่โอน
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
                >
                  ธนาคารกสิกไทย
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  วันเวลาที่โอน
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
                >
                  13/12/2000
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  จำนวนเงิน
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
                >
                  6000
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  ผู้รับเงิน
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
                >
                  นายทดสอบ นามสกุลไม่ยาว
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 border border-[#eeedf1] rounded-lg space-y-2 mt-4">
          <div class="space-y-2">
            <div
              class="text-[14px] text-black opacity-[0.87] font-[600] tracking-[-0.021px]"
            >
              ข้อมูลจัดส่ง
            </div>
            <div class="flex">
              <div
                class="w-[20%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                ขนส่งโดย
              </div>
              <div
                class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                :
              </div>
              <div
                class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
              >
                Flash Express
              </div>
            </div>
            <div class="flex">
              <div
                class="w-[20%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                เลขติดตามสถานะ
              </div>
              <div
                class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                :
              </div>
              <div
                class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
              >
                TH1283629CH82
              </div>
            </div>
            <div class="flex">
              <div
                class="w-[20%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                ที่อยู่
              </div>
              <div
                class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                :
              </div>
              <div
                class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
              >
                121/132 หมู่ 5 ต.วิชิต อ.เมือง จ.ภูเก็ต
              </div>
            </div>
            <div class="flex">
              <div
                class="w-[20%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                น้ำหนัก
              </div>
              <div
                class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                :
              </div>
              <div
                class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
              >
                1.0 กิโลกรัม
              </div>
            </div>
            <div class="flex">
              <div
                class="w-[20%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                วันที่เข้ารับ
              </div>
              <div
                class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                :
              </div>
              <div
                class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
              >
                -
              </div>
            </div>
            <div class="flex">
              <div
                class="w-[20%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                ร้านตัวแทน
              </div>
              <div
                class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
              >
                :
              </div>
              <div
                class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
              >
                -
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
type tableItemType = {
  name: string;
  no: string;
  no_status: string;
  price: string;
  create_date: string;
  print: "success" | "waiting";
  status: "เสร็จสิ้น" | "ที่ต้องจัดส่ง";
};
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
const data = props.data as unknown as tableItemType;
</script>
