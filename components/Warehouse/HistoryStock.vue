<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const { data } = defineProps({
  data: {
    default: {
      no_warehouse: "",
      name: "",
      province: "",
      district: "",
      tel: "",
      status: "",
    },
  },
});

const emit = defineEmits(["add-no-po"]);

const fnHandleAddPO = () => {
  emit("add-no-po");
};

type TableColumn = {
  align: "center" | "start" | "end";
  title: string;
  sortable: boolean;
  width?: string;
};

type TableRow = {
  po_no: string;
  date: string;
  size: string;
  sku: string;
  product: string;
  action: string;
  amount: number;
  manager: string;
};

const tableItem: TableRow[] = [
  {
    po_no: "",
    date: "2023-11-26",
    size: "M",
    sku: "SKU001",
    action: "อัพเดท (เพิ่ม)",
    product: "Product A",
    amount: 1000,
    manager: "John Doe",
  },
  {
    po_no: "",
    date: "2023-11-27",
    size: "L",
    sku: "SKU002",
    action: "อัพเดท (เพิ่ม)",
    product: "Product B",
    amount: 1500,
    manager: "Jane Smith",
  },
  {
    po_no: "PO003",
    date: "2023-11-28",
    size: "S",
    action: "อัพเดท (เพิ่ม)",
    sku: "SKU003",
    product: "Product C",
    amount: 1200,
    manager: "Bob Johnson",
  },
  {
    po_no: "PO004",
    date: "2023-11-29",
    size: "XL",
    action: "ขาย",
    sku: "SKU004",
    product: "Product D",
    amount: 2000,
    manager: "Alice Brown",
  },
  {
    po_no: "PO005",
    date: "2023-11-30",
    size: "XS",
    sku: "SKU005",
    action: "ขาย",
    product: "Product E",
    amount: 1800,
    manager: "Charlie Davis",
  },
];
const chipData = ["ชื่อลุกค้า", "Order No.", "เบอร์โทร"];

const tableHeader: TableColumn[] = [
  {
    align: "center",
    title: "หมายเลข PO",
    sortable: true,
  },
  {
    align: "center",
    title: "วันที่",
    sortable: false,
  },
  {
    align: "center",
    title: "SKU",
    sortable: false,
  },
  {
    align: "center",
    title: "สินค้า",
    sortable: false,
  },
  {
    align: "center",
    title: "Action",
    sortable: false,
  },
  {
    align: "center",
    title: "จำนวน (สต๊อค)",
    sortable: false,
  },
  {
    align: "center",
    title: "ดำเนินการโดย",
    sortable: false,
  },
  {
    align: "center",
    title: "",
    sortable: false,
    width: "100px",
  },
];

const page = ref(1);
const itemsPerPage = ref(10);

const pageCount = computed(() => {
  return Math.ceil(tableItem.length / itemsPerPage.value);
});

const fnChangeRowPerPages = (e: number) => {
  itemsPerPage.value = e;
  console.log(e);
};

const filterTable = []

</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <v-text-field
        variant="outlined"
        density="compact"
        hide-details
        label="วันที่"
        class="max-w-[450px]"
      ></v-text-field>
      <v-btn
        class="rounded-lg !min-w-[200px] !text-[14px]"
        color="#084F93"
        variant="flat"
        size="large"
        >ดาวน์โหลด
        <template v-slot:prepend>
          <v-icon class="mb-1">fa-regular fa-pen-to-square</v-icon>
        </template>
      </v-btn>
    </div>
  </div>

  <div class="bg-[#E9E7EB] p-2 border-t border-t-[#E9E7EB] rounded-t-lg mt-2">
    <v-text-field
      placeholder="เพิ่มตัวกรอง"
      variant="outlined"
      hide-details
      density="compact"
      class="bg-white prepend-chip"
    >
      <template v-slot:prepend-inner>
        <div class="p-2 w-fit">
          <Chips text="เบอร์โทร:091-234-5678" />
        </div>
      </template>
    </v-text-field>
    <div class="pt-2">
      <Chips v-for="(item, index) in chipData" :text="item" />
    </div>
  </div>
  <v-card
    variant="flat"
    class="border border-[#EEEDF1] !rounded-b-[8px] pb-[15px]"
  >
    <v-data-table
      :headers="tableHeader"
      :items-per-page="itemsPerPage"
      :page="page"
      :items="tableItem"
      id="table-header-black"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td v-if="item.po_no">
            {{ item.po_no }}
          </td>
          <td
            v-else
            class="text-[#0BA5EC] cursor-pointer"
            @click="fnHandleAddPO"
          >
            เพิ่มใบ PO.
          </td>
          <td>
            {{ item.date }}
          </td>
          <td>
            {{ item.sku }}
          </td>
          <td>
            {{ item.product }}
          </td>
          <td>
            {{ item.action }}
          </td>
          <td>
            {{ item.amount }}
          </td>
          <td>
            {{ item.manager }}
          </td>
          <td>
            <v-btn
              color="#1A1C1E"
              icon="fa-regular fa-eye"
              variant="text"
              size="32"
              class="text-[12px]"
            ></v-btn>
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
</template>
