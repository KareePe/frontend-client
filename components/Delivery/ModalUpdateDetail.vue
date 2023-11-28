<script setup>
const { open } = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["onSubmit", "onClose"]);

const fnHandleClose = () => {
  emit("onClose");
};
</script>

<template>
  <v-dialog :model-value="open" class="w-full" width="560px" persistent>
    <v-card class="rounded-lg">
      <v-card-text class="flex justify-between items-center">
        <div
          class="text-title opacity-subTitle leading-[22px] font-[600] tracking-31"
        >
          ข้อมูลการจัดส่ง
        </div>
        <v-icon
          size="20"
          @click="fnHandleClose"
          class="cursor-pointer hover:text-[#084F93] transition-all"
          >fa-solid fa-close</v-icon
        >
      </v-card-text>
      <v-card-text>
        <div class="flex flex-col gap-4">
          <v-text-field
            label="ชื่อลูกค้า*"
            variant="outlined"
            hide-details
          ></v-text-field>
          <v-text-field
            label="เบอร์โทรศัพท์*"
            variant="outlined"
            hide-details
          ></v-text-field>
          <v-text-field
            label="ที่อยู่*"
            variant="outlined"
            hide-details
          ></v-text-field>
          <div class="flex gap-4">
            <v-text-field
              label="ตำบล*"
              variant="outlined"
              hide-details
            ></v-text-field>
            <v-text-field
              label="อำเภอ*"
              variant="outlined"
              hide-details
            ></v-text-field>
          </div>
          <div class="flex gap-4">
            <v-text-field
              label="จังหวัด*"
              variant="outlined"
              hide-details
            ></v-text-field>
            <v-text-field
              label="รหัสไปรษณีย์*"
              variant="outlined"
              hide-details
            ></v-text-field>
          </div>
          <v-text-field
            label="COD*"
            variant="outlined"
            hide-details
          ></v-text-field>
          <v-text-field
            label="หมายเหตุ"
            variant="outlined"
            hide-details
          ></v-text-field>
        </div>
        <div class="flex mt-3 w-full justify-end items-center gap-2 mb-[2px]">
          <v-btn
            color="#084F93"
            @click="fnHandleClose"
            class="rounded-lg w-[calc(35%)]"
            variant="outlined"
            >ยกเลิก</v-btn
          >
          <v-btn color="#084F93" class="rounded-lg w-[calc(35%)]" variant="flat"
            >อัพเดท</v-btn
          >
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
