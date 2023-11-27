<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
const { data } = defineProps({
  data: {
    default: {
      image: "",
      name: "",
      category: "",
      sub_product: "",
      stock: "",
      reserve: "",
      status: "",
    },
  },
  mode: {
    default: "edit",
  },
});
const emit = defineEmits(["update-stock", "edit-click", "cancel"]);

const fnHandleEditClick = () => {
  emit("edit-click");
};

const fnHandleCancelClick = () => {
  emit("cancel");
};

const fnHandleUpdateStock = (value: any) => {
  {
    emit("update-stock", value);
  }
};

type TableColumn<T> = {
  align: "center" | "start" | "end";
  title: string;
  sortable: boolean;
  width?: string;
  key?: keyof T | "";
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

type TableRowStock = {
  warehouse: string;
  amount: string;
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

const tableHeader: TableColumn<TableRow>[] = [
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

const tableHeaderStock: TableColumn<TableRowStock>[] = [
  {
    title: "คลัง",
    align: "center",
    sortable: false,
    key: "warehouse",
  },
  {
    title: "จำนวนสต็อค",
    align: "center",
    sortable: false,
    key: "amount",
  },
  {
    title: "",
    align: "center",
    sortable: false,
    key: "",
  },
];

const tableItemStock: TableRowStock[] = [
  {
    warehouse: "Warehouse P",
    amount: "80",
  },
  {
    warehouse: "Warehouse Q",
    amount: "60",
  },
  {
    warehouse: "Warehouse R",
    amount: "90",
  },
  {
    warehouse: "Warehouse S",
    amount: "110",
  },
];
let openDialogStockWareHouse = ref(false);
let openDialogStock = ref(false);
let openDialogConfirmDelete = ref(false);

let warehouseId = ref("null");
let productId = ref(null);

const fn_openDialogStockWareHouse = (item: string) => {
  warehouseId.value = item;
  openDialogStockWareHouse.value = true;
};
const fn_openDialogStock = (item: any) => {
  productId.value = item.id;
  openDialogStock.value = true;
};

const fn_openDialogDelete = () => {
  openDialogConfirmDelete.value = true;
};

const formValue = ref([
  {
    warehouse: null,
    amount: "",
  },
]);
</script>

<template>
  <div class="flex justify-between items-center">
    <Switch text="เปิดใช้งาน" />
    <v-btn
      v-if="mode === 'show'"
      class="rounded-lg"
      color="#084F93"
      prepend-icon="fa-regular fa-pen-to-square"
      variant="outlined"
      size="large"
      @click="fnHandleEditClick"
      >แก้ไขสินค้า</v-btn
    >
    <v-btn
      v-else
      class="rounded-lg"
      color="#BA1A1A"
      variant="outlined"
      size="large"
      @click="fn_openDialogDelete"
      >ลบสินค้า
      <template v-slot:prepend>
        <v-icon size="16">fa-solid fa-trash</v-icon>
      </template>
    </v-btn>
  </div>

  <div class="flex border border-[#EEEDF1] rounded-lg p-4 flex-col mt-3">
    <div
      class="text-[20px] opacity-title leading-[24px] tracking-[-0.09px] text-black font-bold"
    >
      ข้อมูลสินค้า
    </div>
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
        ชื่อสินค้า
      </div>
      <div class="w-1/2">
        <div v-if="mode === 'show'" class="text-subTitle leading-5 tracking-23">
          : {{ data.name }}
        </div>

        <v-text-field
          v-else
          variant="outlined"
          hide-details
          :model-value="data.name"
          density="compact"
          placeholder="ระบุชื่อสินค้า*"
        ></v-text-field>
      </div>
    </div>
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
        หมวดหมู่
      </div>
      <div class="w-1/2">
        <div v-if="mode === 'show'" class="text-subTitle leading-5 tracking-23">
          : Category tier 1 / Category tier 2 / Category tier 3
        </div>
        <v-text-field
          v-else
          variant="outlined"
          hide-details
          model-value="Category tier 1 / Category tier 2 / Category tier 3"
          density="compact"
          placeholder="เลือกหมวดหมู่*"
          readonly
        ></v-text-field>
      </div>
    </div>
    <div class="flex gap-2 mt-2 items-center">
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
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
        SKU ID
      </div>
      <div class="w-1/2">
        <div v-if="mode === 'show'" class="text-subTitle leading-5 tracking-23">
          32335
        </div>
        <v-text-field
          v-else
          variant="outlined"
          hide-details
          density="compact"
          model-value="32335"
        ></v-text-field>
      </div>
    </div>
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
        หน่วยนับสินค้า
      </div>
      <div class="w-1/2">
        <div v-if="mode === 'show'" class="text-subTitle leading-5 tracking-23">
          ผืน
        </div>
        <v-text-field
          v-else
          variant="outlined"
          hide-details
          density="compact"
          model-value="ผืน"
        ></v-text-field>
      </div>
    </div>
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
        สินค้าย่อย
      </div>
      <div class="w-1/2">
        <div v-if="mode === 'show'" class="text-subTitle leading-5 tracking-23">
          มี
        </div>
        <v-text-field
          v-else
          variant="outlined"
          hide-details
          density="compact"
          model-value="มี"
        ></v-text-field>
      </div>
    </div>
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
        ราคาสินค้า
      </div>
      <div class="w-1/2">
        <div v-if="mode === 'show'" class="text-subTitle leading-5 tracking-23">
          800 บาท
        </div>
        <v-text-field
          v-else
          variant="outlined"
          hide-details
          density="compact"
          model-value="800 บาท"
        ></v-text-field>
      </div>
    </div>
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-subTitle tracking-23">
        น้ำหนัก
      </div>
      <div class="w-1/2">
        <div v-if="mode === 'show'" class="text-subTitle leading-5 tracking-23">
          1.0 กิโลกรัม
        </div>
        <v-text-field
          v-else
          variant="outlined"
          hide-details
          density="compact"
          model-value="1.0 กิโลกรัม"
        ></v-text-field>
      </div>
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
                          @click="() => fn_openDialogStock(item)"
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

  <div class="flex border border-[#EEEDF1] rounded-lg p-4 flex-col mt-3">
    <div
      class="text-[20px] opacity-title leading-[24px] tracking-[-0.09px] text-black font-bold"
    >
      สต๊อค
    </div>
    <v-card
      variant="flat"
      class="border border-[#EEEDF1] !rounded-b-[8px] pb-[15px] mt-4"
    >
      <v-data-table
        id="table-header-black"
        :headers="tableHeaderStock"
        class="table-row-text"
        :items="tableItemStock"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>
              {{ item.warehouse || "-" }}
            </td>
            <td>
              {{ item.amount || "-" }}
            </td>

            <td>
              <v-btn
                color="#1A1C1E"
                icon="fa-solid fa-plus"
                variant="text"
                size="30"
                class="text-[12px]"
                @click="fn_openDialogStockWareHouse(item.warehouse)"
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
  </div>

  <ProductModalUpdateStock
    :open="stockUpdateModal"
    @onclose="stockUpdateModal = false"
    :can-add="false"
    :data="stockUpdateData"
  />

  <div
    v-if="mode === 'edit'"
    class="flex w-full gap-2 mt-4 items-center justify-end"
  >
    <v-btn
      color="#084F93"
      variant="outlined"
      class="!rounded-lg w-1/3 box-border mb-2 min-h-[45px]"
      @click="fnHandleCancelClick"
      >ยกเลิก</v-btn
    >
    <v-btn
      color="#084F93"
      variant="flat"
      class="!rounded-lg w-1/3 box-border mb-2 min-h-[45px]"
      >บันทึก</v-btn
    >
  </div>

  <v-dialog v-model="openDialogStock" width="673px" class="!rounded-[8px]">
    <v-card class="rounded-lg">
      <v-card-text>
        <div class="flex justify-between items-center">
          <div
            class="text-[20px] font-[700] tracking-[-0.09px] leading-[24px] opacity-title text-black"
          >
            อัพเดทสต๊อค : {{ productId }}
          </div>
          <v-icon
            size="20"
            @click="fnHandleClose"
            class="cursor-pointer hover:text-[#084F93] transition-all"
          >
            fa-solid fa-close
          </v-icon>
        </div>
        <div class="text-subTitle opacity-detail leading-5 tracking-23 mt-1">
          อัพเดทจำนวนสินค้าที่อยู่ในสต็อค
        </div>
        <v-form @submit.prevent="fnHandleSubmit">
          <div class="max-h-[350px] overflow-y-auto">
            <div v-for="(item, index) in formValue" :key="index">
              <div class="flex gap-2 mt-4 items-center w-full">
                <div
                  class="w-32 text-subTitle leading-[22px] font-[600] text-black opacity-title tracking-31"
                >
                  คลัง
                </div>
                <div class="text-subTitle leading-5 tracking-23 w-full">
                  <v-select
                    label="เลือกคลัง"
                    v-model="formValue[index].warehouse"
                    :items="[
                      'คลัง 1',
                      'คลัง 2',
                      'คลัง 3',
                      'คลัง 4',
                      'คลัง 5',
                      'คลัง 6',
                    ]"
                    density="compact"
                    hide-details
                    variant="outlined"
                    class="w-full preinner-center"
                  ></v-select>
                </div>
              </div>

              <div class="flex gap-2 mt-4 items-center w-full">
                <div
                  class="w-32 text-subTitle leading-[22px] font-[600] text-black opacity-title tracking-31"
                >
                  จำนวน
                </div>
                <div class="text-subTitle leading-5 tracking-23 w-full">
                  <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                    v-model="formValue[index].amount"
                    class="w-full preinner-center"
                  ></v-text-field>
                </div>
              </div>
            </div>
          </div>
          <v-btn
            class="mt-2"
            variant="text"
            color="#74777F"
            @click="
              formValue.push({
                warehouse: null,
                amount: '',
              })
            "
          >
            เพิ่มคลัง
            <template v-slot:prepend>
              <v-icon color="#74777F" size="16" class=""
                >fa-solid fa-plus</v-icon
              >
            </template>
          </v-btn>

          <div class="flex gap-4 mt-4 justify-center items-center">
            <v-btn
              class="rounded-lg w-[calc(50%-16px)] !h-[48px]"
              color="#084F93"
              variant="outlined"
              @click="openDialogStock = false"
              >ยกเลิก</v-btn
            >
            <v-btn
              class="rounded-lg w-1/2 !h-[48px]"
              color="#084F93"
              variant="flat"
              type="submit"
              @click="openDialogStock = false"
              >บันทึก</v-btn
            >
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
  <v-dialog
    v-model="openDialogStockWareHouse"
    width="343px"
    class="!h-[300px] !rounded-[8px]"
  >
    <v-card variant="outlined" class="!border-0 !rounded-[8px] !bg-white">
      <v-card-text>
        <p class="text-[#000] text-[20px] font-bold">อัพเดทสต็อค</p>
        <p class="text-[#000]/[0.38] text-[14px]">
          อัพเดทจำนวนสินค้าที่อยู่ในสต็อค
        </p>

        <div class="flex gap-[15px] mt-[15px] items-center">
          <p class="text-[#000]/[0.6] text-[14px] basis-3/12">คลัง</p>
          <p class="text-[#000] text-[14px] basis-9/12">: {{ warehouseId }}</p>
        </div>

        <div class="flex gap-[15px] mt-[15px] items-center">
          <p class="text-[#000] text-[16px] font-bold basis-3/12">จำนวน</p>
          <v-text-field
            variant="outlined"
            hide-details
            class="basis-9/12 !rounded-[8px] !border"
            placeholder=""
            density="compact"
          ></v-text-field>
        </div>

        <div class="flex gap-[15px] my-[15px] relative">
          <v-btn
            flat
            class="!border !border-[#084f93] !text-[#084f93] w-[144px] !h-[48px] !rounded-[8px]"
            @click="openDialogStockWareHouse = false"
            >ยกเลิก</v-btn
          >
          <v-btn
            flat
            class="!border-0 !bg-[#084f93] !text-white w-[144px] !h-[48px] !rounded-[8px]"
            @click="openDialogStockWareHouse = false"
            >บันทึก</v-btn
          >
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
  <v-dialog v-model="openDialogConfirmDelete" class="w-full">
    <v-card class="rounded-lg self-center w-[354px]">
      <v-card-text class="flex justify-center items-center flex-col">
        <div class="flex flex-col justify-center items-center">
          <div
            class="bg-[#BA1A1A] w-[48px] h-[48px] flex justify-center items-center rounded-full"
          >
            <i class="fa-solid fa-info mb-1 text-white"></i>
          </div>

          <div
            class="text-base font-bold mt-[15px]"
            style="letter-spacing: 0px"
          >
            คุณต้องการลบสินค้า ?
          </div>
          <div class="text-xs mt-2 mb-0 opacity-[0.7] text-center">
            สินค้านี้จะถูกลบออกจากคลังที่เกี่ยวข้อง
            รวมไปถึงรายงานยอดขายในอดีตระดับสต็อก
            ข้อมูลทั้งหมดนี้จะถูกลบอย่างถาวร โปรดตรวจสอบให้แน่ใจก่อนกด “ตกลง”
          </div>
        </div>
        <div class="absolute right-5 cursor-pointer top-3">
          <v-icon @click="() => (openDialogConfirmDelete = false)"
            >mdi-close</v-icon
          >
        </div>
      </v-card-text>
      <v-card-text class="flex flex-col items-center w-full space-y-4 pt-0">
        <v-form class="w-full !m-0 space-y-1">

          <div class="flex justify-center space-x-2 mb-2 w-full mt-1">
            <v-btn
              color="#BA1A1A"
              variant="outlined"
              size="x-large"
              class="w-1/2"
              rounded="lg"
              @click="openDialogConfirmDelete = false"
            >
              ยกเลิก
            </v-btn>
            <v-btn
              color="#BA1A1A"
              variant="flat"
              size="x-large"
              class="w-1/2"
              rounded="lg"
              @click="openDialogConfirmDelete = false"
            >
              ยืนยัน
            </v-btn>
            
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
