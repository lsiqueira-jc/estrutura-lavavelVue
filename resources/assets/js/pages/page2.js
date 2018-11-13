import Vue from '../app.js';

Vue.component('example-component3', require('../components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});