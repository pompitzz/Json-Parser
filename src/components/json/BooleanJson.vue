<template>
  <span class="boolean">{{ value }}</span>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BooleanJson',
  props: {
    value: {
      type: Boolean,
    },
  },
});
</script>

<style scoped>

</style>
