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

    <div class="mt-4 flex flex-row space-x-4">
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

      <div class="w-[30%]">
        <div class="p-4 border border-[#eeedf1] rounded-lg">
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

    <div class="mt-4 p-4 border border-[#eeedf1] rounded-lg">
      <v-card
        variant="flat"
        class="border border-[#EEEDF1] !rounded-b-[8px] pb-[15px]"
      >
        <v-data-table
          v-if="['tableItem'].length > 0"
          id="table-header-black"
          :items="[
            {
              name: 'รองเท้าแตะ',
              weight: '0.02',
              amount: '1',
              sale: '0.0 ฿',
              price: '1,500 ฿'
            },
            {
              name: 'ปาท่องโก๋',
              weight: '0.02',
              amount: '1',
              sale: '0.0 ฿',
              price: '1,500 ฿'
            }
          ]"
          :headers="headerTable"
        >
          <template v-slot:item="{ item }">
            <tr>
              <td class="!pr-10">
                <div class="bg-slate-800 w-8 h-8 rounded-full"></div>
              </td>
              <td class="text-[14px] leading-5 text-left !pr-10">
                <div class="tracking-[-0.032%]">{{ item.name }}</div>
                <div class="text-[12px]">Item ID - 567890</div>
              </td>
              <td
                class="text-[14px] leading-5 tracking-[-0.032%] text-center !pr-10"
              >
                {{ item.weight }}
              </td>
              <td
                class="text-[14px] leading-5 tracking-[-0.032%] text-center !pr-10"
              >
                {{ item.amount }}
              </td>
              <td
                class="text-[14px] leading-5 tracking-[-0.032%] text-center !pr-10"
              >
                {{ item.sale }}
              </td>
              <td
                class="text-[14px] leading-5 tracking-[-0.032%] text-center !pr-10"
              >
                {{ item.price }}
              </td>
            </tr>
          </template>

          <template #bottom></template>
        </v-data-table>
        <div v-else class="h-[260px] flex justify-center items-center">
          <p>ยังไม่มีรายการ</p>
        </div>
      </v-card>
    </div>

    <div class="mt-4 flex justify-end">
      <div class="min-w-[300px]">
        <div class="flex justify-between">
          <div
            class="text-black opacity-[0.87] leading-5 tracking-[-0.032px] text-[14px]"
          >
            ยอดรวมสิ้นค้า :
          </div>
          <div
            class="text-black opacity-[0.6] leading-5 tracking-[-0.032px] text-[14px]"
          >
            6000 ฿
          </div>
        </div>
        <div class="flex justify-between">
          <div
            class="text-black opacity-[0.87] leading-5 tracking-[-0.032px] text-[14px]"
          >
            ค่าจัดส่ง :
          </div>
          <div
            class="text-black opacity-[0.6] leading-5 tracking-[-0.032px] text-[14px]"
          >
            27 ฿
          </div>
        </div>

        <div class="flex justify-between">
          <div
            class="text-black opacity-[0.87] leading-5 tracking-[-0.032px] text-[14px]"
          >
            ส่วนลด :
          </div>
          <div
            class="text-black opacity-[0.6] leading-5 tracking-[-0.032px] text-[14px]"
          >
            0 ฿
          </div>
        </div>
        <div class="flex justify-between">
          <div
            class="text-black opacity-[0.87] leading-5 tracking-[-0.032px] text-[14px]"
          >
            ยอดสุทธิ :
          </div>
          <div
            class="text-black opacity-[0.6] leading-5 tracking-[-0.032px] text-[14px]"
          >
            6,027 ฿
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
type tableItemPropsType = {
  name: string
  no: string
  no_status: string
  price: string
  create_date: string
  print: "success" | "waiting"
  status: "เสร็จสิ้น" | "ที่ต้องจัดส่ง"
}

type tableItemtype = {
  name: string
  weight: string
  amount: string
  sale: string
  price: string
}

type headerTableType = {
  title: string
  key: keyof tableItemtype | ""
  sortable?: boolean
  align?: "start" | "center" | "end"
}[]

const props = defineProps({
  data: {
    type: Object,
    default: {}
  }
})
const data = props.data as unknown as tableItemPropsType

const headerTable: headerTableType = [
  {
    title: "รูป",
    key: "",
    align: "center"
  },
  {
    title: "ชื่อสินค้า",
    key: "name",
    align: "center"
  },
  {
    title: "น้ำหนัก (กิโลกรัม)",
    key: "weight",
    align: "center"
  },
  {
    title: "จำนวน",
    key: "amount",
    align: "center"
  },
  {
    title: "ส่วนลด",
    key: "sale",
    align: "center"
  },
  {
    title: "ราคา",
    key: "price",
    align: "center"
  }
]
</script>

<style>
#table-header-black div table thead tr th div span {
  color: black;
  opacity: 87%;
  line-height: 20px;
  letter-spacing: -0.032px;
  font-size: 14px;
}
</style>
