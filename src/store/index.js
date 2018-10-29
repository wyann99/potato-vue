import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import * as types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null
    },
    modules: {
        login
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data
            state.token = data
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token')
            state.token = null
        }
    }
})
