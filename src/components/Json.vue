<template>
  <div
    v-if="failMessage"
    class="fail"
  >
    {{ failMessage }}
  </div>
  <div
    v-else
    class="json"
  >
    <div v-if="empty">

    </div>
    <component
      v-else
      :is="findJsonComponent(json)"
    />
  </div>
</template>

<script>

import { computed, defineComponent, ref, toRefs, watch } from 'vue';
import { findJsonComponent } from '@/composable/JsonComponentFinder.js';
import { parseJson } from '@/composable/JsonParser.js';

export default defineComponent({
  name: 'Json',
  props: {
    input: String,
  },
  setup(props) {
    const { input } = toRefs(props);
    const json = ref();
    const failMessage = ref('');
    const empty = computed(() => (!json.value));
    watch(input, newInput => {
      try {
        failMessage.value = '';
        json.value = newInput ? parseJson(newInput) : null;
      } catch (e) {
        failMessage.value = e.stack;
      }
    });
    return {
      findJsonComponent,
      json,
      failMessage,
      empty,
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
