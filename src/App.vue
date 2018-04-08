<template>
  <v-app id="app">
    <toolbar></toolbar>
    <v-content>
      <v-container fluid>
        <!-- <img src="./assets/logo.png"> -->
        <visualizations msg="vue.js and d3"/>
      </v-container>
    </v-content>
    <layoutFooter></layoutFooter>
  </v-app>
</template>

<script>
import visualizations from './components/visualizations.vue'
import toolbar from './components/toolbar'
import layoutFooter from './components/layoutFooter'

export default {
  name: 'app',
  components: {
    toolbar,
    layoutFooter,
    visualizations
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
