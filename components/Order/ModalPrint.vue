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
const activePrint = ref("A4")
const RequireDocCheck = ref([])
const paperNum = ref("")
const selectPrint = [
  {
    name: "A4",
    value: "A4",
    subtitle: "เหมาะสำหรับ เครื่องพิมพ์ต่อคอมพิวเตอร์",
    icon: "fa-regular fa-file-lines"
  },
  {
    name: "4*4",
    value: "4*4",
    subtitle: "เหมาะสำหรับ เครื่องพิมพ์ TSC",
    icon: "fa-regular fa-file-lines"
  },
  {
    name: "4*6",
    value: "4*6",
    subtitle: "เครื่องพิมพ์ต่อคอมพิวเตอร์",
    icon: "fa-regular fa-file-lines"
  },
  {
    name: "มือถือ",
    value: "mobile",
    subtitle: "เหมาะสำหรับ เครื่องพิมพ์ต่อคอมพิวเตอร์",
    icon: "fa-solid fa-mobile"
  }
]

const RequireDocument = [
  {
    name: "Shipping Label",
    subtitle: "ใบปะหน้าพัสดุ",
    include: ["A4", "4*4", "4*6", "mobile"],
    value: "ShippingLabel"
  },
  {
    name: "Stock Checklist",
    subtitle: "ใบสต็อคสินค้า",
    include: ["A4"],
    value: "StockChecklist"
  },
  {
    name: "Shipping Label + Stock Checklist",
    subtitle: "ใบปะหน้าพัสดุ",
    include: ["A4"],
    value: "both"
  }
]
</script>

