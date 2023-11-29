<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
definePageMeta({
  middleware: "auth-middleware",
});

type tabType = 1 | 7 | 30 | 365;

const tab = ref<tabType>(1);
const showModal = ref<boolean>(true);
const pageModal = ref(1);

const radioSizeValue = ref("A");

const paymentMethod = ref("SalesX");

const paymentMethodData = ref([
  {
    value: "SalesX",
    name: "กระเป๋าเงิน SalesX",
  },
  {
    value: "term",
    name: "เครดิตเทอม",
    title: "วงเงิน 100,000.00 บาท หรือทุกๆ 7 วัน",
  },
]);

const radioSize = ref([
  {
    name: "กล่อง A",
    title: "14+20+6 = 40 ซม",
    value: "A",
  },
  {
    name: "กล่อง B",
    title: "17+25+9 = 51 ซม",
    value: "B",
  },
  {
    name: "กล่อง C",
    title: "20+30+11 = 61 ซม",
    value: "C",
  },
  {
    name: "กล่อง D",
    title: "22+35+14 = 71 ซม",
    value: "D",
  },
  {
    name: "กล่อง E",
    title: "14+20+6 = 81 ซม",
    value: "E",
  },
  {
    name: "ใหญ่กว่ากล่อง E",
    title: "ผลรวม > 81 ซม",
    value: "E+",
  },
]);

const radioPackage = ref("flash");

const fnChangeTab = (value: tabType) => {
  tab.value = value;
};

const flashIcon =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRysTmgrZal8QIIwXojSAkmz_hgwKVYR_lt4AOHrLRsDIma-7hE2JNKtix8FWk-SHT-A7M&usqp=CAU";

const jAndTIcon = "https://i.ytimg.com/vi/mWi25JkVnAI/maxresdefault.jpg";
const kerryIcon =
  "https://www.gadgetzone.in.th/wp-content/uploads/2015/01/icon-kerry-express.png";

const selectedPackage = computed(() => {
  switch (radioPackage.value) {
    case "flash":
      return flashIcon;
    case "kerry":
      return kerryIcon;
    default:
      return jAndTIcon;
  }
});

const fnHandleCancelModal = () => {
  radioPackage.value === "flash";
  paymentMethod.value === "SalesX";
  radioSizeValue.value === "A";
  showModal.value === false;
};

const options = ref({
  chart: {
    zoom: {
      enabled: false,
    },
    stacked: true,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    labels: {
      format: "d/MM",
      showDuplicates: false,
    },
  },
  tooltip: {
    enable: "false",
  },
  yaxis: {
    opposite: false,
  },
  legend: {
    horizontalAlign: "left",
    show: false,
  },
});

const optionsDonut = ref({
  chart: {
    zoom: {
      enabled: false,
    },
    type: "donut",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    labels: {
      format: "d/MM",
      showDuplicates: false,
    },
  },
  tooltip: {
    enable: "false",
  },
  yaxis: {
    opposite: false,
  },
  legend: {
    horizontalAlign: "left",
    show: false,
  },
});

const series = ref([
  {
    name: "จำนวนเงิน",
    data: [
      {
        x: new Date("2023-07-11").getTime(),
        y: 14000000,
      },
      {
        x: new Date("2023-08-12").getTime(),
        y: 20000000,
      },
      {
        x: new Date("2023-09-13").getTime(),
        y: 1000000,
      },
      {
        x: new Date("2023-10-14").getTime(),
        y: 7000000,
      },
      {
        x: new Date("2023-11-15").getTime(),
        y: 15000000,
      },
    ],
  },
  {
    name: "โซเชียลมีเดีย",
    data: [
      {
        x: new Date("2023-07-11").getTime(),
        y: 12000000,
      },
      {
        x: new Date("2023-08-12").getTime(),
        y: 18000000,
      },
      {
        x: new Date("2023-09-13").getTime(),
        y: 7000000,
      },
      {
        x: new Date("2023-10-14").getTime(),
        y: 4000000,
      },
      {
        x: new Date("2023-11-15").getTime(),
        y: 13000000,
      },
    ],
  },
]);

const optionsProfit = ref({
  chart: {
    zoom: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      columnWidth: "20%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    labels: {
      format: "d/MM",
      showDuplicates: false,
    },
  },
  tooltip: {
    enable: "false",
  },
  yaxis: {
    opposite: false,
  },
  legend: {
    horizontalAlign: "left",
    show: false,
  },
});

const tableItemTotals = ref({});
</script>

