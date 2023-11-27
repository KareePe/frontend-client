<script setup>
import { ref, onMounted, watch } from "vue";

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
const headersTable = ref([
  {
    title: "ประเภท",
    align: "center",
    key: "name",
    width: "150px",
  },
  {
    title: "รุป",
    align: "center",
    key: "tel",
    sortable: false,
    width: "60px",
  },
  {
    title: "SKU ID",
    align: "center",
    key: "product",
  },
  {
    title: "ชื่อสินค้า",
    align: "center",
    key: "platform_sale",
    width: "230px",
  },
  {
    title: "จำนวนที่เหลือจากทุกคลัง",
    align: "center",
    key: "platform_pay",
    width: "230px",
  },
  {
    title: "คลังสินค้า",
    align: "center",
    key: "amount",
    sortable: false,
    width: "180px",
  },
  {
    title: "จำนวนลูกค้าที่สั่ง",
    align: "center",
    key: "totals",
  },
]);

const tableItemSystem = ref([
  {
    type: "สินค้าหลัก",
    src: "",
    id: "W211",
    name: "MI Monitor 5 - ขาว, 27’’",
    price: "12,000",
    amount: 60,
    totals: "720,000",
    warehouse: "หาดใหญ่",
    weight: "5",
  },
  {
    type: "สินค้าย่อย",
    src: "",
    id: "W212",
    name: "MI Monitor",
    price: "",
    amount: "",
    totals: "720,000",
    weight: "5",
    miner: [
      {
        name: "MI Monitor 5 - ขาว, 27’’",
        id: "W212-1",
        warehouse: "หาดใหญ่",
        amount: "5",
      },
      {
        name: "MI Monitor 5 - ขาว, 27’’",
        id: "W212-2",
        warehouse: "หาดใหญ่",
        amount: "5",
      },
      {
        name: "MI Monitor 5 - ขาว, 27’’",
        id: "W212-3",
        warehouse: "หาดใหญ่",
        amount: "5",
      },
    ],
  },
  {
    type: "สินค้าหลัก",
    src: "",
    id: "W213",
    name: "MI Monitor 5 - ขาว, 27’’",
    price: "12,000",
    amount: 60,
    totals: "720,000",
    warehouse: "หาดใหญ่",
    weight: "5",
  },
]);
const table = ref();

const page = ref(1);
const itemsPerPage = ref(10);

const pageCount = computed(() => {
  return Math.ceil(tableItemSystem.value.length / itemsPerPage.value);
});

