<template>
<div>
  <navbar></navbar>
  <landing></landing>
</div>
</template>

<script>
import navbar from '@/components/Navbar'
import landing from '@/components/Landing'

export default {
  name: 'home',
  components: {
    navbar,
    landing
  },
  mounted () {
    document.title = 'Halaman Home'
  }
}
</script>

