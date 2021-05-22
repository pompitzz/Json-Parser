<template>
  <span>
    <span>
      [
      <br />
    </span>
    <ul class="pl-4">
      <li
          v-for="(value, index) in array"
          :key="index"
      >
        <!--      {{ value }}, {{typeof value}}-->
        <component :is="findJsonComponent(value)" />
        <span v-if="notLast(index)">,</span><br />
      </li>
    </ul>
    <span>
      ]
    </span>
  </span>
</template>

<script>

import { defineComponent, ref } from 'vue';
import { findJsonComponent } from './JsonComponentFinder.js';

export default defineComponent({
  name: 'ArrayJson',
  props: {
    value: {
      type: Array,
    },
  },
  setup(props) {
    const array = ref(props.value);
    const notLast = (index) => index + 1 !== array.value.length;
    return {
      array,
      notLast,
      findJsonComponent,
    };
  },
});
</script>

<style scoped>

</style>
