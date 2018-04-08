import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import lodash from 'lodash';    
import * as d3 from "d3";

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });
Object.defineProperty(Vue.prototype, '$d3', { value: d3 });

Vue.use(Vuetify);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
