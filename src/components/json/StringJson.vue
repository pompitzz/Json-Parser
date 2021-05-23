<template>
  <span class="string">"{{ value }}"</span>
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
.string {
  @apply text-green-500;
}
</style>
