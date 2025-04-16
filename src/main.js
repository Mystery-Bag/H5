import { createApp } from 'vue'
import './style.css'
import 'animate.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// import './utils/autoUpdate.js'

// import VueTouch from 'vue-touch'
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
// app.use(VueTouch, {name: 'v-touch'})

app.mount('#app')