<template>
  <v-dialog :model-value="true" persistent width="380px">
    <v-card class="!rounded-lg">
      <v-card-text
        class="flex flex-col justify-center items-start relative !pb-0"
      >
        <div class="w-full flex justify-center items-center">
          <v-icon color="#BA1A1A" size="48">fa-solid fa-circle-info</v-icon>
          <div class="absolute right-5 cursor-pointer top-2">
            <v-icon>fa-solid fa-xmark</v-icon>
          </div>
        </div>
        <div class="text-[16px] font-[600] text-center space-y-1 mt-4">
          <div>คุณต้องการลบสินค้า ?</div>
          <div class="text-[12px] opacity-[0.6]">
            สินค้านี้จะถูกลบออกจากคลังที่เกี่ยวข้อง
            รวมไปถึงรายงานยอดขายในอดีตระดับสต็อก
            ข้อมูลทั้งหมดนี้จะถูกลบอย่างถาวร โปรดตรวจสอบให้แน่ใจก่อนกด “ตกลง”
          </div>
        </div>
      </v-card-text>
      <v-card-text class="flex flex-row space-x-2 !pt-2 mt-1">
        <v-btn class="w-1/2" color="#084F93" variant="outlined" rounded="lg">
          ยกเลิก
        </v-btn>
        <v-btn class="w-1/2" color="#084F93" variant="flat" rounded="lg">
          ตกลง
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
