<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
   computed: {
        quantidade: {
            get(){
                return this.$store.state.parametros.quantidade
            },
            set(quantidade){
                return this.$store.commit('parametros/setQuantidade', quantidade)
            }
        }, 
        preco: {
            get(){
                return this.$store.state.parametros.preco
            },
            set(preco){
                this.$store.commit('parametros/setPreco', preco)
            }
        }
   }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
