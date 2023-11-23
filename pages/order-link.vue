<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue"

const route = useRoute()
const router = useRouter()
// onMounted(() => {
//   if (!route.query.id) {
//     router.replace("/order")
//   }
// })
</script>

<template>
  <div class="nav">
    <img src="~/assets/images/logo.png" width="150" />
    <v-btn
      prepend-icon="fa-solid fa-magnifying-glass"
      variant="outlined"
      class="!rounded-lg !min-h-[55px]"
      color="#084F93"
      >ค้นหาคำสั่งอื่นๆ</v-btn
    >
  </div>

  <div class="mt-10 flex justify-center items-center">
    <div
      class="min-w-[1200px] h-[560px] 0 rounded-lg p-5 relative overflow-hidden border border-[#EEEDF1]"
    >
      <div
        class="h-[24px] w-full bg-gradient-to-r from-[#084F93] via-[#153B65] to-[#00AA84] absolute top-0 left-0"
      ></div>

      <div class="text-header mt-4 font-[600] leading-[22px] tracking-header">
        รายละเอียดคำสั่งซื้อ
      </div>

      <div class="mt-3 flex space-x-4">
        <div class="w-1/3">
          <div class="mt-4 font-[600] text-title tracking-31">ข้อมูลลูกค้า</div>
          <div class="p-4 mt-3 border border-[#eeedf1] rounded-lg space-y-2">
            <div class="space-y-2">
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] min-w-[136px]"
                >
                  ชื่อลูกค้า
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
                >
                  ปองพล วิเชียรวิทย์
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] min-w-[136px]"
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
                  081-234-5678
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] min-w-[136px]"
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
                  121/132 หมู่ 5 ต.วิชิต อ.เมือง จ.ภูเก็ต 80310
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] min-w-[136px]"
                >
                  อีเมล
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6]"
                >
                  example@gmail.com
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] min-w-[136px]"
                >
                  หมายเหตุ
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

          <div class="mt-4 font-[600] text-title tracking-31">การชำระเงิน</div>
          <div class="p-4 mt-3 border border-[#eeedf1] rounded-lg space-y-2">
            <div class="space-y-2">
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] min-w-[136px]"
                >
                  ยอดรวมสิ้นค้า
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6] text-right w-full"
                >
                  6,000 ฿
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] min-w-[136px]"
                >
                  ค่าจัดส่ง
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6] text-right w-full"
                >
                  27 ฿
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[40%] text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] min-w-[136px]"
                >
                  ส่วนลด
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.6] text-right w-full"
                >
                  0 ฿
                </div>
              </div>
              <div class="flex border-t border-t-main-gray pt-3">
                <div
                  class="w-[40%] text-black font-bold text-title tracking-[-0.032px] leading-4 opacity-[0.87] min-w-[136px]"
                >
                  ยอดสุทธิ
                </div>
                <div
                  class="mr-2 text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87]"
                >
                  :
                </div>
                <div
                  class="text-[14px] text-primary font-[600] tracking-23 leading-4 text-right w-full"
                >
                  6,027 ฿
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/3">
          <div class="mt-4 font-[600] text-title tracking-31">
            รายการสั่งซื้อ
          </div>
          <div class="p-4 mt-3 border border-[#eeedf1] rounded-lg space-y-2">
            <div class="space-y-2">
              <div class="flex space-x-2">
                <div class="min-w-[90px] h-[90px] bg-purple-600"></div>
                <div class="w-full flex flex-col justify-between">
                  <div>
                    <div
                      class="text-subTitle opacity-title leading-5 tracking-23"
                    >
                      เสื้อยืดโอเวอร์ไซด์
                    </div>
                    <div class="leading-4 text-[12px] opacity-subTitle">
                      Item ID - 568790
                    </div>
                  </div>
                  <div class="flex justify-between w-full">
                    <div>จำนวน 1</div>
                    <div>1,300฿</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <div class="flex space-x-2">
                <div class="min-w-[90px] h-[90px] bg-purple-600"></div>
                <div class="w-full flex flex-col justify-between">
                  <div>
                    <div
                      class="text-subTitle opacity-title leading-5 tracking-23"
                    >
                      เสื้อยืดโอเวอร์ไซด์
                    </div>
                    <div class="leading-4 text-[12px] opacity-subTitle">
                      Item ID - 568790
                    </div>
                  </div>
                  <div class="flex justify-between w-full">
                    <div>จำนวน 1</div>
                    <div>1,300฿</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <div class="flex space-x-2">
                <div class="min-w-[90px] h-[90px] bg-purple-600"></div>
                <div class="w-full flex flex-col justify-between">
                  <div>
                    <div
                      class="text-subTitle opacity-title leading-5 tracking-23"
                    >
                      เสื้อยืดโอเวอร์ไซด์
                    </div>
                    <div class="leading-4 text-[12px] opacity-subTitle">
                      Item ID - 568790
                    </div>
                  </div>
                  <div class="flex justify-between w-full">
                    <div>จำนวน 1</div>
                    <div>1,300฿</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/3">
          <div class="mt-4 font-[600] text-title tracking-31">สถานะจัดส่ง</div>
          <div class="p-4 mt-3 border border-[#eeedf1] rounded-lg">
            <div class="flex flex-row">
              <div class="min-w-[30px] flex-col items-center flex relative">
                <div
                  class="w-[18px] h-[18px] bg-[#EEEDF1] rounded-full z-50"
                ></div>
                <div
                  class="h-[calc(100%+30px)] w-[2px] bg-[#EEEDF1] absolute"
                ></div>
              </div>
              <div>
                <div
                  class="font-[600] tracking-[-0.021px] leading-[18px] opacity-[0.6]"
                >
                  สถานะ: สร้างคำสั่งซื้อ
                </div>
                <div class="opacity-[0.6] text-[12px] leading-4 mt-1">
                  19 ต.ค 2566 (13.16)
                  <span
                    class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] text-black mx-2"
                    >:</span
                  >
                  <span class="leading-4 text-[12px] opacity-[0.4] font-[400]"
                    >โดย username</span
                  >
                </div>
              </div>
            </div>

            <div class="flex flex-row mt-4 relative">
              <div class="min-w-[30px] flex-col items-center flex">
                <div
                  class="w-[18px] h-[18px] bg-[#EEEDF1] rounded-full z-50"
                ></div>
                <div
                  class="h-[calc(100%+30px)] w-[2px] bg-[#EEEDF1] absolute"
                ></div>
              </div>
              <div>
                <div
                  class="font-[600] tracking-[-0.021px] leading-[18px] opacity-[0.6]"
                >
                  สถานะ: เตรียมจัดส่ง
                </div>
                <div class="opacity-[0.6] text-[12px] leading-4 mt-1">
                  19 ต.ค 2566 (13.16)
                  <span
                    class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] text-black mx-2"
                    >:</span
                  >
                  <span class="leading-4 text-[12px] opacity-[0.4] font-[400]"
                    >โดย username</span
                  >
                </div>
              </div>
            </div>

            <div class="flex flex-row mt-4 relative">
              <div class="min-w-[30px] flex-col items-center flex">
                <div
                  class="w-[18px] h-[18px] bg-[#EEEDF1] rounded-full z-50"
                ></div>
                <div
                  class="h-[calc(100%+30px)] w-[2px] bg-[#EEEDF1] absolute"
                ></div>
              </div>
              <div>
                <div
                  class="font-[600] tracking-[-0.021px] leading-[18px] opacity-[0.6]"
                >
                  สถานะ: รอส่งมอบ
                </div>
                <div class="opacity-[0.6] text-[12px] leading-4 mt-1">
                  19 ต.ค 2566 (13.16)
                  <span
                    class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] text-black mx-2"
                    >:</span
                  >
                  <span class="leading-4 text-[12px] opacity-[0.4] font-[400]"
                    >โดย username</span
                  >
                </div>
              </div>
            </div>

            <div class="flex flex-row mt-4 relative">
              <div class="min-w-[30px] flex-col items-center flex">
                <div
                  class="w-[18px] h-[18px] bg-[#EEEDF1] rounded-full z-50"
                ></div>
                <div
                  class="h-[calc(100%+30px)] w-[2px] bg-[#EEEDF1] absolute"
                ></div>
              </div>
              <div>
                <div
                  class="font-[600] tracking-[-0.021px] leading-[18px] opacity-[0.6]"
                >
                  สถานะ: กำลังจัดส่ง
                </div>
                <div class="opacity-[0.6] text-[12px] leading-4 mt-1">
                  19 ต.ค 2566 (13.16)
                  <span
                    class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] text-black mx-2"
                    >:</span
                  >
                  <span class="leading-4 text-[12px] opacity-[0.4] font-[400]"
                    >โดย username</span
                  >
                </div>
              </div>
            </div>

            <div class="flex flex-row mt-4 relative">
              <div class="min-w-[30px] flex-col items-center flex">
                <div
                  class="w-[18px] h-[18px] bg-[#EEEDF1] rounded-full z-50"
                ></div>
                <div
                  class="h-[calc(100%+30px)] w-[2px] bg-[#EEEDF1] absolute"
                ></div>
              </div>
              <div>
                <div
                  class="font-[600] tracking-[-0.021px] leading-[18px] opacity-[0.6]"
                >
                  สถานะ: ตีกลับ
                </div>
                <div class="opacity-[0.6] text-[12px] leading-4 mt-1">
                  19 ต.ค 2566 (13.16)
                  <span
                    class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] text-black mx-2"
                    >:</span
                  >
                  <span class="leading-4 text-[12px] opacity-[0.4] font-[400]"
                    >โดย username</span
                  >
                </div>
              </div>
            </div>

            <div class="flex flex-row mt-4 relative">
              <div class="min-w-[30px] flex-col items-center flex">
                <div
                  class="w-[18px] h-[18px] bg-[#EEEDF1] rounded-full z-50"
                ></div>
                <div
                  class="h-[calc(100%+30px)] w-[2px] bg-[#EEEDF1] absolute"
                ></div>
              </div>
              <div>
                <div
                  class="font-[600] tracking-[-0.021px] leading-[18px] opacity-[0.6]"
                >
                  สถานะ: กำลังจัดส่ง
                </div>
                <div class="opacity-[0.6] text-[12px] leading-4 mt-1">
                  19 ต.ค 2566 (13.16)
                  <span
                    class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] text-black mx-2"
                    >:</span
                  >
                  <span class="leading-4 text-[12px] opacity-[0.4] font-[400]"
                    >โดย username</span
                  >
                </div>
              </div>
            </div>

            <div class="flex flex-row mt-4">
              <div class="min-w-[30px] flex-col items-center flex">
                <div
                  class="w-[18px] h-[18px] bg-[#084F93] rounded-full z-50 z-50"
                ></div>
              </div>
              <div>
                <div
                  class="font-[600] tracking-[-0.021px] text-[#084F93] leading-[18px] opacity-[1]"
                >
                  สถานะ: สำเร็จ
                </div>
                <div class="opacity-[0.6] text-[12px] leading-4 mt-1">
                  19 ต.ค 2566 (13.16)
                  <span
                    class="text-[14px] font-[400] tracking-[-0.032px] leading-4 opacity-[0.87] text-black mx-2"
                    >:</span
                  >
                  <span class="leading-4 text-[12px] opacity-[0.4] font-[400]"
                    >โดย username</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> -->

<style scoped>
.nav {
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #f4f3f7;
  background: #fff;
}
</style>
