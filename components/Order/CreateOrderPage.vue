<script setup>
const payment = ref("CashOnDelivery")
const cost = ref(40)
const discount = ref(40)
const qrpay = ref()

const emit = defineEmits(['selectPlatformClick'])

const fnHandleSelectPlatform = ()=>{
  emit('selectPlatformClick')
}

const selectedImage = ref()

const fnHandleUploadFile = (e) => {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()

    reader.onload = function (e) {
      selectedImage.value = e.target.result
      //   selectedImage.value.push(e.target.result)
    }

    reader.readAsDataURL(file)
  } else {
    selectedImage.value = null
  }
}
const productFormData = ref([{}])
const productState = ref("system")

const headersTable = ref([
  {
    title: "สินค้าหลัก",
    align: "center",
    key: "name"
  },
  {
    title: "รุป",
    align: "center",
    key: "tel",
    sortable: false,
    width: "60px"
  },
  {
    title: "SKU ID",
    align: "center",
    key: "product"
  },
  {
    title: "ชื่อสินค้า",
    align: "center",
    key: "platform_sale"
  },
  {
    title: "ราคา",
    align: "center",
    key: "platform_pay"
  },
  {
    title: "จำนวนที่ลูกค้าสั่ง",
    align: "center",
    key: "amount",
    sortable: false,
    width: "150px"
  },
  {
    title: "ราคารวม",
    align: "center",
    key: "totals"
  },
  {
    title: "คลัง",
    align: "center",
    key: "warehouse"
  },
  {
    title: "",
    align: "center",
    width: "60px"
  }
])

const headersTableUser = ref([
  {
    title: "ชื่อสินค้า",
    align: "center",
    key: "platform_sale"
  },
  {
    title: "น้ำหนัก (กก.)",
    align: "center",
    key: "weight"
  },
  {
    title: "ราคา",
    align: "center",
    key: "platform_pay"
  },
  {
    title: "จำนวนที่ลูกค้าสั่ง",
    align: "center",
    key: "amount",
    sortable: false,
    width: "150px"
  },
  {
    title: "ราคารวม",
    align: "center",
    key: "totals"
  },
  {
    title: "คลัง",
    align: "center",
    key: "warehouse"
  },
  {
    title: "",
    align: "center",
    width: "60px"
  }
])

const tableItemSystem = ref([
  {
    main_product: "MI Monitor 5 ",
    src: "",
    id: "W212-2",
    name: "MI Monitor 5 - ขาว, 27’’",
    price: "12,000",
    amount: 60,
    totals: "720,000",
    warehouse: "หาดใหญ่",
    weight: "5"
  }
])
</script>

