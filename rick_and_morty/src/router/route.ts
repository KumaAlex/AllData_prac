import character from '@/components/pages/character/character.vue'
import location from '@/components/pages/location/location.vue'
import episode from '@/components/pages/episode/episode.vue'
import charCardDetail from '@/components/pages/char-card-detail/char-card-detail.vue'
import episCardDetail from '@/components/pages/epis-card-detail/epis-card-detail.vue'
import locCardDetail from '@/components/pages/loc-card-detail/loc-card-detail.vue'
import { createRouter, createWebHashHistory } from "vue-router"

export default createRouter ({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/location',
            component: location,
        },
        {
            path: '/location/:id',
            component: locCardDetail, 
        },
        {
            path: '/episode',
            component: episode,
        },
        {
            path: '/episode/:id',
            component: episCardDetail, 
        },
        {
            path: '/character',
            component: character, 
            alias: '/',
        },
        {
            path: '/character/:id',
            component: charCardDetail,
        }
    ]
})