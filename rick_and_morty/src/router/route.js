import character from '@/components/pages/character/character'
import location from '@/components/pages/location/location'
import episode from '@/components/pages/episode/episode'
import charCardDetail from '@/components/pages/char-card-detail/char-card-detail'
import episCardDetail from '@/components/pages/epis-card-detail/epis-card-detail'
import locCardDetail from '@/components/pages/loc-card-detail/loc-card-detail'
import { createRouter, createWebHashHistory } from "vue-router"

export default createRouter ({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/location',
            component: location, 
            // alias: '/'
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
        },
        {
            path: '/character/:id',
            component: charCardDetail,
        }
    ]
})