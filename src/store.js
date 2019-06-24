import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const moduleRestaurant = {
  namespaced: true,
  state: {
    data: {
      restaurants: [],
      loading: true,
      errored: false
    }
  },
  mutations: {
    setRestaurants (state, payload) {
      state.data.restaurants = payload
    }
  },
  actions: {
    getRestaurants ({ commit }) {
      axios.get('https://developers.zomato.com/api/v2.1/search?q=jakarta&count=12&sort=rating', {
        headers: {
          'user-key': 'c22da83db9cd0b87037fc933cd7abf81'
        }
      })
        .then((response) => {
          console.log(response.data.restaurants)
          commit('setRestaurants', response.data.restaurants)
        }).catch(error => {
          if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error'
          } else {
            this.errorStatus = error.response.data.message
          }
        })
    }
  }
}

const moduleDetailRestaurant = {
  namespaced: true,
  state: {
    data: {
      restaurants: [],
      loading: true,
      errored: false
    }
  },
  mutations: {
    setRestaurants (state, payload) {
      state.data.restaurants = payload
    }
  },
  actions: {
    getRestaurants ({ commit }, id = '18875696') {
      axios.get('https://developers.zomato.com/api/v2.1/restaurant?res_id=' + id + ' ', {
        headers: {
          'user-key': 'c22da83db9cd0b87037fc933cd7abf81'
        }
      })
        .then((response) => {
          console.log(response.data)
          commit('setRestaurants', response.data)
        }).catch(error => {
          if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error'
          } else {
            this.errorStatus = error.response.data.message
          }
        })
    }
  }
}

export default new Vuex.Store({
  modules: {
    getRestaurant: moduleRestaurant,
    detail: moduleDetailRestaurant
  }
})
