<template>
  <span class="property">
    "{{ value }}":
  </span>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PropertyJson',
  props: {
    value: String,
  },
});
</script>

<style scoped>

</style>
