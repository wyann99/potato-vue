import _$ from '../network'
// import { Toast } from 'element-ui'

const login = {
    namespaced: true,
    state() {
        return {
            isLogin: false
        }
    },
    mutations: {
        setLoginStatus(state, payload) {
            state.isLogin = payload
        }
    },
    actions: {
        loginAction({ commit }, payload) {
            return new Promise((resolve, reject) => {
                _$.postDataByDataForm('Login', payload, (data) => {
                    // if(data.code == undefined) {
                    //     resolve(data)
                    // } else {

                    // }
                }, (err) => {
                    reject(err)
                })
            })
        }
    }
}

export default login
