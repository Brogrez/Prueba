import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    destacados:[],
    tiposProductos:[],

    ropaHombre:[],
    ropaMujer:[],
    electronica:[],

    carrito:[]
  },
  getters: {
    precioTotalProducto(state){
      return state.carrito.reduce((total, prod) =>{
        return total + prod.precio * prod.count 
      },0)
    }
  },
  mutations: {
    SET_DESTACADOS(state, prod_destacados){
      state.destacados = prod_destacados
    },
    SET_TIPOSPRODUCTOS(state, typeProduct){
      state.tiposProductos = typeProduct
    },
    ADD_PRODUCTO_CART(state,producto){
      let existencia = state.carrito.some(p => p.id == producto.id)
      if(!existencia){
        state.carrito.push(producto)
      }else{
        state.carrito.forEach(p => {
          if(p.id==producto.id){
            p.count+=1
          }
        })
      }
    },
    ELIMINAR_PRODUCTO(state, item){
      state.carrito = state.carrito.filter(prod => prod.id !== item.id)
    }
  },
  actions: {
    async homeFetch({commit}){
      try{
        let response = await fetch(`/home.json`)
        let json = await response.json()
        let destacados = json.mejoresproductos
        let tiposproductos = json.tiposproductos
        commit('SET_DESTACADOS',destacados)
        commit('SET_TIPOSPRODUCTOS',tiposproductos)
      }
      catch(error){
        console.log(error)
      }
    },
    addProductCart({commit},item){
      commit("ADD_PRODUCTO_CART", item)
    },
    eliminarProducto({commit},item){
      commit("ELIMINAR_PRODUCTO",item)
    }
  },
  modules: {
  }
})
