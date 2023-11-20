<script setup>
// definePageMeta({
//   middleware: "auth-middleware"
// })
import { ref, onMounted, computed } from "vue";

const tab = ref(1);

const fnChangeTab = (value) => {
  tab.value = value;
};
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
          <div class="h-full flex flex-col space-y-4">
            <div class="flex space-x-1">
              <!-- <v-icon color="#084F93" size="20">mdi-check-circle</v-icon> -->
              <div
                class="tracking-[-0.021px] leading-[18px] text-sm opacity-[0.4] text-center"
              >
                สร้างโปรไฟล์ของคุณ
              </div>
            </div>
            <div class="flex space-x-1">
              <!-- <v-icon color="#084F93" size="20">mdi-check-circle</v-icon> -->
              <div
                class="tracking-[-0.021px] leading-[18px] text-sm opacity-[0.4] text-center"
              >
                เพิ่มข้อมูลเกี่ยวกับธุรกิจคุณ
              </div>
            </div>
            <div class="flex space-x-1">
              <!-- <v-icon color="#084F93" size="20">mdi-check-circle</v-icon> -->
              <div
                class="tracking-[-0.021px] leading-[18px] text-sm opacity-[0.4] text-center"
              >
                จัดการผู้ใช้งาน
              </div>
            </div>
            <div class="flex space-x-1">
              <!-- <v-icon color="#084F93" size="20">mdi-check-circle</v-icon> -->
              <div
                class="tracking-[-0.021px] leading-[18px] text-sm opacity-[0.4] text-center"
              >
                จัดการบทบาท
              </div>
            </div>
          </div>

          <div class="h-full flex flex-col space-y-4 pl-2">
            <div class="flex space-x-1">
              <!-- <v-icon color="#D5E3FF" size="20">mdi-check-circle</v-icon> -->
              <div
                class="tracking-[-0.021px] leading-[18px] text-sm text-center text-[#084F93]"
              >
                เพิ่มสินค้า
              </div>
            </div>
            <div class="flex space-x-1">
              <!-- <v-icon color="#D5E3FF" size="20">mdi-check-circle</v-icon> -->
              <div
                class="tracking-[-0.021px] leading-[18px] text-sm text-center text-[#084F93]"
              >
                สร้างคำสั่งซื้อ
              </div>
            </div>
          </div>

          <div class="h-full flex flex-col space-y-4 pl-2">
            <div class="flex space-x-1">
              <!-- <v-icon color="#D5E3FF" size="20">mdi-check-circle</v-icon> -->
              <div
                class="tracking-[-0.021px] leading-[18px] text-sm text-center text-[#084F93]"
              >
                สร้างคลังสินค้า
              </div>
            </div>
          </div>

          <div class="h-full flex flex-col space-y-4 pl-2">
            <div class="flex space-x-1">
              <!-- <v-icon color="#D5E3FF" size="20">mdi-check-circle</v-icon> -->
              <div
                class="tracking-[-0.021px] leading-[18px] text-sm text-center text-[#084F93]"
              >
                เชื่อมต่อระบบขนส่ง
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 flex justify-between">
      <div class="flex space-x-1">
        <!-- <v-icon color="#084F93">mdi-account-circle</v-icon> -->
        <font-awesome-icon icon="fa-solid fa-circle-check" />
        <div
          class="text-[22px] text-[#084F93] leading-[26px] tracking-[-0.079px]"
        >
          รายได้
        </div>
      </div>

      <!-- btn group -->
      <div class="flex space-x-2">
        <v-btn
          class="!border-[#EEEDF1] !px-3 !font-[400] !text-[14px] !tracking-[-0.032px] !leading-[20px] !rounded-lg"
          append-icon="mdi-plus"
          variant="outlined"
        >
          เชื่อมต่อช่องทาง
        </v-btn>
        <v-btn
          class="!border-[#EEEDF1] !px-3 !font-[400] !text-[14px] !tracking-[-0.032px] !leading-[20px] !rounded-lg"
          append-icon="mdi-plus"
          variant="outlined"
        >
          นำเข้าคำสั่งซื้อ
        </v-btn>
        <v-btn
          class="!border-[#EEEDF1] !px-3 !font-[400] !text-[14px] !tracking-[-0.032px] !leading-[20px] !rounded-lg"
          append-icon="mdi-plus"
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

      <div class="grid grid-cols-2">
        <div>
          <div class="tracking-[-0.05px] leading-[22px] text-[#000]">
            สินค้าที่ขายได้
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
</style>

<style></style>
