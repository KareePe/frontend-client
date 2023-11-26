<script setup lang="ts">
import { ref } from "vue";

type headerTableType = {
  title: string;
  key: keyof tableItemType | "";
  sortable?: boolean;
  align?: "start" | "center" | "end";
};
type tableItemType = {
  no_warehouse: string;
  name: string;
  province: string;
  district: string;
  tel: string;
  status: "ใช้งาน" | "ระงับ";
  icon?: string;
};
type productSelectType = {
  image: string;
  name: string;
  category: string;
  sub_product: number;
  stock: number;
  amount: number;
};

const selectedWarehouse = ref<tableItemType | null>(null);
const selectedProduct = ref<any | null>(null);

const navBarNew = ref([
  {
    text: "คลังและสินค้า",
    callback: () => {},
  },
  {
    text: "คลังสินค้า",
    callback: () =>
      fnHandleNavbarback(2, () => {
        selectedWarehouse.value = null;
        selectedProduct.value = null;
        historyPage.value = false;
        createPOPage.value = false;
        createWareHouse.value = false;
      }),
  },
]);

const headersTable: headerTableType[] = [
  {
    title: "รหัสคลังสินค้า",
    align: "center",
    key: "no_warehouse",
    sortable: false,
  },
  {
    title: "ชื่อคลัง",
    align: "center",
    key: "name",
    sortable: false,
  },
  {
    title: "จังหวัด",
    align: "center",
    key: "province",
    sortable: false,
  },
  {
    title: "เขต / อำเภอ",
    align: "center",
    key: "district",
    sortable: false,
  },
  {
    title: "เบอรโทรติดต่อ",
    align: "center",
    key: "tel",
    sortable: false,
  },
  {
    title: "สถานะ",
    align: "center",
    key: "status",
    sortable: false,
  },
  {
    title: "",
    align: "center",
    key: "icon",
    sortable: false,
  },
];

const tableItem = ref<tableItemType[]>([
  {
    no_warehouse: "VWH",
    name: "คลังชั่วคราว",
    province: "",
    district: "",
    tel: "",
    status: "ใช้งาน",
  },
  {
    no_warehouse: "W001",
    name: "Warehouse 1",
    province: "Bangkok",
    district: "Pathum Wan",
    tel: "012-345-6789",
    status: "ใช้งาน",
  },
  {
    no_warehouse: "W002",
    name: "Warehouse 2",
    province: "Chiang Mai",
    district: "Muang",
    tel: "098-765-4321",
    status: "ระงับ",
  },
  {
    no_warehouse: "W003",
    name: "Warehouse 3",
    province: "Phuket",
    district: "Mueang",
    tel: "087-123-4567",
    status: "ใช้งาน",
  },
  {
    no_warehouse: "W004",
    name: "Warehouse 4",
    province: "Samut Prakan",
    district: "Bang Phli",
    tel: "054-321-9876",
    status: "ระงับ",
  },
  {
    no_warehouse: "W005",
    name: "Warehouse 5",
    province: "Nonthaburi",
    district: "Sai Noi",
    tel: "032-987-6543",
    status: "ใช้งาน",
  },
  {
    no_warehouse: "W006",
    name: "Warehouse 6",
    province: "Rayong",
    district: "Mueang",
    tel: "077-111-2222",
    status: "ใช้งาน",
  },
  {
    no_warehouse: "W007",
    name: "Warehouse 7",
    province: "Khon Kaen",
    district: "Mueang",
    tel: "043-333-4444",
    status: "ระงับ",
  },
  {
    no_warehouse: "W008",
    name: "Warehouse 8",
    province: "Udon Thani",
    district: "Mueang",
    tel: "042-555-6666",
    status: "ใช้งาน",
  },
  {
    no_warehouse: "W009",
    name: "Warehouse 9",
    province: "Surat Thani",
    district: "Mueang",
    tel: "077-777-8888",
    status: "ระงับ",
  },
  {
    no_warehouse: "W010",
    name: "Warehouse 10",
    province: "Chonburi",
    district: "Mueang",
    tel: "038-999-0000",
    status: "ใช้งาน",
  },
]);

const page = ref(1);
const itemsPerPage = ref(10);

const pageCount = computed(() => {
  return Math.ceil(tableItem.value.length / itemsPerPage.value);
});

const fnChangeRowPerPages = (e: number) => {
  itemsPerPage.value = e;
};

const fnHandleNavbarback = (index: number, callback?: () => void) => {
  let num = navBarNew.value.length - index;
  for (let i = 1; i <= num; i++) {
    navBarNew.value.pop();
  }
  if (callback) {
    callback();
  }
};

