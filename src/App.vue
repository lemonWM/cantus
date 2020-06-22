<template>
  <div id="app">
    <div class="menu main">
        <div id="nav" class="main-nav menu">
        <router-link :to="{name: 'home'}">HOME</router-link>
        <router-link :to="{name: 'shop'}">SHOP</router-link>
        <router-link :to="{name: 'Albums'}">ALBUMS</router-link>
      </div>
      <div id="nav" class="menu align-center logo-home">
        <router-link :to="{name: 'home'}">
          <img src="../public/img/icons/logo.png" alt="home" class="menu-logo">
        </router-link>
      </div>
      <div id="nav" class="user-nav menu align-right">
        <router-link :to="{name: 'login'}">LOGIN</router-link>
        <router-link :to="{name: 'register'}">REGISTER</router-link>
      </div>
    </div>

    <router-view/>
  </div>
</template>

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
</style>