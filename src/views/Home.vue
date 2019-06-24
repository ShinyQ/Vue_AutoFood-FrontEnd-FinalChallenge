<template>
<div>
  <navbar></navbar>
  <div class="container-fluid" style="margin-top: 100px">
    <div class="row">
      <div class="col-md-4">
        <h1 style="padding-left:100px; padding-top:50px">Why bother <br> when you can <br> order?</h1>
      </div>
       <div class="col-md-8">
         <img class="img-center" style="border-radius: 12px;" src="../assets/img/cayla1-150730-unsplash.svg" width="600px">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import '@/assets/scss/style.scss'
import navbar from '@/components/Navbar'

export default {
  name: 'home',
  components: {
    navbar
  },
  mounted () {
    document.title = 'Halaman Home'
  }
}
</script>
