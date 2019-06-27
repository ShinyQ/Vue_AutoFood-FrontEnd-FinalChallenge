import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

// Get Restaurants
const moduleRestaurant = {
  namespaced: true,
  state: {
    data: {
      restaurants: []
    }
  },
  mutations: {
    setRestaurants (state, payload) {
      state.data.restaurants = payload
    }
  },
  actions: {
    getRestaurants ({ commit }) {
      axios.get('https://developers.zomato.com/api/v2.1/search?q=italia&count=16', {
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

// Detail Restaurants
const moduleDetailRestaurant = {
  namespaced: true,
  state: {
    data: {
      restaurants: [],
      galleries: []
    }
  },
  mutations: {
    setRestaurants (state, payload) {
      state.data.restaurants = payload
    },
    setGalleries (state, payload) {
      state.data.galleries = payload
    }
  },
  actions: {
    getRestaurants ({ commit }, id) {
      axios.get('https://developers.zomato.com/api/v2.1/restaurant?res_id=' + id + ' ', {
        headers: {
          'user-key': 'c22da83db9cd0b87037fc933cd7abf81'
        }
      })
        .then((response) => {
          // console.log(response.data.id)
          commit('setRestaurants', response.data)
          commit('setGalleries', response.data.photos)
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

// Restaurants Reviews
const moduleReviewRestaurant = {
  namespaced: true,
  state: {
    data: {
      reviews: []
    }
  },
  mutations: {
    setReviews (state, payload) {
      state.data.reviews = payload
    }
  },
  actions: {
    getReviews ({ commit }, id) {
      axios.get('https://developers.zomato.com/api/v2.1/reviews?res_id=' + id + '&count=8', {
        headers: {
          'user-key': 'c22da83db9cd0b87037fc933cd7abf81'
        }
      })
        .then((response) => {
          // console.log(response.data.user_reviews)
          commit('setReviews', response.data.user_reviews)
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
    detail: moduleDetailRestaurant,
    review: moduleReviewRestaurant
  }
})
