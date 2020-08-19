<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <DashboardModal :uppy="uppy" :open="true"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DashboardModal from './components/uppy/DashboardModal.vue'

import * as Uppy from '@uppy/core'

export default {
  name: 'App',
  components: {
    HelloWorld,
    DashboardModal
  },
  data () {
    return {
      uppy: (new Uppy())
    }
  },
  beforeDestroy () {
    this.uppy.close()
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
  margin-top: 60px;
}
</style>
