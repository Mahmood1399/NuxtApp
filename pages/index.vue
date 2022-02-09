<template>
  <div id="content">
    <div id="title">
      <h2 class="title">Afghanistan</h2>
    </div>
    <nuxt-link to="/allnews" class="all-news">See All > </nuxt-link>
    <div class="col-lg-12" id="spliter"></div>

    <PostList :posts="loadedPosts" />

    <div id="title">
      <h2 class="title">Sports</h2>
    </div>
    <div class="col-lg-12" id="spliter"></div>

    <div class="row" style="margin-top: 10px">
      <div class="col-lg-3">
        <Post
          :id="1"
          title="The First Post"
          body="A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."
          img="/images/lambo.jpg"
        />
      </div>
      <div class="col-lg-3">
        <Post
          :id="2"
          title="The Secon Post"
          body="A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."
          img="/images/3.jpg"
        />
      </div>
      <div class="col-lg-3">
        <Post
          :id="3"
          title="The third Post"
          body="A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."
          img="/images/4.jpeg"
        />
      </div>
      <div class="col-lg-3">
        <Post
          :id="4"
          title="The Fourth Post"
          body="A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."
          img="/images/2.jpg"
        />
      </div>
    </div>

    <div id="title">
      <h2 class="title">Others</h2>
    </div>
    <div class="col-lg-12" id="spliter"></div>
    <div class="row">
      <div class="col-lg-6">
        <OtherPost
          id="10"
          title="The First of Other Post"
          body="A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content,"
          img="/images/o2.jpg"
        />
      </div>
      <div class="col-lg-6">
        <OtherPost
          id="11"
          title="The Second of Other Post"
          body="A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content,"
          img="/images/o1.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import OtherPost from '@/components/OtherPost'
import data from '@/api/data.json'

export default {
  name: 'IndexPage',
  transition: 'bounce',
  components: {
    PostList,
    OtherPost,
  },

  asyncData(context, callback) {
    callback(null, { loadedPosts: data })
  },
}
</script>

<style lang="css" scoped>
.body {
  background-color: lightgray;
}

#spliter {
  background-color: black;
  height: 2px;
  margin-bottom: 10px;
}

#title {
  background-color: black;
  height: 45px;
  color: white;
  padding-right: 5px;
  padding-left: 5px;
  border: 1px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: inline-block;
}

#content {
  margin: 0 auto;
  position: relative;
  top: 20px;
}

.all-news {
  text-decoration: none;
  font-weight: bold;
  color: black;
  float: right;
}
</style>
