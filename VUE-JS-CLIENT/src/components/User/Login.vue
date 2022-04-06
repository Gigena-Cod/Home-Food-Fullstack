<template>
  <form @submit.prevent="iniciarSesion"  id="login" class="w-4/5 lg:w-1/2  max-w-md mx-auto lg:mx-0 lg:bg-white lg:rounded-r-lg  lg:h-96">
      <div id="formulario" class="px-4 py-8  rounded-xl bg-white">
          <!-- USERNAME  -->
          <div class="flex flex-col items-start mb-4 username">
            <label for="username" class="mb-2 text-gray-500 ">Usuario</label>
            <input type="text" id="username" v-model="username" required class="px-4 h-10 border border-gray-600 rounded-xl w-full">
          </div>

          <!-- PASSWORD  -->
          <div class="flex flex-col items-start password">
            <label for="password" class="mb-2 text-gray-500 ">Contraseña</label>
            <input type="password"  id="password" v-model="password" required class="px-4 h-10 border border-gray-600 rounded-xl w-full">
          </div>

          <div v-if="error" class=" text-left text-red-500 mt-5 error">
            Usuario y/o contraseña incorecta
          </div>
          <!-- BUTTON  -->
          <input type="submit" value="Iniciar Sesion" class="mt-10 mb-5  bg-emerald-500 text-white cursor-pointer text-center w-full  h-10  border border-gray-600 rounded-xl items-start button" :class="'mt-5 : error'">

           <!-- BUTTON  -->
          <router-link :to="{name:'register'}" class="createAccount">
            Crear una cuenta
          </router-link>

      </div>
      <div class="flex justify-between mt-8 lg:mt-4 px-4 buttons">
        <div class="remenber">
          <input type="checkbox" id="remenber">
          <label for="remenber" class="ml-2 text-gray-800">Recordarme</label>
        </div>
        <div class="password ">
          <span class="text-gray-800">
            ¿Olvidaste tu contraseña?
          </span>
        </div>
      </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name:'LoginComponent',
    data(){
      return{
        username:'',
        password:'',
        error:false
      }
    },
    computed:{

      ...mapGetters('Auth',{
        userActive:'getSesion'
      })

    },
    methods: {        
      ...mapActions('Auth',['getUser']),

      async iniciarSesion(){
        
        let user ={
          username:this.username,
          password:this.password
        }

        await this.getUser(user)

        
        if(this.userActive){
          this.$router.push({name:'products'})
        }
        else{
          this.error=true
        }
        
      }

    },
    created() {
      
    },
}
</script>

<style>

</style>