const fnHandleAppendNav = (item: string) => {
  navBarNew.value.push({
    text: item,
    callback: () => {
      const target = navBarNew.value.findIndex(
        (value: { text: string }, index) => {
          if (value.text === item) {
            return index;
          }
        }
      );
      fnHandleNavbarback(target + 1);
      selectedProduct.value = null;
      historyPage.value = false;
      createPOPage.value = false;
      createWareHouse.value = false;
      editWareHouse.value = false;
    },
  });
};

const modalAppendOpen = ref(false);
const modalUpdateStockOpen = ref(false);
const historyPage = ref(false);
const createPOPage = ref(false);
const createWareHouse = ref<any | null>(null);
const editWareHouse = ref<any | null>(null);
const openDialogConfirmDelete = ref(false);
const confirmDeleteField = ref("");
</script>

<template>
  <Toolbars />
  <NavbarCallback :breadcrump="navBarNew" @nav-click="navBarNew.pop()" />

  <div class="lg:ml-72 p-4">
    <v-slide-x-transition hide-on-leave>
      <div
        v-if="
          !selectedWarehouse &&
          !selectedProduct &&
          !historyPage &&
          !createPOPage &&
          !createWareHouse
        "
      >
        <div class="flex justify-between items-center">
          <v-text-field
            variant="outlined"
            density="compact"
            hide-details
            class="max-w-[460px] preinner-center"
            prepend-inner-icon="fa-solid fa-magnifying-glass"
            placeholder="ค้นหาคลัง โดย หมายเลขคลัง,ชื่อคลัง,ประเภทคลัง"
          ></v-text-field>
          <v-btn
            class="!rounded-[8px] !text-white w-[200px] !h-[48px] !bg-[#084F93]"
            flat
            @click="
              {
                fnHandleAppendNav('เพิ่มคลังสินค้า');
                createWareHouse = true;
              }
            "
            ><i class="fa-solid fa-plus text-white mr-2"></i>
            <p>เพิ่มคลังสินค้า</p></v-btn
          >
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
                  {{ item.no_warehouse || "-" }}
                </td>
                <td>
                  <div class="flex justify-center items-center gap-2">
                    {{ item.name || "-" }}
                    <div>
                      <v-icon
                        v-if="item.name === 'คลังชั่วคราว'"
                        class="text-[#74777F] cursor-pointer"
                        size="16"
                        >fa-solid fa-circle-info</v-icon
                      >
                      <v-tooltip activator="parent" location="end">
                        <div class="w-[230px]">
                          <div
                            class="text-[#F5F5F5] leading-5 tracking-23 font-[600] text-subTitle"
                          >
                            คลังสินค้าชั่วคราว คืออะไร ?
                          </div>
                          <div class="text-[#FFFFFF] leading-4 text-[12px]">
                            คลังสินค้าชั่วคราวจะถูกสร้างขึ้นเพื่อใช้
                            เก็บจำนวนสินค้าเพื่อบันทึกออเดอร์ที่ได้
                            รับคำสั่งซื้อเข้ามาอย่างรวดเร็ว
                          </div>
                        </div>
                      </v-tooltip>
                    </div>
                  </div>
                </td>
                <td>
                  {{ item.province || "-" }}
                </td>
                <td>
                  {{ item.district || "-" }}
                </td>
                <td>
                  {{ item.tel || "-" }}
                </td>
                <td>
                  <div
                    :style="{
                      color: item.status === 'ใช้งาน' ? '#12B76A' : '#BA1A1A',
                    }"
                  >
                    {{ item.status }}
                  </div>
                </td>
                <td>
                  <div class="flex justify-center gap-5">
                    <v-btn
                      color="#1A1C1E"
                      icon="fa-solid fa-trash"
                      variant="text"
                      size="30"
                      class="text-[12px]"
                      @click="openDialogConfirmDelete = true"
                    ></v-btn>
                    <v-btn
                      color="#1A1C1E"
                      icon="fa-solid fa-pen-to-square"
                      variant="text"
                      size="30"
                      class="text-[12px]"
                      @click="
                        {
                          fnHandleAppendNav(item.no_warehouse);
                          fnHandleAppendNav('แก้ไขคลังสินค้า');
                          createWareHouse = item.no_warehouse;
                        }
                      "
                    ></v-btn>
                    <v-btn
                      color="#1A1C1E"
                      icon="fa-solid fa-play"
                      variant="text"
                      size="30"
                      class="text-[12px]"
                      @click="
                        {
                          fnHandleAppendNav(item.name);
                          selectedWarehouse = item;
                        }
                      "
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
      </div>

      <div
        v-if="
          selectedWarehouse &&
          !selectedProduct &&
          !historyPage &&
          !createPOPage &&
          !createWareHouse
        "
      >
        <WarehouseDetails
          :data="selectedWarehouse"
          @see-product="
            (event) => {
              selectedProduct = event;
              navBarNew.push({
                text: event.name,
                callback: () => {},
              });
            }
          "
          @history-click="
            {
              navBarNew.push({
                text: 'ประวัติการจัดสต๊อค',
                callback: () => {
                  fnHandleNavbarback(4);
                  historyPage = true;
                  createPOPage = false;
                },
              });
              historyPage = true;
              createPOPage = false;
            }
          "
        ></WarehouseDetails>
      </div>

      <div v-if="selectedProduct">
        <WarehouseDetailsProduct
          :data="selectedProduct"
          @update-stock="
            (e) => {
              modalUpdateStockOpen = true;
            }
          "
        />
      </div>

      <div v-if="historyPage && !createPOPage">
        <WarehouseHistoryStock
          @add-no-po="
            () => {
              createPOPage = true;
              navBarNew.push({
                text: 'เพิ่มใบ',
                callback: () => {
                  // fnHandleNavbarback(4);
                },
              });
            }
          "
        />
      </div>

      <div v-if="createPOPage">
        <WarehouseAddPoPage />
      </div>

      <div v-if="createWareHouse">
        <WarehouseCreateWareHouse
          :id="createWareHouse"
          @cancle-click="
            (event) => {
              createWareHouse = false;
              navBarNew.pop();
            }
          "
        />
      </div>

      <div v-if="editWareHouse">
        <WarehouseEditWareHouse :data="editWareHouse" />
      </div>
    </v-slide-x-transition>
  </div>

  <WarehouseModalAppend :open="modalAppendOpen" />
  <WarehouseModalUpdateStock
    :open="modalUpdateStockOpen"
    :onclose="() => (modalUpdateStockOpen = false)"
    :warehousename="selectedWarehouse?.name"
  />

  <v-dialog v-model="openDialogConfirmDelete" class="w-full">
    <v-card class="rounded-lg self-center w-[354px]">
      <v-card-text class="flex justify-center items-center flex-col">
        <div class="flex flex-col justify-center items-center">
          <div
            class="bg-[#BA1A1A] w-[48px] h-[48px] flex justify-center items-center rounded-full"
          >
            <i class="fa-solid fa-info mb-1 text-white"></i>
          </div>

          <div class="text-base font-bold mt-1" style="letter-spacing: 0px">
            ต้องการลบคลัง Bangkok001
          </div>
          <div class="text-xs mt-2 mb-0 opacity-[0.7] text-center">
            การลบคลังสินค้าจะส่งผลต่อข้อมูลสินค้า ภายในคลัง
            ทำให้ข้อมูลถูกลบไปด้วย กรุณาพิมพ์คำว่า “ต้องการลบ” ในช่องด้านล่าง
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
          <v-text-field
            class="w-full"
            v-model="confirmDeleteField"
            placeholder="พิมพ์คำว่า 'ต้องการลบ'"
            variant="outlined"
            rounded="lg"
          ></v-text-field>

          <div class="flex justify-center space-x-2 mb-2 w-full mt-1">
            <v-btn
              color="#BA1A1A"
              variant="flat"
              size="x-large"
              class="w-1/2"
              rounded="lg"
              type="submit"
              :disabled="confirmDeleteField !== 'ต้องการลบ'"
            >
              ยืนยัน
            </v-btn>
            <v-btn
              color="#BA1A1A"
              variant="outlined"
              size="x-large"
              class="w-1/2"
              rounded="lg"
              @click="() => (openDialogConfirmDelete = false)"
            >
              ยกเลิก
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.navbar {
  display: flex;
  width: 100%;
  height: 72px;
  padding-left: 0px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: #fff;
}

.backgroundPrint {
  display: flex;
  width: 100%;
  height: calc(100% - 72px);
  min-width: 100vw;
  padding: 148px 16px 16px 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  background: #c7c6ca;
}
</style>

<style>
.preinner-center div div .v-field__prepend-inner {
  @apply text-[12px] mb-[2px];
}
.text-table {
  @apply text-[14px] leading-5 tracking-[-0.23%] text-center !pr-10;
}
.v-pagination__next .v-btn,
.v-pagination__prev .v-btn {
  border: 1px solid #c2c2c2 !important;
  border-radius: 8px !important;
}
.v-pagination__item--is-active .v-btn {
  background-color: #084f93;
  border-radius: 8px !important;
  color: #fff;
}
.v-data-table-footer__pagination {
  margin: 15px 0 !important;
}
.v-data-table-footer__info,
.v-data-table-footer__pagination {
  display: none !important;
}
tbody {
  @apply text-[14px] leading-5 tracking-[-0.23%] text-center !pr-10;
}

.table-row-text div table thead tr th:last-child {
  @apply w-[150px];
}
</style>
