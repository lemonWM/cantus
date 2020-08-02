<template>
  <div class="home flex-container flex-dir-column">
    <headerHome/>
    <categoriesHome />
    <div class="loader" v-if="!loaded">
      <atom-spinner 
        :animation-duration="1500"
        :size="60"
        color="#fa0000"
      />
    </div>
  </div>
</template>

<script>

import headerHome from '@/components/home/header.vue'
import categoriesHome from '@/components/home/categories.vue'
import {AtomSpinner} from 'epic-spinners'

export default {
  name: 'Home',
  preloader: true,

  computed: {
    
    loaded(){

      return this.$store.state.categories.length
    }
  },
  components: {
    headerHome,
    categoriesHome,
    AtomSpinner
  }
}
</script>
