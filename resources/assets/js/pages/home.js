import Vue from '../app.js';

Vue.component('example-component', require('../components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});