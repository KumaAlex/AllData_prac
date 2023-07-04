import createStore from 'vuex'

export default {
    store: createStore({
        state() {
            return{
                access_token: "",
                refresh_token: "",
            }
        },
        mutations: {
        }
    })
}