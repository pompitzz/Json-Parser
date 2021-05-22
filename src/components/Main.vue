<template>
  <div class="flex">
    <div class="w-1/2 p-5">
      <textarea
          v-model="input"
          class="textarea"
      />
    </div>
    <div class="w-1/2 p-5">
      <Json :input="input" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import Json from '@/components/Json.vue';
import { parseJson } from '@/components/JsonParser.js';

export default defineComponent({
  name: 'HelloWorld',
  components: { Json },
  // components: { Json },
  setup() {
    const input = ref('');

    const value = computed(() => {
      return parseJson(input.value);
    });
    return {
      input,
      value,
    };
  },
});
</script>

<style scoped>
.textarea {
  border: 1px black solid;
  width: 100%;
  padding: 10px;
  font-size: 13px;
  height: 500px;
}
</style>
