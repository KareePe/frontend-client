<template>
  <div class="flex justify-between items-center mb-2">
    <Switch text="เปิดใช้งาน" />

    <div class="flex justify-end items-center gap-4">
      <v-btn
        class="rounded-lg"
        color="#084F93"
        prepend-icon="fa-regular fa-pen-to-square"
        variant="outlined"
        size="large"
        >แก้ไขคลังสินค้า</v-btn
      >
      <v-btn
        class="rounded-lg"
        color="#084F93"
        prepend-icon="fa-solid fa-clock-rotate-left"
        variant="flat"
        size="large"
        @click="fnHandleHistoryClick"
        >ประวัติการจัดการสต๊อค</v-btn
      >
    </div>
  </div>

  <div
    v-if="data.name !== 'คลังชั่วคราว'"
    class="flex border border-[#EEEDF1] rounded-lg p-4"
  >
    <div class="w-1/2">
      <div
        class="text-[20px] opacity-title leading-[24px] tracking-[-0.09px] text-black font-bold"
      >
        ข้อมูลคลังสินค้า
      </div>
      <div class="flex gap-2 mt-2">
        <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
          รหัสคลังสินค้า
        </div>
        <div class="text-subTitle leading-5 tracking-23">
          : {{ data.no_warehouse }}
        </div>
      </div>
      <div class="flex gap-2 mt-2">
        <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
          ชื่อคลังสินค้า
        </div>
        <div class="text-subTitle leading-5 tracking-23">: {{ data.name }}</div>
      </div>
      <div class="flex gap-2 mt-2">
        <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
          เบอร์โทรติดต่อ
        </div>
        <div class="text-subTitle leading-5 tracking-23">: {{ data.tel }}</div>
      </div>
      <div class="flex gap-2 mt-2">
        <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
          ที่อยู่
        </div>
        <div class="text-subTitle leading-5 tracking-23">
          : 586/16 5.ประชาอุทิศ แขวง บางซื่อ เขต บางซื่อ กรุงเทพ 10800
        </div>
      </div>
    </div>
    <div class="w-1/2">
      <div
        class="text-[20px] opacity-title leading-[24px] tracking-[-0.09px] text-black font-bold"
      >
        สถานที่ตั้ง
      </div>
      <div class="bg-amber-500 h-[calc(100%-32px)] mt-2">Map</div>
    </div>
  </div>

  <div class="flex justify-between items-center mb-2 mt-4">
    <v-text-field
      variant="outlined"
      density="compact"
      hide-details
      placeholder="ค้นหาสินค้า"
      class="max-w-[460px] preinner-center"
      prepend-inner-icon="fa-solid fa-magnifying-glass"
    ></v-text-field>
    <Switch text="แสดงเฉพาะรายการที่มีสต๊อค" />
  </div>

  <v-card
    variant="flat"
    class="border border-[#EEEDF1] !rounded-b-[8px] pb-[15px] mt-4"
  >
    <v-data-table
      :items="tableItem"
      item-value="no"
      id="table-header-black"
      :headers="headersTable"
      :items-per-page="itemsPerPage"
      :page="page"
      class="table-row-text"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>
            <div class="bg-purple-500 w-50 h-50"></div>
          </td>
          <td>
            <div class="flex flex-col justify-start items-start">
              <div class="opacity-title leading-5 tracking-23">
                {{ item.name || "-" }}
              </div>
              <div class="leading-4 text-[12px] opacity-subTitle">
                Item ID - 568790
              </div>
            </div>
          </td>
          <td>
            {{ item.category || "-" }}
          </td>
          <td>
            {{ item.sub_product || "-" }}
          </td>
          <td>
            {{ item.stock || "-" }}
          </td>
          <td>
            {{ item.amount }}
          </td>
          <td>
            <div class="flex justify-center gap-5">
              <v-btn
                color="#1A1C1E"
                icon="fa-solid fa-plus-minus"
                variant="text"
                size="30"
                class="text-[12px]"
              ></v-btn>
              <v-btn
                color="#1A1C1E"
                icon="fa-solid fa-arrow-up-right-from-square"
                variant="text"
                size="30"
                class="text-[12px]"
                @click="fnHandleSeeProduct(item)"
              ></v-btn>
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
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
type headerTableType = {
  title: string;
  key: keyof tableItemType | "";
  sortable?: boolean;
  align?: "start" | "center" | "end";
};
type tableItemType = {
  image: string;
  name: string;
  category: string;
  sub_product: number;
  stock: number;
  amount: number;
};
const { data } = defineProps({
  data: {
    default: {
      no_warehouse: "asd",
      name: "Bangkok001",
      province: "",
      district: "",
      tel: "099-782-5769",
      status: "",
    },
  },
});
const emit = defineEmits(["see-product", "history-click"]);

const fnHandleHistoryClick = () => {
  emit("history-click");
};

const fnHandleSeeProduct = (data: tableItemType) => {
  {
    emit("see-product", data);
  }
};

const headersTable = ref<headerTableType[]>([
  {
    title: "รุป",
    align: "center",
    key: "image",
    sortable: false,
  },
  {
    title: "ชื่อสินค้า",
    align: "center",
    key: "name",
    sortable: false,
  },
  {
    title: "ประเภทสินค้า",
    align: "center",
    key: "category",
    sortable: false,
  },
  {
    title: "สินค้าย่อย",
    align: "center",
    key: "sub_product",
    sortable: false,
  },
  {
    title: "จำนวนสต๊อค",
    align: "center",
    key: "stock",
    sortable: false,
  },
  {
    title: "จำนวนจอง",
    align: "center",
    key: "amount",
    sortable: false,
  },
  {
    title: "",
    align: "center",
    key: "",
    sortable: false,
  },
]);

const tableItem = ref<tableItemType[]>([
  {
    image: "path/to/image1.jpg",
    name: "Product 1",
    category: "Electronics",
    sub_product: 3,
    stock: 5,
    amount: 500,
  },
  {
    image: "path/to/image2.jpg",
    name: "Product 2",
    category: "Clothing",
    sub_product: 2,
    stock: 7,
    amount: 1200,
  },
  {
    image: "path/to/image3.jpg",
    name: "Product 3",
    category: "Home and Garden",
    sub_product: 1,
    stock: 10,
    amount: 800,
  },
  {
    image: "path/to/image4.jpg",
    name: "Product 4",
    category: "Beauty",
    sub_product: 5,
    stock: 5,
    amount: 350,
  },
  {
    image: "path/to/image5.jpg",
    name: "Product 5",
    category: "Sports",
    sub_product: 4,
    stock: 10,
    amount: 600,
  },
]);

const page = ref(1);
const itemsPerPage = ref(10);

const pageCount = computed(() => {
  return Math.ceil(tableItem.value.length / itemsPerPage.value);
});

const fnChangeRowPerPages = (e: number) => {
  itemsPerPage.value = e;
  console.log(e);
};
</script>
