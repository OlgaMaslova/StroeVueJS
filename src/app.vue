<template>
	<main>
		<header><h1>Hop</h1></header>
		<currency/>
		<cart widget='true'/>
		<nav>
			<router-link :to="{ path: '/' }">Accueil</router-link>
			<router-link :to="'/products'">Produits</router-link>
			<router-link to="about">A propos</router-link>
			<router-link to="cart">Panier</router-link>
		</nav>
		<router-view/>
		<footer></footer>
	</main>
</template>

<script>
	import currency from './currency.vue'	
	import cart from './cart.vue'

	export default {
		name: 'app',
		components: { currency, cart }
	}
</script>

