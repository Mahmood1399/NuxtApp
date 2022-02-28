<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="card">
      <img :src="img" class="card-img-top" alt="post-image" />
      <div class="card-body">
        <h5 class="card-title title" style="display: inline-block">
          {{ title }}
        </h5>
        <span style="float: right; font-size: 11; color: lightgray">
          5 Jul 2022
        </span>
        <p class="card-text" style="display: inline-block">
          {{ body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostDetails',

  props: {
    id: {
      type: Number,
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
      default: '/images/lambo.jpg',
    },
  },
}
</script>
