import Vue from 'vue';
import App from './App.vue';
window.axios = require('axios');


if ('serviceWorker' in navigator) {
  console.log('entre');
  const { server } = require('./mocks/workerSetup');
  server.start();
 }







new Vue({
  el: '#app',
  render: h => h(App)
})


