<template>
    <div v-if="restaurants.user_rating">
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
        </div>
        <div style="margin-top:4%">
            <h2>Gallery <font color="#62D2A2">Restaurant</font></h2><br>
            <div class="row">
                <div class="col-md-2" v-for="(item, index) in galleries" :key="index" :item="item">
                    <img class="img-gallery" :src="item.photo.url">
                </div>
            </div>
        </div>

        <div style="margin-top:4%; margin-bottom: 5%">
            <h2>Review <font color="#62D2A2">Restaurant</font></h2><br>
            <div class="row">      
				<div class="card card-detail-padding space-card" v-for="(item, index) in reviews" :key="index" :item="item">
					<div class="card-body">
						<div class="row">
							<div class="col-md-2">
								<img class="rounded-circle" :src="item.review.user.profile_image" style="display:block; margin-left: auto; margin-right: auto; max-width: 120px" />
								<p class="text-secondary text-center menit-komen">{{ item.review.review_time_friendly }}</p>
							</div>
							<div class="col-md-10 customer">
								<h5><a target="_blank" :href="item.review.user.profile_url"><strong>{{ item.review.user.name }}</strong></a>&nbsp;&nbsp;<span class="badge badge-success"><i style="color:#f4bf42" class="fa fa-star" aria-hidden="true"></i> {{ item.review.rating }}.0 / 5.0</span></h5>
								<p>{{ item.review.review_text }}</p>
							</div>
						</div>
					</div>
				</div>           
			</div>
        </div>
        <a href="#" class="float">
            <i class="fa fa-plus my-float"></i>
        </a>
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
                return this.$store.state.detail.data.galleries
            },
            reviews () {
                return this.$store.state.review.data.reviews
            }
        },
        mounted () {
            document.title = 'List Restaurant'
            const id = this.$route.params.id
            this.$store.dispatch('detail/getRestaurants', id)
            this.$store.dispatch('review/getReviews', id)
        }
    }
</script>
