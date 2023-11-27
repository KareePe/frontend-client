<template>
  <AdminToolbars />
  <NavbarCallback :breadcrump="navBarNew" @nav-click="navBarNew.pop()" />
</template>

<script setup>
import { ref } from "vue";

const navBarNew = ref([
  {
    text: "คอนโซลผู้ดูแล",
    callback: () => { },
  },
  {
    text: "ข้อมูลธุรกิจ",
    callback: () =>
      fnHandleNavbarback(2, () => {
        selectedWarehouse.value = null;
        selectedProduct.value = null;
        historyPage.value = false;
        createPOPage.value = false;
      }),
  },
]);
</script>

<style></style>