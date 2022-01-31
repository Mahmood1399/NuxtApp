<template>
    <div class="container" id="login">
            <div class="card" style="width: 30rem;">
            <div class="card-body">
                <h3 class="card-title text-info">Login Here</h3>
                <p class="card-text">With login to the site, you able to write a post</p>
                <form>
                    <input type="email" name="email" id="email" placeholder="someone@email.com" class="form-control" v-model="editedPost.email">
                    <br>
                    <input type="password" name="password" id="password" placeholder="password" class="form-control" v-model="editedPost.password">
                    <br>
                    <input type="checkbox" name="remember" id="remember" class="checkbox">&nbsp;remember me!
                    <span style="float:right;">Forgot password?
                         <nuxt-link to="/forgotpassword">Click here</nuxt-link>
                    </span>
                    <br><br>
                    <div class="row">
                        <div class="col-lg-6">
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </div>
                    <div class="col-lg-6">
                        <nuxt-link to="/" class="btn btn-danger btn-block">Cancel</nuxt-link>
                    </div>
                    </div>
                    <br>
                    <b class="text-bold text-left">Don't have accounts? 
                        <nuxt-link to="/signup">Click here</nuxt-link>
                    </b>
                    <span style="color:lightgray; float:right;">Mahmood Nazari</span>
                </form>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return {
            editedPost:{
                email: '',
                password: ''
            }
        }
    }
}
</script>
<style lang="css" scoped>

.card{
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
}
</style>