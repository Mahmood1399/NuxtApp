<template>
  <div>
    <Singup />
  </div>
</template>

<script>
import Singup from '@/components/auth/signup'
export default {
  layout: 'login',
  transition: 'bounce',
  components: {
    Singup,
  },
}
</script>
