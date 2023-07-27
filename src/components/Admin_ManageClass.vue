<template>
  <q-card class="editC-card" v-if="action == '課程管理' && editC !== ''">
    <div class="col flex-col flex-center">
      <q-form class="fluid">
        <div class="row flex flex-center">
          <div class="col flex flex-col">
            <q-img
              class="small-img margin"
              v-show="newImg"
              :src="newImg"
            ></q-img>
            <div class="row flex flex-center">
              <q-img
                class="avatar margin"
                v-show="newTeacherImg"
                :src="newTeacherImg"
              ></q-img>
            </div>
          </div>
        </div>
        <q-input
          class="margin"
          outlined
          rounded
          v-model="newTitle"
          placeholder="課程名稱"
          hint="課程名稱"
        >
        </q-input>
        <q-input
          class="margin"
          outlined
          rounded
          v-model="newImg"
          placeholder="封面圖片網址"
          hint="封面圖片網址"
        >
        </q-input>
        <q-input
          class="margin"
          outlined
          rounded
          v-model="newTeacher"
          placeholder="開課老師"
          hint="開課老師"
        >
        </q-input>
        <q-input
          class="margin"
          outlined
          rounded
          v-model="newTid"
          placeholder="開課老師Id"
          hint="開課老師Id"
        >
        </q-input>
        <q-input
          class="margin"
          outlined
          rounded
          v-model="newTeacherImg"
          placeholder="老師大頭貼網址"
          hint="老師大頭貼網址"
        >
        </q-input>
        <q-input
          type="textarea"
          class="margin"
          outlined
          rounded
          v-model="newZh"
          placeholder="中文課程說明"
          hint="中文課程說明"
        >
        </q-input>
        <q-input
          type="textarea"
          class="margin"
          outlined
          rounded
          v-model="newEn"
          placeholder="英文課程說明"
          hint="英文課程說明"
        >
        </q-input>
        <q-input
          type="textarea"
          class="margin"
          outlined
          rounded
          v-model="newT_Zh"
          placeholder="中文教師簡介"
          hint="中文教師簡介"
        >
        </q-input>
        <q-input
          type="textarea"
          class="margin"
          outlined
          rounded
          v-model="newT_En"
          placeholder="英文教師簡介"
          hint="英文教師簡介"
        >
        </q-input>
        <q-input
          class="margin"
          outlined
          rounded
          v-model="newTags"
          placeholder="標籤"
          hint="標籤"
        >
        </q-input>
        <q-input
          class="margin"
          outlined
          rounded
          v-model="newLocation"
          placeholder="課程地點"
          hint="課程地點"
        >
        </q-input>
        <q-input
          type="number"
          class="margin"
          outlined
          rounded
          v-model="newMin"
          placeholder="最低人數"
          hint="最低人數"
          step="1"
          min="1"
        >
        </q-input>
        <q-input
          type="number"
          class="margin"
          outlined
          rounded
          v-model="newMax"
          placeholder="最高人數"
          hint="最高人數"
          step="1"
          min="1"
        >
        </q-input>
        <q-input
          type="text"
          class="margin"
          outlined
          rounded
          v-model="newOldPrice"
          placeholder="原價"
          hint="原價"
          step="10"
          min="0"
        >
        </q-input>
        <q-input
          type="text"
          class="margin"
          outlined
          rounded
          v-model="newNewPrice"
          placeholder="售價"
          hint="售價"
          step="10"
          min="0"
        >
        </q-input>
        <q-input
          type="text"
          class="margin"
          outlined
          rounded
          v-model="newPrice"
          placeholder="顯示價格"
          hint="顯示價格"
          step="10"
          min="0"
        >
        </q-input>
      </q-form>
      <div class="row flex flex-center">
        <q-btn color="primary" class="margin" rounded @click="updateC(editC)"
          ><q-icon name="update"></q-icon>更新</q-btn
        >
        <q-btn color="blue" class="margin" rounded @click="copyC()"
          ><q-icon name="content_copy"></q-icon>複製</q-btn
        >
        <q-btn color="red" class="margin" rounded @click="deleteC(editC)"
          ><q-icon name="delete"></q-icon>刪除</q-btn
        >
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AdminManageClass',
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
});
</script>
