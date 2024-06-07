import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入初始化样式
import './assets/styles/base.css'
// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//做适配
// rem单位 1rem=100px
// import './../public/rem.js'

// //引入axios
import axios from 'axios'

//导入flexible.js

import 'lib-flexible/flexible'

const app = createApp(App);

app.use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app');

app.config.globalProperties.$http = axios;

// createApp(App).use(store).use(router).use(ElementPlus).mount('#app')