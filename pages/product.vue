<script setup lang="ts">
type headerTableType = {
  title: string;
  key: keyof tableItemType | "";
  sortable?: boolean;
  align?: "start" | "center" | "end";
  width?: string;
};
type tableItemType = {
  image: string;
  name: string;
  category: string;
  sub_product: number;
  stock: number;
  reserve: number;
  status: boolean;
};

const navBarNew = ref([
  {
    text: "คลังและสินค้า",
    callback: () => {},
  },
  {
    text: "สินค้า",
    callback: () =>
      fnHandleNavbarback(2, () => {
        AddNewProdctState.value = false;
        selectDetail.value = null;
      }),
  },
]);

const fnAppendNavbar = () => {};

const fnHandleNavbarback = (index: number, callback?: () => void) => {
  let num = navBarNew.value.length - index;
  for (let i = 1; i <= num; i++) {
    navBarNew.value.pop();
  }
  if (callback) {
    callback();
  }
};

const headersTable: headerTableType[] = [
  {
    title: "รุป",
    align: "center",
    key: "image",
    sortable: false,
    width: "100px",
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
    key: "reserve",
    sortable: false,
  },
  {
    title: "สถานะ",
    align: "center",
    key: "status",
    sortable: false,
    width: "120px",
  },
  {
    title: "",
    align: "center",
    key: "",
    sortable: false,
    width: "50px",
  },
];

const tableItem = ref<tableItemType[]>([
  {
    image: "image_url_1",
    name: "Product 1",
    category: "Category A",
    sub_product: 1,
    stock: 50,
    reserve: 10,
    status: true,
  },
  {
    image: "image_url_2",
    name: "Product 2",
    category: "Category B",
    sub_product: 2,
    stock: 30,
    reserve: 5,
    status: false,
  },
  {
    image: "image_url_3",
    name: "Product 3",
    category: "Category A",
    sub_product: 3,
    stock: 20,
    reserve: 15,
    status: true,
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

const AddNewProdctState = ref(false);
const ShowDetailMode = ref<"edit" | "show">("show");
const selectDetail = ref<any | null>(null);

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
</script>

<template>
  <Toolbars />
  <NavbarCallback :breadcrump="navBarNew" />

  <div class="lg:ml-64 p-4">
    <v-slide-x-transition hide-on-leave>
      <div v-if="!AddNewProdctState && !selectDetail">
        <div class="flex justify-between items-center">
          <v-text-field
            variant="outlined"
            density="compact"
            hide-details
            class="max-w-[460px] preinner-center"
          >
            <template v-slot:prepend-inner>
              <v-icon size="15">fa-solid fa-magnifying-glass</v-icon>
            </template>
          </v-text-field>
          <v-btn
            class="rounded-lg"
            color="#084F93"
            prepend-icon="fa-solid fa-plus"
            variant="flat"
            size="large"
            @click="
              () => {
                AddNewProdctState = true;
                navBarNew.push({
                  text: 'เพิ่มสินค้าใหม่',
                  callback: () => {},
                });
              }
            "
            >เพิ่มสินค้าใหม่</v-btn
          >
        </div>

        <v-card
          variant="flat"
          class="border border-[#EEEDF1] !rounded-lg pb-[15px] mt-4"
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
                  <div class="flex items-center justify-center">
                    <div class="w-10 h-10 bg-red-600"></div>
                  </div>
                </td>
                <td>
                  {{ item.name || "-" }}
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
                  {{ item.reserve || "-" }}
                </td>
                <td>
                  <div class="flex justify-center">
                    <v-icon
                      :color="item.status ? '#12B76A' : '#BA1A1A'"
                      size="14"
                      >fa-solid fa-circle</v-icon
                    >
                    <div
                      class="text-[14px] leading-5 tracking-[-0.23%] text-center w-[80px]"
                    >
                      {{ item.status ? "เปิดใช้งาน" : "ปิดใช้งาน" }}
                    </div>
                  </div>
                </td>
                <td>
                  <div class="flex justify-center gap-5">
                    <v-btn
                      color="#1A1C1E"
                      icon="fa-solid fa-play"
                      variant="text"
                      size="30"
                      class="text-[10px]"
                      @click="
                        () => {
                          selectDetail = item;
                          navBarNew.push({
                            text: item.name,
                            // callback: () => fnHandleAppendNav(item.name),
                            callback: () => {
                              navBarNew.push({
                                text: item.name,
                                callback: () => {},
                              });
                            },
                          });
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

      <div v-if="selectDetail">
        <ProductDetailsProduct
          :data="selectDetail"
          :mode="ShowDetailMode"
          @edit-click="
            if (ShowDetailMode === 'edit') {
              ShowDetailMode = 'show';
            } else {
              ShowDetailMode = 'edit';
            }
          "
        />
      </div>

      <div v-if="AddNewProdctState">
        <ProductAddNewProduct />
      </div>
    </v-slide-x-transition>
  </div>
</template>

<style>
#table-header-black div table thead tr th div span {
  color: black;
  opacity: 87%;
  line-height: 20px;
  letter-spacing: -0.032px;
  font-size: 14px;
}
thead tr {
  @apply bg-[#E9E7EB];
}

tbody {
  @apply text-[14px] leading-5 tracking-[-0.23%] text-center !pr-10;
}
</style>
