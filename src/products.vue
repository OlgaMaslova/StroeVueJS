<template>
	<section>
			<h1>Produits</h1>
			<ul>
				<li v-for='product of products'>
					<product :content="product"/>
					<p><button v-on:click="addProductCart(product)">Add</button></p>
				</li>
			</ul>
	</section>
</template>

<script>
import product from "./product.vue"
import store from "./store"
export default {
	components: { product },
	name: 'products',
	mounted: function() {		
	},
	data() {
		return {
			products: store.state.products
		}
	},
	methods: {
		addProductCart: function(product) {
			store.dispatch('addProductCart', product);
		}
	}

}
</script>

<style scoped>
</style>
