<template>
    <div class="container" id="login">
            <div class="card" style="width: 30rem;">
            <div class="card-body">
                 <br>
                <h3 class="card-title text-info">Signup Here</h3>
                <p class="card-text">With signup to the site, you able to write a post</p>
                <form>
                    <input type="text" name="First Name" v-model="editedPost.name" class="form-control" placeholder="First Name">
                    <br>
                    <input type="text" name="Last Name" v-model="editedPost.name" class="form-control" placeholder="Last Name">
                    <br>
                    <input type="text" name="" v-model="editedPost.name" class="form-control" placeholder="User Name">
                    <br>
                    <input type="email" name="email" id="email" placeholder="someone@email.com" class="form-control" v-model="editedPost.email">
                    <br>
                    <input type="password" name="password" id="password" placeholder="password" class="form-control" v-model="editedPost.password">
                    <br>
                    <input type="password" name="confirm" id="confirm" placeholder="confirm password" class="form-control" v-model="editedPost.confirm">
                    <br>
                    <div class="row">
                        <div class="col-lg-6">
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </div>
                    <div class="col-lg-6">
                        <nuxt-link to="/" class="btn btn-danger btn-block">Cancel</nuxt-link>
                    </div>
                    </div>
                    <br>
                    <b class="text-bold text-left">Already have accounts? 
                        <nuxt-link to="/login">Click here</nuxt-link>
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
    margin-top: 30px;
}

.logo{
    align-items: center;
}
</style>