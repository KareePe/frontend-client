<script setup>
const navBarNew = ref([
  {
    text: "คำสั่งซื้อ",
    callback: () => {},
  },
  {
    text: "จัดการงานจัดส่ง",
    callback: () =>
      fnHandleNavbarback(2, () => {
        carManagePage.value = false;
        settingRegularPage.value = false;
      }),
  },
]);

const fnHandleNavbarback = (index, callback) => {
  let num = navBarNew.value.length - index;
  for (let i = 1; i <= num; i++) {
    navBarNew.value.pop();
  }
  if (callback) {
    callback();
  }
};

const tableItem = ref([
  {
    no: "SX1434567890",
    create_date: "13/01/2556 21:00",
    name: "นายทดสอบ นามสกุลไม่ยาว1",
    no_status: "TH1283629CH82",
    price: "100.00",
    status: "เสร็จสิ้น",
    print: "waiting",
    join_date: "13/01/2556 21:00",
  },
  {
    no: "SX1234567890",
    create_date: "13/01/2556 21:00",
    name: "นายทดสอบ นามสกุลไม่ยาว2",
    no_status: "TH1283629CH82",
    price: "100.00",
    join_date: "13/01/2556 21:00",
    status: "เสร็จสิ้น",
    print: "success",
  },
  {
    no: "asdasdvvvv",
    create_date: "13/01/2556 21:00",
    name: "นายทดสอบ นามสกุลไม่ยาว3",
    no_status: "TH1283629CH82",
    join_date: "13/01/2556 21:00",
    price: "100.00",
    status: "เสร็จสิ้น",
    print: "success",
  },
  {
    no: "ddddddddd",
    create_date: "13/01/2556 21:00",
    name: "นายทดสอบ นามสกุลไม่ยาว4",
    no_status: "TH1283629CH82",
    join_date: "13/01/2556 21:00",
    price: "100.00",
    status: "เสร็จสิ้น",
    print: "success",
  },
]);
const headersTable = ref([
  {
    title: "วันที่เข้ารับ",
    align: "center",
    key: "join_date",
  },
  {
    title: "ชื่อลูกค้า",
    align: "center",
    key: "name",
  },
  {
    title: "หมายเลขคำสั่งซื้อ",
    align: "center",
    key: "no",
  },
  {
    title: "เลขติดตามสถานะ",
    align: "center",
    key: "no_status",
  },
  {
    title: "ราคา",
    align: "center",
    key: "price",
  },
  {
    title: "วันที่สร้าง",
    align: "center",
    key: "create_date",
  },
  {
    title: "สถานะ",
    align: "center",
    key: "status",
  },
]);

const page = ref(1);
const itemsPerPage = ref(10);

const pageCount = computed(() => {
  return Math.ceil(tableItem.value.length / itemsPerPage.value);
});

const fnChangeRowPerPages = (e) => {
  itemsPerPage.value = e;
};

const fnHandleSettingDelivery = () => {
  navBarNew.value.push({
    text: "ตั้งค่าเรียกรถประจำ",
    callback: () => fnHandleNavbarback(4, () => {}),
  });
  settingRegularPage.value = true;
};

const fnHandleManageDelivery = () => {
  navBarNew.value.push({
    text: "จัดการเรียกรถ",
    callback: () =>
      fnHandleNavbarback(3, () => {
        settingRegularPage.value = false;
      }),
  });
  carManagePage.value = true;
};

const tab = ref("all");
const carManagePage = ref(false);
const settingRegularPage = ref(false);
const modalUploadDetail = ref(false);
const modalCalldelivery = ref(false);
const modalCallRegular = ref(false);
const modalShowDetail = ref(false);
const modalShowResult = ref(false);
const modalAlertSuccess = ref(false);
const modalAlertRollback = ref(false);
</script>

