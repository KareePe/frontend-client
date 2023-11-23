<script setup lang="ts">
import { ref, onMounted, watch, computed, mergeProps } from "vue"
import SelectedItem from "@/components/Order/SelectedItem.vue"
import ModalNoStatus from "@/components/Order/ModalNoStatus.vue"
import ModalConfirmCreateMaterial from "@/components/Order/ModalConfirmCreateMaterial.vue"
type headerTableType = {
  title: string
  key: keyof tableItemType | ""
  sortable?: boolean
  align?: "start" | "center" | "end"
}

type tableItemType = {
  name: string
  no: string
  no_status: string
  price: string
  create_date: string
  print: "success" | "waiting"
  status: "เสร็จสิ้น" | "ที่ต้องจัดส่ง"
}

const chipData = ["ชื่อลุกค้า", "Order No.", "เบอร์โทร"]
const tab = ref("all")

const headersTable: headerTableType[] = [
  {
    title: "ชื่อลูกค้า",
    align: "center",
    key: "name",
    sortable: false
  },
  {
    title: "หมายเลขคำสั่งซื้อ",
    align: "center",
    key: "no",
    sortable: false
  },
  {
    title: "เลขติดตามสถานะ",
    align: "center",
    key: "no_status",
    sortable: false
  },
  {
    title: "ราคา",
    align: "center",
    key: "price",
    sortable: false
  },
  {
    title: "วันที่สร้าง",
    align: "center",
    key: "create_date",
    sortable: false
  },
  {
    title: "ปริ้นท์",
    align: "center",
    key: "print",
    sortable: false
  },
  {
    title: "สถานะ",
    align: "center",
    key: "status",
    sortable: false
  }
]

const tableItem: tableItemType[] = [
  {
    no: "SX1434567890",
    create_date: "13/01/2556 21:00",
    name: "นายทดสอบ นามสกุลไม่ยาว1",
    no_status: "TH1283629CH82",
    price: "100.00",
    status: "เสร็จสิ้น",
    print: "waiting"
  },
  {
    no: "SX1234567890",
    create_date: "13/01/2556 21:00",
    name: "นายทดสอบ นามสกุลไม่ยาว2",
    no_status: "TH1283629CH82",
    price: "100.00",
    status: "เสร็จสิ้น",
    print: "success"
  },
  {
    no: "asdasdvvvv",
    create_date: "13/01/2556 21:00",
    name: "นายทดสอบ นามสกุลไม่ยาว3",
    no_status: "TH1283629CH82",
    price: "100.00",
    status: "เสร็จสิ้น",
    print: "success"
  },
  {
    no: "ddddddddd",
    create_date: "13/01/2556 21:00",
    name: "นายทดสอบ นามสกุลไม่ยาว4",
    no_status: "TH1283629CH82",
    price: "100.00",
    status: "เสร็จสิ้น",
    print: "success"
  }
]

const selectedTask = ref([])
const navBarNew = ref([
  {
    text: "คำสั่งซื้อ",
    callback: () => {}
  },
  {
    text: "รายการคำสั่งซื้อ",
    callback: () => fnHandleNavbarback(2, () => (itemSelected.value = null))
  }
])

const itemSelected = ref<null | tableItemType>(null)

const fnHandleNavbarback = (index: number, callback?: () => void) => {
  let num = navBarNew.value.length - index
  for (let i = 1; i <= num; i++) {
    navBarNew.value.pop()
  }
  if (callback) {
    callback()
  }
}
const openModalStatusNumber = ref(false)
const openModalConfirmCreate = ref(false)
</script>

