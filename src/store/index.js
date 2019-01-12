import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        user:null
    },
    getters:{
        getUser: state => {
            return state.user;
        }
    },
    mutations:{
        updateUser: (state,user) => {
            state.user = user;
        }
    },
    actions:{
        updateUser: (store,user) => {
            store.commit('updateUser',user.user);
        }
    }
})
export default store;