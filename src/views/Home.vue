<template>
<div>
  <navbar></navbar>
</div>
</template>

<script>
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

