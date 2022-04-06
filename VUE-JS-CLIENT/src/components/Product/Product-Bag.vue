<template>
    <div id="bag-product" class="lg:flex lg:py-4">
        
        <!-- IMAGEN  -->
        <div class="lg:w-2/5 lg:flex items-center imagen">
            <img :src="image" alt="">
        </div>

        <hr class="w-full lg:hidden my-4 bg-black">

         <!-- DESCRIPCION  -->
         <div class=" lg:w-2/5 lg:pl-4 lg:pr-4 details">
             <div class="text-xl  text-left font-bold title">
                 {{titulo}}
             </div>
             <div class="text-left text-gray-800 local">
                 {{local}}
             </div>
             <div class="text-sm mt-2 text-gray-800 text-justify descripcion">
                    {{predescripcion}}
             </div>
         </div>

        <hr class="w-full  lg:hidden my-4 bg-black">

        <!-- COSTO Y CANTIDAD  -->
        <div class="lg:w-1/5 flex-col flex lg:h-20 lg:border-l lg:border-gray-300 lg:pl-4 justify-between costo-cantidad">

            <!-- COSTO  -->
            <div class="costo">
                {{precio | formatoPrecio}}
            </div>


             <!-- CANTIDAD  -->
            <div class="flex items-center  justify-center h-8 cantidad">

                <!-- BOTON MENOS -->
                <div @click="restProduct(id)" class=" hover:bg-lime-500  font-bold w-6 h-8 flex justify-center items-center border-2 border-lime-500  rounded-md text-gray-700 cursor-pointer menos">
                    -
                </div>
               

                <!-- CANTIDAD -->
                <input type="number"  class=" font-bold  w-6 h-8 flex justify-center items-center  text-center rounded-md mx-2 bg-zinc-100 w-12" :value="cantidad" >

                <!-- BOTON MENOS -->
                <div @click="sumProduct(id)" class=" hover:bg-lime-500  font-bold  w-6 h-8 flex justify-center items-center  border-2 border-lime-500  rounded-md  text-gray-700 cursor-pointer mas">
                    +
                </div>

             </div>
            
            
        </div>

    </div>
  
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name:'BagComponent',
    props:{
        id:String,
        titulo:String,
        local:String,
        precio:Number,
        envio:Number,
        predescripcion:String,       
        image:String,
        cantidad:Number
    },
    methods: {
        ...mapMutations('Bag',[
            'sumProduct',
            'restProduct'
        ])
    },
}
</script>

<style>


</style>