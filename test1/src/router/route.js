import MainPage from "@/components/MainPage/MainPage"
import MainComponent from "@/components/Main/MainComponent"
import { createRouter, createWebHashHistory } from "vue-router"

export default createRouter ({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            component: MainComponent,
            // alias: '/'
        },
        {
            path: '/main',
            component: MainPage
        },
    ]
})