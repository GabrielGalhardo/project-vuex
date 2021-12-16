<template>
	<div id="app">
		<div class="linha">
			<Parametros />
			<Loja />
		</div>
		<div class="linha">
			<Carrinho />
			<Resumo />
		</div>
	</div>
</template>

<script>
import Parametros from './components/Parametros'
import Loja from './components/Loja'
import Carrinho from './components/Carrinho'
import Resumo from './components/Resumo'

export default {
	name: 'app',
	components: { Parametros, Loja, Carrinho, Resumo }
}
</script>

<style>
* {
	font-family: 'Oswald', sans-serif;
}

body {
	font-size: 1rem;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #FFF;
}

.linha {
	display: flex;
}

button {
	font-size: 1rem;
	padding: 5px 15px;
	border-radius: 5px;
	color: #222;
	background-color: #FAFAFA;
	outline: none;
	border: none;
}
</style>