<template>
  <Toolbars />
  <NavbarDynamic :Breadcrumb="['หน้าแรก']" />
  <div class="containerLayout h-[400vh]">
    <div class="card items-center relative">
      <div
        class="leading-[26px] tracking-[-0.079px] text-[#084F93] text-[22px] font-bold"
      >
        เริ่มต้นการใช้งาน SalesX
      </div>

      <v-btn
        variant="outlined"
        class="!w-[40px] !h-[40px] !min-w-fit !rounded-lg !px-4 !text-[14px] !absolute top-4 right-4"
        color="#084F93"
        >ปิด</v-btn
      >

      <div class="w-[800px] h-[300px]">
        <div class="h-1/2 items-center">
          <div class="grid grid-cols-4 w-full h-full">
            <div
              class="h-full flex justify-center items-center flex-col space-y-4 relative"
            >
              <div class="w-[80px] h-[80px] justify-center flex items-center">
                <img
                  src="@/assets/images/03.svg"
                  width="80"
                  height="80"
                  class="z-50"
                />
                <div class="divider right-0 w-1/2"></div>
              </div>
              <div>ตั้งค่าเริ่มต้น</div>
            </div>
            <div
              class="h-full flex justify-center items-center flex-col space-y-4 relative"
            >
              <div class="w-[80px] h-[80px] justify-center flex items-center">
                <img
                  src="@/assets/images/04.svg"
                  width="80"
                  height="80"
                  class="z-50"
                />
                <div class="divider w-full"></div>
              </div>
              <div>เรียนรู้การสร้างออเดอร์</div>
            </div>
            <div
              class="h-full flex justify-center items-center flex-col space-y-4 relative"
            >
              <div class="w-[80px] h-[80px] justify-center flex items-center">
                <img
                  src="@/assets/images/05.svg"
                  width="80"
                  height="80"
                  class="z-50"
                />
                <div class="divider w-full"></div>
              </div>
              <div>เรียนรู้การสร้างคลังสินค้า</div>
            </div>
            <div
              class="h-full flex justify-center items-center flex-col space-y-4 relative"
            >
              <div class="w-[80px] h-[80px] justify-center flex items-center">
                <img
                  src="@/assets/images/06.svg"
                  width="80"
                  height="80"
                  class="z-50"
                />
                <div class="divider w-1/2 left-0"></div>
              </div>
              <div>เรียนรู้การระบบขนส่ง</div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 w-full h-1/2">
          <div class="h-full flex flex-col space-y-4 pl-6">
            <div class="flex space-x-1">
              <!-- <v-icon color="#084F93" size="20">mdi-check-circle</v-icon> -->
              <v-icon color="#084F93" size="15"
                >fa-solid fa-circle-check</v-icon
              >
              <div
                class="tracking-[-0.021px] leading-[14px] text-sm opacity-[0.4] text-center"
              >
                สร้างโปรไฟล์ของคุณ
              </div>
            </div>
            <div class="flex space-x-1">
              <!-- <v-icon color="#084F93" size="20">mdi-check-circle</v-icon> -->
              <v-icon color="#084F93" size="15"
                >fa-solid fa-circle-check</v-icon
              >
              <div
                class="tracking-[-0.021px] leading-[14px] text-sm opacity-[0.4] text-center"
              >
                เพิ่มข้อมูลเกี่ยวกับธุรกิจคุณ
              </div>
            </div>
            <div class="flex space-x-1">
              <!-- <v-icon color="#084F93" size="20">mdi-check-circle</v-icon> -->
              <v-icon color="#084F93" size="15"
                >fa-solid fa-circle-check</v-icon
              >
              <div
                class="tracking-[-0.021px] leading-[14px] text-sm opacity-[0.4] text-center"
              >
                จัดการผู้ใช้งาน
              </div>
            </div>
            <div class="flex space-x-1">
              <!-- <v-icon color="#084F93" size="20">mdi-check-circle</v-icon> -->
              <v-icon color="#084F93" size="15"
                >fa-solid fa-circle-check</v-icon
              >
              <div
                class="tracking-[-0.021px] leading-[14px] text-sm opacity-[0.4] text-center"
              >
                จัดการบทบาท
              </div>
            </div>
          </div>

          <div class="h-full flex flex-col space-y-4 pl-6">
            <div class="flex space-x-1">
              <v-icon color="#D5E3FF" size="15"
                >fa-solid fa-circle-check</v-icon
              >
              <div
                class="tracking-[-0.021px] leading-[14px] text-sm text-center text-[#084F93]"
              >
                เพิ่มสินค้า
              </div>
            </div>
            <div class="flex space-x-1">
              <v-icon color="#D5E3FF" size="15"
                >fa-solid fa-circle-check</v-icon
              >
              <div
                class="tracking-[-0.021px] leading-[14px] text-sm text-center text-[#084F93]"
              >
                สร้างคำสั่งซื้อ
              </div>
            </div>
          </div>

          <div class="h-full flex flex-col space-y-4 pl-6">
            <div class="flex space-x-1">
              <!-- <v-icon color="#D5E3FF" size="20">mdi-check-circle</v-icon> -->
              <v-icon color="#D5E3FF" size="15"
                >fa-solid fa-circle-check</v-icon
              >
              <div
                class="tracking-[-0.021px] leading-[14px] text-sm text-center text-[#084F93]"
              >
                สร้างคลังสินค้า
              </div>
            </div>
          </div>

          <div class="h-full flex flex-col space-y-4 pl-6">
            <div class="flex space-x-1">
              <!-- <v-icon color="#D5E3FF" size="20">mdi-check-circle</v-icon> -->
              <v-icon color="#D5E3FF" size="15"
                >fa-solid fa-circle-check</v-icon
              >
              <div
                class="tracking-[-0.021px] leading-[14px] text-sm text-center text-[#084F93]"
              >
                เชื่อมต่อระบบขนส่ง
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 flex justify-between">
      <div class="flex space-x-2">
        <div
          class="text-[24px] text-[#084F93] leading-[32px] flex justify-center items-center"
        >
          รายได้รวม
          <v-icon color="#000000DE" class="opacity-title ml-5" size="20"
            >fa-solid fa-arrow-up-right-from-square</v-icon
          >
        </div>
      </div>
      <!-- btn group -->
      <div class="flex space-x-2">
        <!-- <v-btn
          class="!border-[#EEEDF1] !min-w-[150px] !px-3 !font-[400] !text-[14px] !tracking-[-0.032px] !leading-[20px] !rounded-lg color-icon"
          variant="outlined"
          append-icon="fa-plus"
        >
          เชื่อมต่อช่องทาง
        </v-btn> -->
        <v-btn
          class="!border-[#EEEDF1] !px-3 !min-w-[150px] !font-[400] !text-[14px] !tracking-[-0.032px] !leading-[20px] !rounded-lg color-icon"
          append-icon="fa-plus"
          variant="outlined"
        >
          นำเข้าคำสั่งซื้อ
        </v-btn>
        <v-btn
          class="!border-[#EEEDF1] !px-3 !min-w-[150px] !font-[400] !text-[14px] !tracking-[-0.032px] !leading-[20px] !rounded-lg color-icon"
          append-icon="fa-plus"
          variant="outlined"
        >
          สร้างคำสั่งซื้อ
        </v-btn>
      </div>
    </div>

    <div class="card mt-4 flex-row">
      <div
        class="bg-gradient-to-b from-[#074F95] to-[#00AC86] rounded-lg p-[2px] h-fit w-fit"
      >
        <div class="bg-white flex rounded-lg p-4 flex-col">
          <div class="flex flex-col">
            <div>คำสั่งซื้อรวม</div>
            <div
              class="whitespace-nowrap leading-[22px] font-[600] text-transparent mt-1 text-[18px] bg-clip-text bg-gradient-to-r from-[#084F93] via-[#153B65] to-[#00AA84]"
            >
              320,043 รายการ
            </div>
          </div>

          <div class="flex mt-3">
            <v-icon class="mt-[6px] mr-3" color="#084F93" size="10"
              >fa-solid fa-circle</v-icon
            >
            <div class="flex flex-col">
              <div class="opacity-title text-[12px] leading-4">
                โซเชียลมีเดีย
              </div>
              <div class="text-[12px] leading-4 !text-[#084F93]">
                302 รายการ
              </div>
            </div>
          </div>
          <div class="flex mt-3">
            <v-icon class="mt-[6px] mr-3" color="#A6C8FF" size="10"
              >fa-solid fa-circle</v-icon
            >
            <div class="flex flex-col">
              <div class="opacity-title text-[12px] leading-4">
                มาร์เก็ตเพลส
              </div>
              <div class="text-[12px] leading-4 !text-[#084F93]">
                302 รายการ
              </div>
            </div>
          </div>
          <div class="flex mt-3">
            <v-icon class="mt-[6px] mr-3" color="#00AA84" size="10"
              >fa-solid fa-circle</v-icon
            >
            <div class="flex flex-col">
              <div class="opacity-title text-[12px] leading-4">
                เว็บไซต์ของคุณ
              </div>
              <div class="text-[12px] leading-4 !text-[#084F93]">
                302 รายการ
              </div>
            </div>
          </div>
          <div class="flex mt-3">
            <v-icon class="mt-[6px] mr-3" color="#77F9CE" size="10"
              >fa-solid fa-circle</v-icon
            >
            <div class="flex flex-col">
              <div class="opacity-title text-[12px] leading-4">พันธมิตร</div>
              <div class="text-[12px] leading-4 !text-[#084F93]">
                302 รายการ
              </div>
            </div>
          </div>
          <div class="flex mt-3">
            <v-icon class="mt-[6px] mr-3" color="#FEDF89" size="10"
              >fa-solid fa-circle</v-icon
            >
            <div class="flex flex-col">
              <div class="opacity-title text-[12px] leading-4">ออฟไลน์</div>
              <div class="text-[12px] leading-4 !text-[#084F93]">
                302 รายการ
              </div>
            </div>
          </div>
          <div class="flex mt-3">
            <v-icon class="mt-[6px] mr-3" color="#1B510D" size="10"
              >fa-solid fa-circle</v-icon
            >
            <div class="flex flex-col">
              <div class="opacity-title text-[12px] leading-4">อื่นๆ</div>
              <div class="text-[12px] leading-4 !text-[#084F93]">
                302 รายการ
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full rounded-lg mt-10">
        <client-only placeholder="Loading..." fallback="Loading Chart...">
          <apexchart
            type="bar"
            height="400"
            :options="options"
            :series="series"
          ></apexchart>
        </client-only>
      </div>
      <div class="w-[180px] absolute right-4 mr-4">
        <v-select
          label="จำนวนแสดงผล"
          variant="outlined"
          :items="['ปีปัจจุบัน']"
          :item-value="(item) => item"
          model-value="ปีปัจจุบัน"
          density="compact"
          hide-details="auto"
        ></v-select>
      </div>
    </div>

    <div class="flex p-4 gap-4 mt-4 w-full">
      <div class="grid grid-cols-2 gap-8 w-full">
        <div class="card">
          <div class="flex justify-between items-center">
            <div class="flex space-x-2 items-center">
              <div
                class="text-black leading-[22px] tracking-[-0.05px] bg-[#F4F3F7] w-fit px-4 py-2 rounded-lg"
              >
                สินค้าที่ขายได้
              </div>
              <v-icon size="15">fa-solid fa-arrow-up-right-from-square</v-icon>
            </div>
            <div>
              <v-select
                label="วันที่แสดง"
                density="compact"
                hide-details
                class="w-[130px] labelSize"
                :items="[
                  '1 เดือน',
                  '3 เดือน',
                  '5 เดือน',
                  '7 เดือน',
                  '9 เดือน',
                  '12 เดือน',
                ]"
                variant="outlined"
              ></v-select>
            </div>
          </div>

          <v-card
            variant="flat"
            class="border border-[#EEEDF1] rounded-[8px] pb-[15px] mt-4"
          >
            <v-data-table
              no-data-text="ไม่มีข้อมูล"
              :headers="[
                {
                  title: 'ชื่อสินค้า',
                  key: 'name',
                },
                {
                  title: 'ยอดขาย',
                  key: 'sales',
                  align: 'center',
                },
                {
                  title: 'ส่วนแบ่งยอดขาย',
                  key: 'sales_share',
                  align: 'center',
                },
              ]"
              :items="[
                {
                  name: 'MI Monitor 5',
                  id: 'Item ID - 568790',
                  sales: '4,030,000.00',
                  sales_share: '1.98%',
                },
                {
                  name: 'MI Monitor 5',
                  id: 'Item ID - 568791',
                  sales: '4,030,000.00',
                  sales_share: '1.98%',
                },
                {
                  name: 'MI Monitor 5',
                  id: 'Item ID - 568792',
                  sales: '4,030,000.00',
                  sales_share: '1.98%',
                },
                {
                  name: 'MI Monitor 5',
                  id: 'Item ID - 568793',
                  sales: '4,030,000.00',
                  sales_share: '1.98%',
                },
                {
                  name: 'MI Monitor 45',
                  id: 'Item ID - 568795',
                  sales: '4,030,000.00',
                  sales_share: '1.98%',
                },
              ]"
            >
              <template v-slot:item="{ item, index }">
                <tr v-if="index <= 3">
                  <td>
                    <div class="flex gap-3 items-center">
                      <div>
                        <div class="w-10 h-10 bg-gray-700"></div>
                      </div>
                      <div
                        class="text-[12px] opacity-title leading-4 text-black"
                      >
                        <div>{{ item.name }}</div>
                        <div class="opacity-subTitle">{{ item.id }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="center">
                    {{ item.sales }}
                  </td>
                  <td class="center">
                    {{ item.sales_share }}
                  </td>
                </tr>
                <tr v-if="index === 3">
                  <td>
                    <div class="flex gap-2 items-center">
                      <div class="border rounded-full h-fit p-2 w-fit">+32</div>
                      <div class="p-2 text-[12px] leading-4 opacity-title">
                        อื่นๆ อีก 32 รายการ
                      </div>
                    </div>
                  </td>
                  <td class="center">8,000,000.00</td>
                  <td class="center">52.83%</td>
                </tr>
              </template>
              <template v-slot:no-data>
                <div
                  class="h-[240px] flex justify-center items-center flex-col space-y-3"
                >
                  <div class="opacity-[60%]">ยังไม่มีรายการ</div>
                </div>
              </template>
              <template #bottom></template>
            </v-data-table>
          </v-card>
        </div>

        <div class="card">
          <div class="flex justify-between items-center">
            <div class="flex space-x-2 items-center">
              <div
                class="text-black leading-[22px] tracking-[-0.05px] bg-[#F4F3F7] w-fit px-4 py-2 rounded-lg"
              >
                ทีมที่ขายได้
              </div>
              <v-icon size="15">fa-solid fa-arrow-up-right-from-square</v-icon>
            </div>
            <div>
              <v-select
                label="วันที่แสดง"
                density="compact"
                hide-details
                class="w-[130px] labelSize"
                :items="[
                  '1 เดือน',
                  '3 เดือน',
                  '5 เดือน',
                  '7 เดือน',
                  '9 เดือน',
                  '12 เดือน',
                ]"
                variant="outlined"
              ></v-select>
            </div>
          </div>

          <v-card
            variant="flat"
            class="border border-[#EEEDF1] rounded-[8px] pb-[15px] mt-4"
          >
            <v-data-table
              no-data-text="ไม่มีข้อมูล"
              :headers="[
                {
                  title: 'ทีมงาน',
                  key: 'name',
                },
                {
                  title: 'ยอดขาย',
                  key: 'sales',
                  align: 'center',
                },
                {
                  title: 'ส่วนแบ่งยอดขาย',
                  key: 'sales_share',
                  align: 'center',
                },
              ]"
              :items="[
                {
                  name: 'NaNa',
                  id: 'Item ID - 568790',
                  sales: '4,030,000.00',
                  sales_share: '1.98%',
                },
                {
                  name: 'Phon',
                  id: 'Item ID - 568791',
                  sales: '4,030,000.00',
                  sales_share: '1.98%',
                },
                {
                  name: 'Jack',
                  id: 'Item ID - 568792',
                  sales: '4,030,000.00',
                  sales_share: '1.98%',
                },
                {
                  name: 'Michael',
                  id: 'Item ID - 568793',
                  sales: '4,030,000.00',
                  sales_share: '1.98%',
                },
                {
                  name: 'John',
                  id: 'Item ID - 568795',
                  sales: '4,030,000.00',
                  sales_share: '1.98%',
                },
              ]"
            >
              <template v-slot:item="{ item, index }">
                <tr v-if="index <= 3">
                  <td>
                    <div class="flex gap-3 items-center">
                      <div>
                        <div class="w-10 h-10 rounded-full bg-gray-700"></div>
                      </div>
                      <div
                        class="text-[12px] opacity-title leading-4 text-black"
                      >
                        <div>{{ item.name }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="center">
                    {{ item.sales }}
                  </td>
                  <td class="center">
                    {{ item.sales_share }}
                  </td>
                </tr>
                <tr v-if="index === 3">
                  <td>
                    <div class="flex gap-2 items-center">
                      <div class="border rounded-full h-fit p-2 w-fit">+32</div>
                      <div class="p-2 text-[12px] leading-4 opacity-title">
                        อื่นๆ อีก 32 รายการ
                      </div>
                    </div>
                  </td>
                  <td class="center">8,000,000.00</td>
                  <td class="center">52.83%</td>
                </tr>
              </template>
              <template v-slot:no-data>
                <div
                  class="h-[240px] flex justify-center items-center flex-col space-y-3"
                >
                  <div class="opacity-[60%]">ยังไม่มีรายการ</div>
                </div>
              </template>
              <template #bottom></template>
            </v-data-table>
          </v-card>
        </div>
      </div>
    </div>

    <div class="flex space-x-2 mt-4">
      <div
        class="text-[24px] text-[#084F93] leading-[32px] flex justify-center items-center"
      >
        คำสั่งซื้อ
        <v-icon color="#000000DE" class="opacity-title ml-5" size="20"
          >fa-solid fa-arrow-up-right-from-square</v-icon
        >
      </div>
    </div>

    <div class="card mt-4 flex-row">
      <div
        class="bg-gradient-to-b from-[#074F95] to-[#00AC86] rounded-lg p-[2px] h-fit w-fit"
      >
        <div class="bg-white flex rounded-lg p-4 flex-col">
          <div class="flex flex-col">
            <div>คำสั่งซื้อรวม</div>
            <div
              class="whitespace-nowrap leading-[22px] font-[600] text-transparent mt-1 text-[18px] bg-clip-text bg-gradient-to-r from-[#084F93] via-[#153B65] to-[#00AA84]"
            >
              320,043 รายการ
            </div>
          </div>

          <div class="flex mt-3">
            <v-icon class="mt-[6px] mr-3" color="#084F93" size="10"
              >fa-solid fa-circle</v-icon
            >
            <div class="flex flex-col">
              <div class="opacity-title text-[12px] leading-4">
                โซเชียลมีเดีย
              </div>
              <div class="text-[12px] leading-4 !text-[#084F93]">
                302 รายการ
              </div>
            </div>
          </div>
          <div class="flex mt-3">
            <v-icon class="mt-[6px] mr-3" color="#A6C8FF" size="10"
              >fa-solid fa-circle</v-icon
            >
            <div class="flex flex-col">
              <div class="opacity-title text-[12px] leading-4">
                มาร์เก็ตเพลส
              </div>
              <div class="text-[12px] leading-4 !text-[#084F93]">
                302 รายการ
              </div>
            </div>
          </div>
          <div class="flex mt-3">
            <v-icon class="mt-[6px] mr-3" color="#00AA84" size="10"
              >fa-solid fa-circle</v-icon
            >
            <div class="flex flex-col">
              <div class="opacity-title text-[12px] leading-4">
                เว็บไซต์ของคุณ
              </div>
              <div class="text-[12px] leading-4 !text-[#084F93]">
                302 รายการ
              </div>
            </div>
          </div>
          <div class="flex mt-3">
            <v-icon class="mt-[6px] mr-3" color="#77F9CE" size="10"
              >fa-solid fa-circle</v-icon
            >
            <div class="flex flex-col">
              <div class="opacity-title text-[12px] leading-4">พันธมิตร</div>
              <div class="text-[12px] leading-4 !text-[#084F93]">
                302 รายการ
              </div>
            </div>
          </div>
          <div class="flex mt-3">
            <v-icon class="mt-[6px] mr-3" color="#FEDF89" size="10"
              >fa-solid fa-circle</v-icon
            >
            <div class="flex flex-col">
              <div class="opacity-title text-[12px] leading-4">ออฟไลน์</div>
              <div class="text-[12px] leading-4 !text-[#084F93]">
                302 รายการ
              </div>
            </div>
          </div>
          <div class="flex mt-3">
            <v-icon class="mt-[6px] mr-3" color="#1B510D" size="10"
              >fa-solid fa-circle</v-icon
            >
            <div class="flex flex-col">
              <div class="opacity-title text-[12px] leading-4">อื่นๆ</div>
              <div class="text-[12px] leading-4 !text-[#084F93]">
                302 รายการ
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full rounded-lg mt-10">
        <client-only placeholder="Loading..." fallback="Loading Chart...">
          <apexchart
            type="bar"
            height="400"
            :options="options"
            :series="series"
          ></apexchart>
        </client-only>
      </div>
      <div class="w-[180px] absolute right-4 mr-4">
        <v-select
          label="จำนวนแสดงผล"
          variant="outlined"
          :items="['ปีปัจจุบัน']"
          :item-value="(item) => item"
          model-value="ปีปัจจุบัน"
          density="compact"
          hide-details="auto"
        ></v-select>
      </div>
    </div>

    <div class="card w-1/2 mt-4">
      <div class="">
        <div>
          <div class="flex justify-between items-center">
            <div class="flex space-x-2 items-center">
              <div
                class="text-black leading-[22px] tracking-[-0.05px] bg-[#F4F3F7] w-fit px-4 py-2 rounded-lg"
              >
                สินค้าที่ขายได้
              </div>
              <v-icon size="15">fa-solid fa-arrow-up-right-from-square</v-icon>
            </div>
            <div>
              <v-select
                label="วันที่แสดง"
                density="compact"
                hide-details
                class="w-[130px] labelSize"
                :items="[
                  '1 เดือน',
                  '3 เดือน',
                  '5 เดือน',
                  '7 เดือน',
                  '9 เดือน',
                  '12 เดือน',
                ]"
                variant="outlined"
              ></v-select>
            </div>
          </div>

          <div class="flex">
            <div class="card mt-4 w-fit p-2 h-fit whitespace-nowrap">
              <div class="flex items-center gap-2">
                <v-icon color="#084F93" size="14">fa-solid fa-circle</v-icon>
                <div class="opacity-title text-[12px] leading-4">
                  รอดำเนินการ
                </div>
                <div class="text-[12px] leading-4 !text-[#084F93]">
                  302 รายการ
                </div>
              </div>
              <div class="flex items-center gap-2">
                <v-icon color="#A6C8FF" size="14">fa-solid fa-circle</v-icon>
                <div class="opacity-title text-[12px] leading-4">
                  เตรียมจัดส่ง
                </div>
                <div class="text-[12px] leading-4 !text-[#084F93]">
                  302 รายการ
                </div>
              </div>
              <div class="flex items-center gap-2">
                <v-icon color="#00AA84" size="14">fa-solid fa-circle</v-icon>
                <div class="opacity-title text-[12px] leading-4">
                  รอส่งมอบให้ขนส่ง
                </div>
                <div class="text-[12px] leading-4 !text-[#084F93]">
                  302 รายการ
                </div>
              </div>
              <div class="flex items-center gap-2">
                <v-icon color="#77F9CE" size="14">fa-solid fa-circle</v-icon>
                <div class="opacity-title text-[12px] leading-4">
                  จัดส่งสำเร็จ
                </div>
                <div class="text-[12px] leading-4 !text-[#084F93]">
                  302 รายการ
                </div>
              </div>
              <div class="flex items-center gap-2">
                <v-icon color="#FEDF89" size="14">fa-solid fa-circle</v-icon>
                <div class="opacity-title text-[12px] leading-4">
                  จัดไม่ส่งสำเร็จ
                </div>
                <div class="text-[12px] leading-4 !text-[#084F93]">
                  302 รายการ
                </div>
              </div>
              <div class="flex items-center gap-2">
                <v-icon color="#1B510D" size="14">fa-solid fa-circle</v-icon>
                <div class="opacity-title text-[12px] leading-4">ยกเลิก</div>
                <div class="text-[12px] leading-4 !text-[#084F93]">
                  302 รายการ
                </div>
              </div>
            </div>
            <div class="w-full rounded-lg mt-10">
              <client-only placeholder="Loading..." fallback="Loading Chart...">
                <apexchart
                  type="donut"
                  height="400"
                  :options="optionsDonut"
                  :series="[44, 55, 41, 17, 15]"
                ></apexchart>
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex space-x-2 mt-4">
      <div
        class="text-[24px] text-[#084F93] leading-[32px] flex justify-center items-center"
      >
        กำไรขาดทุนปี 2566
        <v-icon color="#000000DE" class="opacity-title ml-5" size="20"
          >fa-solid fa-arrow-up-right-from-square</v-icon
        >
      </div>
    </div>

    <div class="card mt-4">
      <div class="flex justify-between items-center">
        <div class="flex gap-2">
          <div class="card">
            <div class="leading-[18px] text-[14px] opacity-subTitle">
              รายได้รวม
            </div>
            <div
              class="whitespace-nowrap text-[#12B76A] leading-[32px] font-bold text-[26px]"
            >
              +15,140,206.00 ฿
            </div>
          </div>
          <div class="card">
            <div class="leading-[18px] text-[14px] opacity-subTitle">
              รายจ่ายรวม
            </div>
            <div
              class="whitespace-nowrap text-[#E4847A] leading-[32px] font-bold text-[26px]"
            >
              -5,140,206.00 ฿
            </div>
          </div>
          <div class="card">
            <div class="leading-[18px] text-[14px] opacity-subTitle">
              รายจ่ายรวม
            </div>
            <div
              class="whitespace-nowrap leading-[32px] font-bold text-[26px] text-transparent bg-clip-text bg-gradient-to-r from-[#084F93] via-[#153B65] to-[#00AA84]"
            >
              +10,140,206.00 ฿
            </div>
          </div>
        </div>

        <div>
          <v-select
            label="วันที่แสดง"
            density="compact"
            hide-details
            class="w-[130px] labelSize"
            :items="[
              '1 เดือน',
              '3 เดือน',
              '5 เดือน',
              '7 เดือน',
              '9 เดือน',
              '12 เดือน',
            ]"
            variant="outlined"
          ></v-select>
        </div>
      </div>

      <div class="w-full rounded-lg mt-10">
        <client-only placeholder="Loading..." fallback="Loading Chart...">
          <apexchart
            type="bar"
            height="400"
            :options="optionsProfit"
            :series="series"
          ></apexchart>
        </client-only>
      </div>

      <div class="w-full rounded-lg mt-10">
        <client-only placeholder="Loading..." fallback="Loading Chart...">
          <apexchart
            type="line"
            height="400"
            :options="optionsProfit"
            :series="series"
          ></apexchart>
        </client-only>
      </div>

      <div class="mt-4 flex p-4 gap-4">
        <div class="grid grid-cols-2 gap-8 w-full">
          <div class="card">
            <div class="flex justify-between items-center">
              <div class="flex space-x-2 items-center">
                <div
                  class="text-black leading-[22px] tracking-[-0.05px] bg-[#F4F3F7] w-fit px-4 py-2 rounded-lg"
                >
                  กำไร/ขาดทุน
                </div>
                <v-icon size="15"
                  >fa-solid fa-arrow-up-right-from-square</v-icon
                >
              </div>
              <div>
                <v-select
                  label="วันที่แสดง"
                  density="compact"
                  hide-details
                  class="w-[130px] labelSize"
                  :items="[
                    '1 เดือน',
                    '3 เดือน',
                    '5 เดือน',
                    '7 เดือน',
                    '9 เดือน',
                    '12 เดือน',
                  ]"
                  variant="outlined"
                ></v-select>
              </div>
            </div>

            <v-card
              variant="flat"
              class="border border-[#EEEDF1] rounded-[8px] pb-[15px] mt-4"
            >
              <v-data-table
                no-data-text="ไม่มีข้อมูล"
                :headers="[
                  {
                    title: 'ช่องทางการขาย',
                    key: 'sale_platform',
                    align: 'center',
                    sortable: false,
                  },
                  {
                    title: 'แพลตฟอร์ม',
                    key: 'platform',
                    align: 'center',
                  },
                  {
                    title: 'รายได้',
                    key: 'profit',
                    align: 'center',
                  },
                  {
                    title: 'ค่าใช้จ่าย',
                    key: 'loss',
                    align: 'center',
                  },
                  {
                    title: 'กำไร/ขาดทุน',
                    key: 'conclusion',
                    align: 'center',
                  },
                ]"
                :items="[
                  {
                    sale_platform: 'โซเชียลมีเดีย',
                    platform: 'เฟซบุ๊ก',
                    profit: '10,000,000.00',
                    loss: '20,000,000.00',
                    conclusion: '-10,000,000.00',
                  },
                  {
                    sale_platform: 'โซเชียลมีเดีย',
                    platform: 'เฟซบุ๊ก',
                    profit: '10,000,000.00',
                    loss: '20,000,000.00',
                    conclusion: '-10,000,000.00',
                  },
                  {
                    sale_platform: 'โซเชียลมีเดีย',
                    platform: 'เฟซบุ๊ก',
                    profit: '10,000,000.00',
                    loss: '20,000,000.00',
                    conclusion: '-10,000,000.00',
                  },
                  {
                    sale_platform: 'โซเชียลมีเดีย',
                    platform: 'เฟซบุ๊ก',
                    profit: '10,000,000.00',
                    loss: '20,000,000.00',
                    conclusion: '-10,000,000.00',
                  },
                ]"
              >
                <template v-slot:item="{ item, index }">
                  <tr v-if="index <= 3">
                    <td class="center whitespace-nowrap">
                      {{ item.sale_platform }}
                    </td>
                    <td class="center">
                      <div class="flex items-center justify-center gap-3">
                        <v-icon color="#74777F">fa-brands fa-facebook</v-icon>
                        <div>{{ item.platform }}</div>
                      </div>
                    </td>
                    <td class="center text-[#008768]">
                      {{ item.profit }}
                    </td>
                    <td class="center text-[#DE3730]">
                      {{ item.loss }}
                    </td>
                    <td class="center text-[#DE3730]">
                      {{ item.conclusion }}
                    </td>
                  </tr>
                  <tr v-if="index === 3">
                    <td>
                      <div class="flex gap-2 items-center justify-center">
                        <div class="border rounded-full h-fit p-2 w-fit">
                          +32
                        </div>
                      </div>
                    </td>
                    <td class="center">
                      <div
                        class="p-2 text-[12px] leading-4 opacity-title whitespace-nowrap"
                      >
                        อื่นๆ อีก 32 รายการ
                      </div>
                    </td>
                    <td class="center text-[#008768]">
                      {{ item.profit }}
                    </td>
                    <td class="center text-[#DE3730]">
                      {{ item.loss }}
                    </td>
                    <td class="center text-[#DE3730]">
                      {{ item.conclusion }}
                    </td>
                  </tr>
                </template>
                <template v-slot:no-data>
                  <div
                    class="h-[240px] flex justify-center items-center flex-col space-y-3"
                  >
                    <div class="opacity-[60%]">ยังไม่มีรายการ</div>
                  </div>
                </template>
                <template #bottom></template>
              </v-data-table>
            </v-card>
          </div>

          <div class="card">
            <div class="flex justify-between items-center">
              <div class="flex space-x-2 items-center">
                <div
                  class="text-black leading-[22px] tracking-[-0.05px] bg-[#F4F3F7] w-fit px-4 py-2 rounded-lg"
                >
                  สถานะการชำระเงิน
                </div>
                <v-icon size="15"
                  >fa-solid fa-arrow-up-right-from-square</v-icon
                >
              </div>
              <div>
                <v-select
                  label="วันที่แสดง"
                  density="compact"
                  hide-details
                  class="w-[130px] labelSize"
                  :items="[
                    '1 เดือน',
                    '3 เดือน',
                    '5 เดือน',
                    '7 เดือน',
                    '9 เดือน',
                    '12 เดือน',
                  ]"
                  variant="outlined"
                ></v-select>
              </div>
            </div>

            <div class="flex gap-2">
              <div class="card">
                <div class="leading-[18px] text-[12px] opacity-subTitle">
                  รอชำระ
                </div>
                <div
                  class="whitespace-nowrap text-[#F79009] leading-[32px] font-bold text-[14บป]"
                >
                  15,140,206.00 ฿
                </div>
              </div>
              <div class="card">
                <div class="leading-[18px] text-[12px] opacity-subTitle">
                  รอยืนยัน
                </div>
                <div
                  class="whitespace-nowrap text-[#084F93] leading-[32px] font-bold text-[14บป]"
                >
                  15,140,206.00 ฿
                </div>
              </div>
              <div class="card">
                <div class="leading-[18px] text-[12px] opacity-subTitle">
                  ได้รับเงินแล้ว
                </div>
                <div
                  class="whitespace-nowrap text-[#00AA84] leading-[32px] font-bold text-[14บป]"
                >
                  5,140,206.00 ฿
                </div>
              </div>
              <div class="card">
                <div class="leading-[18px] text-[12px] opacity-subTitle">
                  ปฏิเสธยอด
                </div>
                <div
                  class="whitespace-nowrap text-[#E4847A] leading-[32px] font-bold text-[14บป]"
                >
                  5,140,206.00 ฿
                </div>
              </div>
            </div>
            <div class="w-full rounded-lg mt-10">
              <client-only placeholder="Loading..." fallback="Loading Chart...">
                <apexchart
                  type="bar"
                  height="200"
                  :options="options"
                  :series="series"
                ></apexchart>
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <v-dialog v-model="showModal" width="auto" persistent>
    <!-- 32px, 16px, 24px, 16px -->
    <v-fade-transition leave-absolute hide-on-leave>
      <v-card v-if="pageModal === 1" class="rounded-lg min-w-[435px] pt-2">
        <v-card-text class="flex items-center justify-center relative">
          <div class="w-[256px] h-[100px] mx-4">
            <img src="@/assets/images/07.svg" />
          </div>
          <div class="absolute top-2 right-5">
            <v-btn
              @click="fnHandleCancelModal"
              icon="fa-solid fa-xmark"
              variant="text"
              size="30"
            ></v-btn>
          </div>
        </v-card-text>
        <v-card-text class="flex flex-col space-y-2">
          <div class="title-leading-5">รูปแบบการจัดส่ง</div>
          <div
            class="text-[14px] tracking-[-0.032px] leading-[20px] opacity-[0.6]"
          >
            เลือกส่งของกับ SalesX เพื่อให้การทำงานกับระบบ สะดวกยิ่งขึ้น
          </div>

          <div class="space-y-1">
            <div
              v-for="(item, key) in [
                'ลดขั้นตอนการทำงาน',
                'ใช้งานแบบไร้รอยต่อ',
                'เชื่อมต่อกับระบบจัดส่ง',
                'ส่งก่อนจ่ายที่หลัง',
              ]"
              :key="key"
              class="flex items-center space-x-2"
            >
              <v-icon size="20" color="#084F93">fa-solid fa-check</v-icon>
              <div
                class="text-[14px] tracking-[-0.03px] leading-5 opacity-[0.6]"
              >
                {{ item }}
              </div>
            </div>
          </div>

          <div
            class="text-[14px] tracking-[-0.032px] leading-[20px] opacity-[0.4]"
          >
            * คุณสามารถเปลี่ยนแปลงการตั้งค่านี้ได้ในภายหลัง
          </div>
        </v-card-text>
        <v-card-text class="w-full space-y-2">
          <v-btn
            class="w-full !rounded-lg !bg-[#084F93] text-white"
            variant="tonal"
            @click="
              () => {
                pageModal = 2;
              }
            "
          >
            เปิดใช้งานส่งพัสดุผ่าน SalesX
          </v-btn>
          <v-btn
            class="w-full !rounded-lg"
            variant="text"
            color="#084F93"
            @click="fnHandleCancelModal"
          >
            จัดส่งโดยร้านค้าเอง
          </v-btn>
        </v-card-text>
      </v-card>

      <v-card
        v-else-if="pageModal === 2"
        class="rounded-lg min-w-[960px] px-4 pt-2"
      >
        <v-card-text class="flex justify-between relative">
          <div class="">
            <div class="title-leading-5">โปรไฟล์การจัดส่ง</div>
            <div class="subTitle-leading-3">
              กรุณาให้ระบุข้อมูลต่อไปนี้
              เพื่อช่วยให้แพลตฟอร์มเสนอบริการได้อย่างเหมาะสม
            </div>
          </div>
          <v-btn
            @click="fnHandleCancelModal"
            icon="fa-solid fa-xmark"
            variant="text"
            size="30"
          ></v-btn>
        </v-card-text>

        <v-card-text class="grid grid-cols-2 gap-4 border-b border-b-[#EEEDF1]">
          <div class="space-y-2">
            <div class="title-leading-5 !text-[14px]">
              จำนวนพัสดุที่จัดส่งต่อเดือน
            </div>
            <div>
              <v-radio-group class="label-radio" hide-details>
                <v-radio
                  true-icon="fa-solid fa-circle-dot"
                  class="test-text"
                  color="#084F93"
                  label="ฉันพึ่งเริ่ม"
                  value="one"
                ></v-radio>
                <v-radio
                  true-icon="fa-solid fa-circle-dot"
                  label="1 - 299"
                  color="#084F93"
                  value="two"
                ></v-radio>
                <v-radio
                  true-icon="fa-solid fa-circle-dot"
                  label="300 - 999"
                  color="#084F93"
                  value="three"
                ></v-radio>
                <v-radio
                  true-icon="fa-solid fa-circle-dot"
                  label="1000 - 2999"
                  color="#084F93"
                  value="four"
                ></v-radio>
                <v-radio
                  true-icon="fa-solid fa-circle-dot"
                  color="#084F93"
                  label="3000 - 14999"
                  value="five"
                ></v-radio>
                <v-radio
                  true-icon="fa-solid fa-circle-dot"
                  color="#084F93"
                  label="5000+"
                  value="six"
                ></v-radio>
              </v-radio-group>
            </div>
          </div>
          <!-- <div>น้ำหนักของพัสดุที่ส่งเป็นประจำ</div> -->
          <div class="space-y-2">
            <div class="title-leading-5 !text-[14px]">
              น้ำหนักของพัสดุที่ส่งเป็นประจำ
            </div>
            <div>
              <v-radio-group class="label-radio" hide-details>
                <v-radio
                  true-icon="fa-solid fa-circle-dot"
                  class="test-text"
                  color="#084F93"
                  label="น้อยกว่า 1 Kg"
                  value="one"
                ></v-radio>
                <v-radio
                  true-icon="fa-solid fa-circle-dot"
                  label="1.00 - 1.99 Kg"
                  color="#084F93"
                  value="two"
                ></v-radio>
                <v-radio
                  true-icon="fa-solid fa-circle-dot"
                  label="2.00 - 2.99 Kg"
                  color="#084F93"
                  value="three"
                ></v-radio>
                <v-radio
                  true-icon="fa-solid fa-circle-dot"
                  label="3.00 - 4.99 Kg"
                  color="#084F93"
                  value="four"
                ></v-radio>
                <v-radio
                  true-icon="fa-solid fa-circle-dot"
                  color="#084F93"
                  label="5.00 - 9.99 Kg"
                  value="five"
                ></v-radio>
                <v-radio
                  true-icon="fa-solid fa-circle-dot"
                  color="#084F93"
                  label="10Kg+"
                  value="six"
                ></v-radio>
              </v-radio-group>
            </div>
          </div>
        </v-card-text>

        <v-card-text class="space-y-2">
          <div class="title-leading-5 !text-[14px]">
            ขนาดของพัสดุที่ส่งเป็นประจำ
          </div>

          <div class="border-b border-b-[#EEEDF1] p-4">
            <div class="grid grid-cols-6">
              <div
                v-for="(item, index) in radioSize"
                class="flex flex-col justify-center items-center cursor-pointer select-none"
                @click="radioSizeValue = item.value"
                :key="index"
              >
                <div class="w-[60px] h-[60px] bg-emerald-600"></div>
                <v-checkbox
                  color="#084F93"
                  class="checkbox-label mr-4"
                  true-icon="fa-solid fa-circle-dot"
                  false-icon="fa-regular fa-circle"
                  :true-value="item.value"
                  :label="item.name"
                  v-model="radioSizeValue"
                  hide-details
                ></v-checkbox>
                <div
                  class="flex flex-col justify-center items-center border border-[#eeedf1] p-2 rounded-lg"
                >
                  <div
                    class="opacity-[0.6] text-black text-[14px] leading-[16px]"
                  >
                    {{ item.title }}
                  </div>
                  <div
                    class="text-[10px] leading-[14px] tracking-[0.006px] opacity-[0.4]"
                  >
                    ความยาวรวม 3 ด้าน
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>

        <v-card-text class="space-x-2 flex mb-2">
          <v-btn
            class="w-1/2 !rounded-lg"
            variant="outlined"
            color="#084F93"
            size="large"
            @click="
              () => {
                pageModal = 1;
              }
            "
          >
            ย้อนกลับ
          </v-btn>
          <v-btn
            class="w-1/2 !rounded-lg !bg-[#084F93] text-white"
            variant="tonal"
            size="large"
            @click="
              () => {
                pageModal = 3;
              }
            "
          >
            ต่อไป
          </v-btn>
        </v-card-text>
      </v-card>

      <v-card
        v-else-if="pageModal === 3"
        class="rounded-lg min-w-[620px] px-4 pt-2"
      >
        <v-card-text class="flex justify-between">
          <div class="title-leading-5">เลือกผู้ให้บริการจัดส่ง</div>
          <v-btn
            @click="fnHandleCancelModal"
            icon="fa-solid fa-xmark"
            variant="text"
            size="30"
          ></v-btn>
        </v-card-text>

        <v-card-text class="grid grid-cols-4 gap-6">
          <div class="w-full h-[680px]">
            <div class="h-[7.69%]"></div>
            <div class="title-text-detail">รายละเอียดผู้ให้บริการ</div>
            <div class="title-text-detail">ชื่อ</div>
            <div class="title-text-detail">ราคา</div>
            <div class="title-text-detail">ค่า COD</div>
            <div class="title-text-detail">ค่าเข้ารับ</div>
            <div class="title-text-detail">ค่าตีกลับ</div>
            <div class="title-text-detail">Remote area</div>
            <div class="title-text-detail">วิธีคิดค่าส่ง</div>
            <div class="title-text-detail">พื้นที่เข้ารับ %</div>
            <div class="title-text-detail">พื้นที่จัดส่ง %</div>
            <div class="title-text-detail">Service</div>
            <div class="title-text-detail">การเรียกสินค้ากลับ</div>
          </div>

          <div
            class="w-full h-[680px] rounded-lg px-2 relative overflow-hidden cursor-pointer select-none"
            @click="radioPackage = 'flash'"
            :style="{
              border:
                radioPackage === 'flash'
                  ? '1px solid #084f93'
                  : '1px solid #EEEDF1',
            }"
          >
            <!-- <div class="h-[7.69%] flex justify-center w-full"></div> -->
            <div class="h-[15.38%] flex w-full border-b flex-col items-center">
              <div class="recommend">แนะนำ</div>
              <v-checkbox
                true-icon="fa-solid fa-circle-check"
                false-icon="fa-regular fa-circle"
                :model-value="radioPackage"
                true-value="flash"
                hide-details
                color="#084F93"
                class="!flex-none disable-min-height"
              ></v-checkbox>
              <!-- bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRysTmgrZal8QIIwXojSAkmz_hgwKVYR_lt4AOHrLRsDIma-7hE2JNKtix8FWk-SHT-A7M&usqp=CAU)]  -->
              <div
                class="w-full mb-2 rounded-lg bg-center bg-cover h-[50px]"
                :style="{ backgroundImage: `url(${flashIcon})` }"
              ></div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">3 % จากยอดสินค้า</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ฟรี</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">+ 50 บาท</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">18 บาท</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
          </div>

          <div
            class="w-full h-[680px] rounded-lg px-2 relative overflow-hidden select-none cursor-pointer"
            @click="radioPackage = 'jAndT'"
            :style="{
              border:
                radioPackage === 'jAndT'
                  ? '1px solid #084f93'
                  : '1px solid #EEEDF1',
            }"
          >
            <!-- <div class="h-[7.69%] flex justify-center w-full"></div> -->
            <div class="h-[15.38%] flex w-full border-b flex-col items-center">
              <!-- <div class="recommend">แนะนำ</div> -->
              <v-checkbox
                true-icon="fa-solid fa-circle-check"
                false-icon="fa-regular fa-circle"
                :model-value="radioPackage"
                true-value="jAndT"
                hide-details
                color="#084F93"
                class="!flex-none disable-min-height"
              ></v-checkbox>
              <div
                class="w-full mb-2 rounded-lg bg-center bg-cover h-[50px]"
                :style="{ backgroundImage: `url(${jAndTIcon})` }"
              ></div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">3 % จากยอดสินค้า</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ฟรี</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">+ 50 บาท</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">18 บาท</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
          </div>

          <div
            class="w-full h-[680px] rounded-lg px-2 relative overflow-hidden select-none cursor-pointer"
            @click="radioPackage = 'kerry'"
            :style="{
              border:
                radioPackage === 'kerry'
                  ? '1px solid #084f93'
                  : '1px solid #EEEDF1',
            }"
          >
            <!-- <div class="h-[7.69%] flex justify-center w-full"></div> -->
            <div class="h-[15.38%] flex w-full border-b flex-col items-center">
              <!-- <div class="recommend">แนะนำ</div> -->
              <v-checkbox
                true-icon="fa-solid fa-circle-check"
                false-icon="fa-regular fa-circle"
                :model-value="radioPackage"
                true-value="kerry"
                hide-details
                color="#084F93"
                class="!flex-none disable-min-height"
              ></v-checkbox>
              <div
                class="w-full mb-2 rounded-lg bg-center bg-cover h-[50px]"
                :style="{ backgroundImage: `url(${kerryIcon})` }"
              ></div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">3 % จากยอดสินค้า</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ฟรี</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">+ 50 บาท</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">18 บาท</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full border-b">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
            <div class="h-[7.69%] flex justify-center w-full">
              <div class="text-detail-value">ทั่วไทย</div>
            </div>
          </div>
        </v-card-text>

        <v-card-text class="space-x-2 flex mb-2">
          <v-btn
            class="w-1/2 !rounded-lg"
            variant="outlined"
            color="#084F93"
            size="large"
            @click="
              () => {
                pageModal = 2;
              }
            "
          >
            ย้อนกลับ
          </v-btn>
          <v-btn
            class="w-1/2 !rounded-lg !bg-[#084F93] text-white"
            variant="tonal"
            size="large"
            @click="
              () => {
                pageModal = 4;
              }
            "
          >
            ต่อไป
          </v-btn>
        </v-card-text>
      </v-card>

      <v-card
        v-else-if="pageModal === 4"
        class="rounded-lg min-w-[560px] px-4 pt-2"
      >
        <v-card-text class="flex justify-between relative">
          <div class="title-leading-5">รูปแบบการชำระเงิน</div>

          <v-btn
            @click="fnHandleCancelModal"
            icon="fa-solid fa-xmark"
            variant="text"
            size="30"
          ></v-btn>
        </v-card-text>

        <v-card-text class="space-y-3">
          <div
            class="rounded-lg p-3 pl-5 flex justify-between cursor-pointer select-none"
            v-for="item in paymentMethodData"
            :style="{
              border:
                paymentMethod === item.value
                  ? '1px solid #084f93'
                  : '1px solid #EEEDF1',
            }"
            @click="paymentMethod = item.value"
          >
            <div class="flex space-x-4 justify-center items-center">
              <v-icon color="#084F93">fa-solid fa-wallet</v-icon>
              <div class="leading-[22px] tracking-[-0.05px]">
                {{ item.name }}
              </div>
            </div>

            <div class="flex items-center">
              <div class="leading-[22px] tracking-[-0.05px] max-w-[200px]">
                {{ item.title }}
              </div>
              <v-checkbox
                true-icon="fa-solid fa-circle-check"
                false-icon="fa-regular fa-circle"
                :model-value="paymentMethod"
                :true-value="item.value"
                hide-details
                color="#084F93"
                readonly
                class="!flex-none disable-min-height"
              ></v-checkbox>
            </div>
          </div>
        </v-card-text>

        <v-card-text class="space-x-2 flex mb-2">
          <v-btn
            class="w-1/2 !rounded-lg"
            variant="outlined"
            color="#084F93"
            size="large"
            @click="
              () => {
                pageModal = 3;
              }
            "
          >
            ย้อนกลับ
          </v-btn>
          <v-btn
            class="w-1/2 !rounded-lg !bg-[#084F93] text-white"
            variant="tonal"
            size="large"
            @click="
              () => {
                pageModal = 5;
              }
            "
          >
            ต่อไป
          </v-btn>
        </v-card-text>
      </v-card>

      <v-card
        v-else-if="pageModal === 4"
        class="rounded-lg min-w-[560px] px-4 pt-2"
      >
        <v-card-text class="flex justify-between relative">
          <div class="title-leading-5">รูปแบบการชำระเงิน</div>

          <v-btn
            @click="fnHandleCancelModal"
            icon="fa-solid fa-xmark"
            variant="text"
            size="30"
          ></v-btn>
        </v-card-text>

        <v-card-text class="space-y-3">
          <div
            class="rounded-lg p-3 pl-5 flex justify-between cursor-pointer select-none"
            v-for="item in paymentMethodData"
            :style="{
              border:
                paymentMethod === item.value
                  ? '1px solid #084f93'
                  : '1px solid #EEEDF1',
            }"
            @click="paymentMethod = item.value"
          >
            <div class="flex space-x-4 justify-center items-center">
              <v-icon color="#084F93">fa-solid fa-wallet</v-icon>
              <div class="leading-[22px] tracking-[-0.05px]">
                {{ item.name }}
              </div>
            </div>

            <div class="flex items-center">
              <div class="leading-[22px] tracking-[-0.05px] max-w-[200px]">
                {{ item.title }}
              </div>
              <v-checkbox
                true-icon="fa-solid fa-circle-check"
                false-icon="fa-regular fa-circle"
                :model-value="paymentMethod"
                :true-value="item.value"
                hide-details
                color="#084F93"
                readonly
                class="!flex-none disable-min-height"
              ></v-checkbox>
            </div>
          </div>
        </v-card-text>

        <v-card-text class="space-x-2 flex mb-2">
          <v-btn
            class="w-1/2 !rounded-lg"
            variant="outlined"
            color="#084F93"
            size="large"
            @click="
              () => {
                pageModal = 3;
              }
            "
          >
            ย้อนกลับ
          </v-btn>
          <v-btn
            class="w-1/2 !rounded-lg !bg-[#084F93] text-white"
            variant="tonal"
            size="large"
            @click="
              () => {
                pageModal = 5;
              }
            "
          >
            ต่อไป
          </v-btn>
        </v-card-text>
      </v-card>

      <v-card v-else-if="pageModal === 5" class="rounded-lg min-w-[560px] pt-2">
        <v-card-text class="flex justify-between relative">
          <div>
            <div class="title-leading-5">พร้อมเริ่มต้นใช้งาน</div>
            <div
              class="text-[16px] tracking-[-0.032px] leading-[20px] opacity-[0.6] mt-1"
            >
              คุณได้ทำการตั้งค่าระบบขนส่งเรียบร้อยแล้ว
              สามารถเริ่มใช้งานระบบได้ทันที
            </div>
          </div>

          <v-btn icon="fa-solid fa-xmark" variant="text" size="30"></v-btn>
        </v-card-text>

        <v-card-text
          class="space-y-5 items-center flex justify-center flex-col"
        >
          <div class="w-[360px] h-[160px]">
            <img src="@/assets/images/08.svg" />
          </div>

          <div class="flex space-x-5 flex-row">
            <!-- <font-awesome-icon icon="fa-solid fa-repeat" /> -->
            <div
              class="text-[#084F93] flex items-center justify-center font-[600]"
            >
              เชื่อมต่อขนส่งสำเร็จ
            </div>
            <div class="flex items-center justify-center">
              <v-icon color="#084F93">fa-solid fa-repeat</v-icon>
            </div>
            <div
              class="rounded-lg bg-red-500 w-[140px] h-[50px] bg-center bg-cover"
              :style="{ backgroundImage: `url(${selectedPackage})` }"
            ></div>
          </div>
        </v-card-text>

        <v-card-text class="space-x-2 flex mb-2">
          <v-btn
            class="w-1/2 !rounded-lg !bg-[#084F93] text-white"
            variant="tonal"
            size="large"
            @click="showModal = false"
          >
            เริ่มสร้างคำสัั่งซื้อแรก
          </v-btn>
          <v-btn
            class="w-1/2 !rounded-lg"
            variant="outlined"
            color="#084F93"
            size="large"
            @click="showModal = false"
          >
            สำรวจด้วยตัวเอง
          </v-btn>
        </v-card-text>
      </v-card>
    </v-fade-transition>
  </v-dialog>
