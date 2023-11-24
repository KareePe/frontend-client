<script setup>
import { ref, onMounted, watch } from "vue"
const value = ref("")
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
const isDragging = ref(false)
const file = ref()
const fileValue = ref()
const summarizeUpload = ref(null)

const fnHandleClose = () => {
  onclose()
  summarizeUpload.value = null
}

const dragover = (e) => {
  e.preventDefault()
  isDragging.value = true
}

const fnGetFileData = () => {
  summarizeUpload.value = {
    totals: "5 รายการ",
    totals_order: "25 คำสั่งซื้อ",
    totals_all: "85,347.00 บาท"
  }
}

const dragleave = () => {
  isDragging.value = false
}

const fnOnFileDrop = (e) => {
  e.preventDefault()
  file.value.files = e.dataTransfer.files
  fileValue.value = e.dataTransfer.files[0]
}
const fnOnClickUpload = (e) => {
  fileValue.value = e.target.files[0]
}

const tableItem = ref([
  {
    name: "นายทดสอบ",
    tel: "081-234-5678",
    product: "รองเท้าแตะ x1",
    platform_sale: "Facebook",
    platform_pay: "COD",
    totals: "1,100.00 ฿"
  },
  {
    name: "นายทดสอบ",
    tel: "081-234-5678",
    product: "รองเท้าแตะ x1",
    platform_sale: "Facebook",
    platform_pay: "COD",
    totals: "1,100.00 ฿"
  },
  {
    name: "นายทดสอบ",
    tel: "081-234-5678",
    product: "รองเท้าแตะ x1",
    platform_sale: "Facebook",
    platform_pay: "COD",
    totals: "1,100.00 ฿"
  }
])

const headersTable = ref([
  {
    title: "ชื่อลูกค้า",
    align: "center",
    key: "name"
  },
  {
    title: "เบอร์โทร",
    align: "center",
    key: "tel"
  },
  {
    title: "สินค้า",
    align: "center",
    key: "product"
  },
  {
    title: "ช่องทางการขาย",
    align: "center",
    key: "platform_sale"
  },
  {
    title: "ช่องทางการจ่าย",
    align: "center",
    key: "platform_pay"
  },
  {
    title: "ยอดรวม",
    align: "center",
    key: "totals"
  }
])
</script>

