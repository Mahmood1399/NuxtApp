<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
        <div class="col-md-4">
            <nuxt-link :to="`/posts/detail/${id}`">
                <img :src="img" alt="post-image">
            </nuxt-link>
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title title">{{ title }}</h5>
            <p class="card-text">{{ body }}
                <nuxt-link :to="`/posts/detail/${id}`" v-if="body.length > 100">See More...</nuxt-link>
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'OtherPost',
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
            default: '/images/o1.jpg'
        }
    }
}
</script>