<template>
  <Toolbars />
  <div class="max-sm:hidden">
    <NavbarCallback :breadcrump="navBarNew" @nav-click="navBarNew.pop()" />
  </div>
  <!-- <img src="~/assets/images/order-modal.svg" alt="Discover Nuxt 3" /> -->
  <div class="containerLayout" v-if="itemSelected === null">
    <!-- header  -->
    <div class="flex justify-between">
      <div class="min-w-[300px] max-sm:hidden">
        <v-text-field label="วันที่" variant="outlined"></v-text-field>
      </div>
      <div class="min-w-[300px] max-sm:hidden">
        <v-text-field
          placeholder="หมายเลขคำสั่งซื้อ หรือ เบอร์โทร"
          variant="outlined"
        >
          <template v-slot:prepend-inner>
            <v-icon class="mb-[5px]" icon="fa-solid fa-magnifying-glass" />
          </template>
        </v-text-field>
      </div>
    </div>

    <div
      class="flex lg:space-x-10 lg:justify-between max-[1280px]:flex-col lg:space-y-0 space-y-4"
    >
      <div class="card-border space-x-2 flex scrollresponsive">
        <v-btn
          :variant="tab === 'all' ? 'flat' : 'text'"
          :color="tab === 'all' ? '#084F93' : '#000'"
          @click="tab = 'all'"
          class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !min-h-[55px]"
        >
          ทั้งหมด (926)
        </v-btn>
        <v-btn
          :variant="tab === 'unfunded' ? 'flat' : 'text'"
          :color="tab === 'unfunded' ? '#084F93' : '#000'"
          @click="tab = 'unfunded'"
          class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !min-h-[55px]"
        >
          ยังไม่ชำระ (421)
        </v-btn>
        <v-btn
          :variant="tab === 'beShipped' ? 'flat' : 'text'"
          :color="tab === 'beShipped' ? '#084F93' : '#000'"
          @click="tab = 'beShipped'"
          class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !min-h-[55px]"
        >
          ที่ต้องจัดส่ง (310)
        </v-btn>
        <v-btn
          :variant="tab === 'sending' ? 'flat' : 'text'"
          :color="tab === 'sending' ? '#084F93' : '#000'"
          @click="tab = 'sending'"
          class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !min-h-[55px]"
        >
          กำลังจัดส่ง (14)
        </v-btn>
        <v-btn
          :variant="tab === 'complete' ? 'flat' : 'text'"
          :color="tab === 'complete' ? '#084F93' : '#000'"
          @click="tab = 'complete'"
          class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !min-h-[55px]"
        >
          เสร็จสิ้น (181)
        </v-btn>
        <v-btn
          :variant="tab === 'cancel' ? 'flat' : 'text'"
          :color="tab === 'cancel' ? '#084F93' : '#000'"
          @click="tab = 'cancel'"
          class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !min-h-[55px]"
        >
          ยกเลิก (181)
        </v-btn>
      </div>

      <div class="flex space-x-4 items-center">
        <v-btn
          color="#084F93"
          icon="fa-solid fa-download"
          variant="outlined"
          class="!border !rounded-lg !min-w-[55px] !min-h-[55px]"
        ></v-btn>
        <v-btn
          color="#084F93"
          class="!border !rounded-lg !min-w-[55px] !min-h-[55px]"
          icon="fa-solid fa-upload"
          variant="outlined"
        ></v-btn>
        <v-btn
          prependIcon="fa-solid fa-plus"
          variant="flat"
          color="#084F93"
          size="large"
          class="rounded-lg !min-h-[55px]"
          @click="openModalStatusNumber = true"
        >
          สร้างคำสั่งซื้อใหม่
        </v-btn>
      </div>
    </div>

    <div class="mt-4">
      <div
        class="flex bg-[#E9E7EB] !rounded-t-[8px] border-x border-t border-[#E9E7EB] justify-between items-center"
      >
        <div class="p-5 text-[#084F93] leading-5 text-[14px]">
          เลือก {{ selectedTask.length }} จาก ข้อมูลทั้งหมด
          {{ tableItem.length }} รายการ
        </div>

        <div class="flex space-x-2">
          <v-menu>
            <template v-slot:activator="{ props: menu }">
              <v-btn
                prependIcon="fa-solid fa-chevron-down"
                variant="flat"
                v-bind="mergeProps(menu)"
                size="large"
                class="rounded-lg !min-h-[45px] !bg-white mr-2 [&>span>i]:!text-[16px] !text-[#084F93] !border-[#084F93] !border"
              >
                สร้างเลขพัสดุ
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title
                  class="text-[#084F93] text-[16px] cursor-pointer"
                  @click="openModalConfirmCreate = true"
                >
                  เฉพาะรายการที่เลือก ({{ selectedTask.length }})
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  class="text-[#084F93] text-[16px] cursor-pointer"
                  @click="openModalConfirmCreate = true"
                >
                  ทุกรายการที่ไม่มี
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            prependIcon="fa-solid fa-print"
            variant="flat"
            size="large"
            color="#fff"
            class="rounded-lg !bg-white !min-h-[45px] mr-2 px-12 [&>span>i]:!text-[16px] !text-[#084F93] !border-[#084F93] !border"
          >
            สั่งพิมพ์
          </v-btn>
          <v-btn
            prependIcon="fa-solid fa-arrows-turn-to-dots"
            variant="flat"
            color="#084F93"
            size="large"
            class="rounded-lg !min-h-[45px] mr-2 [&>span>i]:!text-[16px]"
          >
            เปลี่ยนสถานะ
          </v-btn>
        </div>
      </div>

      <div class="bg-[#E9E7EB] p-2 border border-[#E9E7EB]">
        <v-text-field
          placeholder="เพิ่มตัวกรอง"
          variant="outlined"
          hide-details
          density="compact"
        ></v-text-field>
        <div class="pt-2">
          <Chips v-for="(item, index) in chipData" :text="item" />
        </div>
      </div>

      <v-card
        variant="flat"
        class="border border-[#EEEDF1] !rounded-b-[8px] pb-[15px]"
      >
        <v-data-table
          v-if="tableItem.length > 0"
          v-model="selectedTask"
          :items="tableItem"
          item-value="no"
          :headers="headersTable"
          show-select
          show-expand
        >
          <template #item.name="{ value, isSelected }">
            <div
              class="text-[16px] leading-5 tracking-[-0.23%] text-center text-black opacity-[0.87] whitespace-nowrap"
            >
              {{ value }}
            </div>
          </template>
          <template #item.no="{ value, item, index }">
            <div class="flex items-center justify-center space-x-1">
              <div
                class="text-[16px] leading-5 tracking-[-0.23%] text-center text-[#084F93] cursor-pointer"
                @click="
                  () => {
                    itemSelected = item
                    navBarNew.push({
                      text: value,
                      callback: () => {}
                    })
                  }
                "
              >
                {{ value }}
              </div>
              <v-btn
                class="mb-1 cursor-pointer [&>span]:!text-[12px] !w-[40px] h-[15px]"
                variant="text"
                icon="fa-regular fa-copy"
                color="#74777F"
              >
              </v-btn>
            </div>
          </template>
          <template #item.no_status="{ value }">
            <div
              class="text-[16px] leading-5 tracking-[-0.23%] text-center text-[#084F93]"
            >
              {{ value }}
            </div>
          </template>
          <template #item.print="{ value }">
            <div class="flex items-center justify-center space-x-2">
              <div
                v-if="value === 'success'"
                class="bg-[#F79009] w-4 h-4 rounded-full"
              ></div>
              <div v-else class="bg-[#C4C6CF] w-4 h-4 rounded-full"></div>
              <div
                class="text-[16px] leading-5 tracking-[-0.23%] text-center text-black opacity-[0.87]"
              >
                {{ value === "success" ? "ปริ้นแล้ว" : "รอปริ้น" }}
              </div>
            </div>
          </template>
          <template v-slot:expanded-row="{ columns, item }">
            <td class="border-b border-b-[#EEEDF1]">
              <div></div>
            </td>
            <td class="align-top border-b border-b-[#EEEDF1]">
              <div>
                <div class="box-border flex flex-col items-start p-4">
                  <div
                    class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                  >
                    ช่องทางการขาย-แพลตฟอร์ม
                  </div>
                  <div class="leading-5 text-[14px] text-black">
                    Social media - Facebook
                  </div>
                </div>
                <div class="box-border flex flex-col items-start p-4 pt-0">
                  <div
                    class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                  >
                    สิ้นค้า
                  </div>
                  <div class="leading-5 text-[14px] text-black">
                    รองเท้าแตะ x1
                  </div>
                  <div class="leading-5 text-[14px] text-black">
                    ปาท่องโก๋ x3
                  </div>
                  <div class="leading-5 text-[14px] text-black">
                    ลิปสติก x1
                    <span class="text-[#084F93] cursor-pointer"
                      >ดูเพื่มเติม</span
                    >
                  </div>
                </div>
              </div>
            </td>
            <td class="align-top border-b border-b-[#EEEDF1]">
              <div>
                <div class="box-border flex flex-col items-start p-4">
                  <div
                    class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                  >
                    ช่องทางการชำระเงิน
                  </div>
                  <div class="leading-5 text-[14px] text-black">COD</div>
                </div>
                <div class="box-border flex flex-col items-start p-4 pt-0">
                  <div
                    class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                  >
                    เบอร์โทร
                  </div>
                  <div class="leading-5 text-[14px] text-black">
                    091-234-5678
                  </div>
                </div>
              </div>
            </td>
            <td class="align-top border-b border-b-[#EEEDF1]">
              <div>
                <div class="box-border flex flex-col items-start p-4">
                  <div
                    class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                  >
                    น้ำหนัก
                  </div>
                  <div class="leading-5 text-[14px] text-black">
                    1.0 กิโลกรัม
                  </div>
                </div>
                <div class="box-border flex flex-col items-start p-4 pt-0">
                  <div
                    class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                  >
                    ผู้สร้างคำสั่งซื้อ
                  </div>
                  <div class="leading-5 text-[14px] text-black">Admin 1</div>
                </div>
              </div>
            </td>
            <td class="align-top border-b border-b-[#EEEDF1]">
              <div>
                <div class="box-border flex flex-col items-start p-4">
                  <div
                    class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                  >
                    ขนส่ง
                  </div>
                  <div class="leading-5 text-[14px] text-black">
                    Flash Express
                  </div>
                </div>
                <div class="box-border flex flex-col items-start p-4 pt-0">
                  <div
                    class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                  >
                    วิธีจัดส่ง
                  </div>
                  <div class="leading-5 text-[14px] text-black">
                    ส่งผ่าน SalesX
                  </div>
                </div>
                <div class="box-border flex flex-col items-start p-4 pt-0">
                  <div
                    class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                  >
                    วันที่เข้ารับ
                  </div>
                  <div class="leading-5 text-[14px] text-black">-</div>
                </div>
              </div>
            </td>
            <td
              :colspan="4"
              class="align-top pr-4 pt-4 border-b border-b-[#EEEDF1]"
            >
              <div class="flex justify-end items-center space-x-7">
                <v-icon color="#74777F" class="cursor-pointer" size="20"
                  >fa-regular fa-pen-to-square</v-icon
                >
                <v-icon color="#74777F" class="cursor-pointer" size="20"
                  >fa-solid fa-print</v-icon
                >
                <v-icon color="#74777F" class="cursor-pointer" size="20"
                  >fa-solid fa-arrows-turn-to-dots</v-icon
                >
                <v-icon color="#74777F" class="cursor-pointer" size="20"
                  >fa-solid fa-file-invoice</v-icon
                >
              </div>
            </td>
          </template>

          <template #bottom></template>
        </v-data-table>
        <div v-else class="h-[260px] flex justify-center items-center">
          <p>ยังไม่มีรายการ</p>
        </div>
      </v-card>
    </div>
  </div>
  <div class="containerLayout" v-else>
    <SelectedItem :data="itemSelected" />
  </div>

  <ModalNoStatus
    :open="openModalStatusNumber"
    :onsubmit="
      (value:string) => {
        console.log('hello', value)
      }
    "
    :onclose="
      () => {
        openModalStatusNumber = false
      }
    "
  />

  <ModalConfirmCreateMaterial
    :open="openModalConfirmCreate"
    :onclose="
      () => {
        openModalConfirmCreate = false
      }
    "
  />
</template>
<style scoped>
@media (max-width: 1150px) {
  .scrollresponsive {
    overflow-x: scroll;
  }
}
</style>

<style>
#table-info div table thead tr th:last-child {
  display: none;
}
</style>
