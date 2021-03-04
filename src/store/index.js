import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        config: {}
    },
    mutations: {
        update_config() {
            axios.get('/config.json').then(res => {
                this.state.config = res.data
                document.title = res.data["Product Name"]
            })
        }
    },
    actions: {},
    modules: {}
})
