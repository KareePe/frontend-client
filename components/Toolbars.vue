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
      :class="`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
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
        class="h-full bg-white border-r border-gray-200 overflow-y-auto py-5 ml-[62px]"
      >
        <div
          class="flex justify-between items-center mb-[15px] border-b border-[#000] pb-[20px] px-[10px]"
        >
          <div>
            <p class="text-[#084f93] text-[16px] font-bold">Business name</p>
            <p class="text-[#000]/[0.6] text-[12px]">Package name</p>
          </div>
          <i class="fa-solid fa-chevron-down"></i>
        </div>

        <ul class="space-y-2">
          <div v-for="(item, index) in menu_list" :key="index">
            <li class="h-[48px]" v-if="item.haveSubMenu === false">
              <NuxtLink
                :to="item.path"
                class="flex items-center p-2 text-base font-normal !text-[#43474E] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i :class="item.icon" class="!text-[#43474E]"></i>
                <span class="ml-3 !text-[#43474E]">{{ item.title }}</span>
              </NuxtLink>
            </li>
            <li class="min-h-[48px]" v-else>
            <button
              @click="showSubmenu(index)"
              type="button"
              class="flex items-center p-2 w-full text-base font-normal !text-[#43474E] rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
            <i :class="item.icon" class="!text-[#43474E]"></i>
              <span
                class="flex-1 ml-3 !text-[#43474E] text-left whitespace-nowrap"
                >{{ item.title }}</span
              >
              <svg
                aria-hidden="true"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <ul
              :id="`dropdown-${index}`"
              :class="
                submenu === index ? 'py-2 space-y-2' : 'hidden py-2 space-y-2'
              "
            >
              <li v-for="(itemSub, indexSub) in item.subMenu" :key="indexSub">
                <NuxtLink
                  :to="itemSub.path"
                  class="flex items-center p-2 pl-11 w-full text-base font-normal !text-[#43474E] rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >{{ itemSub.subtitle }}</NuxtLink
                >
              </li>
            </ul>
          </li>
          </div>
        </ul>
      </div>

      <!-- <div
        class="overflow-y-auto py-5 px-4 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <div
          class="flex justify-between items-center mb-[15px] border-b border-[#000] pb-[20px]"
        >
          <div>
            <p class="text-[#084f93] text-[16px] font-bold">Business name</p>
            <p class="text-[#000]/[0.6] text-[12px]">Package name</p>
          </div>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <ul class="space-y-2">
          <div v-for="(item, index) in menu_list" :key="index">
            <li class="h-[48px]" v-if="item.haveSubMenu === false">
              <NuxtLink
                :to="item.path"
                class="flex items-center p-2 text-base font-normal text-[#43474E] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <v-icon
                  :icon="item.icon"
                  class="text-[#43474E] w-6 h-6"
                ></v-icon>
                <span class="ml-3 text-[#43474E]">{{ item.title }}</span>
              </NuxtLink>
            </li>
            <li class="min-h-[48px]" v-else>
              <button
                @click="showSubmenu(index)"
                type="button"
                class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <v-icon
                  :icon="item.icon"
                  class="w-6 h-6 text-[#43474E]"
                ></v-icon>
                <span
                  class="flex-1 ml-3 text-[#43474E] text-left whitespace-nowrap"
                  >{{ item.title }}</span
                >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                :id="`dropdown-${index}`"
                :class="
                  submenu === index ? 'py-2 space-y-2' : 'hidden py-2 space-y-2'
                "
              >
                <li v-for="(itemSub, indexSub) in item.subMenu" :key="indexSub">
                  <NuxtLink
                    :to="itemSub.path"
                    class="flex items-center p-2 pl-11 w-full text-base font-normal text-[#43474E] rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >{{ itemSub.subtitle }}</NuxtLink
                  >
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </div> -->
    </aside>
  </div>
</template>

<script setup>
import { ref, mergeProps } from "vue";

let drawer = ref(true);
let submenu = ref(null);
let shownav = ref(false);

const showSubmenu = (item) => {
  submenu.value = submenu.value === item ? null : item;
};

const menu_list = [
  {
    title: "หน้าแรก",
    haveSubMenu: false,
    subMenu: [],
    icon: "fa-solid fa-house",
    path: "/",
  },
  {
    title: "ช่องทางการขาย",
    openExpand: false,
    haveSubMenu: true,
    subMenu: [
      {
        subtitle: "บัญชีผู้ใช้งาน",
        path: "/",
        disable: false,
      },
      {
        subtitle: "บัญชีธุรกิจ",
        path: "/",
        disable: false,
      },
      {
        subtitle: "ยืนยันตัวตน",
        path: "/",
        disable: false,
      },
      {
        subtitle: "สนับสนุนการขาย",
        path: "/",
        disable: false,
      },
    ],
    icon: "fa-solid fa-dollar-sign",
    disable: false,
  },
  {
    title: "คลังและสินค้า",
    openExpand: false,
    haveSubMenu: true,
    subMenu: [
      {
        subtitle: "ภาพรวม",
        path: "/overview",
        disable: false,
      },
      {
        subtitle: "สินค้า",
        path: "/product",
        disable: false,
      },
      {
        subtitle: "คลังสินค้า",
        path: "/warehouse",
        disable: false,
      },
    ],
    icon: "fa-solid fa-boxes-stacked",
    disable: false,
  }
];
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
