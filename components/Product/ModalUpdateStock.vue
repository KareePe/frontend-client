<script setup>
import { ref, onMounted, watch } from "vue";
const { open, data, productname } = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
  productname: {
    type: String,
  },
  data: {
    type: String,
  },
});
const emit = defineEmits(["onSubmit", "onClose"]);

const fnHandleSubmit = () => {
  emit("onClose");
};
</script>

<template>
  <v-dialog :model-value="false" persistent width="680px">
    <v-card class="rounded-lg">
      <v-card-text>
        <div class="flex justify-between items-center">
          <div
            class="text-[20px] font-[700] tracking-[-0.09px] leading-[24px] opacity-title text-black"
          >
            อัพเดทสต๊อค : {{ productname }}
          </div>
          <v-icon
            size="20"
            @click="
              () => {
                onclose();
              }
            "
            class="cursor-pointer hover:text-[#084F93] transition-all"
          >
            fa-solid fa-close
          </v-icon>
        </div>
        <div class="text-subTitle opacity-detail leading-5 tracking-23 mt-1">
          อัพเดทจำนวนสินค้าที่อยู่ในสต็อค
        </div>
        <v-form @submit.prevent="(e) => {}">
          <div>
            <div class="flex gap-2 mt-4 items-center w-full">
              <div
                class="w-32 text-subTitle leading-[22px] font-[600] text-black opacity-title tracking-31"
              >
                คลัง
              </div>
              <div class="text-subTitle leading-5 tracking-23 w-full">
                <v-select
                  label="เลือกคลัง"
                  :items="[
                    'คลัง 1',
                    'คลัง 2',
                    'คลัง 3',
                    'คลัง 4',
                    'คลัง 5',
                    'คลัง 6',
                  ]"
                  density="compact"
                  hide-details
                  variant="outlined"
                  class="w-full preinner-center"
                ></v-select>
              </div>
            </div>

            <div class="flex gap-2 mt-4 items-center w-full">
              <div
                class="w-32 text-subTitle leading-[22px] font-[600] text-black opacity-title tracking-31"
              >
                จำนวน
              </div>
              <div class="text-subTitle leading-5 tracking-23 w-full">
                <v-text-field
                  variant="outlined"
                  density="compact"
                  hide-details
                  class="w-full preinner-center"
                ></v-text-field>
              </div>
            </div>
          </div>

          <v-btn class="mt-2" variant="text" color="#74777F">
            เพิ่มคลัง
            <template v-slot:prepend>
              <v-icon color="#74777F" size="16" class=""
                >fa-solid fa-plus</v-icon
              >
            </template>
          </v-btn>

          <div class="flex gap-4 mt-4 justify-center items-center">
            <v-btn
              class="rounded-lg w-[calc(50%-16px)]"
              color="#084F93"
              variant="outlined"
              @click="() => onclose()"
              >ยกเลิก</v-btn
            >
            <v-btn
              class="rounded-lg w-1/2"
              color="#084F93"
              variant="flat"
              type="submit"
              >บันทึก</v-btn
            >
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
