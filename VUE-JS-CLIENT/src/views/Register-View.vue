<template>
  <div id="register" class="pt-8 pl-20 bg-gradient-to-r from-red-400 to-red-600 h-screen">
      <div class="text-4xl w-full text-white  border-b border-white mb-8 pb-4  mx-auto  font-bold title">
          Registrarse
      </div>
      <Register/>

  </div>
</template>

<script>

import Register from '../components/User/Register.vue'

export default {
    name:'RegisterView',
    components:{
        Register
    }
}
</script>

<style>

</style>