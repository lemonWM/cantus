<template>
    <div class="menu main navigation-wrapper">
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
      <div v-else id="nav" class="user-nav menu align-right" >
         <router-link :to="{name: 'user' , params: {id: getUser ,user: isLogged}}">
            <i class="far fa-user"></i>
         {{getUser}}</router-link>
         <router-link :to="{name: 'Usercart'}">
            <i class="fas fa-shopping-cart">{{cartItems}}</i>
         </router-link>
         <router-link to="" @click.native="logOut">
            <i class="fas fa-sign-out-alt"></i>
         </router-link>
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