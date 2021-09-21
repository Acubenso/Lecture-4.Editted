<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>	
</template>

<script>
import {mapGetters} from 'vuex'

  export default {
    name: 'VMainWrapper',
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'CART'
      ])
    }
  }
</script>

<style lang="scss">
  v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }	
</style>