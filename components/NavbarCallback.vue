<template>
  <div class="flex justify-between p-4 md:ml-64 pt-[15px] items-center">
    <h1
      class="text-[16px] font-bold text-[#084F93]"
      v-if="breadcrump.length <= 1"
    >
      <span v-for="(item, index) in breadcrump" :key="index">{{
        item.text
      }}</span>
    </h1>

    <div class="flex" v-else>
      <nav
        class="flex"
        aria-label="Breadcrumb"
        v-for="(item, index) in breadcrump"
        :key="index"
      >
        <ol
          class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
        >
          <li class="inline-flex items-center cursor-pointer">
            <a
              @click="
                () => {
                  if (breadcrump[breadcrump.length - 1].text === item.text) {
                    
                  } else {
                    item.callback();
                  }
                }
              "
              :class="`inline-flex items-center text-[16px] ${
                index === breadcrump.length - 1
                  ? 'font-bold text-[#084F93]'
                  : 'text-[#C4C6CF]'
              }`"
            >
              {{ item.text }}
            </a>
          </li>
          <span
            class="mx-2 text-gray-400"
            v-if="index !== breadcrump.length - 1"
            >/</span
          >
        </ol>
      </nav>
    </div>

    <div>
      <div class="flex items-center ms-3">
        <div class="flex space-x-10 mr-10">
          <!-- [&>div]:bg-[#D1FADF] -->
          <v-btn
            variant="flat"
            class="[&>span>i]:text-[20px] [&>span>i]:text-[#084F93]"
            icon="fa-solid fa-wallet"
            density="compact"
          >
          </v-btn>
          <v-btn
            variant="flat"
            class="[&>span>i]:text-[20px] [&>span>i]:text-[#DAD9DD]"
            icon="fa-solid fa-comment"
            density="compact"
          >
          </v-btn>

          <v-btn
            variant="flat"
            class="!w-[24px] h-[24px]"
            icon=""
            density="compact"
          >
            <div class="w-6 h-6 bg-red-400 rounded-full"></div>
          </v-btn>
        </div>
        <div>
          <button
            type="button"
            class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded="false"
            data-dropdown-toggle="dropdown-user"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </button>
        </div>
        <div class="flex">
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
            id="dropdown-user"
          >
            <div class="px-4 py-3" role="none">
              <p class="text-sm text-gray-900 dark:text-white" role="none">
                Neil Sims
              </p>
              <p
                class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                role="none"
              >
                neil.sims@flowbite.com
              </p>
            </div>
            <ul class="py-1" role="none">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                  >Dashboard</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                  >Earnings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
// const { Breadcrumb } = defineProps(["Breadcrumb"]);

const props = defineProps({
  breadcrump: {
    type: Array,
    default: [],
  },
});

// const emits = defineEmits(["navClick"]);
// const fnEmitCall = () => {
//   emits("navClick");
// };
const { breadcrump } = props;
</script>

<style></style>
