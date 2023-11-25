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
const emit = defineEmits(["update-stock"]);

const fnHandleUpdateStock = (value: any) => {
  {
    emit("update-stock", value);
  }
};

type TableColumn = {
  align: "center" | "start" | "end";
  title: string;
  sortable: boolean;
  width?: string;
};

type TableRow = {
  id: string;
  color: string;
  size: string;
  price: number;
  weight: number;
  stock: number;
  status: boolean;
  img?: string;
};

const tableItem: TableRow[] = [
  {
    id: "123456",
    color: "Red",
    size: "M",
    price: 25.99,
    weight: 0.5,
    stock: 10,
    status: true,
  },
  {
    id: "987654",
    color: "Blue",
    size: "L",
    price: 29.99,
    weight: 0.6,
    stock: 5,
    status: false,
  },
  {
    id: "123456",
    color: "Green",
    size: "S",
    price: 19.99,
    weight: 0.4,
    stock: 15,
    status: true,
  },
  // เพิ่มข้อมูลตามต้องการ
];

const tableHeader: TableColumn[] = [
  {
    align: "center",
    title: "ตัวเลือกที่",
    sortable: false,
    width: "150px",
  },
  {
    align: "center",
    title: "SKU ID",
    sortable: false,
  },
  {
    align: "center",
    title: "สี",
    sortable: false,
  },
  {
    align: "center",
    title: "ขนาด",
    sortable: false,
  },
  {
    align: "center",
    title: "ราคา(บาท)",
    sortable: false,
  },
  {
    align: "center",
    title: "น้ำหนัก(กิโลกรัม)",
    sortable: false,
  },
  {
    align: "center",
    title: "จำนวนสต๊อค(สต๊อค)",
    sortable: false,
  },
  {
    align: "center",
    title: "สถานะ",
    sortable: false,
  },
  {
    align: "center",
    title: "Action",
    sortable: false,
    width: "48px",
  },
];
</script>

<template>
  <div class="flex justify-between items-center">
    <Switch text="เปิดใช้งาน" />
    <v-btn
      class="rounded-lg"
      color="#084F93"
      prepend-icon="fa-regular fa-pen-to-square"
      variant="outlined"
      size="large"
      >แก้ไขสินค้า</v-btn
    >
  </div>

  <div class="flex border border-[#EEEDF1] rounded-lg p-4 flex-col mt-4">
    <div
      class="text-[20px] opacity-title leading-[24px] tracking-[-0.09px] text-black font-bold"
    >
      หมวดหมู่สินค้า
    </div>
    <div class="flex gap-2 mt-2">
      <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
        หมวดหมู่
      </div>
      <div class="text-subTitle leading-5 tracking-23">
        : Category tier 1 / Category tier 2 / Category tier 3
      </div>
    </div>
  </div>

  <div class="flex border border-[#EEEDF1] rounded-lg p-4 flex-col mt-3">
    <div
      class="text-[20px] opacity-title leading-[24px] tracking-[-0.09px] text-black font-bold"
    >
      หมวดหมู่สินค้า
    </div>
    <div class="flex gap-2 mt-2">
      <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
        ชื่อสินค้า
      </div>
      <div class="text-subTitle leading-5 tracking-23">: {{ data.name }}</div>
    </div>
    <div class="flex gap-2 mt-2">
      <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
        ภาพสินค้า
      </div>
      <div class="text-subTitle leading-5 tracking-23 flex gap-3">
        <div class="w-[105px] h-[105px] bg-lime-500"></div>
        <div class="w-[105px] h-[105px] bg-lime-500"></div>
        <div class="w-[105px] h-[105px] bg-lime-500"></div>
      </div>
    </div>
  </div>

  <div class="flex border border-[#EEEDF1] rounded-lg p-4 flex-col mt-3">
    <div
      class="text-[20px] opacity-title leading-[24px] tracking-[-0.09px] text-black font-bold"
    >
      ข้อมูลสต๊อค
    </div>
    <div class="flex gap-2 mt-2">
      <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
        หน่วยนับสินค้า
      </div>
      <div class="text-subTitle leading-5 tracking-23">ผืน</div>
    </div>
    <div class="flex gap-2 mt-2">
      <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
        สินค้าย่อย
      </div>
      <div class="text-subTitle leading-5 tracking-23">มี</div>
    </div>

    <v-card
      variant="flat"
      class="border border-[#EEEDF1] !rounded-b-[8px] pb-[15px] mt-4"
    >
      <v-data-table
        id="table-header-black"
        :headers="tableHeader"
        class="table-row-text"
        :items="tableItem"
      >
        <template v-slot:item="{ item, index }">
          <tr>
            <td>
              <div class="flex flex-row justify-center items-center gap-3">
                <div>
                  {{ index + 1 }}
                </div>
                <div>
                  <div class="w-[80px] h-[80px] bg-slate-600 my-2"></div>
                </div>
              </div>
            </td>
            <td>
              {{ item.id || "-" }}
            </td>
            <td>
              {{ item.color || "-" }}
            </td>
            <td>
              {{ item.size || "-" }}
            </td>
            <td>
              {{ item.price }}
            </td>
            <td>
              {{ item.weight }}
            </td>
            <td>
              {{ item.stock }}
            </td>
            <td>
              <v-icon :color="item.status ? '#12B76A' : '#BA1A1A'" size="16"
                >fa-solid fa-circle</v-icon
              >
            </td>
            <td>
              <div class="flex justify-center gap-5">
                <v-menu location="bottom center">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="#084F93"
                      icon="fa-solid fa-circle-exclamation"
                      variant="text"
                      size="30"
                      class="text-[12px]"
                      v-bind="props"
                    ></v-btn>
                  </template>

                  <v-list class="!p-0">
                    <v-list-item class="!p-0">
                      <v-list-item-title>
                        <v-btn
                          @click="() => fnHandleUpdateStock(item)"
                          class="w-full"
                          variant="text"
                          >อัพเดทสต๊อค</v-btn
                        >
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
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
  </div>
</template>
