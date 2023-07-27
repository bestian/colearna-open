<template>
  <q-card class="editC-card">
    <div class="col flex-col flex-center">
      <q-form class="fluid">
        <div class="row flex flex-center">
          <div class="col flex flex-col">
            <q-img
              class="small-img margin"
              v-show="newClassImg"
              :src="newClassImg"
            ></q-img>
            <div class="row flex flex-center">
              <q-img class="avatar margin" v-show="myImg" :src="myImg"></q-img>
            </div>
          </div>
        </div>
        <q-form class="flex flex-start-center fluid row">
          <label class="text-gray margin"
            >課程Id <span class="red star">*</span></label
          >
          <q-input
            class="margin"
            outlined
            rounded
            v-model="newCid"
            placeholder="課程Id"
          >
          </q-input>
        </q-form>
        <q-form class="flex flex-start-center fluid row">
          <label class="text-gray margin">老師</label>

          <q-select
            filled
            v-model="newTeacherid"
            :options="getOptions()"
            option-value="id"
            option-label="name"
            option-disable="inactive"
            emit-value
            map-options
            style="min-width: 250px; max-width: 300px"
          />
        </q-form>

        <q-form class="flex flex-start-center fluid row">
          <label class="text-gray margin"
            >課程名稱 <span class="red star">*</span></label
          >
          <q-input
            class="margin"
            outlined
            rounded
            v-model="newTitle"
            placeholder="課程名稱"
          >
          </q-input>
        </q-form>
        <q-form class="flex flex-start-center fluid row">
          <label class="text-gray margin"
            >課程封面圖網址 <span class="red star">*</span></label
          >
          <q-input
            class="margin"
            outlined
            rounded
            v-model="newClassImg"
            placeholder="課程封面圖網址"
          >
          </q-input>
        </q-form>
        <q-form>
          <label class="text-gray margin inline-block"
            >中文課程說明 <span class="red star">*</span></label
          >
          <q-input
            type="textarea"
            class="margin"
            outlined
            rounded
            v-model="newZh"
            placeholder="中文課程說明"
          >
          </q-input>
        </q-form>
        <q-form>
          <label class="text-gray margin inline-block">英文課程說明</label>
          <q-input
            type="textarea"
            class="margin"
            outlined
            rounded
            v-model="newEn"
            placeholder="英文課程說明"
          >
          </q-input>
        </q-form>
        <q-form>
          <label class="text-gray margin inline-block"
            >中文教師簡介 <span class="red star">*</span></label
          >
          <q-input
            type="textarea"
            class="margin"
            outlined
            rounded
            v-model="newT_Zh"
            placeholder="中文教師簡介"
          >
          </q-input>
        </q-form>
        <q-form>
          <label class="text-gray margin inline-block">英文教師簡介</label>
          <q-input
            type="textarea"
            class="margin"
            outlined
            rounded
            v-model="newT_En"
            placeholder="英文教師簡介"
          >
          </q-input>
        </q-form>
        <q-form>
          <label class="text-gray margin">標籤</label>
          <q-input
            class="margin"
            outlined
            rounded
            v-model="newTags"
            placeholder="標籤"
          >
          </q-input>
        </q-form>
        <q-form>
          <label class="text-gray margin"
            >課程地點 <span class="red star">*</span></label
          >
          <q-input
            class="margin"
            outlined
            rounded
            v-model="newLocation"
            placeholder="課程地點"
          >
          </q-input>
        </q-form>
        <q-form>
          <label class="text-gray margin inline-block">課程地址</label>
          <q-input
            class="margin"
            outlined
            rounded
            v-model="newAddr"
            placeholder="課程地址"
          >
          </q-input>
        </q-form>
        <q-form>
          <label class="text-gray margin inline-block"
            >課程連結(僅線上課需填)</label
          >
          <q-input
            class="margin"
            outlined
            rounded
            v-model="newHref"
            placeholder="課程連結(僅線上課需填)"
          >
          </q-input>
        </q-form>
        <q-form>
          <div class="flex-col fluid flex-start">
            <label class="text-gray margin">課程日期/時間</label>
            <label
              class="text-gray margin"
              v-for="(c, k) in newClasses"
              :key="k"
            >
              {{ c.d }} {{ c.t }}
              <q-btn
                class="margin"
                rounded
                @click="removeDateTime(k)"
                color="red"
                icon="event_available"
                >移除</q-btn
              >
            </label>
            <label class="text-gray margin"
              >{{ newDate }} {{ newTime }} ~ {{ newEndTime }}
              <q-btn
                class="margin"
                rounded
                @click="addDateTime()"
                color="orange"
                icon="event_available"
                >加入</q-btn
              >
            </label>
          </div>
          <div class="q-gutter-md row items-start">
            <q-date v-model="newDate" color="purple" />
            <q-time v-model="newTime" color="green" />
            <q-time v-model="newEndTime" color="blue" />
          </div>
        </q-form>
        <q-form>
          <label class="text-gray margin inline-block">最低人數</label>
          <q-input
            type="number"
            class="margin"
            outlined
            rounded
            v-model="newMin"
            placeholder="最低人數"
            step="1"
            min="1"
          >
          </q-input>
        </q-form>
        <q-form>
          <label class="text-gray margin inline-block">最高人數</label>
          <q-input
            type="number"
            class="margin"
            outlined
            rounded
            v-model="newMax"
            placeholder="最高人數"
            step="1"
            min="1"
          >
          </q-input>
        </q-form>
        <q-form>
          <label class="text-gray margin inline-block">原價</label>
          <q-input
            type="text"
            class="margin"
            outlined
            rounded
            v-model="newOldPrice"
            placeholder="原價"
            hint="原價"
          >
          </q-input>
        </q-form>
        <q-form>
          <label class="text-gray margin inline-block">售價</label>
          <q-input
            type="text"
            class="margin"
            outlined
            rounded
            v-model="newNewPrice"
            placeholder="售價"
            hint="售價"
          >
          </q-input>
        </q-form>
        <q-form>
          <label class="text-gray margin inline-block"
            >顯示價格 <span class="red star">*</span></label
          >
          <q-input
            type="text"
            class="margin"
            outlined
            rounded
            v-model="newPrice"
            placeholder="顯示價格"
          >
          </q-input>
        </q-form>
      </q-form>

      <div class="row flex flex-center">
        <q-btn color="blue" class="margin" rounded @click="previewClass()"
          ><q-icon name="preview"></q-icon>預覽</q-btn
        >
        <q-btn color="primary" class="margin" rounded @click="newC(newCid)"
          ><q-icon name="upload"></q-icon>送出</q-btn
        >
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'AddClass',
  props: ['users', 'myImg', 'classes', 'teachers', 'newClasses'],
  setup() {
    const newCid = ref('');
    const newTeacherid = ref('');
    const newTitle = ref('');
    const newClassImg = ref('');
    const newZh = ref('');
    const newEn = ref('');
    const newT_Zh = ref('');
    const newT_En = ref('');
    const newTags = ref('');
    const newLocation = ref('');
    const newAddr = ref('');
    const newHref = ref('');
    const newDate = ref('');
    const newTime = ref('');
    const newEndTime = ref('');
    const newMin = ref('');
    const newMax = ref('');
    const newOldPrice = ref('');
    const newNewPrice = ref('');
    const newPrice = ref('');

    return {
      newCid,
      newTeacherid,
      newTitle,
      newClassImg,
      newZh,
      newEn,
      newT_Zh,
      newT_En,
      newTags,
      newLocation,
      newAddr,
      newHref,
      newDate,
      newTime,
      newEndTime,
      newMin,
      newMax,
      newOldPrice,
      newNewPrice,
      newPrice,
    };
  },
  meethods: {
    getOptions() {
      const us = Object.values(this.users).filter((k: any) => {
        return !k.isTeacher;
      });
      // console.log(us)
      const ts = this.teachers.map((o: any) => {
        let obj = { ...o };
        obj.id = obj.name;
        return obj;
      });
      const arr = [...us.concat(ts)];
      // console.log(arr)
      return arr;
    },
  },
});
</script>
