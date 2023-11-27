<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
const value = ref("")
const submitValue = ref("")
const cancelComment = ref([])
const commentField = ref("")

const { open } = defineProps({
  open: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(["onSubmit", "onClose"])

const socialSelect = [
  {
    name: "เฟซบุ๊ก",
    value: "facebook",
    icon: "https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
  },
  {
    name: "ติ๊กต็อก",
    value: "tiktok",
    icon: "https://cdn-icons-png.flaticon.com/512/3938/3938074.png"
  },
  {
    name: "อินสตาแกรม",
    value: "instagram",
    icon: "https://www.mmthailand.com/wp-content/uploads/2020/04/ig-icon.png"
  },
  {
    name: "พินเทอเรส",
    value: "pinterest",
    icon: "https://static-00.iconduck.com/assets.00/pinterest-icon-2048x2048-os3lysf9.png"
  },
  {
    name: "เอกซ์",
    value: "x",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.png"
  },
  {
    name: "ยูทูป",
    value: "youtube",
    icon: "https://static-00.iconduck.com/assets.00/youtube-icon-512x512-80maysdk.png"
  },
  {
    name: "ไลน์",
    value: "line",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/LINE_New_App_Icon_%282020-12%29.png/800px-LINE_New_App_Icon_%282020-12%29.png"
  },
  {
    name: "แมสเซนเจอร์",
    value: "massager",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"
  }
]

const marketPlaceSelect = [
  {
    name: "ลาซาด้า",
    value: "lazada",
    icon: "https://play-lh.googleusercontent.com/CD2p85trqTaxZylgTS8FsQLjzNSQTdJvWDd_e4sXhFcWx-EV1ol6WrxeYBg7pPYZq8g"
  },
  {
    name: "ช้อปปี้",
    value: "shopee",
    icon: "https://freelogopng.com/images/all_img/1656181199icon-shopee-png.png"
  },
  {
    name: "น็อคน็อค",
    value: "nocnoc",
    icon: "https://cdn-images-1.medium.com/max/1200/1*B3WZAfzWdEA3lcvZzGPlTA.jpeg"
  }
]

const ourSiteSelect = [
  {
    name: "เทพช้อป",
    value: "tepshop",
    icon: "https://play-lh.googleusercontent.com/CD2p85trqTaxZylgTS8FsQLjzNSQTdJvWDd_e4sXhFcWx-EV1ol6WrxeYBg7pPYZq8g",
    faicon: ""
  },
  {
    name: "เว็บไซด์อื่นๆ",
    value: "more",
    icon: "",
    faicon: "fa-solid fa-ellipsis"
  }
]

const allianceSelect = [
  {
    name: "รายการโทรทัศน์",
    value: "tv",
    faicon: "fa-solid fa-tv",
    icon: ""
  },
  {
    name: "ดร็อปชิป",
    icon: "",
    value: "dropchip",
    faicon: "fa-solid fa-truck-fast"
  },
  {
    icon: "",
    name: "เว็บไซด์อื่นๆ",
    value: "more",
    faicon: "fa-solid fa-ellipsis"
  }
]
const offlineSelect = [
  {
    name: "โทรศัพท์ (Call)",
    value: "tv",
    faicon: "fa-solid fa-phone",
    icon: ""
  },
  {
    name: "โทรนำเสนอ (Telesales)",
    icon: "",
    value: "dropchip",
    faicon: "fa-solid fa-headset"
  },
  {
    icon: "",
    name: "หน้าร้าน",
    value: "more",
    faicon: "fa-solid fa-store"
  }
]

const moreSelect = [
  {
    icon: "",
    name: "แพลตฟอร์มอื่นๆ",
    value: "more",
    faicon: "fa-solid fa-ellipsis"
  }
]

const socialCheck = ref<string | Boolean>("")
const marketPlaceCheck = ref<string | Boolean>("")
const outSiteCheck = ref<string | Boolean>("")
const allianceCheck = ref<string | Boolean>("")
const offlineCheck = ref<string | Boolean>("")
const moreCheck = ref<string | Boolean>("")

const fnHandleCheck = (module: any, item: any) => {
  if (eval(`${module}Check`).value === item.value) {
    eval(`${module}Check`).value = false
  } else {
    eval(`${module}Check`).value = item.value
  }
}
const fnHandleClose = () => {
  emit("onClose", {
    socialCheck: socialCheck.value,
    marketPlaceCheck: marketPlaceCheck.value,
    outSiteCheck: outSiteCheck.value,
    allianceCheck: allianceCheck.value,
    offlineCheck: offlineCheck.value,
    moreCheck: moreCheck.value
  })
}
</script>

<template>
  <v-dialog :model-value="open" width="920px" persistent>
    <v-card class="rounded-lg !p-4">
      <div class="flex justify-between">
        <div class="opacity-subTitle leading-[22px] tracking-31 text-title">
          เลือกช่องทางการขาย
        </div>
        <v-icon
          size="20"
          class="cursor-pointer hover:text-[#084F93] transition-all"
          @click="fnHandleClose"
          >fa-solid fa-close</v-icon
        >
      </div>

      <div class="py-4 flex w-full gap-3 select-none">
        <div class="cardWLabel social w-1/3">
          <div
            v-for="(item, index) in socialSelect"
            :key="index"
            class="flex justify-between items-center cursor-pointer"
            @click="fnHandleCheck('social', item)"
          >
            <div class="flex justify-center items-center gap-3">
              <img
                :src="item.icon"
                width="30"
                height="30"
                class="rounded-full"
              />
              {{ item.name }}
            </div>
            <v-checkbox
              true-icon="fa-solid fa-circle-check"
              false-icon="fa-regular fa-circle"
              class="disable-space"
              v-model="socialCheck"
              :false-value="false"
              :true-value="item.value"
              hide-details
            ></v-checkbox>
          </div>
        </div>
        <div class="w-1/3 flex flex-col gap-4">
          <div class="cardWLabel marketplace w-full">
            <div
              v-for="(item, index) in marketPlaceSelect"
              :key="index"
              class="flex justify-between items-center cursor-pointer"
              @click="fnHandleCheck('marketPlace', item)"
            >
              <div class="flex justify-center items-center gap-3">
                <img
                  :src="item.icon"
                  width="30"
                  height="30"
                  class="rounded-full"
                />
                {{ item.name }}
              </div>
              <v-checkbox
                true-icon="fa-solid fa-circle-check"
                false-icon="fa-regular fa-circle"
                class="disable-space"
                v-model="marketPlaceCheck"
                :true-value="item.value"
                hide-details
              ></v-checkbox>
            </div>
          </div>
          <div class="cardWLabel mysite w-full">
            <div
              v-for="(item, index) in ourSiteSelect"
              :key="index"
              class="flex justify-between items-center cursor-pointer"
              @click="fnHandleCheck('outSite', item)"
            >
              <div class="flex justify-center items-center gap-3">
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  width="30"
                  height="30"
                  class="rounded-full"
                />

                <v-icon
                  size="25"
                  color="#C4C6CF"
                  class="!text-[25px] ml-1"
                  v-else
                  >{{ item.faicon }}</v-icon
                >
                {{ item.name }}
              </div>
              <v-checkbox
                true-icon="fa-solid fa-circle-check"
                false-icon="fa-regular fa-circle"
                class="disable-space"
                v-model="outSiteCheck"
                :true-value="item.value"
                hide-details
              ></v-checkbox>
            </div>
          </div>
          <div class="cardWLabel alliance w-full">
            <div
              v-for="(item, index) in allianceSelect"
              :key="index"
              class="flex justify-between items-center cursor-pointer"
              @click="fnHandleCheck('alliance', item)"
            >
              <div class="flex justify-center items-center gap-3">
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  width="30"
                  height="30"
                  class="rounded-full"
                />

                <v-icon
                  size="25"
                  color="#C4C6CF"
                  class="!text-[25px] ml-1"
                  v-else
                  >{{ item.faicon }}</v-icon
                >
                {{ item.name }}
              </div>
              <v-checkbox
                true-icon="fa-solid fa-circle-check"
                false-icon="fa-regular fa-circle"
                class="disable-space"
                v-model="allianceCheck"
                :true-value="item.value"
                hide-details
              ></v-checkbox>
            </div>
          </div>
        </div>
        <div class="w-1/3 flex flex-col gap-4">
          <div class="cardWLabel offline w-full">
            <div
              v-for="(item, index) in offlineSelect"
              :key="index"
              class="flex justify-between items-center cursor-pointer"
              @click="fnHandleCheck('offline', item)"
            >
              <div class="flex justify-center items-center gap-3">
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  width="30"
                  height="30"
                  class="rounded-full"
                />

                <v-icon
                  size="25"
                  color="#C4C6CF"
                  class="!text-[25px] ml-1"
                  v-else
                  >{{ item.faicon }}</v-icon
                >
                {{ item.name }}
              </div>
              <v-checkbox
                true-icon="fa-solid fa-circle-check"
                false-icon="fa-regular fa-circle"
                class="disable-space"
                v-model="offlineCheck"
                :true-value="item.value"
                hide-details
              ></v-checkbox>
            </div>
          </div>
          <div class="cardWLabel more w-full">
            <div
              v-for="(item, index) in moreSelect"
              :key="index"
              class="flex justify-between items-center cursor-pointer"
              @click="fnHandleCheck('more', item)"
            >
              <div class="flex justify-center items-center gap-3">
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  width="30"
                  height="30"
                  class="rounded-full"
                />

                <v-icon
                  size="25"
                  color="#C4C6CF"
                  class="!text-[25px] ml-1"
                  v-else
                  >{{ item.faicon }}</v-icon
                >
                {{ item.name }}
              </div>
              <v-checkbox
                true-icon="fa-solid fa-circle-check"
                false-icon="fa-regular fa-circle"
                class="disable-space"
                v-model="moreCheck"
                :true-value="item.value"
                hide-details
              ></v-checkbox>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.social::before {
  content: "โซเชียลมีเดีย";
  position: absolute;
  background-color: white;
  top: -12px;
  padding: 0px 5px;
  line-height: 20px;
  color: #74777f;
  font-size: 14px;
}

.marketplace::before {
  content: "มาร์เก็ตเพลส";
  position: absolute;
  background-color: white;
  top: -12px;
  padding: 0px 5px;
  line-height: 20px;
  color: #74777f;
  font-size: 14px;
}

.mysite::before {
  content: "เว็บไซด์ของคุณ";
  position: absolute;
  background-color: white;
  top: -12px;
  padding: 0px 5px;
  line-height: 20px;
  color: #74777f;
  font-size: 14px;
}

.alliance::before {
  content: "พันธมิตร";
  position: absolute;
  background-color: white;
  top: -12px;
  padding: 0px 5px;
  line-height: 20px;
  color: #74777f;
  font-size: 14px;
}

.offline::before {
  content: "ออฟไลน์";
  position: absolute;
  background-color: white;
  top: -12px;
  padding: 0px 5px;
  line-height: 20px;
  color: #74777f;
  font-size: 14px;
}

.more::before {
  content: "อื่นๆ";
  position: absolute;
  background-color: white;
  top: -12px;
  padding: 0px 5px;
  line-height: 20px;
  color: #74777f;
  font-size: 14px;
}

.cardWLabel {
  @apply border border-[#EEEDF1] rounded-md p-4 relative;
}
</style>

<style>
.disable-space .v-selection-control {
  @apply flex-[0];
}
.disable-space {
  @apply flex-[none];
}
</style>
