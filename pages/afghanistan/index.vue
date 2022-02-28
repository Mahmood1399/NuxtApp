<template>
  <div>
    <h2 class="title">This data cames from internet</h2>
    <div class="row">
      <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="post.image"
              class="img-fluid rounded-start"
              :alt="post.title"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.description }}</p>
              <p class="text-white">
                <span class="badge rounded-pill bg-danger">
                  {{ post.countries[0] }}
                </span>
              </p>
              <p class="text-white">
                <span class="badge rounded-pill bg-primary">
                  {{ post.countries[1] }}
                </span>
              </p>
              <p class="card-text">
                <small class="text-muted">{{ post.updatedAt }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@nuxtjs/axios'
import { mapActions, mapState, mapMutations, mapGetters } from 'vuex'
export default {
  transition: 'bounce',
  computed: mapState(['mountains']),
  methods: {
    ...mapActions(['getMountains']),
  },
  // asyncData({ $axios }) {
  // const post = $axios.$get('https://api.nuxtjs.dev/posts')
  // return { post }
  // },
  async asyncData({ $axios }) {
    const post = await $axios.$get(`https://api.nuxtjs.dev/posts/2`)
    return { post }
  },

  // asyncData({ $axios, error }) {
  // return axios.get('https://api.nuxtjs.dev/mountains')
  // .then((response) => {
  // console.log(response)
  // return {
  // posts: response.data,
  // }
  // })
  // .catch((e) => {
  // console.log('Error', e)
  // })
  // },
  created() {
    setTimeout(() => (this.alert = false), 1000)
  },
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
