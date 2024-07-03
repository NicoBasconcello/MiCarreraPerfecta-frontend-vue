<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="cuestionario">
      <h1>Mi Carrera Perfecta</h1>
      <h2>Cuestionario</h2>
      <p v-if="error" class="error-message">{{ error }}</p>
      <div v-for="(pregunta, index) in preguntas.slice(0, questionsToShow)" :key="index" class="question-container">
        <h3>{{ pregunta.questions }}</h3>
        <p>{{ pregunta.description }}</p>
        <button
          :class="getButtonClass(respuestas[index], true)"
          @click="handleResponse(index, true)"
        >
          Sí
        </button>
        <button
          :class="getButtonClass(respuestas[index], false)"
          @click="handleResponse(index, false)"
        >
          No
        </button>
      </div>
      <button v-if="preguntas.length > questionsToShow" @click="handleShowMore" class="btn-ver-mas">
        Ver más preguntas
      </button>
      <button v-if="questionsToShow >= preguntas.length" @click="handleFinishSurvey" class="btn-terminar-encuesta">
        Terminar encuesta
      </button>
      <h3>Total de preguntas: {{ preguntas.length }}</h3>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { getIntelligenceQuestions, sendIntelligenceAnswers } from '../api.js';
  import { formatAnswers } from '../helpers/formatters.js';
  
  export default {
    setup() {
      const preguntas = ref([]);
      const error = ref(null);
      const respuestas = ref({});
      const questionsToShow = ref(7);
      const router = useRouter();
  
      onMounted(async () => {
        try {
          preguntas.value = await getIntelligenceQuestions();
        } catch (e) {
          error.value = e.message;
        }
      });
  
      const handleResponse = (index, response) => {
        respuestas.value = { ...respuestas.value, [index]: response };
      };
  
      const handleShowMore = () => {
        questionsToShow.value += 7;
      };
  
      const handleFinishSurvey = async () => {
        const formattedAnswers = formatAnswers(respuestas.value);
        try {
          const result = await sendIntelligenceAnswers(formattedAnswers);
          router.push({ path: '/results', state: { branchs: result.objectResponse } });
        } catch (e) {
          console.error(e);
        }
      };
  
      const getButtonClass = (currentValue, buttonValue) => {
        return [
          'mr-2 px-4 py-2 border rounded',
          currentValue === buttonValue
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-blue-600 border-blue-600 hover:text-[#F1FEEE]',
        ];
      };
  
      return {
        preguntas,
        error,
        respuestas,
        questionsToShow,
        handleResponse,
        handleShowMore,
        handleFinishSurvey,
        getButtonClass,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el cuestionario */
  </style>
  