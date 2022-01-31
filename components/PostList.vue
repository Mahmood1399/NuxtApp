<template>
  <div class="row">
    <div class="col-lg-3" v-for="(post, index) in posts" :key="index">
      <Post
        :id="post.id"
        :title="post.title"
        :body="post.body"
        :img="post.img"
      />
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post'
export default {
  name: 'PostList',
  components: {
    Post,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