const fnChangeRowPerPages = (e) => {
  itemsPerPage.value = e;
};
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
          @click="fnHandleClose"
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
          ref="table"
          item-value="id"
          :items-per-page="itemsPerPage"
          :page="page"
        >
          <template
            v-slot:item="{ item, toggleExpand, internalItem, isExpanded }"
          >
            <tr
              @click="
                if (item.type === 'สินค้าย่อย') {
                  toggleExpand(internalItem);
                }
              "
              :class="
                item.type === 'สินค้าย่อย'
                  ? 'hover:bg-[#E9E7EB] cursor-pointer'
                  : ''
              "
            >
              <td
                :class="
                  isExpanded(internalItem) ? 'center border-0 ' : 'center '
                "
              >
                {{ item.type }}
              </td>
              <td :class="isExpanded(internalItem) ? 'border-0 ' : ''">
                <div class="flex justify-center">
                  <div class="w-10 h-10 bg-green-600"></div>
                </div>
              </td>
              <td
                :class="
                  isExpanded(internalItem) ? 'center border-0 ' : 'center '
                "
              >
                {{ item.id }}
              </td>
              <td
                :class="
                  isExpanded(internalItem) ? 'center border-0 ' : 'center '
                "
              >
                {{ item.name }}
              </td>
              <td
                :class="
                  isExpanded(internalItem) ? 'center border-0 ' : 'center '
                "
              >
                {{ item.price }}
              </td>
              <td :class="isExpanded(internalItem) ? ' border-0 ' : ' '">
                <div
                  v-if="item.type !== 'สินค้าย่อย'"
                  class="flex justify-center my-2"
                >
                  <v-select
                    density="compact"
                    :items="['คลัง 1', 'คลัง 2', 'คลัง 3', 'คลัง 4']"
                    hide-details
                    variant="outlined"
                    type="number"
                    class="input-transparent"
                  ></v-select>
                </div>
              </td>
              <td
                :class="
                  isExpanded(internalItem) ? 'center border-0 ' : 'center'
                "
              >
                <div
                  v-if="item.type !== 'สินค้าย่อย'"
                  class="flex justify-center"
                >
                  <v-text-field
                    density="compact"
                    hide-details
                    variant="outlined"
                  ></v-text-field>
                </div>
              </td>
            </tr>
          </template>
          <template v-slot:expanded-row="{ item }">
            <tr class="text-[#000] opacity-subTitle" v-for="(data, index) in item.miner" :key="index">
              <td
                class="relative"
                :style="{
                  padding: 0,
                  borderBottom: item.miner.length - 1 === index ? 1 : 0,
                }"
              >
                <div
                  class="w-[2px] absolute left-[41px] box-border"
                  :style="{
                    backgroundColor: '#C4C6CF',
                    height: index === 0 ? 'calc(100% - 5px)' : '100%',
                    bottom: item.miner.length - 1 === index ? '24px' : '20px',
                  }"
                ></div>
                <div class="left-10 absolute">
                  <v-icon color="#C4C6CF" size="20px"
                    >fa-solid fa-arrow-right</v-icon
                  >
                </div>
                <div class="flex">
                  <div class="ml-16">{{ item.type }}</div>
                </div>
              </td>
              <td
                :style="{
                  borderBottom: item.miner.length - 1 === index ? 1 : 0,
                }"
              >
                <div class="flex justify-center">
                  <div class="w-10 h-10 bg-blue-500"></div>
                </div>
              </td>
              <td
                :style="{
                  borderBottom: item.miner.length - 1 === index ? 1 : 0,
                }"
                class="center"
              >
                {{ data.id }}
              </td>
              <td
                :style="{
                  borderBottom: item.miner.length - 1 === index ? 1 : 0,
                }"
                class="center"
              >
                {{ data.name }}
              </td>
              <td
                :style="{
                  borderBottom: item.miner.length - 1 === index ? 1 : 0,
                }"
                class="center"
              >
                {{ data.amount }}
              </td>
              <td
                :style="{
                  borderBottom: item.miner.length - 1 === index ? 1 : 0,
                }"
                class="center"
              >
                <v-select
                  density="compact"
                  :items="['คลัง 1', 'คลัง 2', 'คลัง 3', 'คลัง 4']"
                  hide-details
                  variant="outlined"
                  type="number"
                  class="input-transparent"
                ></v-select>
              </td>
              <td
                :style="{
                  borderBottom: item.miner.length - 1 === index ? 1 : 0,
                }"
                class="center"
              >
                <div class="flex justify-center">
                  <v-text-field
                    density="compact"
                    hide-details
                    variant="outlined"
                  ></v-text-field>
                </div>
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
      <div class="text-center pt-2 flex justify-center items-center relative">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
        <div class="w-[140px] absolute right-0 mr-4">
          <v-select
            label="จำนวนแสดงผล"
            variant="outlined"
            :items="[5, 10, 15, 20, 25, 30]"
            :item-title="(item) => item + ' รายการ'"
            :item-value="(item) => item"
            :model-value="itemsPerPage"
            density="compact"
            hide-details="auto"
            @update:modelValue="fnChangeRowPerPages"
          ></v-select>
        </div>
      </div>
      <div class="flex w-full gap-3 mt-4 justify-center items-center">
        <v-btn class="w-1/2" variant="outlined" color="#084F93" @click="fnHandleClose">ยกเลิก</v-btn>
        <v-btn class="w-1/2" variant="flat" color="#084F93">ตกลง</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.no-border {
}

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

.input-transparent input {
  @apply bg-transparent;
}
</style>
