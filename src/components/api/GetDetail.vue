<template>
    <div class="row">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
         <div class="col-md-5">
            <img class="img-detail" :src="restaurants.featured_image" width="100%">
            <center><i><b>Site: <a class="green" target="_blank" :href="restaurants.url"> {{ restaurants.name }}</a></b></i></center>
        </div>

        <div class="col-md-7" style="margin-top:3%">
            <h2>
              {{ restaurants.name }} <span class="badge badge-success"><i style="color:#f4bf42" class="fa fa-star" aria-hidden="true"></i> {{ restaurants.user_rating.aggregate_rating }} / 5</span>
            </h2><br>

            <h6><i class="fa fa-map-marker green" aria-hidden="true"></i>&nbsp; {{ restaurants.location.address }}, Indonesia</h6>
            <h6><i class="fa fa-clock-o green" aria-hidden="true"></i>&nbsp; {{ restaurants.timings }}</h6>
            <h6><i class="fa fa-bookmark green" aria-hidden="true"></i>&nbsp; {{ restaurants.cuisines }} <strong>( {{ restaurants.establishment[0] }} )</strong></h6>  
            <h6><i class="fa fa-phone green" aria-hidden="true"></i>&nbsp; {{ restaurants.phone_numbers }}</h6> 
            <h6><i class="fa fa-user green" aria-hidden="true"></i>&nbsp; vote : {{ restaurants.user_rating.votes }}</h6> 
        </div>

        <div class="col-md-12" style="margin-top:3%">
            <h1>Gallery <font color="#62D2A2">Restaurant</font></h1><br>
            <div class="row">
                <div class="col-md-2" v-for="(item, index) in galleries" :key="index" :item="item">
                    <img class="img-gallery" :src="item.photo.url">
                </div>
            </div>
        </div>
      </div>
</template>

<script>
    import '@/assets/css/GetDetail.css'
    export default {
        name: 'GetDetail',
        props: {
            restaurant: String,
        },
        computed:{
            restaurants () {
                return this.$store.state.detail.data.restaurants 
            },
            galleries () {
                return this.$store.state.gallery.data.galleries
            }
        },
        mounted () {
            document.title = 'List Restaurant'
            const id = this.$route.params.id
            this.$store.dispatch('detail/getRestaurants', id)
            this.$store.dispatch('gallery/getGalleries', id)
        }
    }
</script>
