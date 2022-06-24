import { createStore } from 'vuex';
export default createStore({
  state: {
    datos: [],
    datosFiltrados: [],
    url: 'http://apitest.cargofive.com/api/ports',
    page: 1,
    pages: [],
    meta: {},
    links: {},
  },

  getters: {
        //Ajustar la presentacion por pagina
      paginate(state){
        // declarar el inicio y fin
        return state.datosFiltrados.slice(1, state.meta.per_page);
     
      }
  },
  mutations: {
    getDatos(state, payload) {
      state.datos = payload;
    },

    changePage(state, payload) {
      state.page = payload;
    },
    getDataFilter(state, payload) {
      state.datosFiltrados = payload;

    },
    getMeta(state, payload) {
      state.meta = payload;
    },
    getLinks(state, payload) {
      state.links = payload;
    },
    next(state, payload) {
      state.url = payload;
    }


  },
  actions: {
    //consumiendo toda la api
    async getData({commit, state}, page = state.page){
      const res = await fetch(state.url);
      const apitest = await res.json();
      //Destructury para mandar tanto la data como los setting por separado
      const {data, meta, links} = apitest;
  
      commit('getDatos', data);
      commit('getMeta', meta);
      commit('getLinks', links);
      console.log("estado de la Pagina desde Vuex", state.page)  
    },

    changePage({commit, dispatch}, pagesNumber){
      commit('changePage', pagesNumber);
      return dispatch('getData', pagesNumber)
    },

    next({commit, dispatch}, next){
      commit('next', next)
      console.log("llamado de vuex next..", next);

      return dispatch('getData')
    },




    //Funcion de los botones filtradores por continentes, recibe por defecto un string vacio
    getDataFilter({commit, state}, categoria) {
      //Retorna el continente que sea igual a categoria
      const filter = state.datos.filter(dato => dato.continent.includes(categoria));
      commit('getDataFilter', filter)
    },

    //Funcion del buscador
    searchData({commit, state}, text) {
      //texto del cliente convertida en [minuscula]
      const textClient = text.toLowerCase();

      const filter = state.datos.filter(dato =>{
        //texto de la api convertida en [minuscula]
        const datoTest = dato.name.toLowerCase();
        //Retornara un dato si el datoTest es igual al texto del cliente
        if(datoTest.includes(textClient)){
          return dato
        }
      })
      commit('getDataFilter', filter)
    }

   


  


  },

  modules: {
  }
})
