<script setup>
const { open } = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["onSubmit", "onClose"]);

const headersTable = ref([
  {
    title: "ชื่อสินค้า",
    align: "center",
    key: "name",
    width: "480px",
  },
  {
    title: "ราคา",
    align: "center",
    key: "price",
  },
  {
    title: "น้ำหนัก (ไม่บังคับ)",
    align: "center",
    key: "weight",
  },
  {
    title: "จำนวนลูกค้าที่สั่ง",
    align: "center",
    key: "weight",
  },
  {
    title: "คลัง",
    align: "center",
    key: "weight",
  },
]);

const tableItem = ref([{}]);
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
            <template
              v-slot:item="{ item, toggleExpand, internalItem, isExpanded }"
            >
              <tr>
                <td class="center">
                  <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                  >
                    <template v-slot:append-inner>
                      <v-icon size="16">fa-solid fa-magnifying-glass</v-icon>
                    </template>
                  </v-text-field>
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
