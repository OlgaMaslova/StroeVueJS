<template>
	<div id='cart'>
		<h1>Panier</h1>
		<p v-if='widget'>
			{{ products.length}} produit(s)
		</p>
		
		<ul v-if='!widget'>
			<li v-for='(product, index) of products'>
				<product :content="product"/>
				<button v-on:click="removeFromCart(index)">Remove</button>
			</li>
		</ul>
	</div>
</template>

<script>
import product from "./product.vue"
import store from "./store"
export default {
	components: { product },
	name: 'products',
	props: ['widget'],
	mounted: function() {		
	},
	data() {
		return {
			products: store.state.cart
		}
	},
	methods: {
		removeFromCart: function(index) {
			store.dispatch('removeFromCart', index);
		}
	}

}
</script>

<style scoped>
</style>
