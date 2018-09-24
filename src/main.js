import Vue from 'vue'
import App from './App.vue'
import './plugins/vuera'
import 'graphql-voyager/dist/voyager.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
