<template>
  <div id="app">
    <VHeader />
    <VMainWrapper />
    <VFooter />
  </div>
</template>

<script>
import VHeader from './components/VHeader'
import VMainWrapper from './components/VMainWrapper'
import VFooter from './components/VFooter'

export default {
  name: 'App',
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}

</style>
