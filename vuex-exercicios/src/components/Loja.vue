<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="quantidade" />
      <span>itens de <strong>R$</strong></span>
      <input type="number" v-model.number="preco" />
      <button @click="adicionar">Agora!</button>
    </div>
  </Painel>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      sequencia: 1,
    };
  },
  computed: {
    quantidade: {
      get() {
        return this.$store.state.parametros.quantidade;
      },
      set(valor) {
        this.$store.commit("setQuantidade", valor);
      },
    },
    preco: {
      get() {
        return this.$store.state.parametros.preco;
      },
      set(valor) {
        this.$store.commit("parametros/setPreco", valor);
      },
    },
  },
  methods: {
    // ...mapActions("carrinho",["adicionarProduto"]),

    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco,
      };
      this.sequencia++;
      // eslint-disable-next-line
      console.log(produto);

      // this.$store.commit('adicionarProduto', produto )

      // Podefazer dessas duas  maneiras com o actions
      //   this.adicionarProduto(produto);
      this.$store.dispatch("carrinho/adicionarProduto", produto);
      
      // console.log(this.$store.getters.getNome)
      // console.log(this.$store.getters.getNomeCompleto)
    },
  },
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
