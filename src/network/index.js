import axios from 'axios'
import qs from 'qs'
import URL from './api'

const netApi = axios.create({
    withCredentials: false,
    paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'brackets' })
    }
})

// const afterProcessNoCounts = (res) => {
//     if (!res.data.status) {
//         return res.data
//     }
//     return res.data.data || res.data
// }

export default {
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
            // .then(afterProcessNoCounts)
        .then(done, error)
    }
}
