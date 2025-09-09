import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { createPinia } from 'pinia'

const app = createApp(App).use(createPinia())

app.use(router)

app.mount('#'+window.asoneId)
