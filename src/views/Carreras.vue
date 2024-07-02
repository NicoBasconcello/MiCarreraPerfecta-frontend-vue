<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carreras">
    <h2>Filtrar</h2>
    <div class="filters">
      <!-- Filtros para los diferentes campos -->
      <label>
        Nombre:
        <input type="text" v-model="filters.name" placeholder="Filtrar por nombre...">
      </label>
      <label>
        Título Intermedio:
        <select v-model="filters.titleIntermediate">
          <option value="">Todos</option>
          <option value="1">Sí</option>
          <option value="0">No</option>
        </select>
      </label>
      <label>
        Duración en meses:
        <input type="number" v-model.number="filters.durationMonths" placeholder="Filtrar por duración...">
      </label>
      <label>
        Tipo de Carrera:
        <select v-model="filters.idTypeCareer">
          <option value="">Todos</option>
          <option value="1">Universitario</option>
          <option value="2">No universitario</option>
        </select>
      </label>
      <label>
        Modalidad:
        <select v-model="filters.modality">
          <option value="">Todos</option>
          <option value="1">Presencial</option>
          <option value="2">Virtual</option>
          <option value="3">Mixto</option>
        </select>
      </label>
      <button @click="applyFilter">Filtrar</button>
      <button @click="clearFilter">Limpiar Filtro</button>
    </div>
    <h1 class="text-center">Carreras</h1>
    <div class="results">
      <div v-for="carrera in filteredCarreras" :key="carrera.id" class="card">
        <h2>{{ carrera.name }}</h2>
        <p><strong>Título Intermedio:</strong> {{ carrera.title_intermediate ? 'Sí' : 'No' }}</p>
        <p><strong>Duración:</strong> {{ carrera.duration_months }} meses</p>
        <p><strong>Tipo de Carrera:</strong> {{ carrera.id_type_career === 1 ? 'Universitario' : 'No universitario' }}</p>
        <p><strong>Modalidad:</strong> 
          <span v-if="carrera.id_modality === 1">Presencial</span>
          <span v-else-if="carrera.id_modality === 2">Virtual</span>
          <span v-else-if="carrera.id_modality === 3">Mixto</span>
        </p>
      </div>
    </div>
  </div>
</template>

  
<script>
import { ref, onMounted } from 'vue';
import api from '../api.js';

export default {
  setup() {
    const carreras = ref([]);
    const filteredCarreras = ref([]);
    const filters = ref({
      name: '',
      titleIntermediate: '',
      durationMonths: '',
      idTypeCareer: '',
      modality: ''
    });

    const applyFilter = () => {
      filteredCarreras.value = carreras.value.filter(carrera => {
        const nameMatch = carrera.name.toLowerCase().includes(filters.value.name.toLowerCase());
        const titleIntermediateMatch = filters.value.titleIntermediate === '' || carrera.title_intermediate.toString() === filters.value.titleIntermediate;
        const durationMonthsMatch = filters.value.durationMonths === '' || carrera.duration_months.toString() === filters.value.durationMonths;
        const idTypeCareerMatch = filters.value.idTypeCareer === '' || carrera.id_type_career.toString() === filters.value.idTypeCareer;
        const modalityMatch = filters.value.modality === '' || carrera.modality.toString() === filters.value.modality;
        return nameMatch && titleIntermediateMatch && durationMonthsMatch && idTypeCareerMatch && modalityMatch;
      });
    };

    const clearFilter = () => {
      filters.value = {
        name: '',
        titleIntermediate: '',
        durationMonths: '',
        idTypeCareer: '',
        modality: ''
      };
      filteredCarreras.value = carreras.value;
    };

    onMounted(() => {
      api.get('/career')
        .then(response => {
          carreras.value = response.data.objectResponse;
          filteredCarreras.value = response.data.objectResponse;
        })
        .catch(error => {
          console.error('Error al obtener las carreras:', error);
        });
    });

    return { filters, filteredCarreras, applyFilter, clearFilter };
  }
};
</script>

  
<style scoped>
.carreras {
  padding: 20px;
}
.filters {
  margin-bottom: 20px;
}
.filters label {
  display: block;
  margin-bottom: 10px;
}
.filters button {
  margin-right: 10px;
}
.results {
  display: flex;
  flex-wrap: wrap;
}
.text-center{
  text-align: center;
}
.card {
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: calc(33% - 40px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.card h2 {
  margin: 0 0 10px;
  font-weight: bold;
}
.card p {
  margin: 5px 0;
}
</style>

  