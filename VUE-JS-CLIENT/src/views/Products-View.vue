<template>
  <div id="products" class="ml-20 mt-8 px-4 ease-in duration-100 collapsed " :class="{'max-width-uncollapsed' : !getMainCollapsed()}">
      <div class="text-4xl w-full border-b border-black mb-8 pb-4  mx-auto  font-bold title">
          PRODUCTOS
      </div>
      <div class="md:flex flex-wrap mx-auto justify-between  lg:justify-start  w-full  px-4 lg:px-0 products" >
          <Product v-for="producto in Productos" :class="{'width-uncollased' : !getMainCollapsed(), 'width-collased' : getMainCollapsed() }" :key='producto._id' :id='producto._id'  :titulo='producto.titulo' :local='producto.local' :predescripcion='producto.predescripcion' :precio='producto.precio' :envio='producto.envio' :image='producto.images[0]' />
         
      </div>
  </div>
</template>

<script>
import Product from '@/components/Product/Product'
import { mapActions,mapGetters } from 'vuex'

export default {
    name:'ProductsView',
    components:{
        Product
    },
    computed:{
        ...mapGetters('Auth',{
            user: 'getSesion'
        }),
        ...mapGetters('Product',{
            Productos:'getProducts'
        })
    },
    async created() {
        
        // VALIDAMOS SI INICIO SESION 
        if(this.user){
            // CARGAMOS PRODUCTOS 
            await this.getProducts(this.user)
        }
        else{
            this.$router.push({name:'login'})
        }
        
        
    },
    methods: {

        ...mapActions('Product',[
            'getProducts'
        ]),      
     

        getMainCollapsed(){
            return this.$store.getters.getMainCollapsed 
        }
        ,
       
   
    }
}
</script>

<style>
@media screen and (min-width:64rem) { 

    .max-width-collapsed{
        max-width: 100%;
        margin-left: 6.5rem;
        margin-right: 1.5rem;
    }

    .max-width-uncollapsed{
        max-width: 100%;
        margin-left: 22rem;
        margin-right: 2rem
    }


    .width-collased{
        width: 23% !important;
    }

    .width-uncollased{
        width: 32% !important;
    }

    #products > .products .width-collased{
        margin-left: 2.6%;
    }

   #products > .products .width-collased:nth-child(4n+1){
        margin-left: unset;
    }

    #products > .products .width-uncollased{
        margin-left: 2%;
    }

    #products > .products .width-uncollased:nth-child(3n+1){
        margin-left: unset;
    }

}
</style>