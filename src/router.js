import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        }
    ]
})

// router.beforeEach((to, from, next) => {

// })

export default router
