<script setup lang="ts">
import { ref, onMounted, computed } from "vue"

type headerTableType = {
  title: string
  key: keyof tableItemType | ""
  sortable?: boolean
  align?: "start" | "center" | "end"
}

type tableItemType = {
  name: string
  no: string
  no_status: string
  price: string
  create_date: string
  print: "success" | "waiting"
  status: "เสร็จสิ้น" | "ที่ต้องจัดส่ง"
}

const chipData = ["ชื่อลุกค้า", "Order No.", "เบอร์โทร"]
const tab = ref("all")

const headersTable: headerTableType[] = [
  {
    title: "ชื่อลูกค้า",
    align: "center",
    key: "name"
  },
  {
    title: "หมายเลขคำสั่งซื้อ",
    align: "center",
    key: "no"
  },
  {
    title: "เลขติดตามสถานะ",
    align: "center",
    key: "no_status"
  },
  {
    title: "ราคา",
    align: "center",
    key: "price"
  },
  {
    title: "วันที่สร้าง",
    align: "center",
    key: "create_date"
  },
  {
    title: "ปริ้นท์",
    align: "center",
    key: "print"
  },
  {
    title: "สถานะ",
    align: "center",
    key: "status"
  },
  {
    title: "",
    align: "center",
    key: "",
    sortable: false
  }
]

const tableItem: tableItemType[] = [
  {
    no: "SX1434567890",
    create_date: "13/01/2556 21:00",
    name: "นายทดสอบ นามสกุลไม่ยาว",
    no_status: "TH1283629CH82",
    price: "100.00",
    status: "เสร็จสิ้น",
    print: "success"
  },
  {
    no: "SX1234567890",
    create_date: "13/01/2556 21:00",
    name: "นายทดสอบ นามสกุลไม่ยาว",
    no_status: "TH1283629CH82",
    price: "100.00",
    status: "เสร็จสิ้น",
    print: "success"
  }
]

const selectedTask = ref()
</script>

