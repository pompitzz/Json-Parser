<template>
  <span>{{ value }}</span>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NumberJson',
  props: {
    value: Number,
  }
});
</script>

<style scoped>

</style>
