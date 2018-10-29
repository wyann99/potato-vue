import axios from 'axios'
import qs from 'qs'
import store from '../store'
import URL from './api'
import * as types from '../store/types'
import router from '../router'

const netApi = axios.create({
    withCredentials: false,
    paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'brackets' })
    }
})

// http request 拦截器
netApi.interceptors.request.use(
    (config) => {
        if (store.state.token) {
            config.headers.token = `${store.state.token}`
        }
        return config
    },
    (err) => {
        alert('请求超时！')
        return Promise.reject(err)
    }
)

// http response 拦截器
netApi.interceptors.response.use(
    response => response,
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                // 401 清除token信息并跳转到登录页面
                case 401:
                    store.commit(types.LOGOUT)
                    router.replace({
                        path: 'login'
                    })
                    break
                // 服务器出现状况
                case 504:
                case 404:
                    // alert('服务器被吃了⊙﹏⊙∥')
                    router.replace({
                        path: '404'
                    })
                    break
                default:
                    alert('未知错误!')
            }
        }
        // console : Error Request failed with status code 402
        return Promise.reject(error.response.data)
    }
)

export default {
    getData(url, params, done, error, options) {
        let opt = Object.assign({}, options, { params })
        return netApi.get(URL[url] ? URL[url] : url, opt)
        .then(done, error)
    },
    postData(url, data, done, error, options) {
        let opt = Object.assign({}, options)
        return netApi.post(URL[url], data, opt)
        .then(done, error)
    },

    /**
     * 用 DataFrom 格式 post 数据
     * @param url
     * @param data 对象格式 {key: value}
     * @param options 配置
     * @returns {*}
     */
    postDataByDataForm(url, data, done, error, options) {
        let opt = Object.assign({}, options)
        return netApi.post(URL[url] ? URL[url] : url, qs.stringify(data), opt)
        .then(done, error)
    }
}
