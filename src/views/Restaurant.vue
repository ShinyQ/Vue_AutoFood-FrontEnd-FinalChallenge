<template>
<div>
    <navbar></navbar>
    <div style="margin-left:5%; margin-right:5%">
        <h1>List <font color="#62D2A2">Restaurant</font></h1><br>
        <div class="row">
        <restaurants v-for="(item, index) in restaurants"  :key="index" :item="item"></restaurants>
        </div>
    </div>
</div>
</template>

<script>
import '@/assets/scss/style.scss'
import navbar from '@/components/Navbar'
import restaurants from '@/components/api/GetRestaurant.vue'
export default {
  name: 'restaurant',
  components: {
    navbar,
    restaurants
  },
  computed:{
      restaurants () {
        return this.$store.state.getRestaurant.data.restaurants 
      }
  },
  mounted () {
    document.title = 'List Restaurant',
    this.$store.dispatch('getRestaurant/getRestaurants')
  }
}
</script>