<template>
  <DeliveryModalResultCallRegular
    :open="modalShowResult"
    @on-close="modalShowResult = false"
  />
  <ModalAlert
    :open="modalAlertSuccess"
    :onclose="() => (modalAlertSuccess = false)"
    success-text="เร่งติดตามพัสดุสำเร็จ พัสดุของท่านอยู่ระหว่างการเร่งดำเนินการจัดส่ง"
  />
  <DeliveryModalRollback
    :open="modalAlertRollback"
    :onclose="() => (modalAlertRollback = false)"
  />
  <Toolbars />
  <NavbarCallback :breadcrump="navBarNew" @nav-click="navBarNew.pop()" />

  <div class="containerLayout">
    <v-scroll-x-transition hide-on-leave>
      <div v-if="!carManagePage && !settingRegularPage">
        <div class="flex justify-between">
          <v-text-field
            density="compact"
            label="วันที่"
            variant="outlined"
            class="!max-w-[280px]"
          >
            <template v-slot:prepend-inner>
              <v-icon size="16" class="mb-[4px]">fa-regular fa-calendar</v-icon>
            </template>
          </v-text-field>
          <v-text-field
            density="compact"
            placeholder="หมายเลขออเดอร์ หรือ เบอร์โทร"
            variant="outlined"
            class="!max-w-[360px]"
          >
            <template v-slot:append-inner>
              <v-icon size="16" class="mb-[2px]"
                >fa-solid fa-magnifying-glass</v-icon
              >
            </template>
          </v-text-field>
        </div>

        <div class="flex justify-between items-center">
          <div class="card-border space-x-2 flex w-fit">
            <v-btn
              :variant="tab === 'all' ? 'flat' : 'text'"
              :color="tab === 'all' ? '#084F93' : '#000'"
              @click="tab = 'all'"
              class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !p-2"
            >
              ทั้งหมด (926)
            </v-btn>
            <v-btn
              :variant="tab === 'waiting' ? 'flat' : 'text'"
              :color="tab === 'waiting' ? '#084F93' : '#000'"
              @click="tab = 'waiting'"
              class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !p-2"
            >
              รอดำเนินการ (421)
            </v-btn>
            <v-btn
              :variant="tab === 're-sending' ? 'flat' : 'text'"
              :color="tab === 're-sending' ? '#084F93' : '#000'"
              @click="tab = 're-sending'"
              class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !p-2"
            >
              รอจัดส่งใหม่ (310)
            </v-btn>
            <v-btn
              :variant="tab === 'rollback' ? 'flat' : 'text'"
              :color="tab === 'rollback' ? '#084F93' : '#000'"
              @click="tab = 'rollback'"
              class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !p-2"
            >
              รอตีกลับ (14)
            </v-btn>
            <v-btn
              :variant="tab === 'complete' ? 'flat' : 'text'"
              :color="tab === 'complete' ? '#084F93' : '#000'"
              @click="tab = 'complete'"
              class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !p-2"
            >
              เสร็จสิ้น (181)
            </v-btn>
          </div>

          <v-btn
            variant="flat"
            color="#084F93"
            class="rounded-lg"
            size="large"
            @click="fnHandleManageDelivery"
          >
            จัดการการเรียกรถ
            <template v-slot:prepend>
              <v-icon size="16">fa-solid fa-truck</v-icon>
            </template>
          </v-btn>
        </div>

        <v-card
          variant="flat"
          class="border border-[#EEEDF1] !rounded-b-[8px] pb-[15px] mt-3"
        >
          <v-data-table
            :items="tableItem"
            item-value="no"
            :headers="headersTable"
            :items-per-page="itemsPerPage"
            :page="page"
            show-select
            show-expand
          >
            <template #item.name="{ value, isSelected }">
              <div
                class="text-[16px] leading-5 tracking-[-0.23%] text-center text-black opacity-[0.87] whitespace-nowrap"
              >
                {{ value }}
              </div>
            </template>
            <template #item.no="{ value, item, index }">
              <div class="flex items-center justify-center space-x-1">
                <div
                  class="text-[16px] leading-5 tracking-[-0.23%] text-center text-[#084F93] cursor-pointer"
                >
                  {{ value }}
                </div>
                <v-btn
                  class="mb-1 cursor-pointer [&>span]:!text-[12px] !w-[40px] h-[15px]"
                  variant="text"
                  icon="fa-regular fa-copy"
                  color="#74777F"
                >
                </v-btn>
              </div>
            </template>
            <template #item.no_status="{ value }">
              <div
                class="text-[16px] leading-5 tracking-[-0.23%] text-center text-[#084F93]"
              >
                {{ value }}
              </div>
            </template>
            <template #item.print="{ value }">
              <div class="flex items-center justify-center space-x-2 relative">
                <div
                  v-if="value === 'success'"
                  class="bg-[#F79009] min-w-4 min-h-4 left-0 w-4 h-4 rounded-full"
                ></div>
                <div
                  v-else
                  class="bg-[#C4C6CF] min-w-4 min-h-4 w-4 h-4 left-0 rounded-full"
                ></div>
                <div
                  class="text-[16px] leading-5 tracking-[-0.23%] text-center text-black opacity-[0.87]"
                >
                  {{ value === "success" ? "ปริ้นแล้ว" : "รอปริ้น" }}
                </div>
              </div>
            </template>
            <template v-slot:expanded-row="{ columns, item }">
              <td class="border-b border-b-[#EEEDF1]">
                <div></div>
              </td>
              <td class="align-top border-b border-b-[#EEEDF1]">
                <div>
                  <div class="box-border flex flex-col items-start p-4">
                    <div
                      class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                    >
                      ช่องทางการขาย-แพลตฟอร์ม
                    </div>
                    <div class="leading-5 text-[14px] text-black">
                      Social media - Facebook
                    </div>
                  </div>
                  <div class="box-border flex flex-col items-start p-4 pt-0">
                    <div
                      class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                    >
                      สิ้นค้า
                    </div>
                    <div class="leading-5 text-[14px] text-black">
                      รองเท้าแตะ x1
                    </div>
                    <div class="leading-5 text-[14px] text-black">
                      ปาท่องโก๋ x3
                    </div>
                    <div class="leading-5 text-[14px] text-black">
                      ลิปสติก x1
                      <span class="text-[#084F93] cursor-pointer"
                        >ดูเพื่มเติม</span
                      >
                    </div>
                  </div>
                </div>
              </td>
              <td class="align-top border-b border-b-[#EEEDF1]">
                <div>
                  <div class="box-border flex flex-col items-start p-4">
                    <div
                      class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                    >
                      ช่องทางการชำระเงิน
                    </div>
                    <div class="leading-5 text-[14px] text-black">COD</div>
                  </div>
                  <div class="box-border flex flex-col items-start p-4 pt-0">
                    <div
                      class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                    >
                      เบอร์โทร
                    </div>
                    <div class="leading-5 text-[14px] text-black">
                      091-234-5678
                    </div>
                  </div>
                </div>
              </td>
              <td class="align-top border-b border-b-[#EEEDF1]">
                <div>
                  <div class="box-border flex flex-col items-start p-4">
                    <div
                      class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                    >
                      น้ำหนัก
                    </div>
                    <div class="leading-5 text-[14px] text-black">
                      1.0 กิโลกรัม
                    </div>
                  </div>
                  <div class="box-border flex flex-col items-start p-4 pt-0">
                    <div
                      class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                    >
                      ผู้สร้างคำสั่งซื้อ
                    </div>
                    <div class="leading-5 text-[14px] text-black">Admin 1</div>
                  </div>
                </div>
              </td>
              <td class="align-top border-b border-b-[#EEEDF1]">
                <div>
                  <div class="box-border flex flex-col items-start p-4">
                    <div
                      class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                    >
                      ขนส่ง
                    </div>
                    <div class="leading-5 text-[14px] text-black">
                      Flash Express
                    </div>
                  </div>
                  <div class="box-border flex flex-col items-start p-4 pt-0">
                    <div
                      class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                    >
                      วิธีจัดส่ง
                    </div>
                    <div class="leading-5 text-[14px] text-black">
                      ส่งผ่าน SalesX
                    </div>
                  </div>
                  <div class="box-border flex flex-col items-start p-4 pt-0">
                    <div
                      class="text-black opacity-[0.6] text-[14px] leading-5 tracking-[-0.032px]"
                    >
                      วันที่เข้ารับ
                    </div>
                    <div class="leading-5 text-[14px] text-black">-</div>
                  </div>
                </div>
              </td>
              <td
                :colspan="4"
                class="align-top pr-4 pt-4 border-b border-b-[#EEEDF1]"
              >
                <div class="flex justify-end items-center space-x-7">
                  <v-icon color="#74777F" class="cursor-pointer" size="20"
                    >fa-solid fa-exclamation</v-icon
                  >
                  <v-icon color="#74777F" class="cursor-pointer" size="20"
                    >fa-solid fa-file-circle-question</v-icon
                  >
                  <v-menu location="start top">
                    <template v-slot:activator="{ props }">
                      <v-icon
                        color="#74777F"
                        class="cursor-pointer"
                        size="20"
                        v-bind="props"
                        >fa-solid fa-ellipsis-vertical</v-icon
                      >
                    </template>
                    <v-list>
                      <v-list-item @click="modalAlertRollback = true">
                        <v-list-item-title>นำสินค้ากลับ</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>เร่งนำส่งพัสดุ</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="modalUploadDetail = true">
                        <v-list-item-title>แก้ไขข้อมูลพัสดุ</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </td>
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

      <div v-if="carManagePage && !settingRegularPage">
        <DeliveryCarManagement
          @setting-delivery="modalCalldelivery = true"
          @show-detail="modalShowDetail = true"
          @setting-regular="fnHandleSettingDelivery"
        />
      </div>

      <div v-if="settingRegularPage">
        <DeliverySettingRegularPage />
      </div>
    </v-scroll-x-transition>
  </div>
  <DeliveryModalUpdateDetail
    :open="modalUploadDetail"
    @on-close="modalUploadDetail = false"
    @on-submit="
      {
        modalAlertSuccess = true;
        modalUploadDetail = false;
      }
    "
  />

  <DeliveryModalCalldelivery
    :open="modalCalldelivery"
    @on-close="modalCalldelivery = false"
  />

  <DeliveryModalShowDetail
    :open="modalShowDetail"
    @on-close="modalShowDetail = false"
  />

  <DeliveryModalCallRegular
    :open="modalCallRegular"
    @on-submit="
      () => {
        modalCallRegular = false;
        modalShowResult = true;
      }
    "
    @on-close="modalCallRegular = false"
  />
</template>

<style>
thead tr {
  @apply bg-[#E9E7EB];
}
</style>
