<template>
  <AdminToolbars />
  <NavbarCallback :breadcrump="navBarNew" @nav-click="navBarNew.pop()" />

  <div class="lg:ml-72 p-4">
    <v-container class="mx-auto">
      <v-row justify="center">
        <v-col class="border">
          info
        </v-col>
      </v-row>
    </v-container>
  </div>
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
    callback: () => { }
  },

]);
</script>

<style></style>