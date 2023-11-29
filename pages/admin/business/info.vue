<template>
  <AdminToolbars />
  <NavbarCallback :breadcrump="navBarNew" @nav-click="navBarNew.pop()" />

  <div class="lg:ml-72 p-4">
    <v-container class="mx-auto">
      <v-card class="max-w-4xl">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4">ข้อมูลธุรกิจ</v-card-title>
        <v-card-subtitle>อัพเดทโปรไฟล์ธุรกิจของคุณและรายละเอียดต่างๆได้ที่นี่</v-card-subtitle>

        <v-card-text class="text-h6">รายละเอียดธุรกิจของคุณ</v-card-text>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="businessCode"
                    :rules="nameRules"
                    :counter="10"
                    variant="outlined"
                    label="รหัสธุรกิจ"
                    required
                    hide-details></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    v-model="businessName"
                    :rules="nameRules"
                    :counter="10"
                    variant="outlined"
                    label="ชื่อธุรกิจ"
                    required
                    hide-details></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-textarea
                    name="businessAddress"
                    variant="outlined"
                    label="ที่อยู่"
                    auto-grow></v-textarea>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="6">
              <div class="h-full flex justify-center items-center">
                <v-file-input
                  :rules="rules"
                  variant="outlined"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Pick an avatar"
                  prepend-icon="fa-solid fa-camera"
                  label="อัพโหลด"></v-file-input>
              </div>
            </v-col>
          </v-row>

          <v-row class="p-4">
            <v-col cols="12" class="p-4 border-t flex justify-between items-center">
              <div>
                <v-card-title class="text-h6 text-md-h5 text-lg-h4">ข้อมูลติดต่อ</v-card-title>
                <v-card-subtitle>ข้อมูลติดต่อสำหรับติดต่อเรื่องทั่วไป</v-card-subtitle>
              </div>

              <v-btn min-width="164">อัพเดท</v-btn>
            </v-col>

            <v-col cols="12" class="p-4 border-t flex justify-between items-center">
              <div>
                <v-card-title class="text-h6 text-md-h5 text-lg-h4">ยืนยันตัวตน</v-card-title>
                <v-card-subtitle>ดำเนินการยืนยันตัวตนเพื่อเปิดใช้งาน Delivery service กับ SalesX</v-card-subtitle>
              </div>

              <v-btn min-width="164">ดำเนินการต่อ</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
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