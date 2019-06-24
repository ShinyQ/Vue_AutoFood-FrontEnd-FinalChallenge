<template>
<div>
    <navbar></navbar>
    <div style="margin-left:5%; margin-right:5%">
        <h1>
            <router-link style="color: #7bd9b1" class="fa fa-chevron-circle-left" :to="{name:'restaurant'}" ></router-link>
            Detail <font color="#62D2A2">Restaurant</font>
        </h1><br>
        
        <DetailFilm></DetailFilm>

    </div>
</div>
</template>

<script>
import navbar from '@/components/Navbar'
import DetailFilm from '@/components/api/GetDetail.vue'
export default {
  name: 'restaurant',
  components: {
    navbar,
    DetailFilm
  },
  data: function () {
        return {
            restaurants:[],
            galleries:[],
            reviews:[]
        }
  }
}
</script>


