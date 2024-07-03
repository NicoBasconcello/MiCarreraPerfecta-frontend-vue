<template>
    <div class="container_result">
      <h1 class="result_title">RESULTADOS</h1>
      <Dropdown
        v-for="branch in branches"
        :key="branch.id_branch"
        :branch="branch"
        :career-list="filteredCareers(branch.id_branch)"
        @selectedBranch="handleSelectedBranch"
        @selectedCareer="handleSelectCareer"
      />
      <div v-if="selectedCareer" class="selectedCareer">
        Seleccionaste: {{ selectedCareer.name }}
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import Dropdown from '../components/Dropdown.vue';
  import { getCareersByBranches } from '../services/generals';
  
  export default {
    components: {
      Dropdown,
    },
    setup() {
      const route = useRoute();
      const selectedCareer = ref({});
      const selectedBranch = ref(0);
      const branches = ref([]);
      const careers = ref([]);
  
      onMounted(() => {
        if (route.state && route.state.branchs) {
          const responseBranches = route.state.branchs;
          branches.value = responseBranches;
        }
      });
  
      watch(selectedBranch, async (newBranch) => {
        if (newBranch) {
          const fetchedCareers = await getCareersByBranches(newBranch);
          careers.value = fetchedCareers;
        }
      });
  
      const handleSelectedBranch = (branch) => {
        selectedBranch.value = branch;
      };
  
      const handleSelectCareer = (career) => {
        selectedCareer.value = career;
      };
  
      const filteredCareers = (branchId) => {
        return careers.value.filter((career) => career.id_branch === branchId);
      };
  
      return {
        selectedCareer,
        branches,
        handleSelectedBranch,
        handleSelectCareer,
        filteredCareers,
      };
    },
  };
  </script>
  
  <style scoped>
  .container_result {
    padding: 20px;
  }
  .result_title {
    text-align: center;
    font-size: 24px;
  }
  .selectedCareer {
    margin-top: 20px;
    font-size: 18px;
  }
  </style>
  