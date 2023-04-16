const express = require('express')
const server = express()
import createApp from '../index'
import { renderToString } from 'vue/server-renderer'
import {createPinia} from 'pinia'

// server router
import createRouter from '../router'
import {createMemoryHistory} from "vue-router";

// 部署 静态资源
server.use(express.static("build"));

server.get("/", async (req, res) => {
  const app = createApp();

  // 注册路由
  const router = createRouter(createMemoryHistory())
  app.use(router)

  // / or /about 等待页面跳转完毕
  await router.push(req.url || '/')
  // 等待异步路由加载完成，渲染页面
  await router.isReady()

  // store
  const pinia = createPinia()
  app.use(pinia)

  const appStringHtml = await renderToString(app);
  res.send(
      `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>Vue3 Serve Side Render</h1>
      <div id="app">
        ${appStringHtml}
      </div>
      <script src="/client/client_bundle.js"></script>
    </body>
    </html>
    `
  );
});

server.listen(3001, () => {
  console.log("start node server on http://localhost:3001 ~");
});
