<template>
  <button
    @click="shownav = true"
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <div class="flex">
    <aside
      id="default-sidebar"
      :class="`fixed top-0 left-0 z-40 w-[284px] h-screen transition-transform ${
        shownav === true ? 'translate-none' : '-translate-x-full'
      } lg:translate-x-0`"
      aria-label="Sidenav"
    >
      <div
        class="fixed bg-gradient-to-b from-[#074F95] to-[#00AC86] w-[62px] h-screen"
      >
        <div class="flex py-[15px] justify-center">
          <div>
            <img
              src="/images/SALESX_TECHNOLOGIES_LOGO_FINAL_ICONIC_VERSION-05.png"
              class="w-[36px] h-[36px]"
              alt=""
            />

            <div class="my-[25px]">
              <div class="flex w-full relative my-[10px] cursor-pointer">
                <div
                  class="w-[4px] h-[36px] rounded-tr-[8px] rounded-br-[8px] bg-[#00AA84] absolute -left-[12px]"
                ></div>
                <div class="!w-[36px] !h-[36px] rounded-full bg-white"></div>
              </div>
              <div class="flex w-full relative my-[10px] cursor-pointer">
                <div
                  class="w-[4px] h-[36px] rounded-tr-[8px] rounded-br-[8px] bg-[#00AA84] absolute -left-[12px] hidden"
                ></div>
                <div class="!w-[36px] !h-[36px] rounded-full bg-white"></div>
              </div>
              <div class="flex w-full relative my-[10px] cursor-pointer">
                <div
                  class="w-[4px] h-[36px] rounded-tr-[8px] rounded-br-[8px] bg-[#00AA84] absolute -left-[12px] hidden"
                ></div>
                <div class="!w-[36px] !h-[36px] rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="h-full bg-white border-r border-gray-200 overflow-hidden pb-5 ml-[62px]"
      >
        <!-- <v-card class="mx-auto !border-0" variant="outlined" width="auto"> -->
        <v-layout class="px-[15px]">
          <v-navigation-drawer>
            <v-list>
              <v-list-item>
                <template v-slot:title>
                  <p class="text-[#084f93] text-[16px] font-bold">
                    Business name
                  </p>
                </template>
                <template v-slot:subtitle>
                  <p class="text-[#000]/[0.6] text-[12px]">Package name</p>
                </template>
                <template v-slot:append>
                  <v-btn size="small" variant="text">
                    <i class="fa-solid fa-chevron-down"></i>
                  </v-btn>
                </template>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list v-model:opened="open">
              <div v-for="(item, index) in menu_list" :key="index">
                <v-list v-if="item.haveSubMenu === false" class="pa-0">
                  <v-list-item :disabled="item.disable" link :to="item.path">
                    <v-list-item-title class="text-14">
                      <div class="flex gap-[15px] items-center">
                        <v-icon
                          :class="item.icon"
                          style="font-size: 14px"
                        ></v-icon>
                        <p class="text-[14px]">
                          {{ item.title }}
                        </p>
                      </div>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-list-group v-else :value="item.title">
                  <template v-slot:activator="{ props }">
                    <v-list-item :disabled="item.disable" v-bind="props">
                      <div class="flex gap-[15px]">
                        <i
                          :class="item.icon"
                          style="color: #43474e; font-size: 14px"
                        ></i>
                        <p style="color: #43474e; font-size: 14px">
                          {{ item.title }}
                        </p>
                      </div>
                    </v-list-item>
                  </template>
                  <div v-for="(item, index) in item.subMenu" :key="index">
                    <v-list-item v-show="!item.disable" link :to="item.path">
                      <v-list-item-subtitle class="pt-1 pb-1 pl-1 text-14">
                        <span style="color: #43474e">{{ item.subtitle }} </span>
                      </v-list-item-subtitle>
                    </v-list-item>
                  </div>
                </v-list-group>
              </div>
            </v-list>
          </v-navigation-drawer>

          <v-main style="height: 100vh"></v-main>
        </v-layout>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from "vue";

let drawer = ref(true)
let submenu = ref(null)
let shownav = ref(false)

const showSubmenu = (item) => {
  submenu.value = submenu.value === item ? null : item
}

const open = ref(null)

const menu_list = [
  {
    title: "หน้าแรก",
    haveSubMenu: false,
    subMenu: [],
    icon: "fa-solid fa-house",
    path: "/"
  },
  {
    title: "คำสั่งซื้อ",
    openExpand: false,
    haveSubMenu: true,
    subMenu: [
      {
        subtitle: "รายการคำสั่งซื้อ",
        path: "/order",
        disable: false
      },
      {
        subtitle: "จัดการงานจัดส่ง",
        path: "/delivery-management",
        disable: false
      },
      {
        subtitle: "คืนสินค้าและเคลม",
        path: "/",
        disable: true
      }
    ],
    icon: "fa-solid fa-list",
    disable: false
  },
  {
    title: "คลังและสินค้า",
    openExpand: false,
    haveSubMenu: true,
    subMenu: [
      {
        subtitle: "ภาพรวม",
        path: "/overview",
        disable: false
      },
      {
        subtitle: "สินค้า",
        path: "/product",
        disable: false
      },
      {
        subtitle: "คลังสินค้า",
        path: "/warehouse",
        disable: false
      }
    ],
    icon: "fa-solid fa-boxes-stacked",
    disable: false
  },
  {
    title: "คอนโซลผู้ดูแล",
    haveSubMenu: false,
    subMenu: [],
    icon: "fa-solid fa-terminal",
    path: "/admin"
  },
]
</script>

<style>
.router-link-active,
.router-link-exact-active,
.router-link-active span,
.router-link-exact-active span,
.router-link-active i,
.router-link-exact-active i {
  color: #084f93;
}

.v-list-item--active,
.v-list-item--active .v-list-item__content div p,
.v-list-item--active .v-list-item__content div i,
.v-list-item--active .v-list-item-subtitle span,
.v-list-item--active .v-list-item__content {
  color: #084f93 !important;
}

.v-list-item--active .v-list-item__overlay {
  background-color: white;
}

.v-list-item__append i {
  font-size: 14px !important;
}

.v-navigation-drawer--left {
  border: none !important;
}

@media screen and (max-width: 1024px) {
  .business-nav {
    /* display: none; */
    @apply translate-x-0;
  }
  .menu-nav {
    margin-left: 0;
  }
}
</style>
