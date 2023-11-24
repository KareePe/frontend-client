<script setup lang="ts">
import { ref } from "vue"

import ModalPrint from "@/components/Print/ModalPrint.vue"

const alertOpen = ref(false)
</script>

<template>
  <div class="navbar px-4 max-[900px]:!justify-center">
    <div class="max-[900px]:hidden">
      <v-btn
        prepend-icon="fa-solid fa-download"
        color="#084F93"
        variant="outlined"
        class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] btn-download btn-icon"
      >
        ดาวน์โหลด PDF
      </v-btn>
    </div>

    <div class="space-x-4 max-[900px]:hidden">
      <v-btn
        prepend-icon="fa-solid fa-print"
        color="#084F93"
        variant="flat"
        class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] btn-icon px-10 w-[180px]"
      >
        สั่งพิมพ์
      </v-btn>
      <v-btn
        prepend-icon="fa-solid fa-check"
        color="#084F93"
        variant="outlined"
        class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] btn-icon px-5"
      >
        ทำเครื่องหมายปริ้นแล้ว
      </v-btn>
      <v-btn
        color="#BA1A1A"
        variant="outlined"
        class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] btn-icon px-12 w-[200px]"
      >
        ปิด
      </v-btn>
    </div>

    <div class="min-[900px]:hidden flex justify-center items-center space-x-2">
      <v-menu location="bottom center">
        <template v-slot:activator="{ props }">
          <div
            class="flex justify-center items-center space-x-2 cursor-pointer"
            v-bind="props"
          >
            <div>ชื่อไฟล์.pdf</div>
            <v-icon color="#084F93" class="mb-1" size="16"
              >fa-solid fa-chevron-down</v-icon
            >
          </div>
        </template>

        <v-list class="!rounded-lg !w-fit">
          <v-list-item>
            <v-list-item-title>
              <v-btn
                prepend-icon="fa-solid fa-download"
                variant="text"
                class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] btn-download btn-icon"
              >
                ดาวน์โหลด PDF
              </v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn
                prepend-icon="fa-solid fa-print"
                variant="text"
                class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] btn-download btn-icon"
              >
                สั่งพิมพ์
              </v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn
                prepend-icon="fa-solid fa-check"
                variant="text"
                class="rounded-lg text-[14px] [&>span]:leading-[20px] tracking-[-0.032px] btn-download btn-icon"
              >
                ทำเครื่องหมายปริ้นแล้ว
              </v-btn></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>

      <v-icon size="20" class="!absolute right-4 cursor-pointer"
        >fa-solid fa-close</v-icon
      >
    </div>
  </div>

  <div class="backgroundPrint"></div>

  <ModalPrint :open="alertOpen" />
</template>

<style scoped>
.navbar {
  display: flex;
  width: 100%;
  height: 72px;
  padding-left: 0px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: #fff;
}

.backgroundPrint {
  display: flex;
  width: 100%;
  height: calc(100% - 72px);
  min-width: 100vw;
  padding: 148px 16px 16px 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  background: #c7c6ca;
}
</style>

<style>
.btn-download {
  @apply px-10;
}
.btn-icon span i {
  @apply mb-1;
}
</style>
