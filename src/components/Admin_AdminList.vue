<template>
  <q-list class="flex flex-col">
    <q-item
      v-for="(u, k) in users"
      :key="k"
      v-show="u.isAdmin"
      class="flex flex-col"
    >
      <p class="fluid bold">
        <q-img :src="u.photoURL" class="avatar mini"></q-img>
        {{ u.name }}({{ u.email }})
      </p>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminList',
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  methods: {},
});
</script>
