<template>
  <div>
    <NavBar />
    <div class="container">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style lang="css">
body {
  background-color: ghostwhite;
}
</style>