<template>
  <NavbarDynamic :Breadcrumb="['คำสั่งซื้อ', 'รายการคำสั่งซื้อ']" />
  <div class="containerLayout h-[200vh]">
    <!-- header  -->
    <div class="flex justify-between">
      <div class="min-w-[300px]">
        <v-text-field label="วันที่" variant="outlined"></v-text-field>
      </div>
      <div class="min-w-[300px]">
        <v-text-field
          placeholder="หมายเลขคำสั่งซื้อ หรือ เบอร์โทร"
          variant="outlined"
        >
          <template v-slot:prepend-inner>
            <v-icon class="mb-[5px]" icon="fa-solid fa-magnifying-glass" />
          </template>
        </v-text-field>
      </div>
    </div>

    <div class="flex justify-between space-x-10">
      <div class="card-border space-x-2 w-fit">
        <v-btn
          :variant="tab === 'all' ? 'flat' : 'text'"
          :color="tab === 'all' ? '#084F93' : '#000'"
          @click="tab = 'all'"
          class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !min-h-[55px]"
        >
          ทั้งหมด (926)
        </v-btn>
        <v-btn
          :variant="tab === 'unfunded' ? 'flat' : 'text'"
          :color="tab === 'unfunded' ? '#084F93' : '#000'"
          @click="tab = 'unfunded'"
          class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !min-h-[55px]"
        >
          ยังไม่ชำระ (421)
        </v-btn>
        <v-btn
          :variant="tab === 'beShipped' ? 'flat' : 'text'"
          :color="tab === 'beShipped' ? '#084F93' : '#000'"
          @click="tab = 'beShipped'"
          class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !min-h-[55px]"
        >
          ที่ต้องจัดส่ง (310)
        </v-btn>
        <v-btn
          :variant="tab === 'sending' ? 'flat' : 'text'"
          :color="tab === 'sending' ? '#084F93' : '#000'"
          @click="tab = 'sending'"
          class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !min-h-[55px]"
        >
          กำลังจัดส่ง (14)
        </v-btn>
        <v-btn
          :variant="tab === 'complete' ? 'flat' : 'text'"
          :color="tab === 'complete' ? '#084F93' : '#000'"
          @click="tab = 'complete'"
          class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !min-h-[55px]"
        >
          เสร็จสิ้น (181)
        </v-btn>
        <v-btn
          :variant="tab === 'cancel' ? 'flat' : 'text'"
          :color="tab === 'cancel' ? '#084F93' : '#000'"
          @click="tab = 'cancel'"
          class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] !min-h-[55px]"
        >
          ยกเลิก (181)
        </v-btn>
      </div>

      <div class="flex space-x-4 items-center">
        <!-- < [&>span]:!text-[20px] font-awesome-icon icon="fa-solid fa-download" /> -->
        <v-btn
          color="#084F93"
          icon="fa-solid fa-download"
          variant="outlined"
          class="!border !rounded-lg !min-w-[55px] !min-h-[55px]"
        ></v-btn>
        <v-btn
          color="#084F93"
          class="!border !rounded-lg !min-w-[55px] !min-h-[55px]"
          icon="fa-solid fa-upload"
          variant="outlined"
        ></v-btn>
        <v-btn
          prependIcon="fa-solid fa-plus"
          variant="flat"
          color="#084F93"
          size="large"
          class="rounded-lg !min-h-[55px]"
        >
          สร้างคำสั่งซื้อใหม่
        </v-btn>
      </div>
    </div>

    <div class="mt-4">
      <div
        class="p-5 text-[#084F93] bg-[#E9E7EB] text-[14px] leading-5 !rounded-t-[8px] border-x border-t border-[#E9E7EB]"
      >
        ข้อมูลคำสั่งซื้อทั้งหมด {{ tableItem.length }} รายการ
      </div>
      <div class="bg-[#E9E7EB] p-2 border border-[#E9E7EB]">
        <v-text-field
          placeholder="เพิ่มตัวกรอง"
          variant="outlined"
          hide-details
          density="compact"
        ></v-text-field>
        <div class="pt-2">
          <Chips v-for="(item, index) in chipData" :text="item" />
        </div>
      </div>

      <v-card
        variant="flat"
        class="border border-[#EEEDF1] !rounded-b-[8px] pb-[15px]"
      >
        <v-data-table
          v-if="tableItem.length > 0"
          :items="tableItem"
          :headers="headersTable"
          item-key="no"
          show-select
          :single-select="false"
          show-expand
          id="table-info"
          no-data-text="ไม่มีข้อมูล"
          items-per-page-text="จำนวนแสดงผล"
          class="!rounded-[0]"
          v-model="selectedTask"
        >
          <template
            v-slot:item="{
              item,
              toggleExpand,
              isExpanded,
              internalItem,
              toggleSelect,
              isSelected
            }"
          >
            <tr>
              <td class="text-[16px] leading-5 tracking-[-0.23%]">
                <v-checkbox
                  :model-value="
                    isSelected({
                      selectable: false,
                      value: item
                    })
                  "
                  @click="
                    toggleSelect({
                      selectable: true,
                      value: item
                    })
                  "
                  hideDetails
                ></v-checkbox>
              </td>
              <td
                class="text-[16px] leading-5 tracking-[-0.23%] text-center !pr-10"
              >
                {{ item.name }}
                {{ selectedTask }}
              </td>
              <td
                class="text-[16px] leading-5 tracking-[-0.23%] text-center !pr-10"
              >
                {{ item.no }}
              </td>
              <td
                class="text-[16px] leading-5 tracking-[-0.23%] text-center !pr-10"
              >
                {{ item.no_status }}
              </td>
              <td
                class="text-[16px] leading-5 tracking-[-0.23%] text-center !pr-10"
              >
                {{ item.price }}
              </td>
              <td
                class="text-[16px] leading-5 tracking-[-0.23%] text-center !pr-10"
              >
                {{ item.create_date }}
              </td>
              <td
                class="text-[16px] leading-5 tracking-[-0.23%] text-center !pr-10"
              >
                {{ item.print }}
              </td>
              <td
                class="text-[16px] leading-5 tracking-[-0.23%] text-center !pr-10"
              >
                {{ item.status }}
              </td>
            </tr>
          </template>
          <template v-slot:expanded-row="{ columns, item }">
            <td :colspan="columns.length">
              <div
                class="2xl:w-[35%] xl:w-[45%] lg:w-[60%] md:w-[65%] sm:w-[50%] w-[45%] p-2"
              >
                <div class="flex pl-14 flex-col">
                  <div class="containerItemDetail">
                    <div class="flex items-center">
                      <img
                        class="w-10 h-10 rounded-full mr-3"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo"
                      />
                      <!-- <div class="title">{{ item.buyer }}</div> -->
                    </div>
                    <div class="leading-5 text-[14px] font-bold">
                      {{ item.status }}
                    </div>
                  </div>

                  <div class="containerItemDetail text-normal mt-2 space-y-1">
                    <div class="flex items-center">
                      <div>หมายเลขคำสั่งซื้อ</div>
                    </div>
                    <div class="font-bold opacity-[0.6]">2 รายการ</div>
                  </div>
                  <div class="containerItemDetail text-normal space-y-2">
                    <div class="flex items-center w-[70%] justify-between">
                      <div>สายชาร์จไอโฟน</div>
                      <div>x8</div>
                    </div>
                    <div>฿6,320</div>
                  </div>
                  <div class="containerItemDetail text-normal space-y-2">
                    <div class="flex items-center w-[70%] justify-between">
                      <div>โรบอทดูดฝุ่น</div>
                      <div>x1</div>
                    </div>
                    <div>฿15,000</div>
                  </div>
                  <div class="containerItemDetail text-normal mt-2">
                    <div class="flex items-center w-full justify-between">
                      <div class="text-[#084F93]">9 ชิ้น</div>
                      <div>
                        <span class="mr-3">ยอดรวมการสั่งซื้อ</span> ฿21,230
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </template>
          <template #bottom></template>
        </v-data-table>
        <div v-else class="h-[260px] flex justify-center items-center">
          <p>ยังไม่มีรายการ</p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style>
#table-info div table thead tr th:last-child {
  display: none;
}
</style>