</template>

<style scoped>
.card {
  display: flex;
  padding: 8px;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #eeedf1;
}

.title-text-detail {
  @apply h-[7.69%] box-border flex items-center justify-end
  text-[14px] leading-[20px] tracking-[-0.03px] text-black opacity-[0.6];
}

.recommend {
  color: #fff;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.005px;
  width: 100px;
  height: 13.063px;
  transform: rotate(41.028deg) translate(30px, -10px);
  flex-shrink: 0;
  background-color: #084f93;
  position: absolute;
  right: 0;
}

.title-leading-5 {
  @apply text-black opacity-[0.87] font-bold leading-[22px] tracking-[-0.05px] text-[16px];
}

.subTitle-leading-3 {
  @apply text-[14px] tracking-[-0.032px] leading-[20px] opacity-[0.6];
}

.divider {
  @apply absolute h-[2px] bg-[#D4E3FF];
}

.cardTab {
  @apply border border-[#EEEDF1] !rounded-[8px] p-2 flex space-x-2 justify-center items-center flex-row;
}

.legendSpace:not(:first-child) {
  @apply mt-2;
}

.text-detail-value {
  @apply flex items-center justify-center text-black tracking-[-0.032px] leading-[20px];
}
</style>

<style>
.labelSize div div div label {
  font-size: 14px;
}

tbody tr .center {
  @apply text-[14px] leading-5 tracking-[-0.23%] text-center !pr-10;
}

.color-icon .v-btn__append {
  color: #084f93;
  font-size: 16px;
}

.label-radio div div div label {
  /* background-color: red; */
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.032px;
}
.label-radio div div div div {
  font-size: 15px;
}

.checkbox-label div div div {
  font-size: 15px;
}

.checkbox-label div div label {
  font-size: 14px;
  opacity: 0.87;
}

.disable-min-height div {
  min-height: auto !important;
}
</style>