<template>
  <v-dialog
    :model-value="open"
    class="w-full"
    :width="!!summarizeUpload ? 'auto' : '380px'"
    persistent
  >
    <v-scroll-x-transition hide-on-leave>
      <v-card v-if="!summarizeUpload" class="rounded-lg">
        <v-card-text class="flex justify-between items-center">
          <v-icon size="20" class="opacity-subTitle"
            >fa-solid fa-circle-info</v-icon
          >
          <div class="text-[16px] font-[600] opacity-[0.7]">
            นำเข้าคำสั่งซื้อ
          </div>
        </v-card-text>
        <v-card-text class="flex justify-between items-center">
          <div
            @drop="fnOnFileDrop"
            @dragover="dragover"
            @dragleave="dragleave"
            class="w-full border-[#EEEDF1] border rounded-md"
          >
            <input
              type="file"
              multiple
              name="file"
              class="hidden"
              id="fileInput"
              @change="fnOnClickUpload"
              ref="file"
            />
            <label
              for="fileInput"
              class="h-[200px] w-full flex justify-center items-center flex-col space-y-1"
            >
              <div
                class="!w-[60px] !h-[60px] flex rounded-full justify-center items-center relative"
                :style="{ backgroundColor: !fileValue ? '#EEEDF1' : '#084F93' }"
              >
                <v-icon
                  class="mb-2"
                  size="35"
                  :color="!fileValue ? '#74777F' : '#EEEDF1'"
                  >fa-regular fa-file</v-icon
                >
                <div
                  class="!w-[20px] !h-[20px] flex rounded-full justify-center items-center absolute right-0 bottom-0"
                  :style="{
                    backgroundColor: !fileValue ? '#EEEDF1' : '#12B76A',
                    border: '2px solid #EEEDF1'
                  }"
                >
                  <v-icon
                    size="10"
                    class="rounded-full"
                    :color="!fileValue ? '#74777F' : '#EEEDF1'"
                    >{{
                      !fileValue ? "fa-solid fa-arrow-up" : "fa-solid fa-check"
                    }}</v-icon
                  >
                </div>
              </div>

              <div class="text-[14px]" v-if="!fileValue">
                ลากและวางไฟล์ตรงนี้ หรือ
              </div>
              <div class="text-[14px]" v-else>
                {{ fileValue.name }}
              </div>
              <div class="text-[12px] text-[#0BA5EC]" v-if="!fileValue">
                ค้นหาไฟล์
              </div>
            </label>
          </div>
        </v-card-text>
        <v-card-text class="flex justify-between space-x-2">
          <v-btn
            class="w-1/2 !rounded-lg"
            color="#084F93"
            size="large"
            variant="outlined"
            @click="fnHandleClose"
            >ยกเลิก</v-btn
          >
          <v-btn
            class="w-1/2 !rounded-lg"
            :color="fileValue ? '#084F93' : '#000'"
            size="large"
            :variant="fileValue ? 'flat' : 'tonal'"
            :disabled="!fileValue"
            @click="fnGetFileData"
            >นำเข้า</v-btn
          >
        </v-card-text>
        <v-card-text
          class="flex justify-center opacity-[0.6] items-center space-x-1"
        >
          <v-icon size="16">fa-solid fa-file-arrow-down</v-icon>
          <div class="text-[12px]">
            ดาวน์โหลดฟอร์มสำหรับนำเข้ารายการคำสั่งซื้อ
          </div>
        </v-card-text>
      </v-card>

      <v-card v-else class="rounded-lg">
        <v-card-text class="flex justify-between items-center">
          <div class="text-[16px] font-[600] opacity-[0.7]">
            สรุปการนำเข้าคำสั่งซื้อ
          </div>

          <v-icon
            size="20"
            @click="
              () => {
                fnHandleClose()
              }
            "
            class="!absolute right-4 cursor-pointer hover:text-[#084F93] transition-all"
            >fa-solid fa-close</v-icon
          >
        </v-card-text>
        <v-card-text class="!pt-2">
          <div class="border border-[#EEEDF1] rounded-lg p-4">
            <div
              class="mb-2 font-[600] text-subTitle leading-[18px] tracking-[-0.021px] opacity-title"
            >
              รายละเอียด
            </div>
            <div class="flex gap-2 self-stretch flex-wrap">
              <div
                class="w-[calc(20%-8px)] text-subTitle leading-5 tracking-23 opacity-title"
              >
                คำสั่งซื้อทั้งหมด:
              </div>
              <div
                class="w-[calc(80%-8px)] text-subTitle leading-5 tracking-23 opacity-subTitle"
              >
                : 25 คำสั่งซื้อ
              </div>
              <div
                class="w-[calc(20%-8px)] text-subTitle leading-5 tracking-23 opacity-title"
              >
                Back transfer:
              </div>
              <div
                class="w-[calc(80%-8px)] text-subTitle leading-5 tracking-23 opacity-subTitle"
              >
                : 10 คำสั่งซื้อ
              </div>
              <div
                class="w-[calc(20%-8px)] text-subTitle leading-5 tracking-23 opacity-title"
              >
                COD:
              </div>
              <div
                class="w-[calc(80%-8px)] text-subTitle leading-5 tracking-23 opacity-subTitle"
              >
                : 5 คำสั่งซื้อ
              </div>
              <div
                class="w-[calc(20%-8px)] text-subTitle leading-5 tracking-23 opacity-title"
              >
                เงินสด:
              </div>
              <div
                class="w-[calc(80%-8px)] text-subTitle leading-5 tracking-23 opacity-subTitle"
              >
                : 5 คำสั่งซื้อ
              </div>
              <div
                class="w-[calc(20%-8px)] text-subTitle leading-5 tracking-23 opacity-title"
              >
                บัตรเครดิต:
              </div>
              <div
                class="w-[calc(80%-8px)] text-subTitle leading-5 tracking-23 opacity-subTitle"
              >
                : 5 คำสั่งซื้อ
              </div>
              <div
                class="w-[calc(20%-8px)] text-subTitle leading-5 tracking-23 opacity-title"
              >
                ยอดคำสั่งซื้อทั้งหมด:
              </div>
              <div
                class="w-[calc(80%-8px)] text-subTitle leading-5 tracking-23 opacity-subTitle"
              >
                : 85,347.00 บาท
              </div>
            </div>
          </div>
          <v-card
            variant="flat"
            class="border border-[#EEEDF1] !rounded-lg pb-[15px] mt-4"
          >
            <v-data-table
              v-if="tableItem.length > 0"
              :items="tableItem"
              :headers="headersTable"
              id="table-header-black"
            >
              <template
                v-slot:item="{ item, toggleExpand, isExpanded, internalItem }"
              >
                <tr>
                  <td class="text-table">
                    {{ item.name }}
                  </td>
                  <td class="text-table">
                    {{ item.tel }}
                  </td>
                  <td class="text-table">
                    {{ item.product }}
                  </td>
                  <td class="text-table">
                    {{ item.platform_sale }}
                  </td>
                  <td class="text-table">
                    {{ item.platform_pay }}
                  </td>
                  <td class="text-table">
                    {{ item.totals }}
                  </td>
                </tr>
              </template>
              <template #bottom></template>
            </v-data-table>
            <div v-else class="h-[260px] flex justify-center items-center">
              <p>ยังไม่มีรายการ</p>
            </div>
          </v-card>
        </v-card-text>
        <v-card-text class="flex justify-between space-x-2">
          <v-btn
            class="w-1/2 !rounded-lg"
            color="#084F93"
            size="large"
            variant="outlined"
            @click="fnHandleClose"
            >ยกเลิก</v-btn
          >
          <v-btn
            class="w-1/2 !rounded-lg"
            color="#084F93"
            size="large"
            variant="flat"
            @click="() => {
              onclose()
              onsubmit()
            }"
            >ยืนยันการนำเข้า</v-btn
          >
        </v-card-text>
      </v-card>
    </v-scroll-x-transition>
  </v-dialog>
</template>

<style scoped>
.text-table {
  @apply text-[14px] leading-5 tracking-[-0.23%] text-center !pr-10;
}
</style>

<style>
thead tr {
  @apply bg-[#E9E7EB];
}
</style>
