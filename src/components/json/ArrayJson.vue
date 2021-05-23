<template>
  <span class="array">
    <span class="array-open">
      [
      <br />
    </span>
    <ul class="pl-4 array-values">
      <li
        v-for="(value, index) in array"
        :key="index"
      >
        <ValueJson :value="value" />
      </li>
    </ul>
    <span class="array-close">
      ]
    </span>
  </span>
</template>

<script>

import { defineComponent, ref } from 'vue';
import ValueJson from '@/components/json/ValueJson.vue';

export default defineComponent({
  name: 'ArrayJson',
  components: { ValueJson },
  props: {
    value: {
      type: Array,
    },
  },
  setup(props) {
    const array = ref(props.value);
    return {
      array,
    };
  },
});
</script>

<style scoped>

</style>