<template>
  <div class="flex p-4 border border-[#EEEDF1] rounded-lg flex-col gap-2">
    <div
      class="tracking-[-0.079px] font-bold leading-[26px] text-[22px] text-black !opacity-title"
    >
      ช่องทางการขาย
    </div>

    <div class="flex w-full justify-center items-center gap-4">
      <v-text-field
        hide-details
        placeholder="ยังไม่เลือก*"
        variant="outlined"
        density="compact"
        readonly
      ></v-text-field>
      <v-btn color="#084F93" variant="flat" class="!rounded-lg" @click="fnHandleSelectPlatform"
        >เลือกช่องทาง</v-btn
      >
    </div>
  </div>

  <div class="flex p-4 border border-[#EEEDF1] rounded-lg flex-col gap-2 mt-4">
    <div class="flex justify-between">
      <div
        class="tracking-[-0.079px] font-bold leading-[26px] text-[22px] text-black !opacity-title"
      >
        ข้อมูลลูกค้า
      </div>
      <div
        class="tracking-31 font-[600] leading-[22px] text-[16px] text-[#0BA5EC] !opacity-title cursor-pointer"
      >
        ล้างข้อมูล
      </div>
    </div>

    <div class="flex w-full justify-center items-center gap-4">
      <div class="w-1/2 h-[300px] rounded-lg border border-[#EEEDF1] p-4">
        <div class="text-[#C4C6CF] text-subTitle leading-5 tracking-23">
          ตัวช่วยจำแนกที่อยู่
        </div>
      </div>
      <div class="w-1/2 flex flex-col gap-3">
        <v-text-field
          hide-details
          placeholder="เบอร์โทรศัพท์*"
          variant="outlined"
          density="compact"
          readonly
        ></v-text-field>
        <v-text-field
          hide-details
          placeholder="ชื่อลูค้า*"
          variant="outlined"
          density="compact"
          readonly
        ></v-text-field>
        <v-text-field
          hide-details
          placeholder="ที่อยู่*"
          variant="outlined"
          density="compact"
          readonly
        ></v-text-field>
        <v-text-field
          hide-details
          placeholder="รหัสไปรษณีย์/ตำบล/อำเภอ*"
          variant="outlined"
          density="compact"
          readonly
        >
          <template v-slot:prepend-inner>
            <v-icon class="mb-1" size="16">fa-solid fa-magnifying-glass</v-icon>
          </template>
        </v-text-field>
        <v-text-field
          hide-details
          placeholder="อีเมล"
          variant="outlined"
          density="compact"
          readonly
        ></v-text-field>
        <v-text-field
          hide-details
          placeholder="หมายเหตุ"
          variant="outlined"
          density="compact"
          readonly
        ></v-text-field>
      </div>
    </div>
    <div class="flex !w-full">
      <v-btn class="!w-full rounded-lg" color="#084F93" variant="flat"
        ><v-icon class="mb-[2px] mr-2">fa-solid fa-chevron-right</v-icon>
        แยกที่อยู่
      </v-btn>
    </div>
  </div>

  <div class="flex p-4 border border-[#EEEDF1] rounded-lg flex-col gap-2 mt-4">
    <div
      v-if="productFormData.length <= 0"
      class="tracking-[-0.079px] font-bold leading-[26px] text-[22px] text-black !opacity-title"
    >
      สินค้า
    </div>
    <div
      v-if="productFormData.length <= 0"
      class="flex justify-center items-center flex-col"
    >
      <img src="~/assets/images/11.svg" />
      <div class="mt-2 flex gap-3">
        <v-btn color="#084F93" variant="flat" class="!rounded-lg"
          >เลือกสินค้าจากระบบ

          <template v-slot:prepend
            ><v-icon class="mb-1" size="16"
              >fa-solid fa-magnifying-glass</v-icon
            ></template
          > </v-btn
        ><v-btn color="#084F93" variant="flat" class="!rounded-lg"
          >เลือกสินค้ากรองเอง
          <template v-slot:prepend
            ><v-icon class="mb-1" size="16">fa-solid fa-plus</v-icon></template
          ></v-btn
        >
      </div>
    </div>
    <div v-else class="flex flex-col">
      <!-- <img src="~/assets/images/11.svg" /> -->
      <div class="flex justify-center items-center">
        <div class="flex gap-1 border rounded-lg p-2">
          <v-btn
            :color="productState === 'system' ? '#084F93' : '#1A1C1E'"
            :variant="productState === 'system' ? 'flat' : 'text'"
            class="!rounded-lg"
            @click="productState = 'system'"
            >สินค้าจากระบบ
            <template v-slot:prepend
              ><v-icon class="mb-1" size="16"
                >fa-solid fa-warehouse</v-icon
              ></template
            > </v-btn
          ><v-btn
            :color="productState !== 'system' ? '#084F93' : '#1A1C1E'"
            :variant="productState !== 'system' ? 'flat' : 'text'"
            @click="productState = 'user'"
            class="!rounded-lg"
            >สินค้ากรองเอง
            <template v-slot:prepend
              ><v-icon class="mb-1" size="16"
                >fa-solid fa-boxes-packing</v-icon
              ></template
            ></v-btn
          >
        </div>
      </div>

      <v-card
        v-if="productState === 'system'"
        variant="flat"
        class="border border-[#EEEDF1] !rounded-lg pb-[15px] mt-4"
      >
        <v-data-table
          :items="tableItemSystem"
          :headers="headersTable"
          id="table-header-black"
        >
          <template v-slot:item="{ item, index }">
            <tr>
              <td class="center">
                {{ item.main_product }}
              </td>
              <td>
                <!-- {{ item.tel }} -->
                <div class="flex justify-center">
                  <div class="w-10 h-10 bg-lime-600"></div>
                </div>
              </td>
              <td class="center">
                {{ item.id }}
              </td>
              <td class="center">
                {{ item.name }}
              </td>
              <td class="center">
                {{ item.price }}
              </td>
              <td>
                <div class="flex justify-center">
                  <v-text-field
                    density="compact"
                    hide-details
                    v-model="tableItemSystem[index].amount"
                    variant="outlined"
                    type="number"
                  ></v-text-field>
                </div>
              </td>
              <td class="center">
                {{ item.price }}
              </td>
              <td class="center">
                {{ item.warehouse }}
              </td>
              <td>
                <v-btn color="#74777F" variant="text">
                  <v-icon size="18">fa-solid fa-trash</v-icon>
                </v-btn>
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

      <v-card
        v-else
        variant="flat"
        class="border border-[#EEEDF1] !rounded-lg pb-[15px] mt-4"
      >
        <v-data-table
          :items="tableItemSystem"
          :headers="headersTableUser"
          id="table-header-black"
        >
          <template v-slot:item="{ item, index }">
            <tr>
              <td class="center">
                {{ item.name }}
              </td>
              <td class="center">
                {{ item.price }}
              </td>
              <td class="center">
                {{ item.weight }}
              </td>
              <td>
                <div class="flex justify-center">
                  <v-text-field
                    density="compact"
                    hide-details
                    v-model="tableItemSystem[index].amount"
                    variant="outlined"
                    type="number"
                  ></v-text-field>
                </div>
              </td>
              <td class="center">
                {{ item.price }}
              </td>
              <td class="center">
                {{ item.warehouse }}
              </td>
              <td>
                <v-btn color="#74777F" variant="text">
                  <v-icon size="18">fa-solid fa-trash</v-icon>
                </v-btn>
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

      <div class="mt-4 flex justify-between items-center">
        <v-btn variant="outlined" color="#084F93" class="rounded-lg"
          >เลือกสินค้าจากระบบ
          <template v-slot:prepend
            ><v-icon size="16" class="mb-[2px]"
              >fa-solid fa-plus</v-icon
            ></template
          >
        </v-btn>
        <div class="flex gap-4">
          <div class="flex justify-center items-center gap-2">
            <v-icon class="mb-2 opacity-subTitle" size="18"
              >fa-solid fa-warehouse</v-icon
            >
            <div class="tracking-23 leading-5 text-subTitle opacity-subTitle">
              เลือกจากระบบแล้ว <span class="font-[600]">3 รายการ</span>
            </div>
          </div>
          <div class="flex justify-center items-center gap-2">
            <v-icon class="mb-2 opacity-subTitle" size="18"
              >fa-solid fa-boxes-packing</v-icon
            >
            <div class="tracking-23 leading-5 text-subTitle opacity-subTitle">
              เลือกจากกรองเองแล้ว <span class="font-[600]">3 รายการ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-between gap-4">
    <div
      class="flex p-4 border border-[#EEEDF1] rounded-lg flex-col gap-2 mt-4 w-1/2 h-fit"
    >
      <div
        class="tracking-[-0.079px] font-bold leading-[26px] text-[22px] text-black !opacity-title"
      >
        การชำระเงิน
      </div>
      <div
        class="tracking-31 font-[600] text-title leading-[22px] text-[#1A1C1E]"
      >
        ช่องทาง
      </div>

      <div class="flex gap-4">
        <v-btn
          variant="outlined"
          :style="{
            borderColor: payment === 'CashOnDelivery' ? '#084f93' : '#EEEDF1',
            color: payment === 'CashOnDelivery' ? '#084f93' : '#1A1C1E'
          }"
          class="rounded-lg"
          @click="payment = 'CashOnDelivery'"
        >
          เก็บเงินปลายทาง
        </v-btn>
        <v-btn
          variant="outlined"
          :style="{
            borderColor: payment === 'QR' ? '#084f93' : '#EEEDF1',
            color: payment === 'QR' ? '#084f93' : '#1A1C1E'
          }"
          class="rounded-lg"
          @click="payment = 'QR'"
        >
          โอนเงิน/QR
        </v-btn>
        <v-btn
          variant="outlined"
          :style="{
            borderColor: payment === 'Cash' ? '#084f93' : '#EEEDF1',
            color: payment === 'Cash' ? '#084f93' : '#1A1C1E'
          }"
          class="rounded-lg"
          @click="payment = 'Cash'"
        >
          เงินสด
        </v-btn>
        <v-btn
          variant="outlined"
          :style="{
            borderColor: payment === 'Credit' ? '#084f93' : '#EEEDF1',
            color: payment === 'Credit' ? '#084f93' : '#1A1C1E'
          }"
          class="rounded-lg"
          @click="payment = 'Credit'"
        >
          บัตรเครดิต
        </v-btn>
      </div>

      <div v-if="payment !== 'CashOnDelivery'" class="mt-2">
        <div
          class="tracking-31 font-[600] text-title leading-[22px] text-[#1A1C1E]"
        >
          สถานะ
        </div>
        <div class="flex">
          <v-checkbox
            class="checkbox-change-status icon-center"
            hide-details
            label="ยังไม่ชำระเงิน"
            v-model="qrpay"
            true-value="not-pay"
            color="#084F93"
            false-icon="fa-regular fa-circle"
            true-icon="fa-regular fa-circle-check"
          >
          </v-checkbox>
          <v-checkbox
            class="checkbox-change-status icon-center"
            hide-details
            label="ชำระเงินแล้ว"
            v-model="qrpay"
            true-value="pay"
            color="#084F93"
            false-icon="fa-regular fa-circle"
            true-icon="fa-regular fa-circle-check"
          >
          </v-checkbox>
        </div>
      </div>

      <div v-if="qrpay === 'pay'" class="mt-2">
        <div
          class="tracking-31 font-[600] text-title leading-[22px] text-[#1A1C1E]"
        >
          รายละเอียด
        </div>
        <div
          v-if="payment === 'QR'"
          class="w-full text-subTitle leading-5 tracking-23 flex gap-2 my-5"
        >
          <div
            class="w-[105px] h-[105px] flex justify-center items-center relative"
            v-if="selectedImage"
          >
            <img
              :src="selectedImage"
              class="w-[105px] h-[105px] object-contain"
              alt="Preview"
            />
            <!-- <div
                  class="absolute flex w-full justify-end cursor-pointer top-2 right-1"
                >
                  <v-icon
                    size="16"
                    class="bg-[#fff] !text-[#DE3730]"
                    @click="() => selectedImage.splice(index, 1)"
                    >fa-solid fa-xmark</v-icon
                  >
                </div> -->
          </div>

          <label
            for="productImageUpload"
            class="w-[105px] h-[105px] rounded-lg border border-dashed justify-center flex items-center flex-col gap-3 cursor-pointer"
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
              สลิปโอนเงิน
            </div>
          </label>
        </div>

        <div class="flex flex-col gap-4 mt-2">
          <v-text-field
            hide-details
            label="ลิงค์ (URL) ใบเสร็จ"
            variant="outlined"
            density="compact"
            v-if="payment === 'QR'"
          ></v-text-field>
          <v-text-field
            hide-details
            label="ยอดเงิน*"
            variant="outlined"
            density="compact"
          ></v-text-field>
          <v-text-field
            v-if="payment === 'Credit'"
            hide-details
            label="เลขบัตร 4 ตัวท้าย"
            variant="outlined"
            density="compact"
          ></v-text-field>
          <div class="flex gap-4">
            <v-text-field
              hide-details
              label="วันที่ชำระเงิน*"
              variant="outlined"
              density="compact"
              class="!w-1/2"
            >
              <template v-slot:append-inner>
                <v-icon size="16" class="mb-[2px]"
                  >fa-regular fa-calendar</v-icon
                >
              </template>
            </v-text-field>
            <v-text-field
              hide-details
              label="เวลาที่ชำระเงิน*"
              variant="outlined"
              density="compact"
              class="!w-1/2"
            >
              <template v-slot:append-inner>
                <v-icon size="16" class="mb-[2px]">fa-regular fa-clock</v-icon>
              </template>
            </v-text-field>
          </div>
          <v-text-field
            hide-details
            label="ผู้รับเงิน"
            variant="outlined"
            density="compact"
          ></v-text-field>
        </div>
      </div>
    </div>

    <div class="flex w-1/2 flex-col">
      <div
        class="flex p-4 border border-[#EEEDF1] rounded-lg flex-col gap-2 mt-4 w-full"
      >
        <div
          class="tracking-[-0.079px] font-bold leading-[26px] text-[22px] text-black !opacity-title"
        >
          บริษัทขนส่ง
          <v-icon size="16" class="mb-[2px]" color="#74777F"
            >fa-solid fa-circle-info</v-icon
          >
        </div>
        <div
          class="tracking-23 leading-5 text-[14px] text-black !opacity-title"
        >
          รูปแบบการส่งปัจจุบัน:
          <span
            v-if="productState === 'system'"
            class="font-[600] text-[#12B76A] ml-2"
            >ส่งกับ SalesX</span
          >
          <span v-else class="font-[600] text-[#F79009] ml-2"
            >จัดส่งด้วยตัวเอง</span
          >
        </div>
        <div
          v-if="productState === 'system'"
          class="tracking-23 leading-5 text-[14px] text-black !opacity-title"
        >
          บริการขนส่ง:
          <span class="font-[600] text-black ml-2">Kerry Express</span>
        </div>
        <v-select
          v-else
          variant="outlined"
          autofocus
          :items="['Kerry', 'J&P', 'Thai Post']"
          hide-details
          label="บริการขนส่ง"
          class="!p-0 height-textfield"
          density="compact"
        ></v-select>
      </div>

      <div
        class="flex p-4 border border-[#EEEDF1] rounded-lg flex-col gap-2 mt-4 w-full"
      >
        <div
          class="tracking-[-0.079px] font-bold leading-[26px] text-[22px] text-black !opacity-title"
        >
          สรุปยอดรวม
        </div>
        <div
          class="tracking-23 leading-5 text-[14px] text-black !opacity-title"
        >
          <div class="flex">
            <div class="w-[140px]">ค่าสินค้ารวม</div>
            <div class="w-full flex justify-center">5,980</div>
            <div class="w-[100px] text-right">บาท</div>
          </div>
          <div class="flex mt-2">
            <div class="w-[180px] flex items-center">
              ค่าที่จัดส่องเพิ่มเติม
            </div>
            <div class="w-full flex justify-center gap-2">
              <v-btn
                variant="outlined"
                :style="{
                  borderColor: cost === null ? '#084f93' : '#EEEDF1',
                  color: cost === null ? '#084f93' : '#1A1C1E'
                }"
                class="rounded-lg !px-2 !min-w-[40px]"
                @click="cost = null"
                v-if="[0, 40, 50].includes(cost)"
              >
                กำหนดเอง
              </v-btn>
              <v-text-field
                v-else
                variant="outlined"
                autofocus
                v-model="cost"
                hide-details
                class="!max-w-[70px] !p-0 height-textfield"
                density="compact"
              ></v-text-field>

              <v-btn
                variant="outlined"
                :style="{
                  borderColor: cost === 0 ? '#084f93' : '#EEEDF1',
                  color: cost === 0 ? '#084f93' : '#1A1C1E'
                }"
                class="rounded-lg !px-0 !min-w-[40px]"
                @click="cost = 0"
              >
                0
              </v-btn>
              <v-btn
                variant="outlined"
                :style="{
                  borderColor: cost === 40 ? '#084f93' : '#EEEDF1',
                  color: cost === 40 ? '#084f93' : '#1A1C1E'
                }"
                class="rounded-lg !px-0 !min-w-[40px]"
                @click="cost = 40"
              >
                40
              </v-btn>
              <v-btn
                variant="outlined"
                :style="{
                  borderColor: cost === 50 ? '#084f93' : '#EEEDF1',
                  color: cost === 50 ? '#084f93' : '#1A1C1E'
                }"
                class="rounded-lg !px-0 !min-w-[40px]"
                @click="cost = 50"
              >
                50
              </v-btn>
            </div>
            <div class="w-[100px] flex items-center justify-end">บาท</div>
          </div>
          <div class="flex mt-2">
            <div class="w-[180px] flex items-center">ส่วดลดเพิ่มเติม</div>
            <div class="w-full flex justify-center gap-2">
              <v-btn
                variant="outlined"
                :style="{
                  borderColor: discount === null ? '#084f93' : '#EEEDF1',
                  color: discount === null ? '#084f93' : '#1A1C1E'
                }"
                class="rounded-lg !px-2 !min-w-[40px]"
                @click="discount = null"
                v-if="[0, 40, 50].includes(discount)"
              >
                กำหนดเอง
              </v-btn>
              <v-text-field
                v-else
                variant="outlined"
                autofocus
                v-model="discount"
                hide-details
                class="!max-w-[70px] !p-0 height-textfield"
                density="compact"
              ></v-text-field>

              <v-btn
                variant="outlined"
                :style="{
                  borderColor: discount === 0 ? '#084f93' : '#EEEDF1',
                  color: discount === 0 ? '#084f93' : '#1A1C1E'
                }"
                class="rounded-lg !px-0 !min-w-[40px]"
                @click="discount = 0"
              >
                0
              </v-btn>
              <v-btn
                variant="outlined"
                :style="{
                  borderColor: discount === 40 ? '#084f93' : '#EEEDF1',
                  color: discount === 40 ? '#084f93' : '#1A1C1E'
                }"
                class="rounded-lg !px-0 !min-w-[40px]"
                @click="discount = 40"
              >
                40
              </v-btn>
              <v-btn
                variant="outlined"
                :style="{
                  borderColor: discount === 50 ? '#084f93' : '#EEEDF1',
                  color: discount === 50 ? '#084f93' : '#1A1C1E'
                }"
                class="rounded-lg !px-0 !min-w-[40px]"
                @click="discount = 50"
              >
                50
              </v-btn>
            </div>
            <div class="w-[100px] flex items-center justify-end">บาท</div>
          </div>
          <div class="flex mt-2">
            <div class="w-[140px]">น้ำหนักรวม</div>
            <div class="w-full flex justify-center">0.00</div>
            <div class="w-[100px] text-right">กิโลกรัม</div>
          </div>
          <div class="flex mt-2">
            <div class="w-[140px]">ยอดสุทธิ</div>
            <div
              class="w-full flex justify-center text-[#084F93] tracking-31 text-title leading-[22px] font-[600]"
            >
              5,980
            </div>
            <div class="w-[100px] text-right">บาท</div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
