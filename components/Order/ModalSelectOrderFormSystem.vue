<script setup>
import { ref, onMounted, watch } from "vue"

const { open } = defineProps({
  open: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(["onSubmit", "onClose"])

const fnHandleClose = () => {
  emit("onClose")
}
const headersTable = ref([
  {
    title: "ประเภท",
    align: "center",
    key: "name"
  },
  {
    title: "รุป",
    align: "center",
    key: "tel",
    sortable: false,
    width: "60px"
  },
  {
    title: "SKU ID",
    align: "center",
    key: "product"
  },
  {
    title: "ชื่อสินค้า",
    align: "center",
    key: "platform_sale",
    width: "250px"
  },
  {
    title: "จำนวนที่เหลือจากทุกคลัง",
    align: "center",
    key: "platform_pay",
    width: "230px"
  },
  {
    title: "คลังสินค้า",
    align: "center",
    key: "amount",
    sortable: false,
    width: "150px"
  },
  {
    title: "ราคารวม",
    align: "center",
    key: "totals"
  },
  {
    title: "คลัง",
    align: "center",
    key: "warehouse"
  }
])

const tableItemSystem = ref([
  {
    main_product: "MI Monitor 5 ",
    src: "",
    id: "W212-2",
    name: "MI Monitor 5 - ขาว, 27’’",
    price: "12,000",
    amount: 60,
    totals: "720,000",
    warehouse: "หาดใหญ่",
    weight: "5"
  }
])
const table = ref()
</script>

<template>
  <v-dialog :model-value="open" width="1200px" persistent>
    <v-card class="rounded-lg !p-4">
      <div class="flex justify-between">
        <div class="opacity-subTitle leading-[22px] tracking-31 text-title">
          เลือกสินค้าจากระบบ
        </div>
        <v-icon
          size="20"
          class="cursor-pointer hover:text-[#084F93] transition-all"
          @click="console.log(table)"
          >fa-solid fa-close</v-icon
        >
      </div>

      <v-card
        variant="flat"
        class="border border-[#EEEDF1] !rounded-lg pb-[15px] mt-4"
      >
        <v-data-table
          :items="tableItemSystem"
          :headers="headersTable"
          id="table-header-black"
          :show-expand="true"
          ref="table"
        >
          <template v-slot:item="{ item, toggleExpand, internalItem }">
            <tr>
              <td class="center">
                {{ item.main_product }}
              </td>
              <td @click="toggleExpand(internalItem)">
                <div class="flex justify-center">
                  <div class="w-10 h-10 bg-lime-600"></div>
                </div>
              </td>
              <td class="center">
                {{ item.id }}
              </td>
              <td class="center">
                {{ item.name }}
              </td>
              <td class="center">
                {{ item.price }}
              </td>
              <td>
                <div class="flex justify-center">
                  <v-text-field
                    density="compact"
                    hide-details
                    variant="outlined"
                    type="number"
                  ></v-text-field>
                </div>
              </td>
              <td class="center">
                {{ item.price }}
              </td>
              <td class="center">
                {{ item.warehouse }}
              </td>
            </tr>
          </template>
          <template v-slot:expanded-row="{ item, index }">
            <tr>
              <td class="center">
                {{ item.main_product }}
              </td>
              <td>
                <!-- {{ item.tel }} -->
                <div class="flex justify-center">
                  <div class="w-10 h-10 bg-red-600"></div>
                </div>
              </td>
              <td class="center">
                {{ item.id }}
              </td>
              <td class="center">
                {{ item.name }}
              </td>
              <td class="center">
                {{ item.price }}
              </td>
              <td>
                <div class="flex justify-center">
                  <v-text-field
                    density="compact"
                    hide-details
                    variant="outlined"
                    type="number"
                  ></v-text-field>
                </div>
              </td>
              <td class="center">
                {{ item.price }}
              </td>
              <td class="center">
                {{ item.warehouse }}
              </td>
            </tr>
          </template>
          <template v-slot:no-data>
            <div class="h-[260px] flex justify-center items-center">
              <p>ยังไม่มีรายการ</p>
            </div>
          </template>
          <template #bottom></template>
        </v-data-table>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.social::before {
  content: "โซเชียลมีเดีย";
  position: absolute;
  background-color: white;
  top: -12px;
  padding: 0px 5px;
  line-height: 20px;
  color: #74777f;
  font-size: 14px;
}

.marketplace::before {
  content: "มาร์เก็ตเพลส";
  position: absolute;
  background-color: white;
  top: -12px;
  padding: 0px 5px;
  line-height: 20px;
  color: #74777f;
  font-size: 14px;
}

.mysite::before {
  content: "เว็บไซด์ของคุณ";
  position: absolute;
  background-color: white;
  top: -12px;
  padding: 0px 5px;
  line-height: 20px;
  color: #74777f;
  font-size: 14px;
}

.alliance::before {
  content: "พันธมิตร";
  position: absolute;
  background-color: white;
  top: -12px;
  padding: 0px 5px;
  line-height: 20px;
  color: #74777f;
  font-size: 14px;
}

.offline::before {
  content: "ออฟไลน์";
  position: absolute;
  background-color: white;
  top: -12px;
  padding: 0px 5px;
  line-height: 20px;
  color: #74777f;
  font-size: 14px;
}

.more::before {
  content: "อื่นๆ";
  position: absolute;
  background-color: white;
  top: -12px;
  padding: 0px 5px;
  line-height: 20px;
  color: #74777f;
  font-size: 14px;
}

.cardWLabel {
  @apply border border-[#EEEDF1] rounded-md p-4 relative;
}
</style>

<style>
.disable-space .v-selection-control {
  @apply flex-[0];
}
.disable-space {
  @apply flex-[none];
}
</style>
