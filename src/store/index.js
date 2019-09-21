import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        listAgenda: [
            { hari: 'senin', kegiatan: 'Belajar Vuejs', },
            { hari: 'selasa', kegiatan: 'Belajar Laravel', },
            { hari: 'rabu', kegiatan: 'Belajar Mysql', },
        ]
    },

    mutations: {

    },

    actions: {
        
    }
})
