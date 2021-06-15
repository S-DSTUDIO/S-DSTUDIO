import $ from 'jquery';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';
import './bus';
import router from './router';
import 'bootstrap';
import App from './App.vue';
import 'leaflet/dist/leaflet.css';

window.$ = $;

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
