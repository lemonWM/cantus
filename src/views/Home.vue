<template>
  <div class="home flex-container flex-dir-column">
    <headerHome/>
    <categoriesHome />
  </div>
</template>

<script>
// @ is an alias to /src
import headerHome from '@/components/home/header.vue'
import categoriesHome from '@/components/home/categories.vue'

export default {
  name: 'Home',
  components: {
    headerHome,
    categoriesHome
  }
}
</script>
