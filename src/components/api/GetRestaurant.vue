<template>
    <div class="col-md-4 col-lg-3">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <router-link class="card card-padding" :to="{name:'detail',params:{id:item.restaurant.id}}">
        <img class="img-div" :src="item.restaurant.featured_image" alt="Image Movies">
        <div class="body-padding">
          <h5><b><center>  {{ item.restaurant.name }}</center></b></h5>
          <center>
                <i style="color:#62D2A2" class="fa fa-map-marker" aria-hidden="true"></i> {{ item.restaurant.location.city }} &nbsp; &nbsp; 
                <i style="color:#f4bf42" class="fa fa-star" aria-hidden="true"></i> {{ item.restaurant.user_rating.aggregate_rating }}
                <div style="margin-top: 10px">
                    {{ item.restaurant.location.address }}<br><br>
                    <i style="color:#62D2A2" class="fa fa-bookmark" aria-hidden="true"></i> {{ item.restaurant.cuisines }}
                </div>
          </center>
        </div>
      </router-link>
    </div>
</template>

<script>
    import '@/assets/css/GetRestaurant.css'
    export default {
        name: 'GetRestaurant',
        props: {
            item: Object,
            index: Number
        },
    }
</script>
