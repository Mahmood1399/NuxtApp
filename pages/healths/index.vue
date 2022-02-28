<template>
  <div class="container">
    <h1>Random Users</h1>
    <div class="row">
      <button on-click="getUsers" class="btn btn-lg btn-primary">
        Get Users
      </button>
    </div>
    <ul v-for="(user, index) in users" :key="index">
      <li class="list-item">{{ user }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  transition: 'bounce',

  computed: mapState(['users']),
  methods: {
    ...mapActions(['getUsers']),
  },
}
</script>
