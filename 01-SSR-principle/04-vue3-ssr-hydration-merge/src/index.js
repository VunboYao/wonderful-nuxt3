import { createSSRApp } from 'vue'
import App from './App.vue'


export default function createApp() {
  return createSSRApp(App)
}
