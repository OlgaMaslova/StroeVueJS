<template>
	<div id='currency'>
		{{ $store.state.currentCurrency }}
		<ul>
			<li   v-for="currency in all">
				<button v-on:click="changeCurrency(currency)">{{ currency }}</button>
			</li>
		</ul>	
	</div>
</template>

<script>

import store from "./store"
export default {
	name: 'currency',
	data: function() {
		return {
			all: ['€','$','£']
		}
	},
	methods: {
		changeCurrency: function(newCurrency) {
			store.dispatch('changeCurrency', newCurrency);
		}
	}
}

</script>

<style scoped>

</style>