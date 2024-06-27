<template>
    <div>
      <div>
        <h2>Carreras Disponibles</h2>
        <ul>
          <li v-for="carrera in carreras" :key="carrera">{{ carrera }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import api from '../api.js';
  
  export default {
    name: 'App',
    components: {
    },
    data() {
      return {
        carreras: []
      };
    },
    created() {
      api.get('/requirement').then(response => {
        this.carreras = response.data;
      }).catch(error => {
        console.error('Error al obtener las carreras:', error);
      });
    }
  };
  </script>
  
  <style>
  /* Tus estilos */
  </style>
  