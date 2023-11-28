<script setup>
const tableItem = ref([
  {
    style: "เรียกรายครั้ง",
    sub_business: "BU0001",
    admin: "นายทดสอบ",
    deliver: "Kerry Express",
    no: "231565486C",
    receive_date: "13/01/2556 21:00",
    amount_product: "10",
    ps: "-",
    status: "รอรถเข้ารับ"
  }
])
const headersTable = ref([
  {
    title: "รูปแบบการเรียก",
    align: "center",
    key: "style"
  },
  {
    title: "ธุรกิจย่อยที่เรียก",
    align: "center",
    key: "sub_business"
  },
  {
    title: "ผู้ทำรายการ",
    align: "center",
    key: "admin"
  },
  {
    title: "ขนส่ง",
    align: "center",
    key: "deliver",
    width: "200px"
  },
  {
    title: "รหัสเที่ยวรถ",
    align: "center",
    key: "no"
  },
  {
    title: "เวลาที่รับพัสดุ",
    align: "center",
    key: "receive_date"
  },
  {
    title: "จำนวนพัสดุ",
    align: "center",
    key: "amount_product"
  },
  {
    title: "หมายเหตุ",
    align: "center",
    key: "ps"
  },
  {
    title: "สถานะ",
    align: "center",
    key: "status"
  },
  {
    title: "",
    align: "center",
    key: "action",
    sortable: false,
    width: "50px"
  }
])

const emit = defineEmits(["settingDelivery", "showDetail" ,'settingRegular' ]);

const fnHandleSettingClick = () => {
  emit('settingDelivery') 
}

const fnHandleSettingRegularClick = () => {
  emit('settingRegular') 
}

const fnShowDetail = () => {
  emit('showDetail') 
}

const page = ref(1)
const itemsPerPage = ref(10)

const pageCount = computed(() => {
  return Math.ceil(tableItem.value.length / itemsPerPage.value)
})

const fnChangeRowPerPages = (e) => {
  itemsPerPage.value = e
}
</script>

<template>
  <div class="flex justify-between">
    <v-text-field
      density="compact"
      label="วันที่"
      variant="outlined"
      class="!max-w-[280px]"
    >
      <template v-slot:prepend-inner>
        <v-icon size="16" class="mb-[4px]">fa-regular fa-calendar</v-icon>
      </template>
    </v-text-field>
    <div class="flex gap-3">
      <v-btn variant="outlined" size="large" class="rounded-lg" color="#084F93" @click="fnHandleSettingRegularClick">
        ตั้งค่าเรียกรถประจำ
        <template v-slot:prepend>
          <v-icon class="mb-1" size="16">fa-solid fa-gear</v-icon>
        </template>
      </v-btn>
      <v-btn variant="flat" size="large" class="rounded-lg" color="#084F93" @click="fnHandleSettingClick">
        เรียกรถเข้ารับ
        <template v-slot:prepend>
          <v-icon class="mb-1" size="16">fa-solid fa-truck-fast</v-icon>
        </template>
      </v-btn>
    </div>
  </div>

  <v-card
    variant="flat"
    class="border border-[#EEEDF1] !rounded-b-[8px] pb-[15px] mt-3"
  >
    <v-data-table
      :items="tableItem"
      item-value="no"
      :headers="headersTable"
      :items-per-page="itemsPerPage"
      :page="page"
      id="table-manage"
    >
      <template #item.deliver="{ item }">
        <div class="flex gap-2 justify-center items-center">
          <!-- <div
            class="rounded-full bg-cover bg-center w-10 h-10 bg-[url(https://www.gadgetzone.in.th/wp-content/uploads/2015/01/icon-kerry-express.png)]"
          > -->
          <img
            width="40"
            height="40"
            class="rounded-full bg-center"
            src="https://www.gadgetzone.in.th/wp-content/uploads/2015/01/icon-kerry-express.png"
          />
          <!-- </div> -->
          {{ item.deliver }}
        </div>
      </template>
      <template #item.action="{ item }">
        <v-btn @click="fnShowDetail" variant="text">
          <template v-slot:default><v-icon>fa-solid fa-eye</v-icon></template>
        </v-btn>
      </template>
      <template v-slot:no-data>
        <div class="h-[260px] flex justify-center items-center">
          <p>ยังไม่มีรายการ</p>
        </div>
      </template>
      <template #bottom></template>
    </v-data-table>
  </v-card>
  <div class="text-center pt-2 flex justify-center items-center relative">
    <v-pagination v-model="page" :length="pageCount"></v-pagination>
    <div class="w-[140px] absolute right-0 mr-4">
      <v-select
        label="จำนวนแสดงผล"
        variant="outlined"
        :items="[5, 10, 15, 20, 25, 30]"
        :item-title="(item) => item + ' รายการ'"
        :item-value="(item) => item"
        :model-value="itemsPerPage"
        density="compact"
        hide-details="auto"
        @update:modelValue="fnChangeRowPerPages"
      ></v-select>
    </div>
  </div>
</template>

<style>
#table-manage tbody tr td {
  @apply text-[14px] leading-5 tracking-[-0.23%] text-center !pr-10;
}
</style>
