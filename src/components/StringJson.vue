<template>
  <span>"{{ value }}"</span>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StringJson',
  props: {
    value: String,
  }
});
</script>

<style scoped>

</style>
