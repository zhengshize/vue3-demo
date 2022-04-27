<template>
  <div class="home">
    <a-button type="primary" :loading='buttonLoading' @click="clickLoading">Primary Button</a-button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, toRefs } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

interface DataProps {
  buttonLoading: boolean,
  clickLoading: () => void,
}
export default defineComponent({
  name: 'HomeView',
  setup() {
    const data:DataProps = reactive({
      buttonLoading: false,
      clickLoading: () => {
        data.buttonLoading = true;
        setTimeout(() => {
          data.buttonLoading = false;
        }, 2000);
      }
    });
    const refData = toRefs(data);
    return {
      ...refData
    }
  },
  components: {
    HelloWorld,
  },
});
</script>
