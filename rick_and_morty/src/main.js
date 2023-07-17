import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/route'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Paginate from "vuejs-paginate-next";

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.use(Paginate)
app.mount('#app')