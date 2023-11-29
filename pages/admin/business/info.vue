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

              <v-btn min-width="164" @click="dialogContact = true">อัพเดท</v-btn>
            </v-col>

            <v-col cols="12" class="p-4 border-t flex justify-between items-center">
              <div>
                <v-card-title class="text-h6 text-md-h5 text-lg-h4">ยืนยันตัวตน</v-card-title>
                <v-card-subtitle>ดำเนินการยืนยันตัวตนเพื่อเปิดใช้งาน Delivery service กับ SalesX</v-card-subtitle>
              </div>

              <v-btn min-width="164" @click="dialogVerify = true">ดำเนินการต่อ</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>

  <v-dialog
    v-model="dialogContact"
    persistent
    class="max-w-2xl">
    <v-card>
      <v-card-title>
        <span class="text-h5">ที่อยู่</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4">
              <v-text-field
                label="Legal first name*"
                required></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4">
              <v-text-field
                label="Legal middle name"
                hint="example of helper text only on focus"></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4">
              <v-text-field
                label="Legal last name*"
                hint="example of persistent helper text"
                persistent-hint
                required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="dialogContact = false">
          Close
        </v-btn>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="dialogContact = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog
    v-model="dialogVerify"
    persistent
    class="max-w-2xl">
    <v-card>
      <v-card-title>
        <span class="text-h5">ยืนยันตัวตน</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4">
              <v-text-field
                label="Legal first name*"
                required></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4">
              <v-text-field
                label="Legal middle name"
                hint="example of helper text only on focus"></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4">
              <v-text-field
                label="Legal last name*"
                hint="example of persistent helper text"
                persistent-hint
                required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="dialogVerify = false">
          Close
        </v-btn>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="dialogVerify = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

const dialogContact = ref(false);
const dialogVerify = ref(false);
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