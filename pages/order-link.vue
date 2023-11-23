<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue"

const route = useRoute()
const router = useRouter()
// onMounted(() => {
//   if (!route.query.id) {
//     router.replace("/order")
//   }
// })
</script>

<template>
  <div class="nav">
    <img src="~/assets/images/logo.png" width="150" />
    <v-btn
      prepend-icon="fa-solid fa-magnifying-glass"
      variant="outlined"
      class="!rounded-lg !min-h-[55px]"
      color="#084F93"
      >ค้นหาคำสั่งอื่นๆ</v-btn
    >
  </div>
</template>
<!-- <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> -->

<style scoped>
.nav {
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #f4f3f7;
  background: #fff;
}
</style>
