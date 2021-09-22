<template>
  <div class="v-main-wrapper">
    <VCatalog />
  </div>	
</template>

<script>
import VCatalog from "./VCatalog";
import {mapGetters} from 'vuex'

  export default {
    name: 'VMainWrapper',
    data() {
      return {
      }
    },
    components: {
      VCatalog
    },
    computed: {
      ...mapGetters([
        'CART'
      ])
    }
  }
</script>

<style lang="scss">
  .v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }	
</style>