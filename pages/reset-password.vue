<template>
    <div class="bg-white w-full h-full flex justify-center lg:items-center items-start">
      <div
        class="lg:border border-0 border-[#EEEDF1] rounded-[8px] w-[390px] h-auto p-[16px]"
        v-if="step === 1"
      >
        <div class="text-center mb-[15px]">
          <img
            src="/images/SALESX_TECHNOLOGIES_LOGO_FINAL_PRIMARY_VERSION-01.png"
            class="max-w-[100px] lg:mb-[15px] ml-[50%] lg:mt-0 my-[30px] -translate-x-[50%]"
            alt=""
          />
          <p class="font-bold text-[22px]">ยินดีต้อนรับ</p>
          <p class="text-[16px]">ระบุอีเมลเพื่อกู้รหัสผ่าน</p>
        </div>
  
        <v-form ref="forms" v-model="valid" lazy-validation>
          <v-text-field
            label="Email"
            v-model="email"
            variant="outlined"
            density="compact"
            :rules="[
              (v) =>
                (v == '' || null
                  ? false
                  : /[a-zA-Z0-9-_.]+@([a-zA-z]+\.)([a-zA-Z]{2,4}|[a-zA_Z]{2,4}.[a-zA-Z]{2,4})$/.test(
                      v
                    )) ||
                'รูปแบบไม่ถูกต้อง กรุณากรอกตามตัวอย่าง เช่น sam@gmail.com, me@outlook.co.th',
            ]"
          ></v-text-field>
        </v-form>
  
        <div class="flex justify-center">
          <v-btn
            color="#084F93"
            flat
            class="text-white !rounded-[8px] w-[120px] !h-[40px]"
            :disabled="valid === false || email === ''"
            :loading="loading"
            @click="fn_submit"
            >กู้รหัสผ่าน
          </v-btn>
        </div>
      </div>
      <div
        class="lg:border border-0 border-[#EEEDF1] rounded-[8px] w-[390px] h-auto p-[16px]"
        v-if="step === 2"
      >
        <div class="text-center mb-[15px]">
          <img
            src="/images/SALESX_TECHNOLOGIES_LOGO_FINAL_PRIMARY_VERSION-01.png"
            class="max-w-[100px] lg:mb-[15px] ml-[50%] lg:mt-0 my-[30px] -translate-x-[50%]"
            alt=""
          />
          <p class="font-bold text-[22px]">รีเซ็ตรหัสผ่าน</p>
          <div
            class="mt-[15px] border border-[#C4C6CF] flex gap-2 ml-[50%] -translate-x-[50%] rounded-[16px] py-[4px] px-[8px] w-[fit-content]"
          >
            <v-icon color="#C4C6CF" size="small">fa-solid fa-user</v-icon>
            <p class="text-[#74777F] text-[14px]">{{ email }}</p>
          </div>
          <p class="text-[#74777F] text-[14px] my-[15px]">
            กำหนดรหัสผ่านใหม่
          </p>
        </div>
  
        <v-form ref="forms" v-model="valid" lazy-validation>
            <v-text-field
            variant="outlined"
            density="compact"
            label="รหัสผ่าน"
            placeholder="รหัสผ่าน"
            v-model.trim="password"
            @click:append-inner="showpassword = !showpassword"
            :type="showpassword ? 'text' : 'password'"
            :append-inner-icon="
              !showpassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'
            "
            :rules="[(v) => !!v || 'กรุณาใส่รหัสผ่าน']"
          ></v-text-field>
          <v-text-field
            variant="outlined"
            density="compact"
            label="รหัสผ่านอีกครั้ง"
            placeholder="รหัสผ่านอีกครั้ง"
            v-model.trim="passwordConfirm"
            @click:append-inner="showpasswordConfirm = !showpasswordConfirm"
            :type="showpasswordConfirm ? 'text' : 'password'"
            :append-inner-icon="
              !showpasswordConfirm ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'
            "
            :rules="[(v) => !!v || 'กรุณาใส่รหัสผ่าน']"
          ></v-text-field>
        </v-form>
  
        <div class="flex justify-center">
          <v-btn
            color="#084F93"
            flat
            class="text-white !rounded-[8px] w-[fit-content] !h-[40px]"
            :disabled="valid === false || password !== passwordConfirm || password === ''"
            :loading="loading"
            @click="fn_create"
            >เปลี่ยนแปลงรหัส
          </v-btn>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const router = useRouter()
  
  let valid = ref(true);
  let email = ref("");
  let passwordConfirm = ref("")
  let password = ref("");
  let showpasswordConfirm = ref(false);
  let showpassword = ref(false);
  let loading = ref(false);
  let step = ref(1);
  
  const fn_submit = () => {
    step.value = 2;
  };
  
  const fn_create = () => {
    router.push("/");
  }
  </script>
  
  <style>
  .v-input__details {
    padding: 0;
  }
  </style>
  