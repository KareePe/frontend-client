<template>
  <div class="lg:flex block gap-[15px]">
    <div class="lg:basis-6/12 basis-full">
      <b class="text-[#000]/[0.87] text-20px py-[15px]">ข้อมูลทั่วไป</b>

      <div class="flex gap-[15px] justify-between items-center mt-[15px]">
        <div class="basis-4/12">
          <v-list-subheader class="!text-[#000] !text-[14px]"
            >รหัสคลัง</v-list-subheader
          >
        </div>

        <div class="basis-8/12">
          <v-text-field
            label="Amount"
            variant="outlined"
            hide-details
          ></v-text-field>
        </div>
      </div>
      <div class="flex gap-[15px] justify-between items-center mt-[15px]">
        <div class="basis-4/12">
          <v-list-subheader class="!text-[#000] !text-[14px]"
            >ชื่อคลังสินค้า</v-list-subheader
          >
        </div>

        <div class="basis-8/12">
          <v-text-field
            label="Amount"
            variant="outlined"
            hide-details
          ></v-text-field>
        </div>
      </div>
      <div class="flex gap-[15px] justify-between items-center mt-[15px]">
        <div class="basis-4/12">
          <v-list-subheader class="!text-[#000] !text-[14px]"
            >เบอร์ติดต่อ</v-list-subheader
          >
        </div>

        <div class="basis-8/12">
          <v-text-field
            label="Amount"
            variant="outlined"
            hide-details
          ></v-text-field>
        </div>
      </div>
      <div class="flex gap-[15px] justify-between items-center mt-[15px]">
        <div class="basis-4/12">
          <v-list-subheader class="!text-[#000] !text-[14px]"
            >ที่อยู่</v-list-subheader
          >
        </div>

        <div class="basis-8/12">
          <v-text-field
            label="Amount"
            variant="outlined"
            hide-details
          ></v-text-field>
        </div>
      </div>
      <div class="flex gap-[15px] justify-between items-center mt-[15px]">
        <div class="basis-4/12">
          <v-list-subheader class="!text-[#000] !text-[14px]"
            >จังหวัด</v-list-subheader
          >
        </div>

        <div class="basis-8/12">
          <v-select
            clearable
            label="Select"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
            hide-details
          ></v-select>
        </div>
      </div>
      <div class="flex gap-[15px] justify-between items-center mt-[15px]">
        <div class="basis-4/12">
          <v-list-subheader class="!text-[#000] !text-[14px]"
            >อำเภอ/เขต</v-list-subheader
          >
        </div>

        <div class="basis-8/12">
          <v-select
            clearable
            label="Select"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
            hide-details
          ></v-select>
        </div>
      </div>
      <div class="flex gap-[15px] justify-between items-center mt-[15px]">
        <div class="basis-4/12">
          <v-list-subheader class="!text-[#000] !text-[14px]"
            >ตำบล/แขวง</v-list-subheader
          >
        </div>

        <div class="basis-8/12">
          <v-select
            clearable
            label="Select"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
            hide-details
          ></v-select>
        </div>
      </div>
    </div>

    <div class="lg:basis-6/12 basis-full">
      <b class="text-[#000]/[0.87] text-20px py-[15px]">สถานที่ตั้ง</b>
    </div>
  </div>

  <div class="flex gap-[15px] justify-end">
    <v-btn
      flat
      class="my-[25px] !rounded-[8px] !border !border-[#084F93] w-[358px] !h-[48px] !text-[#084F93]"
      @click="fn_back()"
    >
      ยกเลิก
    </v-btn>
    <v-btn
      flat
      class="my-[25px] !rounded-[8px] !bg-[#084F93] w-[358px] !h-[48px] !text-[#fff]"
      disabled
    >
      บันทึก
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
const emit = defineEmits(["cancle-click"]);

const fn_back = () => {
    emit("cancle-click",true);
};
</script>

<style></style>
