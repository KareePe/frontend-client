<script setup>
import { ref, onMounted, watch } from "vue";
const { open, onsubmit, onclose } = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
  onsubmit: {
    type: Function,
    default: () => {},
  },
  onclose: {
    type: Function,
    default: () => {},
  },
});

const tableItem = ref([
  {
    name: "",
    price: "",
    weight: "",
    amount: "",
    warehouse: "",
  },
]);
const rules = [
  (value) => {
    if (value) return true;

    return "กรุณากรอกข้อมูล.";
  },
];
</script>

<template>
  <v-dialog :model-value="open" persistent width="1245px">
    <v-card class="rounded-lg">
      <v-card-text>
        <div class="flex justify-between items-center">
          <div
            class="text-[16px] font-[600] tracking-[-0.05px] leading-[22px] opacity-[0.6]"
          >
            เลือกสินค้ากรอกเอง
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
        <v-text-field
          variant="outlined"
          density="compact"
          hide-details
          placeholder="ชื่อสินค้าหรือรหัสสินค้า"
          class="max-w-[460px] preinner-center mt-3"
          prepend-inner-icon="fa-solid fa-magnifying-glass"
        ></v-text-field>
        <v-form @submit.prevent>
          <v-card
            variant="flat"
            class="border border-[#EEEDF1] !rounded-b-[8px] pb-[15px] mt-4"
          >
            <v-data-table
              id="table-header-black"
              :items="tableItem"
              :headers="[
                {
                  title: 'ชื่อสินค้า',
                  key: 'name',
                  sortable: false,
                  align: 'center',
                },
                {
                  title: 'ราคา',
                  key: 'price',
                  sortable: false,
                  align: 'center',
                },
                {
                  title: 'น้ำหนัก (ไม่บังคับ)',
                  key: 'weight',
                  sortable: false,
                  align: 'center',
                },
                {
                  title: 'จำนวน',
                  key: 'amount',
                  sortable: false,
                  align: 'center',
                },
                {
                  title: 'คลัง',
                  key: 'warehouse',
                  sortable: false,
                  align: 'center',
                },
              ]"
              class="table-row-text !max-h-[300px]"
            >
              <template v-slot:[`header.weight`]="{}">
                <div class="flex justify-center relative">
                  <div
                    class="text-black opacity-title text-subTitle tracking-23"
                  >
                    น้ำหนัก (ไม่บังคับ)
                  </div>
                  <v-icon
                    class="text-[#74777F] cursor-pointer right-0 !absolute"
                    size="16"
                    >fa-solid fa-circle-info</v-icon
                  >
                </div>
              </template>
              <template v-slot:item="{ index }">
                <tr>
                  <td>
                    <div class="p-2 flex">
                      <v-text-field
                        variant="outlined"
                        density="compact"
                        hide-details
                        :rules="rules"
                        v-model="tableItem[index].name"
                        placeholder="ใส่ชื่อสินค้า*"
                        class="max-w-[460px] preinner-center text-start"
                      ></v-text-field>
                    </div>
                  </td>
                  <td>
                    <div class="p-2">
                      <v-text-field
                        variant="outlined"
                        density="compact"
                        v-model="tableItem[index].price"
                        hide-details
                        :rules="rules"
                        placeholder="ใส่ราคา*"
                        class="max-w-[460px] preinner-center text-start"
                      ></v-text-field>
                    </div>
                  </td>
                  <td>
                    <div class="p-2">
                      <v-text-field
                        hide-details
                        variant="outlined"
                        density="compact"
                        v-model="tableItem[index].weight"
                        placeholder="ใส่น้ำหนัก (กิโลกรัม)"
                        class="max-w-[460px] preinner-center"
                      ></v-text-field>
                    </div>
                  </td>
                  <td>
                    <div class="p-2">
                      <v-text-field
                        variant="outlined"
                        density="compact"
                        v-model="tableItem[index].amount"
                        hide-details
                        :rules="rules"
                        placeholder="ใส่จำนวน*"
                        class="max-w-[460px] preinner-center text-start"
                      ></v-text-field>
                    </div>
                  </td>
                  <td>คลังชั่วคราว</td>
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

          <div class="mt-4">
            <v-btn
              class="rounded-lg"
              color="#084F93"
              variant="outlined"
              prepend-icon="fa-solid fa-plus"
              @click="
                () => {
                  tableItem.push({
                    name: '',
                    amount: '',
                    price: '',
                    warehouse: '',
                    weight: '',
                  });
                }
              "
              >เพิ่มสินค้า</v-btn
            >
          </div>

          <div class="flex gap-4 mt-4">
            <v-btn
              class="rounded-lg w-[calc(50%-16px)]"
              color="#084F93"
              variant="outlined"
              >ยกเลิก</v-btn
            >
            <v-btn
              class="rounded-lg w-[calc(50%-16px)]"
              color="#084F93"
              variant="flat"
              type="submit"
              >ตกลง</v-btn
            >
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