<template>
  <v-dialog :model-value="open" width="auto" persistent>
    <v-card class="w-full rounded-lg">
      <v-card-text>
        <div class="flex justify-between items-center">
          <div
            class="text-[16px] font-[600] tracking-[-0.05px] leading-[22px] opacity-[0.6]"
          >
            ขึ้นตอนการพิมพ์เอกสาร
          </div>
          <v-icon
            size="20"
            @click="
              () => {
                onclose()
                value = ''
              }
            "
            class="cursor-pointer hover:text-[#084F93] transition-all"
            >fa-solid fa-close</v-icon
          >
        </div>
      </v-card-text>
      <v-card-text>
        <div
          class="font-[600] text-subTitle leading-[18px] tracking-[-0.021px] opacity-title"
        >
          ประเภทการพิมพ์
        </div>
        <div class="flex mt-4 space-x-4">
          <div
            v-for="items in selectPrint"
            @click="
              () => {
                activePrint = items.value
                RequireDocCheck = []
              }
            "
            :class="
              activePrint === items.value
                ? 'h-[170px] w-[120px] rounded-lg bg-gradient-to-r from-[#084F93] via-[#153B65] to-[#00AA84] p-[2px]  cursor-pointer select-none'
                : 'h-[170px] w-[120px] rounded-lg bg-[#EEEDF1] p-[2px] cursor-pointer select-none'
            "
          >
            <div
              class="h-full w-full rounded-lg bg-white flex justify-center items-center flex-col space-y-2"
            >
              <v-icon
                :color="activePrint === items.value ? '#084F93' : '#084F93'"
                size="24"
                :class="
                  activePrint === items.value ? 'opacity-[1]' : 'opacity-detail'
                "
                >{{ items.icon }}</v-icon
              >
              <div
                :class="
                  activePrint === items.value
                    ? 'tracking-[-0.079px] leading-[26px] text-[22px] text-[#084F93]'
                    : 'tracking-[-0.079px] leading-[26px] text-[22px] text-[#084F93] opacity-detail'
                "
              >
                {{ items.name }}
              </div>
              <div
                class="text-center opacity-detail tracking-[0.006px] text-[10px] mx-2"
              >
                {{ items.subtitle }}
              </div>
            </div>
          </div>
        </div>

        <div
          class="font-[600] text-subTitle leading-[18px] tracking-[-0.021px] opacity-title mt-4"
        >
          จำนวนคำสั่งต่อกระดาษ
        </div>

        <div class="flex gap-3">
          <div
            @click="paperNum = '1'"
            class="mt-2 border-[#EEEDF1] border flex justify-center items-center flex-col space-y-2 h-[170px] w-[120px] rounded-lg p-[2px] cursor-pointer select-none"
          >
            <div
              :style="{
                backgroundColor: paperNum === '1' ? '#084F9361' : '#000',
                opacity: paperNum === '1' ? 1 : 0.4
              }"
              class="w-[60px] h-[64px] opacity-detail"
            ></div>
            <div>1</div>
          </div>
          <div
            @click="paperNum = '4'"
            class="mt-2 border-[#EEEDF1] border flex justify-center items-center flex-col space-y-2 h-[170px] w-[120px] rounded-lg p-[2px] cursor-pointer select-none"
          >
            <div class="flex w-[60px] h-[64px] gap-[2px] flex-wrap">
              <div
                v-for="item in ['', '', '', '']"
                class="w-[calc(50%-2px)] h-[calc(50%-2px)] opacity-detail"
                :style="{
                  backgroundColor: paperNum === '4' ? '#084F9361' : '#000',
                  opacity: paperNum === '4' ? 1 : 0.4
                }"
              ></div>
            </div>
            <div>4</div>
          </div>

          <div
            @click="paperNum = '8'"
            class="mt-2 border-[#EEEDF1] border items-center flex justify-center flex-col space-y-2 h-[170px] w-[120px] rounded-lg p-[2px] cursor-pointer select-none"
          >
            <div class="flex w-[90px] h-[64px] gap-[2px] flex-wrap">
              <div
                v-for="item in ['', '', '', '', '', '', '', '']"
                :style="{
                  backgroundColor: paperNum === '8' ? '#084F9361' : '#000',
                  opacity: paperNum === '8' ? 1 : 0.4
                }"
                class="w-[calc(25%-2px)] h-[calc(50%-2px)] bg-[#084F9361] opacity-detail"
              ></div>
            </div>
            <div>8</div>
          </div>
        </div>

        <div
          class="font-[600] text-subTitle leading-[18px] tracking-[-0.021px] opacity-title mt-4"
        >
          เอกสารที่ต้องการ
        </div>
        <div class="flex flex-wrap gap-2 mt-2">
          <div
            class="rounded-lg border border-[#EEEDF1] pl-2 py-1 flex max-[500px]:w-full w-[calc(50%-16px)] cursor-pointer box-border select-none"
            v-for="item in RequireDocument"
            @click="
              () => {
                if (item.include.includes(activePrint)) {
                  const found = RequireDocCheck.find((items) => {
                    return items === item.value
                  })
                  if (!!found) {
                    const filter = RequireDocCheck.filter(
                      (items) => items !== item.value
                    )
                    RequireDocCheck = filter
                  } else {
                    RequireDocCheck.push(item.value)
                  }
                }
              }
            "
          >
            <v-checkbox
              class="checkbox-change-status !flex-none color-checkbox"
              hide-details
              v-model="RequireDocCheck"
              color="#084F93"
              :disabled="!item.include.includes(activePrint)"
              :value="item.value"
              false-icon="fa-regular fa-circle"
              true-icon="fa-regular fa-circle-dot"
            ></v-checkbox>
            <div class="flex flex-col justify-center">
              <div
                :class="
                  item.include.includes(activePrint)
                    ? 'RequireDocumentActive'
                    : 'RequireDocumentDisable'
                "
              >
                {{ item.name }}
              </div>
              <div
                class="opacity-detail leading-[14px] tracking-[0.006px] text-[10px]"
              >
                {{ item.subtitle }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <v-btn
            variant="flat"
            class="!bg-[#084F93] text-white !rounded-lg mt-4 mb-2 min-h-[45px]"
            @click="() => onsubmit(value)"
            >พิมพ์ใบส่งของ</v-btn
          >
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.RequireDocumentDisable {
  @apply text-subTitle leading-5 tracking-23 text-[#1A1C1E] opacity-detail;
}
.RequireDocumentActive {
  @apply text-subTitle leading-5 tracking-23 text-[#1A1C1E];
}
</style>

<style>
.color-checkbox {
  @apply text-[#C4C6CF];
}
</style>
