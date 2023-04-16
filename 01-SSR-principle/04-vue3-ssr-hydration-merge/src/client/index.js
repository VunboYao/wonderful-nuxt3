import { createApp } from "vue";
import App from "../App.vue";
import createRouter from '../router'
import {createWebHistory} from "vue-router";
import {createPinia} from "pinia";

// spa
let app = createApp(App);

// 注册路由
const router = createRouter(createWebHistory())
app.use(router)

// 注册store
const pinia = createPinia()
app.use(pinia)

router.isReady().then(() => {
  app.mount("#app");
})
