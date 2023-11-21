<template>
  <div class="bg-white w-full h-full flex justify-center items-center">
    <div
      class="border border-[#EEEDF1] rounded-[8px] w-[390px] h-auto p-[16px]"
      v-if="step === 1"
    >
      <div class="text-center mb-[15px]">
        <img
          src="/images/SALESX_TECHNOLOGIES_LOGO_FINAL_PRIMARY_VERSION-01.png"
          class="max-w-[100px] mb-[15px] ml-[50%] -translate-x-[50%]"
          alt=""
        />
        <p class="font-bold text-[22px]">ลงชื่อเข้าใช้</p>
        <p class="text-[16px]">เข้าสู่ระบบด้วยอีเมล</p>
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

      <div class="flex justify-between">
        <v-btn
          color="#084F93"
          variant="text"
          class="!text-[#0BA5EC] !rounded-[8px] w-[fit-content] !h-[40px] !text-left !p-0"
          @click="fn_createAccount"
          >สร้างบัญชี
        </v-btn>
        <v-btn
          color="#084F93"
          flat
          class="text-white !rounded-[8px] w-[100px] !h-[40px]"
          :disabled="valid === false || email === ''"
          :loading="loading"
          @click="fn_submit"
          >ถัดไป
        </v-btn>
      </div>
    </div>
    <div
      class="border border-[#EEEDF1] rounded-[8px] w-[390px] h-auto p-[16px]"
      v-if="step === 2"
    >
      <div class="text-center mb-[15px]">
        <img
          src="/images/SALESX_TECHNOLOGIES_LOGO_FINAL_PRIMARY_VERSION-01.png"
          class="max-w-[100px] mb-[15px] ml-[50%] -translate-x-[50%]"
          alt=""
        />
        <p class="font-bold text-[22px]">ยินดีต้อนรับ</p>
        <div
          class="mt-[15px] border border-[#C4C6CF] flex gap-2 ml-[50%] -translate-x-[50%] rounded-[16px] py-[4px] px-[8px] w-[fit-content]"
        >
          <v-icon color="#C4C6CF" size="small">fa-solid fa-user</v-icon>
          <p class="text-[#74777F] text-[14px]">{{ email }}</p>
        </div>
        <p class="text-[#74777F] text-[14px] my-[15px]">
          กรอกรหัสผ่านเพื่อเข้าสู่ระบบ
        </p>
      </div>

      <v-form ref="forms" v-model="valid" lazy-validation>
        <v-text-field
          variant="outlined"
          density="compact"
          label="Password"
          placeholder="Password"
          v-model.trim="password"
          @click:append-inner="showpassword = !showpassword"
          :type="showpassword ? 'text' : 'password'"
          :append-inner-icon="
            !showpassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'
          "
          :rules="[(v) => !!v || 'กรุณาใส่รหัสผ่าน']"
        ></v-text-field>
      </v-form>

      <div class="flex justify-between">
        <v-btn
          color="#084F93"
          variant="text"
          class="!text-[#0BA5EC] !rounded-[8px] w-[fit-content] !h-[40px] !text-left !p-0"
          @click="fn_resetPassword"
          >หากลืมรหัสผ่าน
        </v-btn>
        <v-btn
          color="#084F93"
          flat
          class="text-white !rounded-[8px] w-[100px] !h-[40px]"
          :disabled="valid === false || password === ''"
          :loading="loading"
          @click="fn_auth"
          >เข้าสู่ระบบ
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

const { authenticateUser } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const router = useRouter()

let valid = ref(true);
let email = ref("kminchelle");
let password = ref("0lelplR");
let showpassword = ref(false);
let loading = ref(false);
let step = ref(1);

const fn_submit = () => {
  step.value = 2;
};
const fn_createAccount = () => {
    router.push("/create-account");
};

const fn_resetPassword = () => {
    router.push("/reset-password");
};

const fn_auth = async () => {
  loading.value = true;
  const payload = {
    username: email.value,
    password: password.value,
  };

  await authenticateUser(payload);

  if (authenticated) {
    router.push("/");
  }
};
</script>

<style>
.v-input__details {
  padding: 0;
}
</style>
