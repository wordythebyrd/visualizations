<template>
  <v-app id="app">
    <Header></Header>
    <v-content>
      <v-container fluid>
        <img src="./assets/logo.png">
        <Visualizations msg="vue.js and d3"/>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Visualizations from './components/Visualizations.vue'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Visualizations
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
