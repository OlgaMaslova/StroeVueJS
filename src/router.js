
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from './home.vue'
import products from './products.vue'
import about from './about.vue'
import cart from './cart.vue'

export default new Router( {
	routes: [
		{ path: '/',          component: home      },
		{ path: '/products',  component: products  },
		{ path: '/about',  name:'about',   component: about     },
		{ path: '/cart', name: 'cart', component: cart}
	]
})


