import Vue from '../app.js';

Vue.component('example-component2', require('../components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});