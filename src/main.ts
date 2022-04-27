import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 2022-04-27-加入ant-design
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(store).use(router).use(Antd).mount('#app')
