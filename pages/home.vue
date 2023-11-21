<script setup lang="ts">
// definePageMeta({
//   middleware: "auth-middleware"
// })
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "vue-chartjs"
import { ref, onMounted, computed } from "vue"
ChartJS.register(ArcElement, Tooltip)

type tabType = 1 | 7 | 30 | 365

const tab = ref<tabType>(1)
const chartData = ref({
  labels: ["Channel 1", "Channel 2", "Channel 3", "Channel 4", "Channel 5"],
  datasets: [
    {
      backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16", "#F7CF6B"],
      data: [40, 20, 80, 10, 30]
    }
  ]
})

const chartOption = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    // legend: {
    //   position: "right",
    //   align: "center",
    //   fullSize: false,
    //   labels: {
    //     useBorderRadius: true,
    //     borderRadius: 500,
    //   }
    // }
  }
})

const fnChangeTab = (value: tabType) => {
  tab.value = value
}
</script>

<template>
  <!-- <Toolbars />-->
  <NavbarDynamic :Breadcrumb="['หน้าแรก']" />
  <div class="containerLayout h-[200vh]">
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
        >ซ่อน</v-btn
      >

      <div class="w-[800px] h-[300px]">
        <div class="h-1/2 items-center">
          <div class="grid grid-cols-4 w-full h-full">
            <div
              class="h-full flex justify-center items-center flex-col space-y-4 relative"
            >
              <div
                class="w-[80px] h-[80px] bg-[#D4E3FF] justify-center flex items-center"
              >
                <div class="divider right-0 w-1/2"></div>
              </div>
              <div>ตั้งค่าเริ่มต้น</div>
            </div>
            <div
              class="h-full flex justify-center items-center flex-col space-y-4 relative"
            >
              <div
                class="w-[80px] h-[80px] bg-[#D4E3FF] justify-center flex items-center"
              >
                <div class="divider w-full"></div>
              </div>
              <div>เรียนรู้การสร้างออเดอร์</div>
            </div>
            <div
              class="h-full flex justify-center items-center flex-col space-y-4 relative"
            >
              <div
                class="w-[80px] h-[80px] bg-[#D4E3FF] justify-center flex items-center"
              >
                <div class="divider w-full"></div>
              </div>
              <div>เรียนรู้การสร้างคลังสินค้า</div>
            </div>
            <div
              class="h-full flex justify-center items-center flex-col space-y-4 relative"
            >
              <div
                class="w-[80px] h-[80px] bg-[#D4E3FF] justify-center flex items-center"
              >
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
              <!-- <v-icon color="#D5E3FF" size="20">mdi-check-circle</v-icon> -->
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
              <!-- <v-icon color="#D5E3FF" size="20">mdi-check-circle</v-icon> -->
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
        <div class="flex justify-center items-center">
          <v-icon color="#084F93" size="15">fa-solid fa-coins</v-icon>
        </div>
        <div
          class="text-[22px] text-[#084F93] leading-[26px] tracking-[-0.079px] flex justify-center items-center"
        >
          รายได้
        </div>
      </div>
      <!-- <font-awesome-icon icon="fa-solid fa-plus" /> -->
      <!-- <i class="fa-solid fa-coins"></i> -->
      <!-- btn group -->
      <div class="flex space-x-2">
        <!-- append-icon="fa-solid fa-coins" -->
        <v-btn
          class="!border-[#EEEDF1] !px-3 !font-[400] !text-[14px] !tracking-[-0.032px] !leading-[20px] !rounded-lg"
          variant="outlined"
          append-icon="fa-plus"
        >
          เชื่อมต่อช่องทาง
        </v-btn>
        <v-btn
          class="!border-[#EEEDF1] !px-3 !font-[400] !text-[14px] !tracking-[-0.032px] !leading-[20px] !rounded-lg"
          append-icon="fa-plus"
          variant="outlined"
        >
          นำเข้าคำสั่งซื้อ
        </v-btn>
        <v-btn
          class="!border-[#EEEDF1] !px-3 !font-[400] !text-[14px] !tracking-[-0.032px] !leading-[20px] !rounded-lg"
          append-icon="fa-plus"
          variant="outlined"
        >
          สร้างคำสั่งซื้อ
        </v-btn>
      </div>
    </div>

    <div class="card mt-4">
      <!-- header -->
      <div class="text-[rgba(0, 0, 0, 0.87)] leading-[22px] tracking-[-0.05px]">
        รายงานการขาย
      </div>

      <div class="flex justify-between">
        <!-- <v-icon color="#000">mdi-currency-thb</v-icon> -->
        <div class="leading-[40px] text-[34px] font-bold text-[#000000]">
          ฿ 40,206
        </div>
        <div class="cardTab">
          <v-btn
            :color="tab === 1 ? '#084F93' : '#fff'"
            @click="fnChangeTab(1)"
            variant="flat"
            class="!rounded-[8px] !h-[36px] text-[14px] !p-[8px] tracking-[-0.032px] leading-[20px]"
            >24 ชม</v-btn
          >
          <v-btn
            @click="fnChangeTab(7)"
            :color="tab === 7 ? '#084F93' : '#fff'"
            variant="flat"
            class="!rounded-[8px] !h-[36px] text-[14px] !p-[8px] tracking-[-0.032px] leading-[20px]"
            >7 วัน</v-btn
          >
          <v-btn
            @click="fnChangeTab(30)"
            :color="tab === 30 ? '#084F93' : '#fff'"
            variant="flat"
            class="!rounded-[8px] !h-[36px] text-[14px] !p-[8px] tracking-[-0.032px] leading-[20px]"
            >30 วัน</v-btn
          >
          <v-btn
            @click="fnChangeTab(365)"
            :color="tab === 365 ? '#084F93' : '#fff'"
            variant="flat"
            class="!rounded-[8px] !h-[36px] text-[14px] !p-[8px] tracking-[-0.032px] leading-[20px]"
            >12 เดือน</v-btn
          >
        </div>
      </div>

      <!-- graph  -->
      <div class="mt-4">
        <div
          class="bg-[#D5E3FF] w-full h-[350px] rounded-lg flex justify-center items-center"
        >
          <div
            class="leading-[40px] text-[34px] tracking-[0.136px] text-[#000]"
          >
            PUT YOUR DATA
          </div>
        </div>
      </div>

      <!-- pie chart -->
      <div class="grid grid-cols-2 gap-8">
        <div>
          <div class="tracking-[-0.05px] leading-[22px] text-[#000]">
            สินค้าที่ขายได้
          </div>
          <div class="card mt-2">
            <div class="flex justify-between items-center">
              <div>
                <v-select
                  label="วันที่แสดง"
                  density="compact"
                  hide-details
                  class="w-[130px] labelSize"
                  :items="[
                    'California',
                    'Colorado',
                    'Florida',
                    'Georgia',
                    'Texas',
                    'Wyoming'
                  ]"
                  variant="outlined"
                ></v-select>
              </div>

              <div
                class="cursor-pointer leading-[20px] tracking-[-0.03px] text-sm text-[#084F93]"
              >
                ดูเพิ่มเติม
              </div>
            </div>

            <div class="relative flex justify-center">
              <div class="w-[250px] h-[250px]">
                <Pie :data="chartData" :options="chartOption" />
              </div>
              <div
                class="absolute top-1/2 right-5"
                style="
                  position: absolute;
                  top: 50%;
                  transform: translate(-50%, -50%);
                "
              >
                <div
                  v-for="(item, index) in chartData.datasets[0].backgroundColor"
                  class="text-[12px] font-bold flex space-x-2 justify-center items-center legendSpace"
                >
                  <div
                    class="w-5 h-5 rounded-full"
                    :style="{
                      backgroundColor: item
                    }"
                  ></div>
                  <div>{{ chartData.labels[index] }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="tracking-[-0.05px] leading-[22px] text-[#000]">
            พนักงานที่ขายได้
          </div>
          <div class="card mt-2">
            <div class="flex justify-between items-center">
              <div>
                <v-select
                  label="วันที่แสดง"
                  density="compact"
                  hide-details
                  class="w-[130px] labelSize"
                  :items="[
                    'California',
                    'Colorado',
                    'Florida',
                    'Georgia',
                    'Texas',
                    'Wyoming'
                  ]"
                  variant="outlined"
                ></v-select>
              </div>

              <div
                class="cursor-pointer leading-[20px] tracking-[-0.03px] text-sm text-[#084F93]"
              >
                ดูเพิ่มเติม
              </div>
            </div>

            <div class="relative flex justify-center">
              <div class="w-[250px] h-[250px]">
                <Pie :data="chartData" :options="chartOption" />
              </div>
              <div
                class="absolute top-1/2 right-5"
                style="
                  position: absolute;
                  top: 50%;
                  transform: translate(-50%, -50%);
                "
              >
                <div
                  v-for="(item, index) in chartData.datasets[0].backgroundColor"
                  class="text-[12px] font-bold flex space-x-2 justify-center items-center legendSpace"
                >
                  <div
                    class="w-5 h-5 rounded-full"
                    :style="{
                      backgroundColor: item
                    }"
                  ></div>
                  <div>{{ chartData.labels[index] }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #eeedf1;
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
</style>

<style>
.labelSize div div div label {
  font-size: 14px;
}
</style>
