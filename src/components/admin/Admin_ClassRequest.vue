<template>
  <h6 class="text-dark-gray text-center" v-if="noNewer()">
    目前沒有新課程申請
  </h6>
  <q-list>
    <q-item
      v-for="(i, k) in Object.values(classes)"
      :key="k"
      v-show="!i.showClass"
    >
      <q-btn color="blue-8" @click="previewNewClass(i)"> 預覽課程申請 </q-btn>
      <q-btn color="orange-12" @click="approveC(i)"> 同意申請 </q-btn>
      <img
        class="avatar round margin"
        v-if="i.img"
        :src="i.img"
        :alt="i.title"
      />
      {{ i.title }} -->
      <!-- 修改後再通過 <q-btn
        class="fluid text-center flex flex-col flex-center text-black"
        @click="startEditC(i.id)"
      >
      </q-btn> -->
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AdminClassRequest',
  props: ['classes'],
  methods: {
    // Emit the previewNewClass event with the provided class information
    previewNewClass(classInfo: any) {
      this.$emit('previewNewClass', classInfo);
    },
    // Emit the approveC event with the provided class information
    approveC(classInfo: any) {
      this.$emit('approveC', classInfo);
    },
    noNewer() {
      console.log(this.classes);
      return (
        Object.values(this.classes || {}).filter((c: any) => {
          return !c.showClass;
        }).length === 0
      );
    },
  },
});
</script>
