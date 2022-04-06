import axios from 'axios'

export default{
    namespaced:true,
    state:{        
        products:[],
        product:{
            titulo: '',
            local: '',
            predescripcion: '',
            descripcion: '',
            precio: '',
            envio: '',
            images: ''
        }
    },
    getters:{
        
        getProducts(state){
            return state.products
        },
        getProduct(state){
            return state.product
        }
        
    },
    mutations:{       
        getProducts(state,productsActions){
            state.products=productsActions
        },
        getProductById(state,productActions){
            state.product=productActions
        }          
    },
    actions:{

        // OBTENER PRODUCTOS
        async getProducts( {commit}, user ){
            
            if(user.rol=='Comercio'){
                const response = await axios.get(`/productos/${user.username}`)
                const data = await response.data 
                commit('getProducts',data)
            }else{
                const response = await axios.get(`/productos`)
                const data = await response.data 
                commit('getProducts',data)
            } 
            
        },

        // OBTENER PRODUCTO POR ID 
        async getProductById( {commit}, id ){
            
                       
            const response = await axios.get(`/producto/${id}`)
            const data = await response.data 
            commit('getProductById',data)
            
            
        },

       
        
    }

}