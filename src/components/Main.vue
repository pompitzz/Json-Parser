<template>
  <div class="h-full flex flex-col p-4">
    <div class="header">
      <div>
        <button
          class="btn-filled-primary"
          @click="setSample"
        >
          Sample
        </button>
      </div>
      <div class="flex-1" />
      <div>
        <button
          class="btn-filled-danger"
          @click="copy"
        >
          Copy
        </button>
      </div>
    </div>
    <div class="main">
      <textarea
        v-model="input"
        class="textarea"
      />
      <Json
        class="json"
        :input="input"
        @successParse="successParse"
      />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue';
import Json from '@/components/Json.vue';
import { parseJson } from '@/composable/JsonParser.js';
import { sampleJson } from '@/composable/SampleJson.js';
import { copy } from '@/composable/Copy.js';

export default defineComponent({
  name: 'HelloWorld',
  components: { Json },
  setup() {
    const input = ref('');
    const value = computed(() => {
      return parseJson(input.value);
    });

    const jsonString = ref('');
    const successParse = (json) => (jsonString.value = JSON.stringify(json));
    const setSample = () => (input.value = sampleJson);
    onMounted(setSample);
    return {
      input,
      value,
      setSample,
      successParse,
      copy: () => copy(jsonString.value),
    };
  },
});
</script>

<style
  scoped
  lang="scss"
>
.header {
  height: 40px;
  display: flex;
}

.main {
  display: flex;
  width: 100%;
  flex: 1;

  .textarea {
    width: 40%;
    border: 1px black solid;
    padding: 10px;
    height: 100%;
    margin-right: 1rem;
  }

  .json {
    width: 60%;
    border: 1px black solid;
    padding: 10px;
  }
}
</style>
