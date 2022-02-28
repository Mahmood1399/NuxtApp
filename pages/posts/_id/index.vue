<template>
  <div>
    <h3>This is the details of post.</h3>
    <PostDetails
      :id="$route.params.id"
      title="This is the post"
      body="A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."
      :img="$route.params.img"
    />
  </div>
</template>

<script>
export default {
  transition: 'bounce',
}
</script>
