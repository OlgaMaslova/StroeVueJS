
import Vue from 'vue'
import app from './app.vue'
import router from './router'
import VueResource from 'vue-resource'
import store from "./store"
Vue.use(VueResource)

new Vue({
	router,
	store,
	mounted() {
		this.$http.get("/products").then((response)  => {
			//this.products = response.body;
			console.log(response.body);
			store.dispatch('addProducts', response.body);
		})

	},
	components: { app },
	template: "<app/>"

}).$mount("#app")



