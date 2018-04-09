<template>	
	<article>		
		{{ content.name }} :
		{{ price }}
		{{ $store.state.currentCurrency }}		
		
	</article>
</template>

<script>
import store from "./store"
export default {
	name: 'product',
	props: [ "content" ],
	computed: {
		price: function() {
			return this.content.price * store.getters.exchange						
		}
	}
}
</script>

<style scoped>
article {
	border: solid 1px red;
}
</style>
