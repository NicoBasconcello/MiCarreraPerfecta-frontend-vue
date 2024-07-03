<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="dropdown">
      <div class="container_branch">
        <button class="btn_branch" @click="handleToggle">
          <span class="btn_title">{{ branch.name }}</span>
          <span class="btn_icon">{{ isDropdown ? '▲' : '▼' }}</span>
        </button>
      </div>
      <!-- careerList se recibe por parámetro y se muestra como opciones -->
      <ul v-if="isDropdown && careerList.length > 0" class="options">
        <li
          v-for="career in careerList"
          :key="career.id"
          class="option"
          @click="selectOptionCareer(career)"
        >
          {{ career.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      branch: Object,
      careerList: Array,
    },
    setup(props, { emit }) {
      const isDropdown = ref(false);
  
      const handleToggle = () => {
        isDropdown.value = !isDropdown.value;
        emit('selectedBranch', props.branch.id_branch); // Emitir evento para seleccionar rama
      };
  
      const selectOptionCareer = (career) => {
        emit('selectedCareer', career); // Emitir evento para seleccionar carrera
        isDropdown.value = false;
      };
  
      return {
        isDropdown,
        handleToggle,
        selectOptionCareer,
      };
    },
  };
  </script>
  
  <style scoped>
  .dropdown {
    margin-bottom: 10px;
  }
  
  .container_branch {
    display: flex;
    justify-content: center;
  }
  
  .btn_branch {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .btn_icon {
    margin-left: 5px;
  }
  
  .options {
    list-style-type: none;
    padding: 0;
    margin: 5px 0;
    border: 1px solid #ccc;
  }
  
  .option {
    padding: 10px;
    cursor: pointer;
  }
  
  .option:hover {
    background-color: #f0f0f0;
  }
  </style>
  