<script setup>
const { open } = defineProps({
  open: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(["onSubmit", "onClose"])

const fnHandleClose = () => {
  emit("onClose")
}

const headersTable = ref([
  {
    title: "ชื่อสินค้า",
    align: "center",
    key: "name",
    width: "400px"
  },
  {
    title: "ราคา",
    align: "center",
    key: "price"
  },
  {
    title: "น้ำหนัก (ไม่บังคับ)",
    align: "center",
    key: "weight",
    width: "250px"
  },
  {
    title: "จำนวนลูกค้าที่สั่ง",
    align: "center",
    key: "amount"
  },
  {
    title: "คลัง",
    align: "center",
    key: "warehouse",
    width: "130px"
  }
])

const tableItem = ref([
  {
    name: "",
    price: "",
    weight: "",
    amount: "",
    warehouse: "คลังชั่วคราว"
  }
])
</script>

<template>
  <v-dialog :model-value="open" width="1200px" persistent>
    <v-card class="rounded-lg">
      <v-card-text>
        <div class="flex justify-between">
          <div class="opacity-subTitle leading-[22px] tracking-31 text-title">
            สร้างสินค้าเอง
          </div>
          <v-icon
            size="20"
            class="cursor-pointer hover:text-[#084F93] transition-all"
            @click="fnHandleClose"
            >fa-solid fa-close</v-icon
          >
        </div>

        <v-card
          variant="flat"
          class="border border-[#EEEDF1] !rounded-lg pb-[15px] mt-4"
        >
          <v-data-table
            :items="tableItem"
            :headers="headersTable"
            id="table-header-black"
          >
            <template v-slot:[`header.weight`]="{}">
              <div class="flex justify-center items-center gap-3">
                <div class="text-black opacity-title text-subTitle tracking-23">
                  น้ำหนัก (ไม่บังคับ)
                </div>
                <v-tooltip>
                  <template v-slot:activator="{ props }">
                    <v-icon
                      v-bind="props"
                      class="text-[#74777F] cursor-pointer"
                      size="16"
                      >fa-solid fa-circle-info</v-icon
                    >
                  </template>
                  <template v-slot:default>
                    <div class="text-[12px] leading-4">หากไม่ระบุ ระบบจะกำหนดเป็น 0.25 กก.</div>
                  </template> 
                </v-tooltip>
              </div>
            </template>
            <template
              v-slot:item="{ item, toggleExpand, internalItem, isExpanded }"
            >
              <tr>
                <td class="center">
                  <v-autocomplete
                    density="compact"
                    hide-details
                    :items="[
                      'MI Monitor 1',
                      'MI Monitor 2',
                      'MI Monitor 3',
                      'MI Monitor 4',
                      'MI Monitor 5',
                      'MI Monitor 6'
                    ]"
                    variant="outlined"
                    menu-icon=""
                  >
                    <template v-slot:append-inner>
                      <v-icon size="16">fa-solid fa-magnifying-glass</v-icon>
                    </template>
                  </v-autocomplete>
                </td>
                <td class="center">
                  <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                    placeholder="กรอกราคา*"
                  >
                  </v-text-field>
                </td>
                <td class="center">
                  <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                    placeholder="กรอกน้ำหนัก (กิโลกรัม)*"
                  >
                  </v-text-field>
                </td>
                <td class="center">
                  <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                    placeholder="กรอกจำนวน*"
                  >
                  </v-text-field>
                </td>
                <td class="center">คลังชั่วคราว</td>
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
        <div class="mt-4 flex justify-end">
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
                  weight: ''
                })
              }
            "
            >เพิ่มสินค้า</v-btn
          >
        </div>

        <div class="flex gap-4 mt-4 justify-between">
          <v-btn
            class="rounded-lg w-[calc(50%-16px)]"
            color="#084F93"
            variant="outlined"
            @click="fnHandleClose"
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
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style>
.height-textfield > div > .v-field {
  @apply !h-[36px];
}
.icon-center div div div div i {
  @apply mb-1;
}
#table-header-black div table thead tr th div span {
  color: black;
  opacity: 87%;
  line-height: 20px;
  letter-spacing: -0.032px;
  font-size: 14px;
}
thead tr {
  @apply bg-[#E9E7EB];
}

tbody tr .center {
  @apply text-[14px] leading-5 tracking-[-0.23%] text-center !pr-10;
}
</style>
