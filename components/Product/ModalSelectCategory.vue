<script setup>
const { open } = defineProps({
  open: {
    default: true,
    type: Boolean,
  },
});
</script>

<template>
  <v-dialog :model-value="open" persistent width="800px">
    <v-card class="rounded-lg">
      <v-card-text>
        <div class="flex gap-4">
          <div class="w-1/3">
            <v-text-field
              hide-details
              density="compact"
              variant="outlined"
              placeholder="ค้นหาหมวดหมู่"
            >
              <template v-slot:prepend-inner>
                <v-icon size="20">fa-solid fa-magnifying-glass</v-icon>
              </template>
            </v-text-field>
            <div class="space-y-2 mt-2 max-h-[300px]">
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                true-value="wating"
                color="#084F93"
                append-icon="fa-solid fa-chevron-right"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                true-value="wating"
                append-icon="fa-solid fa-chevron-right"
                color="#084F93"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                append-icon="fa-solid fa-chevron-right"
                true-value="wating"
                color="#084F93"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                true-value="wating"
                append-icon="fa-solid fa-chevron-right"
                color="#084F93"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                append-icon="fa-solid fa-chevron-right"
                label="เครื่องใช้ในบ้าน"
                true-value="wating"
                color="#084F93"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                append-icon="fa-solid fa-chevron-right"
                true-value="wating"
                color="#084F93"
              ></v-checkbox>
            </div>
          </div>
          <div class="w-1/3">
            <v-text-field
              hide-details
              density="compact"
              variant="outlined"
              placeholder="ค้นหาหมวดหมู่"
            >
              <template v-slot:prepend-inner>
                <v-icon size="20">fa-solid fa-magnifying-glass</v-icon>
              </template>
            </v-text-field>
            <div class="space-y-2 mt-2 max-h-[300px]">
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                true-value="wating"
                color="#084F93"
                append-icon="fa-solid fa-chevron-right"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                true-value="wating"
                append-icon="fa-solid fa-chevron-right"
                color="#084F93"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                append-icon="fa-solid fa-chevron-right"
                true-value="wating"
                color="#084F93"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                true-value="wating"
                append-icon="fa-solid fa-chevron-right"
                color="#084F93"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                append-icon="fa-solid fa-chevron-right"
                label="เครื่องใช้ในบ้าน"
                true-value="wating"
                color="#084F93"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                append-icon="fa-solid fa-chevron-right"
                true-value="wating"
                color="#084F93"
              ></v-checkbox>
            </div>
          </div>
          <div class="w-1/3">
            <v-text-field
              hide-details
              density="compact"
              variant="outlined"
              placeholder="ค้นหาหมวดหมู่"
            >
              <template v-slot:prepend-inner>
                <v-icon size="20">fa-solid fa-magnifying-glass</v-icon>
              </template>
            </v-text-field>
            <div class="space-y-2 mt-2 max-h-[300px]">
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                true-value="wating"
                color="#084F93"
                append-icon="fa-solid fa-chevron-right"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                true-value="wating"
                append-icon="fa-solid fa-chevron-right"
                color="#084F93"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                append-icon="fa-solid fa-chevron-right"
                true-value="wating"
                color="#084F93"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                true-value="wating"
                append-icon="fa-solid fa-chevron-right"
                color="#084F93"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                append-icon="fa-solid fa-chevron-right"
                label="เครื่องใช้ในบ้าน"
                true-value="wating"
                color="#084F93"
              ></v-checkbox>
              <v-checkbox
                class="checkbox-change-status"
                hide-details
                label="เครื่องใช้ในบ้าน"
                append-icon="fa-solid fa-chevron-right"
                true-value="wating"
                color="#084F93"
              ></v-checkbox>
            </div>
          </div>
        </div>

        <div class="flex justify-between space-x-2">
          <v-btn
            variant="outlined"
            color="#084F93"
            class="!rounded-lg w-[calc(50%-4px)] mt-4 mb-2 min-h-[45px]"
            >ยกเลิก</v-btn
          >
          <v-btn
            variant="flat"
            class="!bg-[#084F93] text-white !rounded-lg w-[calc(50%-4px)] mt-4 mb-2 min-h-[45px]"
            >บันทึก</v-btn
          >
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
