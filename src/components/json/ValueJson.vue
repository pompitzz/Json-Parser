<template>
  <component
    class="value"
    :is="findJsonComponent(value)"
  />
</template>

<script>

import { defineComponent } from 'vue';
import { findJsonComponent } from '@/composable/JsonComponentFinder.js';

export default defineComponent({
  name: 'ValueJson',
  props: {
    value: {
      required: true,
    },
  },
  setup() {
    return {
      findJsonComponent,
    };
  },
})
;
</script>
