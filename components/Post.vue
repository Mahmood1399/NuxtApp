<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="card">
      <nuxt-link :to="`/posts/${id}`">
        <img :src="img" class="card-img-top" alt="post-image" />
      </nuxt-link>
      <div class="card-body">
        <h5 class="card-title title" style="display: inline-block">
          {{ title }}
        </h5>
        <span style="float: right; font-size: 11; color: lightgray">
          5 Jul 2022
        </span>
        <p class="card-text" style="display: inline-block">
          {{ body }}
          <nuxt-link :to="`/posts/${id}`" v-if="body.length > 20"
            >See more...</nuxt-link
          >
        </p>
        <nuxt-link :to="`post/${id}`"></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',

  props: {
    id: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },

    img: {
      type: String,
      required: false,
      default: '/images/1.jpg',
    },
  },
}
</script>
