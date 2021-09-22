<template>
  <div>
    <VHeader />
    <VMainWrapper />
    <VFooter />
  </div>
</template>

<script>
import VHeader from './VHeader'
import VMainWrapper from './VMainWrapper'
import VFooter from './VFooter'

export default {
  name: 'VHome',
  components: {
    VHeader,
    VMainWrapper,
    VFooter
  },
  data() {
    return {

    }
  }
}
</script>