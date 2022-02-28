<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand">Welcome Admin</a>
      <div class="d-flex">
        <a @click.prevent="logout" class="nav-item btn btn-danger">Logout</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
  },
}
</script>
