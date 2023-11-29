<script setup>
const headersTable = ref([
  {
    title: "ขนส่ง",
    align: "center",
    key: "delivery",
  },
  {
    title: "วันที่เข้ารับ",
    align: "center",
    key: "date",
  },
  {
    title: "เวลาที่เข้ารับ",
    align: "center",
    key: "time",
  },
  {
    title: "ที่อยู่เข้ารับพัสดุ",
    align: "center",
    key: "place",
    width: "220px",
  },
  {
    title: "หมายเหตุ",
    align: "center",
    key: "ps",
  },
  {
    title: "สถานะ",
    align: "center",
    key: "status",
  },
  {
    title: "",
    align: "center",
    key: "action",
    width: "50px",
  },
]);
const emit = defineEmits(["onAddClick", "onClose"]);

const fnHandleAddClick = () => {
  emit("onAddClick");
};

const dataTable = ref([
  {
    delivery: "Kerry Express",
    date: "จ, อ, พ, พฤ, ศ, อา",
    time: "09.00",
    place: "92/4 ชั้น 2 อาคารสาธรธานี2 ..",
    ps: "-",
    status: true,
  },
]);
</script>

<template>
  <div class="title">รายการเรียกรถประจำ</div>

  <v-card
    variant="flat"
    class="border border-[#EEEDF1] !rounded-b-[8px] pb-[15px] mt-3"
  >
    <v-data-table :items="dataTable" :headers="headersTable">
      <template v-slot:item="{ item }">
        <tr>
          <td class="center">
            <div class="flex items-center justify-center relative">
              <div class="absolute left-0">
                <img
                  width="40"
                  height="40"
                  class="rounded-full"
                  src="https://www.eksuwankased2001.co.th/wp-content/uploads/2019/10/flash-express-icon.jpg"
                />
              </div>
              <div>{{ item.delivery }}</div>
            </div>
          </td>
          <td class="center">
            {{ item.date }}
          </td>
          <td class="center">
            {{ item.time }}
          </td>
          <td class="center">
            <div
              class="text-ellipsis w-[220px] whitespace-nowrap overflow-hidden"
            >
              {{ item.place }}
            </div>
          </td>
          <td class="center">
            {{ item.ps }}
          </td>
          <td class="center">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  :color="item.status ? '#12B76A' : '#BA1A1A'"
                  variant="text"
                  v-bind="props"
                  class="!bg-[#EEEDF1] !rounded-[20px] !w-full"
                >
                  {{ item.status ? "ใช้งาน" : "ปิดใช้งาน" }}
                  <template v-slot:append>
                    <v-icon size="16" class="mb-1" color="#74777F"
                      >fa-solid fa-caret-down</v-icon
                    >
                  </template>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(value, index) in ['ใช้งาน', 'ปิดใช้งาน']"
                  :key="index"
                  :value="value"
                >
                  <v-list-item-title>{{ value }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </td>
          <td>
            <div class="flex gap-3">
              <v-btn color="#74777F" variant="text">
                <v-icon size="18">fa-solid fa-pen</v-icon>
              </v-btn>
              <v-btn color="#74777F" variant="text">
                <v-icon size="18">fa-solid fa-trash</v-icon>
              </v-btn>
            </div>
          </td>
        </tr>
      </template>

      <template v-slot:no-data>
        <div class="h-[260px] flex justify-center items-center">
          <v-btn
            @click="fnHandleAddClick"
            variant="text"
            class="add-btn"
            size="large"
            prepend-icon="fa-solid fa-plus"
            >เพิ่มรายการ "เรียกรถประขำ"</v-btn
          >
        </div>
      </template>
      <template #bottom></template>
    </v-data-table>
    <div class="flex justify-center items-center" v-if="dataTable.length >= 1">
      <v-btn
        @click="fnHandleAddClick"
        variant="text"
        class="add-btn !w-full"
        size="large"
        prepend-icon="fa-solid fa-plus"
        >เพิ่มรายการ "เรียกรถประขำ"</v-btn
      >
    </div>
  </v-card>
</template>

<style scoped>
.title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.09px;
}
.add-btn {
  color: #0ba5ec;
  text-align: center;
  font-size: 14px;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.032px;
}
</style>

<style>
tbody tr .center {
  @apply text-[14px] leading-5 tracking-[-0.23%] text-center !pr-10;
}
</style>
