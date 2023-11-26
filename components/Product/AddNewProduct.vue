<script setup>
import { ref, onMounted, watch } from "vue";
const { data } = defineProps({
  data: {
    default: {
      no_warehouse: "",
      name: "",
      province: "",
      district: "",
      tel: "",
      status: "",
    },
  },
});
const emit = defineEmits(["update-stock"]);

const fnHandleUpdateStock = (value) => {
  {
    emit("update-stock", value);
  }
};

const formValue = ref({
  name: "",
  category: "",
});
const ImageList = ref([]);
const selectedImage = ref([]);

const fnHandleUploadFile = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      //   selectedImage.value = e.target.result;
      selectedImage.value.push(e.target.result);
    };

    reader.readAsDataURL(file);
  } else {
    selectedImage.value = null;
  }
};

const stockData = ref([]);
const updateStockModal = ref(false);
const selectCategoryModal = ref(false);
</script>

<template>
  <ProductModalSelectCategory
    :open="selectCategoryModal"
    @on-close="selectCategoryModal = false"
  />
  <div class="flex border border-[#EEEDF1] rounded-lg p-4 flex-col mt-4">
    <div
      class="text-[20px] opacity-title leading-[24px] tracking-[-0.09px] text-black font-bold"
    >
      ข้อมูลสินค้า
    </div>
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-title tracking-23">
        ชื่อสินค้า*
      </div>
      <div class="w-full text-subTitle leading-5 tracking-23">
        <v-text-field
          variant="outlined"
          v-model="formValue.name"
          hide-details
          class="w-1/2"
          density="compact"
          placeholder="ระบุชื่อสินค้า*"
        ></v-text-field>
      </div>
    </div>

    <div class="flex gap-2 mt-2 items-start">
      <div class="w-32 text-subTitle leading-5 mt-4 opacity-title tracking-23">
        หมวดหมู่*
      </div>
      <div class="w-full text-subTitle leading-5 tracking-23">
        <v-text-field
          variant="outlined"
          hide-details
          density="compact"
          placeholder="เลือกหมวดหมู่*"
          class="w-1/2"
          @click="selectCategoryModal = true"
          v-model="formValue.category"
          readonly
        ></v-text-field>
        <div
          v-if="formValue.name"
          class="mt-2 w-2/3 bg-[#FAF9FD] rounded-lg p-4"
        >
          <div class="text-subTitle leading-5 tracking-23">หมวดหมู่เสนอแนะ</div>
          <v-checkbox
            hide-details
            class="checkbox-change-status !min-h-min"
            label="ห้องนอนและห้องน้ำ > ห้องน้ำ > ผ้าเช็ดตัว"
            v-model="formValue.category"
            false-value=""
            value="ห้องนอนและห้องน้ำ > ห้องน้ำ > ผ้าเช็ดตัว"
            false-icon="fa-regular fa-circle"
            true-icon="fa-regular fa-circle-dot"
          ></v-checkbox>
          <v-checkbox
            hide-details
            class="checkbox-change-status"
            label="เครื่องครัว > ผ้ากันเปื้อนและผ้าปูโต๊ะ > ผ้าเช็ดจาน"
            value="เครื่องครัว > ผ้ากันเปื้อนและผ้าปูโต๊ะ > ผ้าเช็ดจาน"
            v-model="formValue.category"
            false-value=""
            false-icon="fa-regular fa-circle"
            true-icon="fa-regular fa-circle-dot"
          ></v-checkbox>
          <v-checkbox
            hide-details
            class="checkbox-change-status"
            false-value=""
            label="ห้องนอนและห้องน้ำ > ห้องน้ำ > เสื้อคลุมอาบน้ำ"
            value="ห้องนอนและห้องน้ำ > ห้องน้ำ > เสื้อคลุมอาบน้ำ"
            v-model="formValue.category"
            false-icon="fa-regular fa-circle"
            true-icon="fa-regular fa-circle-dot"
          ></v-checkbox>
        </div>
      </div>
    </div>

    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-title tracking-23">
        ภาพสินค้า
      </div>
      <div class="w-full text-subTitle leading-5 tracking-23 flex gap-2 my-5">
        <div
          class="w-[105px] h-[105px] flex justify-center items-center relative"
          v-for="(item, index) in selectedImage"
          :key="index"
        >
          <img :src="item" width="105" height="105" alt="Preview" />
          <div
            class="absolute flex w-full justify-end cursor-pointer top-2 right-1"
          >
            <v-icon
              size="16"
              class="bg-[#fff] !text-[#DE3730]"
              @click="() => selectedImage.splice(index, 1)"
              >fa-solid fa-xmark</v-icon
            >
          </div>
        </div>
        <label
          for="productImageUpload"
          v-if="selectedImage.length < 3"
          class="w-[105px] h-[105px] border border-dashed justify-center flex items-center flex-col gap-3 cursor-pointer"
        >
          <input
            type="file"
            id="productImageUpload"
            class="hidden"
            accept="image/*"
            @change="fnHandleUploadFile"
          />
          <v-icon class="opacity-subTitle" size="32"
            >fa-regular fa-image</v-icon
          >
          <div class="text-[#0BA5EC] tracking-31 leading-[22px] text-title">
            เพิมรูปภาพ
          </div>
        </label>
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
      <div class="w-32 text-subTitle leading-5 opacity-title tracking-23">
        SKU ID
      </div>
      <div class="w-1/2 text-subTitle leading-5 tracking-23">
        <v-text-field
          variant="outlined"
          hide-details
          density="compact"
          placeholder="รหัสสินค้า (ถ้ามี)"
        ></v-text-field>
      </div>
    </div>
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-title tracking-23">
        หน่วยนับสินค้า*
      </div>
      <div class="w-1/2 text-subTitle leading-5 tracking-23">
        <v-text-field
          variant="outlined"
          hide-details
          density="compact"
          placeholder="ระบุหน่วยนับ"
        ></v-text-field>
      </div>
    </div>
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-title tracking-23">
        ราคาสินค้า*
      </div>
      <div class="w-1/2 text-subTitle leading-5 tracking-23">
        <v-text-field
          variant="outlined"
          hide-details
          density="compact"
          placeholder="ระบุหน่วยนับ"
        ></v-text-field>
      </div>
    </div>
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-title tracking-23">
        น้ำหนัก*
      </div>
      <div class="w-1/2 text-subTitle leading-5 tracking-23">
        <v-text-field
          variant="outlined"
          hide-details
          density="compact"
          placeholder="ระบุน้ำหนัก (กิโลกรัม)"
        ></v-text-field>
      </div>
    </div>
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-title tracking-23">
        สินค้าย่อย
      </div>
      <div class="w-1/2 text-subTitle leading-5 tracking-23">
        <Switch text="ไม่มี" />
      </div>
    </div>
    <div class="flex gap-2 mt-2 items-center">
      <div class="w-32 text-subTitle leading-5 opacity-title tracking-23">
        สต็อคสินค้า
      </div>
      <div
        class="w-1/2 text-subTitle font-[600] leading-[18px] tracking-[-0.021px] text-[#0BA5EC] cursor-pointer"
        @click="updateStockModal = true"
      >
        + เพิ่มสต๊อค
      </div>
    </div>
  </div>

  <div class="flex w-full gap-2 mt-4 items-center justify-end">
    <v-btn
      color="#084F93"
      variant="outlined"
      class="!rounded-lg w-1/3 box-border mb-2 min-h-[45px]"
      >ยกเลิก</v-btn
    >
    <v-btn
      color="#084F93"
      variant="flat"
      class="!rounded-lg w-1/3 box-border mb-2 min-h-[45px]"
      >บันทึก</v-btn
    >
  </div>

  <ProductModalUpdateStock
    :open="updateStockModal"
    @onclose="updateStockModal = false"
    productname="ทดสอบ"
    :data="stockData"
  />
</template>

<style>
.checkbox-change-status .v-selection-control label {
  @apply opacity-[1] !text-subTitle !leading-5 !tracking-23 text-[#1A1C1E];
}

.checkbox-change-status div div {
  @apply !min-h-[auto];
}
</style>
