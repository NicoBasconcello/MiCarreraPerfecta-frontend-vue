<template>
    <div class="cuestionario">
      <h1>Mi Carrera Perfecta</h1>
      <h2>Cuestionario</h2>
      <p v-if="error" class="error-message">{{ error }}</p>
      <div v-for="(pregunta, index) in preguntas.slice(0, questionsToShow)" :key="index" class="question-container">
        <h3>{{ pregunta.question }}</h3>
        <p>{{ pregunta.description }}</p>
        <button
          :class="getButtonClass(index, true)"
          @click="handleResponse(index, true)"
        >
          Sí
        </button>
        <button
          :class="getButtonClass(index, false)"
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
  import { getPreferenceQuestions, sendPreferenceAnswers } from '../api.js';
  import { formatToPreferenceAnswerArray } from '../helpers/formatters.js';
  
  export default {
    setup() {
      const preguntas = ref([]);
      const error = ref(null);
      const respuestas = ref([]); // Cambiado a array para almacenar respuestas por índice
      const questionsToShow = ref(10);
      const router = useRouter();
  
      onMounted(async () => {
        try {
          preguntas.value = await getPreferenceQuestions();
          // Inicializar el array de respuestas con null o false dependiendo de la lógica
          respuestas.value = Array(preguntas.value.length).fill(null);
        } catch (e) {
          error.value = e.message;
        }
      });
  
      const handleResponse = (index, response) => {
        respuestas.value[index] = response; // Actualizar la respuesta en el array
      };
  
      const handleShowMore = () => {
        questionsToShow.value += 10;
      };
  
      const handleFinishSurvey = async () => {
        const formattedAnswers = formatToPreferenceAnswerArray(respuestas.value);
        try {
          const result = await sendPreferenceAnswers(formattedAnswers);
          router.push('/test-intelligence');
        } catch (e) {
          console.error(e);
        }
      };
  
      const getButtonClass = (index, buttonValue) => {
        return [
          'mr-2 px-4 py-2 border rounded',
          respuestas.value[index] === buttonValue
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
  