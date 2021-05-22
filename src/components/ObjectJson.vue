<template>
  <span>
    <span v-if="jsonValues.length === 0">
       { }
    </span>
    <span v-else>
      <span>
        {
      </span>
      <ul class="pl-4">
        <li
            v-for="(jsonValue, index) in jsonValues"
            :key="jsonValue.key"
        >
          "{{ jsonValue.key }}":
          <component :is="findJsonComponent(jsonValue.value)" />
          <span v-if="notLast(index)">,</span><br />
        </li>
      </ul>
      <span>
        }
      </span>
    </span>
  </span>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { findJsonComponent } from './JsonComponentFinder.js';
import StringJson from '@/components/StringJson.vue';

export default defineComponent({
  name: 'NullJson',
  components: { StringJson },
  props: {
    value: Object,
  },
  setup(props) {
    const jsonValues = ref(Object.entries(props.value).map(([key, value]) => ({ key, value })));
    const notLast = (index) => index + 1 !== jsonValues.value.length;
    return {
      jsonValues,
      notLast,
      findJsonComponent,
    };
  },
});
</script>

<style scoped>

</style>
