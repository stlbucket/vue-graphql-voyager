<template>
  <div id="app">
    <voyager
      :introspection="introspectionProvider"
    ></voyager>
  </div>
</template>

<script>
import {Voyager} from 'graphql-voyager';
import fetch from 'isomorphic-fetch';

export default {
  name: 'app',
  components: {
    Voyager
  },
  methods: {
    introspectionProvider(query) {
      // return fetch('http://localhost:8080/graphql', {
      return fetch(window.location.origin + '/graphql', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query: query}),
      }).then(response => response.json());
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
