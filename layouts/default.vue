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

.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}

.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(0);
  }
}
</style>
