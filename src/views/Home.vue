<template>
<div>
  <navbar></navbar>
  <landing></landing>
  <about></about>
  <solution></solution>
  <unduh></unduh>
</div>
</template>

<script>
import navbar from '@/components/Navbar'
import landing from '@/components/Landing'
import about from '@/components/About'
import solution from '@/components/Solution'
import unduh from '@/components/Unduh'

export default {
  name: 'home',
  components: {
    navbar,
    landing,
    about,
    solution,
    unduh
  },
  mounted () {
    document.title = 'Autofood | Home'
  }
}
</script>

