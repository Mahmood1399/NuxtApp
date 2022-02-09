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
      <div class="card" v-for="(post, index) in posts" :key="index">
        <div class="card-body">
          <li class="post">
            <h3 class="title">{{ post[0].title }}</h3>
            <p class="description">{{ post[0].body }}</p>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@nuxtjs/axios'

export default {
  transition: 'bounce',
  asyncData({ $axios }) {
    const post = $axios.$get('https://jsonplaceholder.typicode.com/posts')
    return { post }
  },

  //   asyncData({ $axios, error }) {
  //     return axios.get('https://jsonplaceholder.typicode.com/posts')
  //       .then((response) => {
  //         console.log(response)
  //         return {
  //           posts: response.data,
  //         }
  //       })
  //       .catch((e) => {
  //         console.log('Error', e)
  //       })
  //   },
  //   created() {
  //     setTimeout(() => (this.alert = false), 1000)
  //   },
}
</script>

<style scoped>
.title {
  margin: top 20px;
}

.row {
  margin-top: 20px;
}

.post {
  list-style: none;
}
</style>
