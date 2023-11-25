<script setup>
const { data } = defineProps({
  data: {
    default: {
      no_warehouse: "asd",
      name: "Bangkok001",
      province: "",
      district: "",
      tel: "099-782-5769",
      status: "",
    },
  },
});
</script>

<template>
  <div class="flex border border-[#EEEDF1] rounded-lg p-4 flex-col">
    <div
      class="text-[20px] opacity-title leading-[24px] tracking-[-0.09px] text-black font-bold"
    >
      ข้อมูลผู้ขาย
    </div>
    <div class="flex mt-2 gap-4">
      <div class="flex w-1/2 justify-center items-center gap-2 mt-2">
        <div
          class="whitespace-nowrap opacity-title tracking-[-0.021px] leading-[18px]"
          style="width: 120px"
        >
          เลขที่ใบสั่งซื้อ
        </div>
        <v-text-field
          class="w-full"
          hide-details
          variant="outlined"
          density="compact"
          placeholder="กรุณาใส่เลขที่ใบสั่งซื้อ"
        ></v-text-field>
      </div>

      <div class="flex w-1/2 gap-2 mt-2">
        <div class="flex justify-center items-center gap-2 w-1/2">
          <div class="whitespace-nowrap w-[130px]">วันที่สั่งซื้อ</div>
          <v-text-field
            class="w-full"
            hide-details
            variant="outlined"
            density="compact"
            placeholder="กรุณาใส่วันที่ในใบสั่งซื้อ"
          ></v-text-field>
        </div>
        <div class="flex justify-center items-center gap-2 w-1/2">
          <div class="whitespace-nowrap">วันที่สร้าง</div>
          <v-text-field
            class="w-full"
            hide-details
            variant="outlined"
            density="compact"
            placeholder="กรุณาใส่วันที่ในใบสั่งซื้อ"
          ></v-text-field>
        </div>
      </div>
    </div>

    <div class="flex mt-2 gap-4">
      <div class="flex w-1/2 justify-center items-center gap-2 mt-2">
        <div
          class="whitespace-nowrap opacity-title tracking-[-0.021px] leading-[18px] w-[120px]"
        >
          ชื่อผู้ขาย
        </div>
        <v-text-field
          class="w-full"
          hide-details
          variant="outlined"
          density="compact"
          placeholder="กรุณาใส่ชื่อผู้ขาย"
        ></v-text-field>
      </div>

      <div class="flex w-1/2 justify-center items-center mt-2">
        <div class="opacity-title tracking-[-0.021px] leading-[18px] w-[120px]">
          ประเภทสินค้า
        </div>
        <v-text-field
          class="w-full"
          hide-details
          variant="outlined"
          density="compact"
          placeholder="กรุณาเลือกประเภทสินค้า"
        ></v-text-field>
      </div>
    </div>
  </div>

  <div class="flex border border-[#EEEDF1] rounded-lg p-4 flex-col mt-4">
    <div
      class="text-[20px] opacity-title leading-[24px] tracking-[-0.09px] text-black font-bold"
    >
      รายการสินค้าและบริการ
    </div>
    <v-form @submit.prevent>
      <v-card
        variant="flat"
        class="border border-[#EEEDF1] !rounded-b-[8px] pb-[15px] mt-4"
      >
        <v-data-table
          id="table-header-black"
          :items="[{}]"
          :headers="[
            {
              title: 'รหัสสินค้า',
              key: 'no',
              sortable: false,
              align: 'center',
            },
            {
              title: 'รหัสสินค้า',
              key: 'name',
              sortable: false,
              align: 'center',
              width: '170px',
            },
            {
              title: 'คลัง',
              key: 'warehouse',
              sortable: false,
              align: 'center',
              width: '130px',
            },
            {
              title: 'ราคา/บาท',
              key: 'price',
              sortable: false,
              align: 'center',
            },
            {
              title: 'จำนวน',
              key: 'warehouse',
              sortable: false,
              align: 'center',
            },
            {
              title: 'ราคารวม',
              key: 'totals',
              sortable: false,
              align: 'center',
            },
            {
              title: '',
              key: '',
              sortable: false,
              align: 'center',
              width: '30px',
            },
          ]"
          class="table-row-text"
        >
          <template v-slot:item="{ item, index }">
            <tr>
              <td>
                <div class="p-2 flex">
                  <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                    :rules="rules"
                    placeholder="ใส่รหัสสินค้า*"
                    class="max-w-[460px] preinner-center text-start"
                  ></v-text-field>
                </div>
              </td>
              <td>กล่องจัดระเบียบ Size A</td>
              <td>
                <div class="p-2">
                  <v-select
                    class="w-[140px] preinner-center"
                    hide-details
                    :items="[
                      'California',
                      'Colorado',
                      'Florida',
                      'Georgia',
                      'Texas',
                      'Wyoming',
                    ]"
                    variant="outlined"
                    density="compact"
                  ></v-select>
                </div>
              </td>
              <td>
                <div class="p-2">
                  <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                    :rules="rules"
                    placeholder="ใส่ราคาสินค้า*"
                    class="max-w-[460px] preinner-center text-start"
                  ></v-text-field>
                </div>
              </td>
              <td>
                <div class="p-2">
                  <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                    :rules="rules"
                    placeholder="ใส่จำนวน*"
                    class="max-w-[460px] preinner-center text-start"
                  ></v-text-field>
                </div>
              </td>
              <td>
                <div class="p-2">
                  <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                    :rules="rules"
                    placeholder="ใส่ราคารวม*"
                    class="max-w-[460px] preinner-center text-start"
                  ></v-text-field>
                </div>
              </td>
              <td>
                <v-icon color="#74777F" class="cursor-pointer" size="16"
                  >fa-solid fa-trash</v-icon
                >
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
      <!-- <div class="mt-4">
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
    </div> -->
    </v-form>

    <div class="flex items-center gap-3 mt-4">
      <div class="tracking-23 opacity-title text-subTitle leading-5">
        ยอดรวม
      </div>
      <v-text-field
        variant="outlined"
        density="compact"
        hide-details
        :rules="rules"
        class="max-w-[200px] preinner-center text-start"
      ></v-text-field>
      <div class="tracking-23 text-[#74777F] text-subTitle leading-5">
        Vat 7
      </div>
      <v-text-field
        variant="outlined"
        density="compact"
        hide-details
        :rules="rules"
        class="max-w-[200px] preinner-center text-start"
      ></v-text-field>
      <div class="tracking-23 text-[#74777F] text-subTitle leading-5">
        ยอดรวมทั้งสิ้น
      </div>
      <v-text-field
        variant="outlined"
        density="compact"
        hide-details
        :rules="rules"
        class="max-w-[200px] preinner-center text-start"
      ></v-text-field>
    </div>
  </div>

  <div class="flex flex-row gap-4 mt-4 justify-center">
    <v-btn
      class="w-[360px] max-w-[360px] !rounded-lg"
      color="#084F93"
      size="large"
      variant="outlined"
      >ยกเลิก</v-btn
    >
    <v-btn
      class="w-[360px] max-w-[360px] !rounded-lg"
      color="#084F93"
      size="large"
      variant="flat"
      >บันทึก</v-btn
    >
  </div>
</template>

<style>
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
</style>
