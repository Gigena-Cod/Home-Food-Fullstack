
import axios from 'axios'
export default{
    namespaced:true,
    state:{
        sesion:null
    },
    getters:{
        getSesion(state){
            return state.sesion
          }
    },
    mutations:{
        getSesion(state,userActions){
            state.sesion=userActions
          },
        logoutSesion(state){
            state.sesion=null
        }
    },
    actions:{
        async getUser( {commit}, user ){
      
            
            const response = await axios.get(`/login/${user.username}/${user.password}`)
            const data = await response.data   
            
            commit('getSesion',data)
          }
    }

}