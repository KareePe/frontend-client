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

let tableItem = ref([
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
]);

let filterTableItem = ref([])
const chipData = ["SKU", "ชื่อสินค้า", "Action", "ดำเนินการโดย"];

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

const filterTable: any = ref([]);

watch(filterTable, (item) => {
  console.log(filterTable, "item");
});

onMounted(() => {
  filterTableItem.value = tableItem.value
})

const fn_filterCheck = (item) => {
  if (filterInput.value !== "") {
    filterTable.value.push({
      type: item,
      filter: filterInput.value,
    });
    filterInput.value = "";
  }
  fn_filter();
};

const fn_popFilter = (type) => {
  const index = filterTable.value.findIndex((filter) => filter.type === type);

  if (index !== -1) {
    filterTable.value.splice(index, 1);
  }

  fn_filter();
};

const fn_filter = () => {
  console.log(filterTable.value, "filterTable");

  const filters = filterTable.value.map((item) => {
    switch (item.type) {
      case "SKU":
        return tableItem.value.filter((table) => table.sku === item.filter);
      case "ชื่อสินค้า":
        return tableItem.value.filter((table) => table.product.includes(item.filter));
      case "Action":
        return tableItem.value.filter((table) => table.action.includes(item.filter));
      case "ดำเนินการโดย":
        return tableItem.value.filter((table) => table.manager.includes(item.filter));
      default:
        return [];
    }
  });

  filterTableItem.value = filters.length > 0 ? filters[0] : tableItem.value;
};

let menu = ref(false);
let filterInput = ref("");
</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <!-- <v-menu ref="open">
        <template v-slot:activator="{ props }">
          <v-text-field
            v-bind="props"
            clearable
            prepend-inner-icon="fa-solid fa-magnifying-glass"
            label="วันที่"
            class="auto-feild lg:!max-w-[238px] w-full !h-[48px] !rounded-[8px] mb-[15px]"
            variant="outlined"
          ></v-text-field>
        </template>
        <v-date-picker @input="open = false" locale="th"></v-date-picker>
      </v-menu> -->
      <v-text-field
        variant="outlined"
        hide-details
        prepend-inner-icon="fa-regular fa-calendar"
        label="วันที่"
        class="auto-feild lg:!max-w-[238px] w-full !h-[48px] !rounded-[8px] mb-[15px]"
      ></v-text-field>
      <v-btn
        class="!rounded-[8px] !min-w-[200px] !text-[14px] !h-[48px]"
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
      readonly
      class="bg-white prepend-chip !rounded-[8px] !h-[48px] flex flex-nowrap"
    >
      <template v-slot:prepend-inner>
        <div class="w-fit flex" v-if="filterTable.length > 0">
          <div
            v-for="(item, index) in filterTable"
            :key="index"
            class="!bg-[#EEEDF1] flex items-center gap-[10px] !text-[#0BA5EC] whitespace-nowrap text-sm font-medium me-2 py-[2px] px-[12px] !rounded-[20px] select-none cursor-pointer"
          >
            <p class="text-[#000]/[0.38]">
              {{ item.type }} |
              <span class="text-[#084F93]">{{ item.filter }}</span>
            </p>
            <i
              class="fa-solid fa-xmark text-[#74777F] cursor-pointer"
              @click="fn_popFilter(item.type)"
            ></i>
          </div>
        </div>
      </template>
    </v-text-field>
    <div class="pt-2">
      <v-dialog width="350px" v-for="(item, index) in chipData" :key="index">
        <template v-slot:activator="{ props }">
          <v-btn
            flat
            v-bind="props"
            :text="item"
            class="!bg-[#EEEDF1] !text-[#0BA5EC] whitespace-nowrap text-sm font-medium me-2 py-[2px] px-[12px] !rounded-[20px] select-none cursor-pointer"
          ></v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <div
              class="bg-[#084F93] w-full h-[48px] text-white px-[15px] flex items-center"
            >
              {{ item }}
            </div>

            <div class="p-[15px]">
              <v-text-field
                v-model="filterInput"
                density="compact"
                variant="outlined"
                class="w-full !h-[48px] !rounded-[8px]"
                :placeholder="`กรอก ${item} ที่ต้องการกรอง`"
              ></v-text-field>
            </div>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text="ตกลง"
                @click="
                  isActive.value = false;
                  fn_filterCheck(item);
                "
              ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
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
      :items="filterTableItem"
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

<style>
.prepend-chip .v-field__input {
  height: 48px !important;
}
</style>
