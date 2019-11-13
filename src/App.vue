<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
    <button class="btn mb-5">ページトップ</button>
  </div>
</template>

<script>
import myheader from './components/myheader'

export default {
  name: 'App',
  components: {
    myheader
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
}

.logo{
  height: 200px;
  left:0;
}

*{
  font-family: 'Cormorant Garamond', serif;
}

.btn{
  border: 1px solid rgb(201, 201, 201);
  font-family: 'Cormorant Garamond', serif;
  color: rgb(201, 201, 201);
}
.btn:hover{
  border: 1px solid black;
}
</style>
