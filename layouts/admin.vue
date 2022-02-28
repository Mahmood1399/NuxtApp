<template>
  <div>
    <Navbar />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/admin/Navbar'
export default {
  middleware: 'auth',
  components: {
    Navbar,
  },
}
</script>
