<template>
<div>
  <navbar></navbar>
  <landing></landing>
  <about></about>
</div>
</template>

<script>
import navbar from '@/components/Navbar'
import landing from '@/components/Landing'
import about from '@/components/About'

export default {
  name: 'home',
  components: {
    navbar,
    landing,
    about
  },
  mounted () {
    document.title = 'Autofood | Home'
  }
}
</script>

