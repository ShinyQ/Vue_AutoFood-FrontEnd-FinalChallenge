<template>
<div>
    <navbar></navbar>
    <div style="margin-left:5%; margin-right:5%">
        <h1>Detail <font color="#62D2A2">Restaurant</font></h1><br>
        <DetailFilm></DetailFilm>
    </div>
</div>
</template>

<script>
import '@/assets/scss/style.scss'
import navbar from '@/components/Navbar'
import DetailFilm from '@/components/api/GetDetail.vue'
export default {
  name: 'restaurant',
  components: {
    navbar,
    DetailFilm
  },
  computed:{
      restaurants () {
        return this.$store.state.getRestaurant.data.restaurants 
      }
  },
  mounted () {
    document.title = 'List Restaurant'
    const id = this.$route.params.id
    this.$store.dispatch('getRestaurant/getRestaurants', id)
  }
}
</script>


