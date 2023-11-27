<template>
  <AdminToolbars />
  <NavbarCallback :breadcrump="navBarNew" @nav-click="navBarNew.pop()" />
</template>

<script setup>
import { ref } from "vue";

const navBarNew = ref([
  {
    text: "คอนโซลผู้ดูแล",
    callback: async () => {
      await navigateTo('/admin')
    },
  },
  {
    text: "ข้อมูลธุรกิจ",
    callback: async () =>
      await navigateTo('/admin/business/info')
  },
  {
    text: "ทีมงาน",
    callback: () => { }
  },
]);
</script>

<style></style>