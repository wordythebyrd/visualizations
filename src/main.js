import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import lodash from 'lodash';    
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });

Vue.use(Vuetify);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
