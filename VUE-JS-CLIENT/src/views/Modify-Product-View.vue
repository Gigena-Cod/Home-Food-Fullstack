<template>
  <div id="register-products" class="flex px-4 flex-wrap my-12 ml-20 2xl:mx-auto max-w-7xl  ">
        <div class="text-4xl w-full  mb-8 pb-4  mx-auto uppercase title">
            Modificar Producto
        </div> 
        <UpdatedComponent/>

  </div>
</template>

<script>
import UpdatedComponent from '@/components/Product/Modify'
import { mapGetters } from 'vuex'

export default {
    name:'UpdatedProductView',
    components:{
        UpdatedComponent
    },        
    computed:{
        ...mapGetters('Auth',{
            user:'getSesion'
        })
    },
    async created() {
        // VALIDAMOS SI INICIO SESION 

        if(!this.user){

            this.$router.push({name:'login'})

        }
    }
}
</script>

<style>

</style>