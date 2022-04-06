<template>
  <div id="detail" class="flex px-4 flex-wrap my-12 ml-20 2xl:mx-auto max-w-7xl  ">
        
        <!-- TITULO -->
        <div class="flex justify-between items-end text-left w-full border-b border-gray-800  mb-4 pb-4 titulo">
           
            <!-- TITULO  -->
            <div class="titulo">
                <div class=" text-2xl  text-gray-800 font-bold producto">
                    {{producto.titulo}}
                </div>
                <div class="text-gray-600 local">
                    {{producto.local}}
                </div>
            </div>
            <!-- BOTON VOLVER -->
            <div @click="volver()" class="flex justify-center text-white hover:bg-red-600 items-center w-20 h-8 rounded bg-red-500 cursor-pointer volver">
                Volver
            </div>
        </div>

        

        <!-- IMAGE  -->        
        <div class="w-full md:w-1/2  imagen">
            <img :src="producto.images[0]" class="rounded " alt="IMAGEN">
        </div>

        <!-- CONTENIDO  -->
        <div class="W-full md:w-1/2 md:pl-4 content">

            <!-- PRECIO -->
            <div class="flex justify-between mt-4 precio">
                <div class="producto">
                    {{producto.precio | formatoPrecio }}
                </div>
                <div class="envio">
                     {{producto.envio | formatoPrecio }}
                </div>
            </div>

            <!-- DESCRIPCION  -->
            <div class="text-left my-4 descripcion">
                
                {{producto.descripcion}}
            </div>


            <div class="flex justify-between botones">
                <!-- CANTIDAD  -->
                <div class="flex items-center h-8 cantidad">

                    <!-- BOTON MENOS -->
                    <div @click="cantidad>1 ? cantidad-- : cantidad" class="h-full w-8 flex justify-center items-center bg-lime-500 w-6 rounded-md active:bg-lime-600 text-gray-700 cursor-pointer menos">
                    -
                    </div>
                    <!-- CANTIDAD -->
                    <input type="number"  class="h-full w-8 flex justify-center items-center  text-center rounded-md mx-2 bg-zinc-200 w-12" v-model="cantidad" id="">

                    <!-- BOTON MENOS -->
                    <div @click="cantidad++" class="h-full w-8 flex justify-center items-center  bg-lime-500 w-6 rounded-md active:bg-lime-600 text-gray-700 cursor-pointer mas">
                    +
                    </div>

                </div>

                <!-- AGREGAR AL CARRITO  -->
                <div @click="agregarProducto()" class="bg-lime-500 hover:bg-white hover:border-2 hover:border-lime-500 w-44  text-gray-700 rounded-md h-8 flex justify-center items-center cursor-pointer  ver-mas">
                    Agregar al carrito 
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import {  mapGetters, mapMutations } from 'vuex'


export default {
    name:'Detail-Component',   
    data(){
        return{
            cantidad:1,
            producto:{}
        }
    },
    async created() {        
        // VALIDAMOS SI INICIO SESION 
        if(!this.user){           

            this.$router.push({name:'login'})

        }else{
             await this.loadProduct() 
        }
    },
    computed:{
        
        ...mapGetters('Auth',{
                user:'getSesion'
            }),

        ...mapGetters('Product',{
            Productos:'getProducts'
        })
    },
    methods: {        
           
           
         async loadProduct(){
                
            
            this.Productos.map( producto => {

                if(producto._id == this.$route.params.id){
                    this.producto=producto
                }

                }
            )
            
        },
        volver(){
           this.$router.go(-1)
        },
        ...mapMutations('Bag',[
            'addBag'
        ]),
        agregarProducto(){

            let producto= {
            'id':this.producto._id,
            'titulo':this.producto.titulo,
            'local':this.producto.local,          
            'precio':this.producto.precio,
            'envio':this.producto.envio,
            'predescripcion':this.producto.predescripcion,
            'image':this.producto.images[0],
            'cantidad':this.cantidad
            }

            this.addBag(producto)
      },

    }


}
</script>

<style>

</style>