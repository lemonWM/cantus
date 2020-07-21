<template>
  <div id="app">

    <navigation />
    
    <router-view class="content-main"/>

  </div>
</template>

<script>

import navigation from './components/navigation'

export default {
  components: {
    navigation
  }
}
</script>
