<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <nuxt-link to="/" class="navbar-brand">
      <img src="/images/logo.png" alt="logo" width="50" height="50">
    </nuxt-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <nuxt-link to="/" class="nav-link" exact="exact">Home <span class="sr-only">(current)</span></nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/afghanistan" class="nav-link">Afghanistan</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/healths" class="nav-link">Health</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/economy" class="nav-link">Economy</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/sports" class="nav-link">Sports</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/about" class="nav-link">About</nuxt-link>
      </li>
    </ul>
  </div>
  <li class="nav-item right-nav">
      <nuxt-link to="/login" class="btn btn-primary">
      Login
    </nuxt-link>
    </li>
    <li class="nav-item right-nav">
      <nuxt-link to="/signup" class="btn btn-danger">
      Signup
    </nuxt-link>
    </li>
  <li class="nav-item right-nav">
        <img src="/images/avatar5.png" alt="profile" width="50" height="50" class="img img-circle">
      </li>
    </nav>
</template>

<style lang="css" scoped>

nav{
  position: relative;
}


.right-nav{
  list-style-type: none;
  margin-right: 2%;
}

ul{
  margin-left: 5%;
  margin-right: 5%;
}

.img{
  border: 1px solid white;
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
</style>