
export default{
    namespaced:true,
    state:{
        bag:[],
        subtotal:0,
        envio:0,
        total:0
    },
    getters:{
        getBag(state){
            return state.bag
          },
        getSubtotal(state){
            return state.subtotal
       },       
        getEnvio(state){
            return state.envio
       },       
        getTotal(state){
            state.total=state.envio+state.subtotal
            return state.total
       }
    },
    mutations:{
        addBag(state,product){
            let validate=false;
            
            for (let i = 0; i<state.bag.length; i++) {

                var currentProduct =  state.bag[i];
                if (currentProduct.id == product.id) {
                  validate=true;
                }
              }

            if(validate){
                
                state.bag.map( producto => {
                        if(producto.id == product.id){                         
                            producto.cantidad+=product.cantidad
                            return
                        }
                    })
              }
              else{
                state.bag.push(product) 
                state.envio+=product.envio           

              }     
              
              
              state.subtotal+=product.cantidad*product.precio
                     
               
            

        },

        sumProduct(state,id){
            
            state.bag.map( producto => {
                if(producto.id == id){
                    state.subtotal+=producto.precio
                    producto.cantidad++
                }
            })
        },

        restProduct(state,id){

            state.bag.map( producto => {
                if(producto.id == id){
                    
                    if(producto.cantidad != 1){
                        
                    state.subtotal-=producto.precio
                        producto.cantidad-- 
                    }
                    else{
                        console.log('Uno')
                        state.bag=state.bag.filter( item => item.id != producto.id )
                        state.subtotal-=producto.precio
                        state.envio-=producto.envio
                    }
                    return
                    
                }
            })
        },

        buy(state){

            state.bag=[]
            state.subtotal=0
            state.envio=0
            state.total=0
        }
        
        
        
    },
    actions:{
        
    }

}