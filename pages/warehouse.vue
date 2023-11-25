<script setup lang="ts">
import { ref } from "vue";
import Details from "~/components/Warehouse/Details.vue";
import ModalAppend from "~/components/Warehouse/ModalAppend.vue";
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
const selectedWarehouse = ref<tableItemType | null>(null);
const navBarNew = ref([
  {
    text: "คลังและสินค้า",
    callback: () => {},
  },
  {
    text: "คลังสินค้า",
    callback: () =>
      fnHandleNavbarback(2, () => (selectedWarehouse.value = null)),
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
  console.log(e);
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
    },
  });
};

const modalAppendOpen = ref(false)
</script>

<template>
  <Toolbars />
  <NavbarCallback :breadcrump="navBarNew" @nav-click="navBarNew.pop()" />

  <div class="lg:ml-64 p-4">
    <v-slide-x-transition hide-on-leave>
      <div v-if="!selectedWarehouse">
        <div class="flex justify-between items-center">
          <v-text-field
            variant="outlined"
            density="compact"
            hide-details
            class="max-w-[460px] preinner-center"
            prepend-inner-icon="fa-solid fa-magnifying-glass"
          ></v-text-field>
          <v-btn
            class="rounded-lg"
            color="#084F93"
            prepend-icon="fa-solid fa-plus"
            variant="flat"
            size="large"
            >เพิ่มคลังสินค้า</v-btn
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
                    ></v-btn>
                    <v-btn
                      color="#1A1C1E"
                      icon="fa-solid fa-pen-to-square"
                      variant="text"
                      size="30"
                      class="text-[12px]"
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
          <!-- <div v-else class="h-[260px] flex justify-center items-center">
        <p>ยังไม่มีรายการ</p>
      </div> -->
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

      <div v-else>
        <Details :data="selectedWarehouse"  ></Details>
      </div>
    </v-slide-x-transition>
  </div>

  <ModalAppend :open="modalAppendOpen" />
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

tbody {
  @apply text-[14px] leading-5 tracking-[-0.23%] text-center !pr-10;
}

.table-row-text div table thead tr th:last-child {
  @apply w-[150px];
}
</style>
