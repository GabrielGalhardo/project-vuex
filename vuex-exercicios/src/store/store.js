import Vue from "vue";
import Vuex from "vuex";
import  * as getters from './getters'
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      nome: 'Gabriel',
      sobrenome: 'Galhardo'  
    },
    getters,
    modules: { carrinho, parametros }
});
