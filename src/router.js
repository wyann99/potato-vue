/**
 * 路由配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import { isLogin, loginIfNot } from './utils/sso'
import store from './store'
import * as types from './store/types'
// 引入页面
import home from './views/Index'
import login from './views/Login'
import notFind from './views/common/404'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        // {
        //     path: '/index.html',
        //     redirect: {
        //         name: 'login'
        //     }
        // },
        // {
        //     path: '/',
        //     name: 'index',
        //     component: login
        // },
        // {
        //     path: '/index',
        //     name: 'index',
        //     meta: {
        //         requireAuth: true
        //     },
        //     component: home
        // },
        {
            path: '/',
            name: 'index',
            component: home
        },
        {
            path: '/404',
            name: '404',
            component: notFind
        },
        {
            path: '*',
            // redirect: {
            //     name: 'home',
            // }, // 当访问的地址不存在时重定向到首页 这么写会持续刷新
            component: login
        }

    ]
})

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (store.state.token) { // 通过vuex state获取当前的token是否存在
            // let preauditInfo = store.state.userInfo.statusInfo
            // if (JSON.stringify(preauditInfo) === '{}') {
                // store.dispatch('userInfo/userInfoAction', {}).then((data) => {
                    // 取相关状态值，跳转到相应的状态页面
                    // if (data.status_info) {
                    //     let backStatus = data.status_info.status + ''
                    //     next({ path: routeMap[backStatus].path || '/orderStatus', query: query })
                    // }

                // })
            // } else {
            //     next()
            // }

        } else {
            // store.dispatch('userInfo/clearUserInfoAction', {}).then((data) => {
            //     if (pathMatched !== '/login') {
            //         next({ path: '/login', query: query })
            //     } else {
            //         next()
            //     }
            // })
        }
    } else {
        next()
    }
})

export default router
