<template>
  <div>
    <h3>hello: {{ $route.params.id }}</h3>
    <!-- <Post
      id="{{$route.params.id}}"
      title="{{ $route.params.title }}"
      body="{{ $route.params.body }}"
      img="{{ $route.params.id }}"
    /> -->
  </div>
</template>

<script>
import Post from '@/components/Post'
export default {
  transition: 'bounce',
  components: {
    Post,
  },
}
</script>
