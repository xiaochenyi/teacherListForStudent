<template>
  <div id="app">
    <p>
      <router-link to="/pic">图片</router-link>
      <router-link to="/spec">专题</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
// export default {
//   name: 'App'
// }
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
