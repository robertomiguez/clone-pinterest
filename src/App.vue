<template>
  <div id="app">
    <ListSeasons/>
  </div>
</template>

<script>
import ListSeasons from './views/ListSeasons'

export default {
  name: 'App',
  components: {
    ListSeasons
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
