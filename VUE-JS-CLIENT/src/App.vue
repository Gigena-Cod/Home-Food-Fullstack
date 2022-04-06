<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Base/Header.vue'
export default {
  name:'App',
  components:{ Header}
}
</script>


<style>
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222222;
}

.bg-custom{
  background-color: #E24135;
}

.bg-custom-hover{
   background-color:#B51B10
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input[type=number] { -moz-appearance:textfield; }

</style>
