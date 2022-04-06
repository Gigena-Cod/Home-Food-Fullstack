<template>
    <div id="form">
        <form id="register" @submit.prevent="registrar"   class="w-4/5 mx-auto px-4 py-8 md:w1/2 lg:w-1/3 rounded-xl bg-white">

            <!-- NOMBRE  -->
            <div class="flex flex-col items-start mb-4 nombre">
                <label for="username" class="mb-2 text-gray-500 ">Nombre</label>
                <input type="text" id="nombre" v-model="nombre" required class="px-4 h-10 border border-gray-600 rounded-xl w-full">
            </div>

            <!-- APELLIDO  -->
            <div class="flex flex-col items-start mb-4 nombre">
                <label for="username" class="mb-2 text-gray-500 ">Apellido</label>
                <input type="text" id="apellido" v-model="apellido" required class="px-4 h-10 border border-gray-600 rounded-xl w-full">
            </div>

            <!-- USERNAME  -->
            <div class="flex flex-col items-start mb-4 username">
                <label for="username" class="mb-2 text-gray-500 ">Usuario</label>
                <input type="text" id="username" v-model="username" required class="px-4 h-10 border border-gray-600 rounded-xl w-full">
            </div>

            <!-- PASSWORD  -->
            <div class="flex flex-col items-start mb-4 password">
                <label for="password" class="mb-2 text-gray-500 ">Contraseña</label>
                <input type="password"  id="password" v-model="password" required class="px-4 h-10 border border-gray-600 rounded-xl w-full">
            </div>

            <!-- ROL  -->
            <div class="flex flex-col items-start  justify-center  mx-auto rol">     
                <label for="password" class="mb-2 text-gray-500 ">Rol</label>       
                <select v-model="rol" class="px-4 h-10 border border-gray-600 rounded-xl w-full">
                    <option disabled value="">Seleccione un rol</option>
                    <option>Cliente</option>
                    <option>Comercio</option>
                </select>
            </div>

            <!-- BUTTON  -->
            <input type="submit" value="Registrarse" class="mt-10   bg-emerald-500 text-white cursor-pointer text-center w-full  h-10  border border-gray-600 rounded-xl items-start button" :class="'mt-5 : error'">
    
        

        </form>
        <div v-if="status" class="h-screen w-screen absolute top-0 pt-56 bg-slate-900 bg-opacity-25 mensaje">
            <div id="correct"  class="shadow-2xl flex flex-wrap justify-center m-auto w-96 py-4 bg-white rounded-xl">
            
                <div class="w-full texto">
                    Registro realizado correctamente
                </div>
                <div @click="redirect" class="bg-emerald-500 text-white w-28 rounded-md py-1 mt-4 cursor-pointer hover:bg-emerald-600 boton">
                    Aceptar
                </div>
            </div>
        </div>
        
    </div>
  
</template>

<script>
import axios from 'axios'

export default {
    name:'RegisterComponent',    
    data(){
        return{
            status:false,
            nombre:'',
            apellido:'',
            username:'',
            password:'',
            rol:''
        }
    },
    methods: {
        async registrar(){

            let newUser={
                nombre:this.nombre,
                apellido:this.apellido,
                username:this.username,
                password:this.password,
                rol:this.rol,
            }
            
           let url ='/register'
            const response = await axios.post(url,newUser)       
            const data = await response.data             
            if(data){
                this.status=true;
            }
              
        },
        redirect(){
            this.$router.push({name:'login'})
        }
    },
}
</script>

<style>

</style>