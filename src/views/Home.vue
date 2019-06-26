<template>
<div>
  <navbar></navbar>
  <landing></landing>
  <about></about>
  <solution></solution>
</div>
</template>

<script>
import navbar from '@/components/Navbar'
import landing from '@/components/Landing'
import about from '@/components/About'
import solution from '@/components/Solution'

export default {
  name: 'home',
  components: {
    navbar,
    landing,
    about,
    solution
  },
  mounted () {
    document.title = 'Autofood | Home'
  }
}
</script>

