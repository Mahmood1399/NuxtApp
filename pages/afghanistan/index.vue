<template>
  <div>
    <h2 class="title">This data cames from internet</h2>
    <div class="row">
      <div
        v-if="$nuxt.isOffline"
        class="alert alert-warning alert-dismissible fade show"
        role="alert"
        v-show="alert"
      >
        <strong>Sorry!</strong> You are offline
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div class="card">
        <div class="card-body">
          <li class="post">
            <h3 class="title">{{ post.title }}</h3>
            <p class="description">{{ post.body }}</p>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const post = await $axios.$get(
      'https://jsonplaceholder.typicode.com/posts/3'
    )
    return { post }
  },

  created() {
    setTimeout(() => (this.alert = false), 1000)
  },
}
</script>

<style scoped>
.title {
  margin-top: 20px;
}

.row {
  margin-top: 20px;
}

.post {
  list-style: none;
}
</style>
