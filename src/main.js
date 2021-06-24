/* eslint-disable consistent-return */
import $ from 'jquery';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './bus';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import router from './router';
import 'bootstrap';
import 'leaflet/dist/leaflet.css';
import App from './App.vue';

window.$ = $;

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// rule
extend('required', {
  ...required,
  message: '此欄不可為空',
});
extend('email', {
  validate: (value) => {
    // eslint-disable-next-line no-useless-escape
    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (value.search(emailRule) !== -1) {
      return true;
    }
  },
  message: '請填寫正確的格式',
});
extend('tel', {
  validate: (value) => value.length >= 9,
  message: '請填寫正確的格式',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
