<template>
  <Toolbars />
  <NavbarCallback :breadcrump="navBarNew" @nav-click="navBarNew.pop()" />
</template>

<script setup>
import { ref } from "vue";

const navBarNew = ref([
  {
    text: "คลังและสินค้า",
    callback: () => {},
  },
  {
    text: "ภาพรวม",
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

<style>

</style>