<template>
  <div id="product" class="w-full bg-gray-100 border shadow-2xl rounded-xl mb-8 lg:mb-12 hover:scale-105 ease-in duration-300">
    <!-- PRECIO Y ENVIO  -->
    <router-link :to="{name:'detail', params:{ id:this.id}}" class="flex justify-between items-end pb-2 px-4 h-80 lg:h-72 bg-cover bg-center rounded-t-xl section-image" :style="{ 'background-image': 'linear-gradient(to bottom, rgba(255,0,0,0) 50%, rgba(0, 0, 0, 1)), url(' + image + ')' }">
      
      <!-- PRECIO  -->
      <div class="flex items-center precio">
        <div class="flex items-center w-auto h-10 svg">
          <svg class="w-7 h-7 " xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none">
            <path d="M2255 5108 c-449 -50 -923 -248 -1289 -536 -102 -80 -316 -292 -401 -398 -234 -289 -407 -638 -495 -996 -57 -232 -65 -309 -65 -613 0 -294 6 -357 52 -565 179 -813 771 -1513 1540 -1819 322 -128 605 -181 963 -181 422 0 785 84 1144 264 272 137 480 290 696 512 393 405 636 910 705 1464 20 163 20 477 0 640 -57 457 -245 907 -532 1273 -84 107 -355 372 -464 454 -362 271 -787 443 -1229 498 -137 17 -489 19 -625 3z m595 -334 c805 -101 1517 -667 1803 -1434 155 -415 181 -898 72 -1326 -200 -782 -804 -1396 -1583 -1610 -370 -101 -794 -101 -1164 0 -771 212 -1372 817 -1578 1588 -95 357 -95 779 0 1136 105 392 316 752 606 1032 497 481 1157 700 1844 614z"/>
            <path d="M2473 4140 c-57 -35 -67 -61 -73 -193 l-5 -119 -55 -17 c-229 -71 -420 -273 -480 -507 -27 -105 -27 -263 0 -368 49 -194 190 -370 367 -458 100 -50 179 -70 340 -86 72 -7 119 -18 158 -36 72 -33 158 -119 193 -193 24 -52 27 -70 27 -163 0 -93 -3 -111 -27 -163 -35 -74 -121 -160 -195 -195 -52 -24 -70 -27 -163 -27 -93 0 -111 3 -163 27 -73 34 -160 121 -193 192 -14 30 -29 91 -35 139 -18 136 -64 187 -169 187 -65 0 -110 -24 -140 -72 -27 -45 -27 -167 0 -272 60 -235 232 -418 470 -502 l65 -23 5 -119 c4 -91 9 -124 23 -145 59 -91 215 -91 274 0 14 21 19 54 23 146 l5 119 55 17 c228 71 421 274 480 507 27 105 27 263 0 368 -49 194 -190 370 -367 458 -100 50 -179 70 -340 86 -72 7 -119 18 -158 36 -72 33 -158 119 -193 193 -24 52 -27 70 -27 163 0 93 3 111 27 163 35 74 121 160 195 195 52 24 70 27 163 27 93 0 111 -3 163 -27 73 -34 160 -121 193 -192 14 -30 29 -91 35 -139 13 -96 33 -138 81 -167 45 -27 131 -27 176 0 54 33 72 73 72 166 0 293 -213 576 -500 665 l-55 17 -5 119 c-4 92 -9 125 -23 146 -29 45 -75 67 -137 67 -37 0 -66 -6 -87 -20z"/>
            </g>
          </svg>
        </div>
        <div class="ml-2 text-white valor">
          {{precio | formatoPrecio }}
        </div>
      </div>

      <!-- ENVIO  -->
      <div class="flex items-center envio">
        <div class="w-10 h-10 svg">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none">
            <path d="M419 4157 c-18 -12 -44 -38 -56 -56 l-23 -34 0 -772 0 -772 23 -21 c29 -28 86 -29 118 -3 l24 19 3 746 2 746 1540 0 1540 0 0 -745 c0 -732 0 -745 20 -765 26 -26 89 -27 121 -1 19 15 24 30 27 85 l4 67 497 -3 496 -3 47 -23 c50 -25 122 -98 131 -132 5 -19 0 -20 -133 -20 -186 0 -184 2 -188 -154 -5 -153 12 -213 76 -277 53 -53 122 -79 209 -79 l53 0 0 -170 0 -170 -97 0 -98 0 -29 61 c-36 79 -140 184 -218 221 -158 77 -318 77 -476 0 -78 -37 -179 -140 -217 -219 -52 -109 -55 -97 -55 242 0 366 -2 375 -94 375 -21 0 -40 -8 -54 -23 -22 -23 -22 -29 -22 -340 l0 -317 -827 0 -828 0 -35 67 c-104 201 -336 309 -562 262 -141 -29 -285 -141 -344 -266 l-29 -62 -227 0 -228 -1 0 85 0 85 184 0 c170 0 185 1 210 21 21 16 26 29 26 64 0 35 -5 48 -26 64 -26 20 -37 21 -439 21 -402 0 -413 -1 -439 -21 -37 -29 -37 -99 0 -128 24 -19 40 -21 170 -21 l144 0 0 -114 c0 -101 2 -117 23 -146 50 -75 50 -75 328 -78 l249 -3 0 -43 c0 -141 111 -320 247 -399 119 -68 285 -87 415 -47 125 38 249 142 302 253 30 61 56 157 56 204 l0 33 900 0 900 0 0 -38 c0 -54 26 -147 58 -206 35 -67 145 -177 207 -208 155 -79 335 -79 490 0 62 31 172 141 207 208 32 59 58 152 58 206 l0 38 144 0 c130 0 146 2 170 21 l27 21 -3 506 -3 507 -32 67 c-52 111 -138 184 -268 228 l-49 17 -64 255 -64 255 31 31 c29 28 31 36 31 99 0 170 -63 281 -200 354 -45 24 -48 24 -391 27 l-347 3 -4 112 c-4 126 -17 160 -70 199 l-33 23 -1601 3 -1601 2 -34 -23z m3998 -498 c52 -19 92 -68 107 -131 l6 -28 -385 0 -385 0 0 85 0 85 314 0 c199 0 325 -4 343 -11z m52 -366 c6 -21 34 -136 64 -255 l55 -218 -414 0 -414 0 0 255 0 255 350 0 349 0 10 -37z m481 -1078 l0 -85 -45 0 c-86 0 -125 39 -125 125 l0 45 85 0 85 0 0 -85z m-3357 -459 c65 -31 140 -108 170 -174 33 -71 31 -198 -4 -272 -32 -69 -93 -131 -161 -167 -47 -25 -64 -28 -148 -28 -113 0 -167 21 -240 95 -74 73 -95 127 -95 240 0 101 13 139 72 216 87 115 272 156 406 90z m2820 1 c74 -37 148 -117 176 -192 62 -162 -16 -347 -178 -427 -67 -33 -216 -33 -282 0 -71 35 -122 84 -159 153 -67 126 -49 272 46 378 81 90 157 123 271 117 52 -2 86 -10 126 -29z"/>
            <path d="M1374 1601 c-64 -29 -89 -72 -89 -153 0 -72 14 -102 68 -142 39 -29 131 -33 177 -8 95 52 118 178 47 259 -56 63 -126 79 -203 44z"/>
            <path d="M4190 1597 c-109 -57 -119 -217 -19 -288 41 -29 121 -37 170 -16 87 36 126 158 77 241 -27 47 -95 86 -148 86 -20 0 -56 -10 -80 -23z"/>
            <path d="M2323 3048 l-363 -362 -193 192 c-182 181 -195 192 -231 192 -50 0 -86 -35 -86 -86 0 -36 12 -50 233 -271 l232 -233 45 0 44 0 394 393 c216 215 400 405 408 420 12 23 13 35 4 63 -14 40 -35 54 -87 54 -36 0 -51 -14 -400 -362z"/>
            <path d="M192 2277 c-28 -29 -29 -86 -3 -118 l19 -24 534 -3 c293 -1 543 0 556 3 62 15 85 100 39 143 l-23 22 -550 0 -551 0 -21 -23z"/>
            <path d="M2075 1935 c-17 -16 -25 -35 -25 -60 0 -25 8 -44 25 -60 l24 -25 629 0 c622 0 630 0 656 21 21 16 26 29 26 64 0 35 -5 48 -26 64 -26 21 -34 21 -656 21 l-629 0 -24 -25z"/>
            </g>
          </svg>
        </div>
        <div class="ml-2 text-white valor">
          {{envio | formatoPrecio }}
        </div>
      </div>

    </router-link>

    <!-- TITULO-->
    <div class="text-left mx-4 mt-4  font-bold uppercase title">
      {{titulo}}
    </div>

    <!-- LOCAL  -->
    <div class="text-left text-sm border-b border-gray-400 pb-2 mb-2 mx-4  text-gray-500 title">
      {{local}}
    </div>
    
    <!-- PREDESCRIPCION  -->
    <div   class="text-left text-sm border-b mb-6 mx-4 h-16 truncate-custom title" >
      {{predescripcion}}
    </div>

    <!-- CANTIDAD Y AGREGAR AL CARRITO  -->
    <div v-if="user.rol!='Comercio'" class="flex flex-col sm:flex-row lg:flex-col 2xl:flex-row justify-between  mx-4  mb-6 botones">

      <!-- CANTIDAD  -->
      <div class="flex justify-center sm:justify-start  lg:justify-center  2xl:justify-start items-center h-8 cantidad">

        <!-- BOTON MENOS -->
        <div @click="cantidad>1 ? cantidad-- : cantidad" class=" hover:bg-lime-500    font-bold w-8 h-8 flex justify-center items-center border-2 border-lime-500 w-6 rounded-md text-gray-700 cursor-pointer menos">
        -
        </div>

        <!-- CANTIDAD -->
        <input type="number"  class=" font-bold  w-8 h-8 flex justify-center items-center  text-center rounded-md mx-2 bg-zinc-100 w-12" v-model="cantidad" id="">

        <!-- BOTON MENOS -->
        <div @click="cantidad++" class=" hover:bg-lime-500   font-bold  w-8 h-8 flex justify-center items-center  border-2 border-lime-500 w-6 rounded-md  text-gray-700 cursor-pointer mas">
        +
        </div>

      </div>

      <!-- AGREGAR AL CARRITO  -->
      <div @click="agregarProducto()" class="font-bold mt-2 sm:mt-0 lg:mt-2 2xl:mt-0 w-full sm:w-1/2 lg:w-full 2xl:w-1/2  hover:bg-lime-500  cursor-pointer border-2 border-lime-500 text-gray-700 rounded-md h-8 flex justify-center items-center  ver-mas">
        Agregar al carrito 
      </div>
    </div>

    <div v-else class="flex justify-between   mx-4  mb-6 buttons-comercio">
      <!-- MODIFICAR PRODUCTO  -->
      <router-link :to="{name:'modifyProduct', params:{id:id} }" @click="modificarProducto()" class="font-bold hover:bg-amber-300 cursor-pointer border-2 border-amber-300 w-2/5  text-gray-700 rounded-md h-8 flex justify-center items-center  ver-mas">
        Modificar
      </router-link>

      <!-- ELIMINAR PRODUCTO  -->
      <div @click="status=true" class="font-bold hover:bg-red-500 hover:text-white cursor-pointer border-2 border-red-500 w-2/5  text-gray-700 rounded-md h-8 flex justify-center items-center  ver-mas">
        Eliminar
      </div>
    </div>
    <div v-if="status" class="flex flex-col w-full border-t  border-black  eliminar">
      <div class="text-center pt-4 font-bold texto">
        ¿Desea eliminar "{{titulo}}" ?
      </div>
      <div class="flex w-full justify-between my-4 px-4 botones">
        <div @click="eliminarProducto()" class="w-2/5 border-2 border-red-500 rounded hover:bg-red-500  hover:text-white h-7 flex justify-center items-center eliminar">
          Aceptar
        </div>
        <div @click="status=false"  class="w-2/5 border-2 border-lime-500 rounded hover:bg-lime-500 h-7 flex justify-center items-center cursor-pointer  cancelar">
          Cancelar
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios'

import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    name:'ProductComponent',
    props:{
      id:String,
      titulo:String,        
      local:String,
      predescripcion:String,
      precio:Number,
      envio:Number,
      image:String 
    },
    data(){
      return{
        cantidad:1,
        status:false
      }
    },computed:{
      ...mapGetters('Auth',{
        user: 'getSesion'
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
    methods:{

      ...mapActions('Product',['deleteProduct','getProducts']),

      ...mapMutations('Bag',['addBag']),

      agregarProducto(){

        let producto= {
          'id':this.id,
          'titulo':this.titulo,
          'local':this.local,          
          'precio':this.precio,
          'envio':this.envio,
          'predescripcion':this.predescripcion,
          'image':this.image,
          'cantidad':this.cantidad
        }

          
        this.addBag(producto)
      },
      async eliminarProducto(){
        
        let url=`/delete/${this.id}`
        const response= await axios.delete(url)  
        const message = response.data.Message  
        
        if( message=='Producto eliminado correctamente correctamente'){
          await this.getProducts(this.user)
          this.status=false
        }
        
      },

    }
}
</script>

<style>
@media screen and (min-width:48rem) {

  #product{
    width: 45%;
  }

  .truncate-custom{
   display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    }
}



</style>
