<template>
  <div class="container">
    <div class="card col-lg-8">
      <div class="card-body">
        <h3 class="card-title text-info">Forgot Password</h3>
        <p class="card-text">Enter your email address to reset your password</p>
        <div class="row">
          <div class="col-lg-9">
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="someone@email.com"
                class="form-control"
                v-model="editedPost.email"
              />
              <br />
              <br />
            </form>
          </div>
          <div class="col-lg-3">
            <button type="submit" class="btn btn-primary btn-block">
              Send reset link
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <b class="text-bold text-left">
              <nuxt-link to="/login">Click here</nuxt-link>
              to enter your password?
            </b>
          </div>
          <div class="col-lg-4 text-right">
            <nuxt-link to="/">Back to Site</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  transition: 'bounce',
  data() {
    return {
      editedPost: {
        email: '',
      },
    }
  },
}
</script>

<style scoped>
.card {
  margin: 0 auto;
  margin-top: 80px;
}
</style>
