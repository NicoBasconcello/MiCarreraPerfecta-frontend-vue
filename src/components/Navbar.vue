<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <span>Mi Carrera Perfecta</span>
      </div>
      <div class="navbar-burger" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div :class="['navbar-menu', { 'is-active': isActive }]">
        <a href="#">Inicio</a>
        <a href="#">Encuentra tu carrera</a>
        <a href="#">Login</a>
      </div>
    </nav>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const isActive = ref(false);
      
      const toggleMenu = () => {
        isActive.value = !isActive.value;
      };
  
      return { isActive, toggleMenu };
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: white;
  }
  .navbar-brand span {
    font-size: 24px;
    font-weight: bold;
  }
  .navbar-burger {
    display: none;
    cursor: pointer;
  }
  .navbar-burger div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px;
  }
  .navbar-menu {
    display: flex;
    align-items: center;
  }
  .navbar-menu a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
  }
  .navbar-menu.is-active {
    display: flex;
  }
  @media (max-width: 768px) {
    .navbar-burger {
      display: block;
    }
    .navbar-menu {
      display: none;
      flex-direction: column;
      width: 100%;
      background-color: #333;
    }
    .navbar-menu a {
      padding: 10px 20px;
      width: 100%;
      text-align: center;
    }
    .navbar-menu.is-active {
      display: flex;
    }
  }
  </style>
  