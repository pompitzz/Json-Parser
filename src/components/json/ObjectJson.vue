<template>
  <span class="object">
    <span>
      <span class="object-open">
        {
      </span>
      <ul
        v-if="!isEmpty"
        class="pl-4 object-properties"
      >
        <li
          v-for="{key, value} in jsonValues"
          :key="key"
        >
          <PropertyJson :value="key" />
          <ValueJson :value="value" />
        </li>
      </ul>
      <span class="object-close">
        }
      </span>
    </span>
  </span>
</template>

<script>
import { defineComponent, ref } from 'vue';
import PropertyJson from '@/components/json/PropertyJson.vue';
import ValueJson from '@/components/json/ValueJson.vue';

export default defineComponent({
  name: 'NullJson',
  components: { ValueJson, PropertyJson },
  props: {
    value: Object,
  },
  setup(props) {
    const jsonValues = ref(Object.entries(props.value).map(([key, value]) => ({ key, value })));
    const isEmpty = jsonValues.value.length === 0;
    return {
      jsonValues,
      isEmpty,
    };
  },
});
</script>

<style
  scoped
  lang="scss"
>
.object {
  .object-open, .object-close {
    @apply text-indigo-500;
  }
}
</style>
