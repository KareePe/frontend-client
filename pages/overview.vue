<template>
  <Toolbars />
  <NavbarCallback :breadcrump="navBarNew" @nav-click="navBarNew.pop()" />

  <div class="lg:ml-64 p-4">
    <div class="lg:flex block justify-between">
      <div
        class="border border-[#EEEDF1] !h-[55px] !rounded-[8px] p-[8px] w-[fit-content]"
      >
        <v-tabs v-model="tab" align-tabs="center">
          <v-tab value="option-1">ทั้งหมด</v-tab>
          <v-tab value="option-2">วันนี้</v-tab>
          <v-tab disabled value="option-3">เมื่อวาน</v-tab>
          <v-tab disabled value="option-4">เดือนนี้</v-tab>
          <v-tab disabled value="option-5">เดือนที่แล้ว</v-tab>
          <v-tab disabled value="option-6">ระบุเอง</v-tab>
        </v-tabs>
      </div>

      <v-btn
        flat
        class="!border !border-[#084F93] !text-[#084F93] w-[240px] !h-[48px] !rounded-[8px]"
      >
        <i class="fa-solid fa-print text-[#084F93] mr-2"></i>
        <p>สั่งพิมพ์</p>
      </v-btn>
    </div>

    <v-window v-model="tab" class="mt-[15px]">
      <v-window-item value="option-1">
        <div class="lg:flex block lg:flex-wrap flex-nowrap gap-[15px]">
          <div
            class="hover:bg-slate-100 transition-all duration-300 basis-full lg:basis-6/12 border border-[#EEEDF1] !rounded-[8px] p-[15px] mb-[15px]"
          >
            <div class="flex gap-[10px] items-center mb-[40px]">
              <i class="fa-solid fa-warehouse" style="color: #084f93"></i>
              <p class="text-[22px] font-bold">คลังสินค้าทั้งหมด</p>
            </div>
            <div
              class="flex lg:flex-wrap flex-nowrap gap-[15px] justify-evenly"
            >
              <div class="text-center">
                <p class="text-[20px]">0 รายการ</p>
                <p class="text-[#000000]/[0.6]">วันนี้</p>
              </div>
              <div class="w-[1px] h-[50px] bg-[#EEEDF1]"></div>
              <div class="text-center">
                <p class="text-[20px]">3 รายการ</p>
                <p class="text-[#000000]/[0.6]">สัปดาห์นี้</p>
              </div>
              <div class="w-[1px] h-[50px] bg-[#EEEDF1]"></div>
              <div class="text-center">
                <p class="text-[20px]">100 รายการ</p>
                <p class="text-[#000000]/[0.6]">เดือนนี้</p>
              </div>
            </div>
          </div>
          <div
            class="hover:bg-slate-100 transition-all duration-300 basis-full lg:basis-6/12 border border-[#EEEDF1] !rounded-[8px] p-[15px] mb-[15px]"
          >
            <div class="flex gap-[10px] items-center mb-[40px]">
              <i class="fa-solid fa-boxes-stacked" style="color: #084f93"></i>
              <p class="text-[22px] font-bold">สถานะคลังสินค้า</p>
            </div>
            <div
              class="flex lg:flex-wrap flex-nowrap gap-[15px] justify-evenly"
            >
              <div class="text-center">
                <p class="text-[20px]">30 รายการ</p>
                <p
                  class="text-[#12B76A] bg-[#D1FADF] py-[2px] px-[12px] rounded-full"
                >
                  ใช้งาน
                </p>
              </div>
              <div class="w-[1px] h-[50px] bg-[#EEEDF1]"></div>
              <div class="text-center">
                <p class="text-[20px]">3 รายการ</p>
                <p
                  class="text-[#BA1A1A] bg-[#FFDAD6] py-[2px] px-[12px] rounded-full"
                >
                  ระงับ
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:flex block lg:flex-wrap flex-nowrap gap-[15px]">
          <div
            class="hover:bg-slate-100 transition-all duration-300 basis-full lg:basis-6/12 border border-[#EEEDF1] !rounded-[8px] p-[15px] mb-[15px]"
          >
            <div class="flex gap-[10px] items-center mb-[40px]">
              <i class="fa-solid fa-warehouse" style="color: #084f93"></i>
              <p class="text-[22px] font-bold">คลังสินค้าทั้งหมด</p>
            </div>
            <div
              class="flex lg:flex-wrap flex-nowrap gap-[15px] justify-evenly"
            >
              <div class="text-center">
                <p class="text-[20px]">0 รายการ</p>
                <p class="text-[#000000]/[0.6]">วันนี้</p>
              </div>
              <div class="w-[1px] h-[50px] bg-[#EEEDF1]"></div>
              <div class="text-center">
                <p class="text-[20px]">3 รายการ</p>
                <p class="text-[#000000]/[0.6]">สัปดาห์นี้</p>
              </div>
              <div class="w-[1px] h-[50px] bg-[#EEEDF1]"></div>
              <div class="text-center">
                <p class="text-[20px]">100 รายการ</p>
                <p class="text-[#000000]/[0.6]">เดือนนี้</p>
              </div>
            </div>
          </div>
          <div
            class="hover:bg-slate-100 transition-all duration-300 basis-full lg:basis-6/12 border border-[#EEEDF1] !rounded-[8px] p-[15px] mb-[15px]"
          >
            <div class="flex gap-[10px] items-center mb-[40px]">
              <i class="fa-solid fa-boxes-stacked" style="color: #084f93"></i>
              <p class="text-[22px] font-bold">สถานะคลังสินค้า</p>
            </div>
            <div
              class="flex lg:flex-wrap flex-nowrap gap-[15px] justify-evenly"
            >
              <div class="text-center">
                <p class="text-[20px]">30 รายการ</p>
                <p
                  class="text-[#12B76A] bg-[#D1FADF] py-[2px] px-[12px] rounded-full"
                >
                  ใช้งาน
                </p>
              </div>
              <div class="w-[1px] h-[50px] bg-[#EEEDF1]"></div>
              <div class="text-center">
                <p class="text-[20px]">3 รายการ</p>
                <p
                  class="text-[#BA1A1A] bg-[#FFDAD6] py-[2px] px-[12px] rounded-full"
                >
                  ระงับ
                </p>
              </div>
            </div>
          </div>
        </div>
      </v-window-item>
      <v-window-item value="option-2">
        <div class="lg:flex block lg:flex-wrap flex-nowrap gap-[15px]">
          <div
            class="hover:bg-slate-100 transition-all duration-300 basis-full lg:basis-6/12 border border-[#EEEDF1] !rounded-[8px] p-[15px] mb-[15px]"
          >
            <div class="flex gap-[10px] items-center mb-[40px]">
              <i class="fa-solid fa-warehouse" style="color: #084f93"></i>
              <p class="text-[22px] font-bold">คลังสินค้าทั้งหมด</p>
            </div>
            <div
              class="flex lg:flex-wrap flex-nowrap gap-[15px] justify-evenly"
            >
              <div class="text-center">
                <p class="text-[20px]">0 รายการ</p>
                <p class="text-[#000000]/[0.6]">วันนี้</p>
              </div>
              <div class="w-[1px] h-[50px] bg-[#EEEDF1]"></div>
              <div class="text-center">
                <p class="text-[20px]">3 รายการ</p>
                <p class="text-[#000000]/[0.6]">สัปดาห์นี้</p>
              </div>
              <div class="w-[1px] h-[50px] bg-[#EEEDF1]"></div>
              <div class="text-center">
                <p class="text-[20px]">100 รายการ</p>
                <p class="text-[#000000]/[0.6]">เดือนนี้</p>
              </div>
            </div>
          </div>
          <div
            class="hover:bg-slate-100 transition-all duration-300 basis-full lg:basis-6/12 border border-[#EEEDF1] !rounded-[8px] p-[15px] mb-[15px]"
          >
            <div class="flex gap-[10px] items-center mb-[40px]">
              <i class="fa-solid fa-boxes-stacked" style="color: #084f93"></i>
              <p class="text-[22px] font-bold">สถานะคลังสินค้า</p>
            </div>
            <div
              class="flex lg:flex-wrap flex-nowrap gap-[15px] justify-evenly"
            >
              <div class="text-center">
                <p class="text-[20px]">30 รายการ</p>
                <p
                  class="text-[#12B76A] bg-[#D1FADF] py-[2px] px-[12px] rounded-full"
                >
                  ใช้งาน
                </p>
              </div>
              <div class="w-[1px] h-[50px] bg-[#EEEDF1]"></div>
              <div class="text-center">
                <p class="text-[20px]">3 รายการ</p>
                <p
                  class="text-[#BA1A1A] bg-[#FFDAD6] py-[2px] px-[12px] rounded-full"
                >
                  ระงับ
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:flex block lg:flex-wrap flex-nowrap gap-[15px]">
          <div
            class="hover:bg-slate-100 transition-all duration-300 basis-full lg:basis-6/12 border border-[#EEEDF1] !rounded-[8px] p-[15px] mb-[15px]"
          >
            <div class="flex gap-[10px] items-center mb-[40px]">
              <i class="fa-solid fa-warehouse" style="color: #084f93"></i>
              <p class="text-[22px] font-bold">คลังสินค้าทั้งหมด</p>
            </div>
            <div
              class="flex lg:flex-wrap flex-nowrap gap-[15px] justify-evenly"
            >
              <div class="text-center">
                <p class="text-[20px]">0 รายการ</p>
                <p class="text-[#000000]/[0.6]">วันนี้</p>
              </div>
              <div class="w-[1px] h-[50px] bg-[#EEEDF1]"></div>
              <div class="text-center">
                <p class="text-[20px]">3 รายการ</p>
                <p class="text-[#000000]/[0.6]">สัปดาห์นี้</p>
              </div>
              <div class="w-[1px] h-[50px] bg-[#EEEDF1]"></div>
              <div class="text-center">
                <p class="text-[20px]">100 รายการ</p>
                <p class="text-[#000000]/[0.6]">เดือนนี้</p>
              </div>
            </div>
          </div>
          <div
            class="hover:bg-slate-100 transition-all duration-300 basis-full lg:basis-6/12 border border-[#EEEDF1] !rounded-[8px] p-[15px] mb-[15px]"
          >
            <div class="flex gap-[10px] items-center mb-[40px]">
              <i class="fa-solid fa-boxes-stacked" style="color: #084f93"></i>
              <p class="text-[22px] font-bold">สถานะคลังสินค้า</p>
            </div>
            <div
              class="flex lg:flex-wrap flex-nowrap gap-[15px] justify-evenly"
            >
              <div class="text-center">
                <p class="text-[20px]">30 รายการ</p>
                <p
                  class="text-[#12B76A] bg-[#D1FADF] py-[2px] px-[12px] rounded-full"
                >
                  ใช้งาน
                </p>
              </div>
              <div class="w-[1px] h-[50px] bg-[#EEEDF1]"></div>
              <div class="text-center">
                <p class="text-[20px]">3 รายการ</p>
                <p
                  class="text-[#BA1A1A] bg-[#FFDAD6] py-[2px] px-[12px] rounded-full"
                >
                  ระงับ
                </p>
              </div>
            </div>
          </div>
        </div>
      </v-window-item>
    </v-window>

    <div class="flex justify-end">
      <v-btn
        flat
        class="!bg-[#084F93] w-[240px] h-[40px] !rounded-[8px] !text-white"
      >
        <i class="fa-solid fa-chart-gantt text-white mr-2"></i>
        <p>ภาพรวมอย่างละเอียด</p>
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let tab = ref(null);
const navBarNew = ref([
  {
    text: "คลังและสินค้า",
    callback: () => {},
  },
  {
    text: "ภาพรวม",
    callback: () =>
      fnHandleNavbarback(2, () => {
        selectedWarehouse.value = null;
        selectedProduct.value = null;
        historyPage.value = false;
        createPOPage.value = false;
      }),
  },
]);
</script>

<style>
.v-tab--selected {
  background-color: #094f93;
  border-radius: 8px !important;
  color: #fff !important;
}
.v-tab.v-tab {
  height: 38px;
  font-size: 14px;
}
.v-tab__slider {
  height: 0 !important;
}
</style>
