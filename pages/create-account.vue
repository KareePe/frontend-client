<template>
  <div
    :class="`bg-white w-full ${
      step < 4 ? 'h-full' : ''
    } flex justify-center lg:items-center items-start`"
  >
    <div>
      <img
        src="/images/SALESX_TECHNOLOGIES_LOGO_FINAL_PRIMARY_VERSION-01.png"
        class="md:max-w-[200px] max-w-[100px] lg:mb-[15px] ml-[50%] lg:mt-0 my-[30px] -translate-x-[50%]"
        alt=""
        v-if="step < 4"
      />

      <div
        v-if="step === 1"
        class="box-regis gap-[45px] mt-[20px] lg:p-0 p-[25px]"
      >
        <div
          class="lg:order-first -order-first lg:basis-6/12 basis-full md:p-0 p-[15px]"
        >
          <p class="text-[#74777F] text-[22px] mb-[25px]">Get started !</p>
          <v-form
            ref="forms"
            v-model="valid"
            lazy-validation
            class="lg:mb-0 mb-[35px]"
          >
            <v-text-field
              label="ชื่อธุรกิจ"
              v-model="inputData.bizName"
              variant="outlined"
              class="lg:!max-w-[358px] lg:w-[358px] max-w-full w-full !min-h-[56px] !rounded-[8px]"
              :rules="[(v) => !!v || 'กรุณาใส่ชื่อธุรกิจ']"
            ></v-text-field>
            <p class="text-[14px] text-[#74777F] mb-[15px]">
              ระบุจำนวนพนักงานของคุณ
            </p>
            <v-radio-group
              v-model="inputData.radios"
              :hide-details="true"
              class="justify-between flex"
            >
              <v-radio
                value="Google"
                density="compact"
                :hide-details="true"
                class="flex justify-between flex-row-reverse h-[30px] mb-[15px]"
              >
                <template v-slot:label>
                  <p class="!text-[#1A1C1E] text-[14px]">1 คน</p>
                </template>
              </v-radio>
              <v-radio
                value="Google"
                density="compact"
                :hide-details="true"
                class="flex justify-between flex-row-reverse h-[30px] mb-[15px]"
              >
                <template v-slot:label>
                  <p class="!text-[#1A1C1E] text-[14px]">2 - 9 คน</p>
                </template>
              </v-radio>
              <v-radio
                value="Google"
                density="compact"
                :hide-details="true"
                class="flex justify-between flex-row-reverse h-[30px] mb-[15px]"
              >
                <template v-slot:label>
                  <p class="!text-[#1A1C1E] text-[14px]">10 - 20 คน</p>
                </template>
              </v-radio>
              <v-radio
                value="Google"
                density="compact"
                :hide-details="true"
                class="flex justify-between flex-row-reverse h-[30px] mb-[15px]"
              >
                <template v-slot:label>
                  <p class="!text-[#1A1C1E] text-[14px]">21 คนขึ้นไป</p>
                </template>
              </v-radio>
            </v-radio-group>
            <v-select
              label="ประเภทธุรกิจ"
              v-model="inputData.bizType"
              class="!min-h-[48px]"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
              clearable
              :rules="[(v) => !!v || 'กรุณากรอกเลือกประเภทธุรกิจ']"
            ></v-select>
          </v-form>
          <v-btn
            color="#084F93"
            flat
            class="text-white lg:!block !hidden !rounded-[8px] w-full !h-[48px]"
            :loading="loading"
            @click="fn_nextStep"
          >
            <v-icon color="#fff">fa-solid fa-chevron-right</v-icon>
            ถัดไป
          </v-btn>

          <div
            class="lg:!hidden !flex h-[57px] border-t border-[#EEEDF1] fixed w-full left-0 bottom-0 bg-white justify-end items-center"
          >
            <v-btn flat @click="fn_nextStep" class="flex gap-[15px]">
              <p class="text-[#084F93] text-[14px]">ถัดไป</p>
              <v-icon color="#084F93">fa-solid fa-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>
        <div
          class="items-center justify-center lg:basis-6/12 basis-full md:p-0 p-[15px]"
        >
          <div
            class="h-[fit-content] w-full rounded-[8px] bg-gradient-to-r from-[#074F95] to-[#00AC86] p-[1px]"
          >
            <div
              class="flex h-full w-full items-start justify-center bg-white rounded-[8px] p-[15px]"
            >
              <div>
                <div class="text-center">
                  <p class="text-[#74777F] text-[14px]">
                    จัดการทุกออเดอร์ไม่มีสะดุด ด้วย
                    <span class="text-[20px] text-[#00AA84]">SalesX</span>
                    <br />
                    <span class="text-[16px] text-[#084F93] font-bold"
                      >“บริหารจบในระบบเดียว”</span
                    ><br />
                    กับฟีเจอร์สำหรับร้านค้าออนไลน์ที่มีให้อย่างครบครัน
                  </p>
                </div>

                <div class="my-[15px] flex justify-around items-start">
                  <img src="/images/02.svg" alt="" />
                  <img src="/images/01.svg" alt="" />
                </div>

                <hr class="bg-[#EEEDF1] w-full h-[1px] mb-[15px]" />

                <p
                  :class="`lg:hidden ${
                    showOption === false ? 'block' : 'hidden'
                  } cursor-pointer text-[14px] text-[#0ba5ec] underline decoration-1 pb-[15px] text-center`"
                  @click="showOption = true"
                >
                  มีจุดเด่นอะไรบ้าง
                </p>

                <div
                  :class="`lg:block ${
                    showOption === true ? 'block' : 'hidden'
                  }`"
                >
                  <div
                    class="flex flex-nowrap gap-[30px] items-start mb-[15px]"
                  >
                    <v-icon color="#084F93" size="small" class="mt-[5px]"
                      >fa-solid fa-arrows-to-circle</v-icon
                    >
                    <p class="text-[14px] text-[#74777F]">
                      รวบรวมออเดอร์จากทุกช่องทางการขาย ไว้ในที่เดียว
                    </p>
                  </div>
                  <div
                    class="flex flex-nowrap gap-[30px] items-start mb-[15px]"
                  >
                    <v-icon color="#084F93" size="small" class="mt-[5px]"
                      >fa-solid fa-arrows-to-circle</v-icon
                    >
                    <p class="text-[14px] text-[#74777F]">
                      สร้างรายการสินค้า (Catalog) ได้ด้วยตัวเอง
                    </p>
                  </div>
                  <div
                    class="flex flex-nowrap gap-[30px] items-start mb-[15px]"
                  >
                    <v-icon color="#084F93" size="small" class="mt-[5px]"
                      >fa-solid fa-boxes-stacked</v-icon
                    >
                    <p class="text-[14px] text-[#74777F]">
                      ตัดสต็อก เพิ่มสต็อก - แบบ Real time
                    </p>
                  </div>
                  <div
                    class="flex flex-nowrap gap-[30px] items-start mb-[15px]"
                  >
                    <v-icon color="#084F93" size="small" class="mt-[5px]"
                      >fa-solid fa-truck-ramp-box</v-icon
                    >
                    <p class="text-[14px] text-[#74777F]">
                      เชื่อมต่อกับระบบขนส่ง - รับสินค้าถึงหน้าบ้าน
                    </p>
                  </div>
                  <div
                    class="flex flex-nowrap gap-[30px] items-start mb-[15px]"
                  >
                    <v-icon color="#084F93" size="small" class="mt-[5px]"
                      >fa-solid fa-square-poll-vertical</v-icon
                    >
                    <p class="text-[14px] text-[#74777F]">
                      ระบบ Dashboard รายงานผลประกอบการแบบเข้าใจง่าย
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="">
          <p>จัดการทุกออเดอร์ไม่มีสะดุด ด้วย</p>
        </div> -->
      </div>

      <div
        class="lg:border border-0 border-[#EEEDF1] rounded-[8px] w-[410px] h-auto p-[16px]"
        v-if="step === 2"
      >
        <div class="text-center mb-[15px]">
          <p class="text-[#74777F] text-[14px] my-[15px]">
            ระบุข้อมูลสำหรับติดต่อ เจ้าหน้าที่เราอาจติดต่อคุณ เพื่อช่วยเหลือ
            สนับสนุนการใช้งาน
          </p>
        </div>

        <v-form ref="forms" v-model="valid" lazy-validation>
          <v-text-field
            variant="outlined"
            density="compact"
            label="ชื่อ-สกุล"
            placeholder="ชื่อ-สกุล"
            :rules="[(v) => !!v || 'กรุณาใส่ชื่อ-สกุล']"
          ></v-text-field>
          <v-text-field
            variant="outlined"
            density="compact"
            label="อีเมล"
            placeholder="อีเมล"
            :rules="[(v) => !!v || 'กรุณาใส่อีเมล']"
          ></v-text-field>
          <v-text-field
            variant="outlined"
            density="compact"
            label="เบอร์โทรติดต่อ"
            placeholder="เบอร์โทรติดต่อ"
            :rules="[(v) => !!v || 'กรุณาใส่เบอร์โทรติดต่อ']"
          ></v-text-field>

          <v-checkbox v-model="checkbox">
            <template v-slot:label>
              <div class="flex items-start gap-[15px]">
                <p class="text-[14px] text-[#000]">
                  ข้าพเจ้าได้อ่านและยอมรับ
                  <span class="text-[#084F93]" @click="openDialogPolicy = true"
                    >นโยบายความเป็นส่วนตัว</span
                  >
                </p>
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <div
                      class="border border-[#000] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    >
                      <v-icon size="10px" v-bind="props"
                        >fa-solid fa-info</v-icon
                      >
                    </div>
                  </template>
                  Opens in new window
                </v-tooltip>
              </div>
            </template>
          </v-checkbox>
        </v-form>

        <div class="flex justify-between">
          <v-btn
            color="#084F93"
            flat
            class="lg:!block !hidden text-white !rounded-[8px] w-full !h-[48px]"
            :loading="loading"
            @click="fn_nextStep"
          >
            <v-icon color="#fff">fa-solid fa-chevron-right</v-icon>
            ถัดไป
          </v-btn>
        </div>
        <div
          class="lg:!hidden !flex h-[57px] border-t border-[#EEEDF1] fixed w-full left-0 bottom-0 bg-white justify-between items-center"
        >
          <v-btn flat @click="fn_prevStep" class="flex gap-[15px]">
            <v-icon color="#084F93">fa-solid fa-chevron-left</v-icon>
            <p class="text-[#084F93] text-[14px]">ย้อนกลับ</p>
          </v-btn>
          <v-btn flat @click="fn_nextStep" class="flex gap-[15px]">
            <p class="text-[#084F93] text-[14px]">ถัดไป</p>
            <v-icon color="#084F93">fa-solid fa-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>

      <div
        class="lg:!border md:border-0 relative border-[#EEEDF1] rounded-[8px] w-[410px] h-auto p-[20px]"
        v-if="step === 3"
      >
        <div class="flex gap-[15px] mb-[15px]">
          <v-btn
            flat
            @click="fn_randomPassword"
            class="w-72 !h-[48px] !rounded-[8px] !border !border-[#084F93] text-center"
          >
            <i
              class="fa-solid fa-shuffle text-[18px] text-[#084F93] mr-[10px]"
            ></i>
            <p class="text-[14px] text-[#084F93]">สุ่มรหัสผ่าน</p>
          </v-btn>
          <v-btn
            flat
            :disabled="randomWord === ''"
            @click="copyToClipboard"
            class="w-[48px] !h-[48px] !rounded-[8px] !border !border-[#084F93]"
          >
            <i class="fa-regular fa-copy text-[18px] text-[#084F93]"></i>
          </v-btn>
        </div>
        <p class="my-[15px] text-[#74777f] text-[14px] text-center">
          หรือกำหนดรหัสผ่าน
        </p>
        <v-form ref="forms" v-model="valid" lazy-validation>
          <v-text-field
            variant="outlined"
            density="compact"
            label="ระบุรหัสผ่าน"
            placeholder="ระบุรหัสผ่าน"
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
              !showpasswordConfirm
                ? 'fa-regular fa-eye'
                : 'fa-regular fa-eye-slash'
            "
            :rules="[(v) => !!v || 'กรุณาใส่รหัสผ่าน']"
          ></v-text-field>

          <v-checkbox v-model="checkboxCondition" density="compact">
            <template v-slot:label>
              <div class="flex items-start gap-[15px]">
                <p class="text-[14px] text-[#000]">
                  ข้าพเจ้าได้อ่านและยอมรับ
                  <span class="text-[#084F93]" @click="openDialogPolicy = true"
                    >เงื่อนไขการใช้บริการ</span
                  >
                </p>
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <div
                      class="border border-[#000] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    >
                      <v-icon size="10px" v-bind="props"
                        >fa-solid fa-info</v-icon
                      >
                    </div>
                  </template>
                  Opens in new window
                </v-tooltip>
              </div>
            </template>
          </v-checkbox>
          <v-checkbox v-model="checkbox" density="compact" hide-detail>
            <template v-slot:label>
              <div class="flex items-start gap-[15px]">
                <p class="text-[14px] text-[#000]">
                  ต้องการรับข่าวสารจาก SaleX
                </p>
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <div
                      class="border border-[#000] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    >
                      <v-icon size="10px" v-bind="props"
                        >fa-solid fa-info</v-icon
                      >
                    </div>
                  </template>
                  Opens in new window
                </v-tooltip>
              </div>
            </template>
          </v-checkbox>
        </v-form>

        <div class="flex justify-between">
          <v-btn
            color="#084F93"
            flat
            class="lg:!block !hidden text-white !rounded-[8px] w-full !h-[40px]"
            :disabled="
              valid === false ||
              randomWord === '' ||
              checkboxCondition === false
            "
            :loading="loading"
            @click="fn_nextStep"
          >
            <v-icon><i class="fa-solid fa-check"></i></v-icon>
            <p>เสร็จสิ้น</p>
          </v-btn>
        </div>
        <div
          class="lg:!hidden !flex h-[57px] border-t border-[#EEEDF1] fixed w-full left-0 bottom-0 bg-white justify-between items-center"
        >
          <v-btn flat @click="fn_prevStep" class="flex gap-[15px]">
            <v-icon color="#084F93">fa-solid fa-chevron-left</v-icon>
            <p class="text-[#084F93] text-[14px]">ย้อนกลับ</p>
          </v-btn>
          <v-btn flat @click="fn_nextStep" class="flex gap-[15px]">
            <p class="text-[#084F93] text-[14px]">ถัดไป</p>
            <v-icon color="#084F93">fa-solid fa-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>

  <div
    class="border-0 top-0 border-[#EEEDF1] h-auto p-[20px] w-full"
    v-if="step === 4"
  >
    <div
      class="lg:hidden fixed flex justify-center items-center bg-white w-full left-0 top-0 pt-[20px] z-50"
    >
      <p class="text-[#000]/[0.6] text-[16px] font-bold -mt-[5px]">
        เลือกแพคเก็จ
      </p>
      <v-btn
        flat
        @click="fn_prevStep"
        destiny="compact"
        class="flex gap-[15px] !h-[25px] !absolute left-0 top-[15px]"
      >
        <v-icon color="#084F93">fa-solid fa-chevron-left</v-icon>
      </v-btn>
    </div>

    <p class="text-[#084F93] text-[22px] my-[25px]">แพ็คเก็จ</p>
    <div class="lg:flex block flex-nowrap gap-[15px]">
      <div
        class="h-[fit-content] basis-4/12 rounded-[8px] bg-gradient-to-r from-[#074F95] to-[#00AC86] p-[1px]"
      >
        <div class="flex h-full w-full bg-white rounded-[8px] p-[15px]">
          <div class="w-full">
            <div
              class="h-[30px] w-full py-[4px] px-[8px] text-center bg-gradient-to-r from-[#074F95] to-[#00AC86] !rounded-[8px] mb-[15px]"
            >
              <p class="text-white text-[16px]">เหมาะสมกับธุรกิจของคุณ</p>
            </div>
            <div
              class="border border-[#EEEDF1] p-[15px] !rounded-[8px] mb-[15px]"
            >
              <div
                class="flex justify-center items-center w-full gap-[15px] mb-[15px]"
              >
                <p class="text-[22px] font-bold text-[#084F93]">Standard</p>
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <div
                      class="border border-[#000] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    >
                      <v-icon size="10px" v-bind="props"
                        >fa-solid fa-info</v-icon
                      >
                    </div>
                  </template>
                  Opens in new window
                </v-tooltip>
              </div>
              <div
                class="bg-[#FAF9FD] text-center p-[8px] rounded-[8px] h-[42px] w-full mb-[15px]"
              >
                <p class="text-[#084F93] text-[22px] font-bold">
                  1,500 <span class="font-normal">฿ / เดือน</span>
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  สร้างคำสั่งซื้อไม่จำกัด
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  สามารถใช้งานได้ 2 ผู้ใช้งาน
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">ใช้งานได้ 30 วัน</p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-start mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  สร้างร้านค้าย่อยได้ 5 ร้าน
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  เชื่อมต่อเพจได้สูงสุด 10 เพจ
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  เก็บข้อมูลได้สูงสุด 3 ปี
                </p>
              </div>
            </div>
            <v-btn
              @click="fn_nextStep"
              flat
              class="!bg-[#084f93] text-white !h-[40px] !rounded-[8px] w-full"
            >
              ทกลองใช้ฟรี 30 วัน
            </v-btn>
          </div>
        </div>
      </div>
      <div
        class="h-[fit-content] basis-4/12 rounded-[8px] bg-gradient-to-r from-transparent to-transparent p-[1px]"
      >
        <div class="flex h-full w-full bg-white rounded-[8px] p-[15px]">
          <div class="w-full">
            <div
              class="h-[30px] w-full py-[4px] px-[8px] text-center bg-gradient-to-r from-transparent to-transparent !rounded-[8px] mb-[15px]"
            >
              <p class="text-white text-[16px]"></p>
            </div>
            <div
              class="border border-[#EEEDF1] p-[15px] !rounded-[8px] mb-[15px]"
            >
              <div
                class="flex justify-center items-center w-full gap-[15px] mb-[15px]"
              >
                <p class="text-[22px] font-bold text-[#084F93]">Business</p>
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <div
                      class="border border-[#000] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    >
                      <v-icon size="10px" v-bind="props"
                        >fa-solid fa-info</v-icon
                      >
                    </div>
                  </template>
                  Opens in new window
                </v-tooltip>
              </div>
              <div
                class="bg-[#FAF9FD] text-center p-[8px] rounded-[8px] h-[42px] w-full mb-[15px]"
              >
                <p class="text-[#084F93] text-[22px] font-bold">
                  3,000 <span class="font-normal">฿ / เดือน</span>
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  สร้างคำสั่งซื้อไม่จำกัด
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  สามารถใช้งานได้ 2 ผู้ใช้งาน
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">ใช้งานได้ 30 วัน</p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-start mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  สร้างร้านค้าย่อยได้ 5 ร้าน
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  เชื่อมต่อเพจได้สูงสุด 10 เพจ
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  เก็บข้อมูลได้สูงสุด 3 ปี
                </p>
              </div>
            </div>
            <v-btn
              @click="fn_nextStep"
              flat
              class="!bg-[#084f93] text-white !h-[40px] !rounded-[8px] w-full"
            >
              ทกลองใช้ฟรี 30 วัน
            </v-btn>
          </div>
        </div>
      </div>
      <div
        class="h-[fit-content] basis-4/12 rounded-[8px] bg-gradient-to-r from-transparent to-transparent p-[1px]"
      >
        <div class="flex h-full w-full bg-white rounded-[8px] p-[15px]">
          <div class="w-full">
            <div
              class="h-[30px] w-full py-[4px] px-[8px] text-center bg-gradient-to-r from-transparent to-transparent !rounded-[8px] mb-[15px]"
            >
              <p class="text-white text-[16px]"></p>
            </div>
            <div
              class="border border-[#EEEDF1] p-[15px] !rounded-[8px] mb-[15px]"
            >
              <div
                class="flex justify-center items-center w-full gap-[15px] mb-[15px]"
              >
                <p class="text-[22px] font-bold text-[#084F93]">Business +</p>
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <div
                      class="border border-[#000] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    >
                      <v-icon size="10px" v-bind="props"
                        >fa-solid fa-info</v-icon
                      >
                    </div>
                  </template>
                  Opens in new window
                </v-tooltip>
              </div>
              <div
                class="bg-[#FAF9FD] text-center p-[8px] rounded-[8px] h-[42px] w-full mb-[15px]"
              >
                <p class="text-[#084F93] text-[22px] font-bold">
                  6,000 <span class="font-normal">฿ / เดือน</span>
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  สร้างคำสั่งซื้อไม่จำกัด
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  สามารถใช้งานได้ 2 ผู้ใช้งาน
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">ใช้งานได้ 30 วัน</p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-start mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  สร้างร้านค้าย่อยได้ 5 ร้าน
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  เชื่อมต่อเพจได้สูงสุด 10 เพจ
                </p>
              </div>
              <div class="flex flex-nowrap gap-[30px] items-center mb-[15px]">
                <i class="fa-solid fa-check text-[#084F93] text-[16px]"></i>
                <p class="text-[14px] text-[#74777F]">
                  เก็บข้อมูลได้สูงสุด 3 ปี
                </p>
              </div>
            </div>
            <v-btn
              @click="fn_nextStep"
              flat
              class="!bg-[#084f93] text-white !h-[40px] !rounded-[8px] w-full"
            >
              ทกลองใช้ฟรี 30 วัน
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex w-full justify-center" v-if="step === 5">
    <div
      class="lg:hidden fixed flex justify-center items-center bg-white w-full left-0 top-0 pt-[20px] z-50"
    >
      <p class="text-[#000]/[0.6] text-[16px] font-bold -mt-[5px]">
        การชำระเงิน
      </p>
      <v-btn
        flat
        @click="fn_prevStep"
        destiny="compact"
        class="flex gap-[15px] !h-[25px] !absolute left-0 top-[15px]"
      >
        <v-icon color="#084F93">fa-solid fa-chevron-left</v-icon>
      </v-btn>
    </div>
    <div class="lg:mt-[25px] mt-[55px]">
      <p class="text-[#084F93] text-[22px]">การชำระเงิน</p>
      <p class="text-[#74777F] text-[14px]">
        เลือกรูปแบบการชำระค่าแพ็คเกจ ตามที่คุณต้องการ
      </p>

      <div class="my-[15px]" v-if="payment === ''">
        <div
          @click="payment = 'credit'"
          class="cursor-pointer md:!w-[390px] w-full !h-[56px] !rounded-[8px] border border-[#eeedf1] flex justify-between items-center px-[15px] mb-[15px]"
        >
          <div class="flex gap-[15px] items-center">
            <i class="fa-regular fa-credit-card text-[24px]"></i>
            <p class="text-[#1a1c1e] text-[16px]">Credit or Debit card</p>
          </div>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div
          @click="payment = 'qr'"
          class="cursor-pointer md:!w-[390px] w-full !h-[56px] !rounded-[8px] border border-[#eeedf1] flex justify-between items-center px-[15px] mb-[15px]"
        >
          <div class="flex gap-[15px] items-center">
            <i class="fa-solid fa-qrcode text-[24px]"></i>
            <p class="text-[#1a1c1e] text-[16px]">QR Promptpay</p>
          </div>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        <v-btn
          @click="fn_prevStep"
          flat
          class="w-full !h-[48px] !rounded-[8px] !border !border-[#084F93] !text-[#084F93] flex justify-center items-center"
        >
          กลับ
        </v-btn>
      </div>

      <div class="my-[15px] lg:flex block gap-[25px]" v-if="payment !== ''">
        <div
          class="h-[fit-content] !max-w-[390px] w-[390px] rounded-[8px] bg-gradient-to-r from-[#074F95] to-[#00AC86] p-[1px]"
        >
          <div class="flex h-full w-full bg-white rounded-[8px] p-[15px]">
            <div class="w-full">
              <div
                class="flex justify-center items-center w-full gap-[15px] mb-[15px]"
              >
                <p class="text-[22px] font-bold text-[#084F93]">Standard</p>
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <div
                      class="border border-[#000] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    >
                      <v-icon size="10px" v-bind="props"
                        >fa-solid fa-info</v-icon
                      >
                    </div>
                  </template>
                  Opens in new window
                </v-tooltip>
              </div>
              <div
                class="bg-[#FAF9FD] text-center p-[8px] rounded-[8px] h-[42px] w-full mb-[15px]"
              >
                <p class="text-[#084F93] text-[22px] font-bold">
                  1,500 <span class="font-normal">฿ / เดือน</span>
                </p>
              </div>
              <div
                class="flex flex-nowrap gap-[30px] justify-between items-center mb-[15px]"
              >
                <p class="text-[14px] text-[#000]/[0.6]">
                  วันที่เริ่มเป็นสมาชิก
                </p>
                <p class="text-[14px] text-[#000]/[0.6]">1 ธ.ค. 2564</p>
              </div>
              <div
                class="flex flex-nowrap gap-[30px] justify-between items-center mb-[15px]"
              >
                <p class="text-[14px] text-[#000]/[0.6]">
                  ทดลองใช้งานฟรี 30 วัน ถึง
                </p>
                <p class="text-[14px] text-[#000]/[0.6]">1 ธ.ค. 2564</p>
              </div>
              <div
                class="flex flex-nowrap gap-[30px] justify-between items-center mb-[15px]"
              >
                <p class="text-[14px] text-[#000]/[0.6]">
                  วันเรียกเก็บเงินครั้งแรก
                </p>
                <p class="text-[14px] text-[#000]/[0.6]">2 ธ.ค. 2564</p>
              </div>
              <div
                class="flex flex-nowrap gap-[30px] justify-between items-center mb-[15px]"
              >
                <p class="text-[14px] text-[#000]/[0.6]">
                  เรียกเก็บเงินเดือนละ
                </p>
                <p class="text-[14px] text-[#000]/[0.6]">1,500 ฿</p>
              </div>
              <div
                class="flex flex-nowrap gap-[30px] justify-between items-center mb-[15px]"
              >
                <p class="text-[14px] text-[#000]/[0.6]">ส่วนลด</p>
                <p class="text-[14px] text-[#000]/[0.6]">100 ฿</p>
              </div>
              <div
                class="flex flex-nowrap gap-[30px] justify-between items-center mb-[15px]"
              >
                <p class="text-[16px] font-bold text-[#084F93]">ยอดสุทธิ</p>
                <p class="text-[16px] font-bold text-[#084F93]">1,400 ฿</p>
              </div>

              <div class="flex gap-[15px]">
                <v-text-field
                  label="โค้ดส่วนลด (ถ้ามี)"
                  v-model="coupon"
                  variant="outlined"
                  class="w-full !min-h-[56px] !rounded-[8px]"
                ></v-text-field>
                <v-btn
                  flat
                  :disabled="coupon === ''"
                  class="max-w-[120px] !min-h-[56px] !rounded-[8px] flex justify-center items-center !bg-[#084F93] text-white"
                  >ตกลง</v-btn
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="h-[fit-content] !max-w-[390px] w-[390px]"
          v-if="payment === 'credit'"
        >
          <p class="text-[#000]/[0.6] text-[16px] font-bold mb-[15px]">
            ข้อมูลบัตร
          </p>

          <v-text-field
            label="หมายเลขบัตร"
            variant="outlined"
            class="w-full !min-h-[56px] !rounded-[8px]"
          ></v-text-field>

          <div class="flex gap-[15px]">
            <v-text-field
              label="วันหมดอายุ (ดด/ปป)"
              variant="outlined"
              class="w-full !min-h-[56px] !rounded-[8px]"
            ></v-text-field>
            <v-text-field
              label="CVV"
              variant="outlined"
              class="w-[110px] !min-h-[56px] !rounded-[8px]"
            ></v-text-field>
          </div>

          <v-text-field
            label="ชื่อเจ้าของบัตร"
            variant="outlined"
            class="w-full !min-h-[56px] !rounded-[8px]"
          ></v-text-field>

          <v-checkbox v-model="checkbox">
            <template v-slot:label>
              <div class="flex items-start gap-[15px]">
                <p class="text-[14px] text-[#000]">ยอมรับเงื่อนไขการชำระบัตร</p>
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <div
                      class="border border-[#000] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                    >
                      <v-icon size="10px" v-bind="props"
                        >fa-solid fa-info</v-icon
                      >
                    </div>
                  </template>
                  Opens in new window
                </v-tooltip>
              </div>
            </template>
          </v-checkbox>

          <div class="flex gap-[15px]">
            <v-btn
              flat
              @click="
                fn_prevStep();
                payment = '';
              "
              class="w-[50%] !border !border-[#084F93] !text-[#084F93] !rounded-[8px] !h-[48px]"
              >กลับ</v-btn
            >
            <v-btn
              flat
              @click="fn_paymentConfirm"
              class="w-[50%] !bg-[#084F93] !text-[#fff] !rounded-[8px] !h-[48px]"
              >ชำระเงิน</v-btn
            >
          </div>
        </div>
        <div class="h-[fit-content] !max-w-[390px] w-[390px]" v-else>
          <v-btn
            flat
            class="w-full !bg-[#084F93] !text-[#fff] !rounded-[8px] !h-[48px] my-[15px]"
            >บันทึก QR Code</v-btn
          >
          <div
            class="flex flex-nowrap gap-[30px] justify-between items-center mb-[15px]"
          >
            <p class="text-[14px] text-[#000]/[0.6]">เวลาที่เหลือในการชำระ</p>
            <p class="text-[14px] text-[#084F93]">10:00 นาที</p>
          </div>
          <div
            class="flex flex-nowrap gap-[30px] justify-between items-center mb-[15px]"
          >
            <p class="text-[14px] text-[#000]/[0.6]">ชื่อธนาคาร</p>
            <p class="text-[14px] text-[#000]">ธนาคารกสิกรไทย</p>
          </div>
          <div
            class="flex flex-nowrap gap-[30px] justify-between items-center mb-[15px]"
          >
            <p class="text-[14px] text-[#000]/[0.6]">ชื่อบัญชีธนาคาร</p>
            <p class="text-[14px] text-[#000]">บจก. ทีไน อินทิเกรทชั่น</p>
          </div>

          <div class="flex gap-[15px]">
            <v-btn
              flat
              @click="
                fn_prevStep();
                payment = '';
              "
              class="w-full !border !border-[#084F93] !text-[#084F93] !rounded-[8px] !h-[48px]"
              >กลับ</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <v-dialog v-model="openDialogPolicy" width="auto">
    <v-card class="!p-[15px] !rounded-[8px]">
      <div class="text-center mb-[15px] relative w-full">
        <p class="text-[20px] font-bold text-[#000]/[0.6]">
          เงื่อนไขการใช้บริการ
        </p>
        <v-btn
          flat
          class="!absolute top-0 right-0"
          @click="openDialogPolicy = false"
        >
          <icon><i class="fa-solid fa-xmark"></i></icon>
        </v-btn>
      </div>
      <v-card-text class="bg-[#F4F3F7] p-[16px] !rounded-[8px]">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?""At vero eos et accusamus et iusto odio
        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa qui officia deserunt
        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
        facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
        est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
        facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
        Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
        delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat."
      </v-card-text>
      <v-card-actions class="flex justify-center">
        <v-btn
          flat
          class="!bg-[#084F93] !w-[152px] !h-[40px] !rounded-[8px] text-white"
          @click="openDialogPolicy = false"
          >ตกลง</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="openDialogLoading" width="auto">
    <div
      class="bg-[#fff] p-[16px] !rounded-[8px] w-[240px] h-[190px] flex justify-center items-center"
    >
      <div class="text-center">
        <div class="spinner mt-[50px] mb-[60px] ml-[50%]"></div>
        <p class="text-[#000] text-[16px] ">กำลังดำเนินการ</p>
        <p class="text-[#000]/[0.6] text-[12px]">โปรดรอสักครู่</p>
      </div>
    </div>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

let inputData = ref({
  bizName: "",
  radios: "",
  bizType: null,
});

let valid = ref(true);
let checkboxCondition = ref(false);
let loading = ref(false);
let step = ref(1);

let openDialogPolicy = ref(false);
let openDialogLoading = ref(false);
let randomWord = ref("");

let passwordConfirm = ref("");
let password = ref("");
let showpasswordConfirm = ref(false);
let showpassword = ref(false);

let showOption = ref(false);

let payment = ref("");

let coupon = ref("");

const fn_nextStep = () => {
  step.value += 1;
};

const fn_prevStep = () => {
  step.value -= 1;
};

const fn_randomPassword = () => {
  loading.value = true;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let generatedWord = "";

  for (let i = 0; i < 8; i++) {
    // Change 8 to the desired length of the random word
    const randomIndex = Math.floor(Math.random() * characters.length);
    generatedWord += characters.charAt(randomIndex);
  }

  randomWord.value = generatedWord;
  passwordConfirm.value = generatedWord;
  password.value = generatedWord;

  loading.value = false;
};

const copyToClipboard = () => {
  const textarea = document.createElement("textarea");
  textarea.value = randomWord.value;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Copied to clipboard!");
};

const fn_paymentConfirm = () => {};
</script>

<style>
.box-regis {
  display: flex;
  flex-wrap: nowrap;
}

@media screen and (max-width: 1024px) {
  .box-regis {
    flex-wrap: wrap;
  }
}

.spinner {
  width: 11.2px;
  height: 11.2px;
  border-radius: 11.2px;
  box-shadow: 28px 0px 0 0 rgba(8, 79, 147, 0.2),
    22.7px 16.5px 0 0 rgba(8, 79, 147, 0.4),
    8.68px 26.6px 0 0 rgba(8, 79, 147, 0.6),
    -8.68px 26.6px 0 0 rgba(8, 79, 147, 0.8), -22.7px 16.5px 0 0 #084f93;
  animation: spinner-b87k6z 1s infinite linear;
}

@keyframes spinner-b87k6z {
  to {
    transform: rotate(360deg);
  }
}
</style>
