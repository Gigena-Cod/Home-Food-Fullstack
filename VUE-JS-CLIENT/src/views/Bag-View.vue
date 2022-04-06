<template>
    <div id="detail" class="flex px-4 flex-wrap my-12 left-0 2xl:mx-auto max-w-7xl  ">
        <div class="text-4xl w-full  mb-8 pb-4  mx-auto  title">
            CARRITO
        </div>
        <div v-if="productos.length>0" class="flex flex-col  lg:flex-row p-4 lg:p-0 w-full container-bag">

            <!-- DETALLES  -->
            <div class="w-full lg:w-2/5 lg:pl-4 lg:order-2 mx-auto detail">
                <!-- TITLE  -->
                <div class="w-full text-xl font-bold uppercase title">
                    Orden de compra
                </div>

                <!-- CODIGO  -->
                <div class=" text-gray-500 text-sm scancode">
                    AUCART361007720
                </div>
                
                <hr class="bg-black  my-4 w-full">

                <!-- COSTOS  -->
                <div class="flex flex-col  w-full cost">
                    <!-- SUBTOTAL  -->
                    <div class="flex justify-between w-full subtotal">
                        <span class="label">
                            Subtotal
                        </span>
                        <span class="value">
                            {{subtotal | formatoPrecio}}
                        </span>
                    </div>

                    <!-- ENVIO  -->
                    <div class="flex justify-between mt-2 w-full envio">
                        <span class="label">
                            Envío
                        </span>
                        <span class="value">
                            {{envio | formatoPrecio}}
                        </span>
                    </div>

                    <hr class="w-full my-2 bg-black">
                    <!-- TOTAL  -->
                    <div class="flex justify-between  w-full total">
                        <span class="label">
                            Total
                        </span>
                        <span class="value">
                            {{total | formatoPrecio}}
                        </span>
                    </div>
                </div>

                <!-- DETALLES -->
                <div class="flex flex-col my-6  detalles">
                    <span class="text-left w-auto uppercase text-xl font-semibold mb-2">
                        Detalles
                    </span>
                    <span class="text-justify">
                    Tenga en cuenta que sus datos de facturación se verificarán y se cargarán en su tarjeta de crédito en el momento del envío. 
                    </span>

                </div>

                <div @click="comprar()" class="flex items-center justify-center bg-lime-500 hover:bg-lime-400 hover:font-bold  w-40 mx-auto h-8  rounded-xl button">
                    COMPRAR
                </div>
            </div>

            <hr class="w-full lg:hidden  bg-black my-4">

            <div class="w-full lg:w-3/5 lg:pr-4 lg:border-r lg:border-gray-300  lg:order-1 items-in-bag">
                <div class="text-left font-bold mb-4 lg:mb-0 title">
                    Tus selecciones
                </div>

                <hr class="w-full hidden lg:flex  bg-black my-4 lg:mt-2">

                <div class="products" v-for=" (product,index) in productos" :key="product._id">
                    <hr v-if="index!=0" class="w-full hidden lg:flex  bg-black my-4">
                    <Product :id=product.id  :cantidad=product.cantidad :local=product.local  :titulo=product.titulo :precio=product.precio :predescripcion=product.predescripcion :envio=product.envio :image=product.image  />
                </div>
            </div>
            
        </div> 
        <div v-else class="flex w-full  justify-center text-2xl font-bold container-bag">
            No hay productos seleccionados
        </div>
        <div v-if="status" class="h-screen w-screen absolute top-0 left-0 pt-56 bg-slate-900 bg-opacity-25 mensaje">
            <div id="correct"  class="shadow-2xl flex flex-wrap justify-center m-auto w-96 py-4 bg-white rounded-xl">
            
                <div class="w-full texto">
                    Pedido realizado correctamente! Que disfrutes!
                </div>
                <div @click="redirect" class="bg-emerald-500 text-white w-28 rounded-md py-1 mt-4 cursor-pointer hover:bg-emerald-600 boton">
                    Aceptar
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Product from '@/components/Product/Product-Bag.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
    name:'BagView',   
    data(){
        return{
            status:false
        }
    }, 
    components:{
        Product
    },
    async created() {
        // VALIDAMOS SI INICIO SESION 
        if(!this.user){           

            this.$router.push({name:'login'})

        }
    },
    computed:{
        
        ...mapGetters('Bag',{ 
            productos: 'getBag',
            subtotal : 'getSubtotal',
            envio : 'getEnvio',
            total : 'getTotal'}
            ),
        ...mapGetters('Auth',{
                user:'getSesion'
            })
    },
    methods: {       
                 
        volver(){
           this.$router.go(-1)
        },
        redirect(){
            this.$router.replace({name:'products'})
        },
        ...mapMutations('Bag',[
            'buy']
        ),
         comprar(){
             this.buy()
             this.status=true;
         }

    }


}
</script>

<style>

</style>