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
]);
</script>
