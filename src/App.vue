<template>
  <div id="app">

    <navigation />
    
    <router-view class="content-main"/>
    
    <footerMain />

  </div>
</template>

<script>

import navigation from './components/navigation'
import footerMain from './components/footer'

export default {
  components: {
    navigation,
    footerMain
  }
}
</script>
