<template>
    <section class="hero">
      <div class="hero-content">
        <h1>Encuentra tu carrera perfecta</h1>
        <button @click="navigateToCareer">Encuentra tu carrera perfecta</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    setup() {
      const navigateToCareer = () => {
        // Lógica para navegar a la sección de carreras
        alert('Navegar a la sección de carreras');
      };
  
      return { navigateToCareer };
    }
  };
  </script>
  
  <style scoped>
  .hero {
    height: 100vh;
    background-image: url('https://example.com/your-image.jpg'); /* Reemplaza con la URL de tu imagen */
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
  }
  .hero-content h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  .hero-content button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #0066cc;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  .hero-content button:hover {
    background-color: #005bb5;
  }
  </style>
  