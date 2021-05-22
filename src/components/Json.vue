<template>
  <div
      v-if="failMessage"
      class="fail"
  >
    {{ failMessage }}
  </div>
  <component
      v-else
      :is="findJsonComponent(json)"
  />
</template>

<script>

import { defineComponent, toRefs, watch, ref } from 'vue';
import { findJsonComponent } from '@/components/JsonComponentFinder.js';
import { parseJson } from '@/components/JsonParser.js';

export default defineComponent({
  name: 'Json',
  props: {
    input: String,
  },
  setup(props) {
    const { input } = toRefs(props);
    const json = ref();
    const failMessage = ref('');
    watch(input, newInput => {
      try {
        json.value = parseJson(newInput);
        failMessage.value = '';
      } catch (e) {
        failMessage.value = e.stack;
      }
    });
    return {
      findJsonComponent,
      json,
      failMessage,
    };
  },
})
;
</script>

<style scoped>
.fail {
  white-space: pre-wrap;
}
</style>
