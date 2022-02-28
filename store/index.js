import { SET_TOKEN } from './type'
import { CLEAR_TOKEN } from './type'

import users from '@/api/users.json'

//state
export const state = () => ({
        users: [],
        mountains: [],
        token: null,
    })
    //mutations
export const mutations = {
        addMountains(state, mountains) {
            state.mountains.push(...mountains)
        },
        [SET_TOKEN](state, token) {
            // console.log(token)
            state.token = token
        },
        [CLEAR_TOKEN](state) {
            tate.token = null
        },
    }
    //actions
export const actions = {
        async getMountains({ commit }) {
            const mountains = await this.$axios.$get('https://api.nuxtjs.dev/posts')
            commit('addMountains', mountains)
            return mountains
        },
        async login(context, credentials) {
            const user = users[0]
            const email = user.email
            const password = user.password
            if (credentials.email == email && credentials.password == password) {
                console.log('Yes its okey')
                await context.commit(SET_TOKEN, user.token)
            }
        },
        async logout(context) {
            await context.commit(CLEAR_TOKEN)
        },
    }
    //getters
export const getters = {
    fetchUsers(state) {
        return state.addUsers
    },
    isAuthenticated(state) {
        return Boolean(state.token)
    },
}