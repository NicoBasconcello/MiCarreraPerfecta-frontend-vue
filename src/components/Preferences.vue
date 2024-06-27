<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <h2>Selecciona tus preferencias</h2>
      <form @submit.prevent="submitPreferences">
        <div v-for="preference in preferences" :key="preference">
          <label>
            <input type="checkbox" v-model="selectedPreferences" :value="preference">
            {{ preference }}
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '../api.js';
  
  export default {
    data() {
      return {
        preferences: [],
        selectedPreferences: []
      };
    },
    created() {
      api.get('/university').then(response => {
        this.preferences = response.data;
      }).catch(error => {
        console.error('Error al obtener las preferencias:', error);
      });
    },
    methods: {
      submitPreferences() {
        console.log('Preferencias seleccionadas:', this.selectedPreferences);
        // Aquí puedes manejar la lógica para enviar las preferencias seleccionadas a tu backend si es necesario
      }
    }
  };
  </script>
  
  <style>
  /* Tus estilos */
  </style>
  