<template>
    <div class="menu main">
        <div id="nav" class="main-nav menu">
        <router-link :to="{name: 'home'}">HOME</router-link>
        <router-link :to="{name: 'shop'}">SHOP</router-link>
        <router-link :to="{name: 'Albums'}">ALBUMS</router-link>
      </div>
      <div id="nav" class="menu align-center logo-home">
        <router-link :to="{name: 'home'}">
          <img src="../../public/img/icons/logo.png"  class="menu-logo">
        </router-link>
      </div>
      <div id="nav" class="user-nav menu align-right" v-if="!getUser">
        <router-link :to="{name: 'login'}">LOGIN</router-link>
        <router-link :to="{name: 'register'}">REGISTER</router-link>
      </div>
      <div v-else class="user-nav menu align-right" >
         <router-link :to="{name: 'user' , params: {id: getUser ,user: isLogged}}">{{getUser}}</router-link>
         <router-link :to="{name: 'Usercart'}">
            <i class="fas fa-shopping-cart">{{cartItems}}</i>
         </router-link>
         <router-link to="" @click.native="logOut">Logout</router-link>
      </div>
    </div>
</template>

<script>

import {logout} from '../utils/token'

export default {
    name: 'navigation',
    computed: {

        getUser(){

            return this.$store.state.user.firstName
        },
        
        isLogged(){

            return this.$store.state.user
        },
        cartItems(){

          if(this.$store.state.cart.length){

            return this.$store.state.cart.length
          }
        }
    },
    methods: {

        logOut(){

          if(window.location.pathname === '/'){

            logout()
            

          } else if(window.location.pathname !== '/'){

            this.$router.push({name: 'home'})
            logout()
          }
        }
    }
}
</script>

<style scoped> 
.main{
  justify-content: space-between;
  background-color: #ff0000;
}
.menu-logo{
  height: 40px;
}
.logo-home{
  margin-left: -140px;
}
#nav{
  align-items: center;
}
a{
  color: white;
font-weight: 500;
font-size: 14px;
}

.content-main{
  min-height: 85vh;
}
.btn{
  cursor: pointer;
}

</style>