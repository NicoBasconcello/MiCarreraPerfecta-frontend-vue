<template>
  <div id="app">
    <Navbar />
    <HeroSection />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    HeroSection
  }
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Arial', sans-serif;
}
#app {
  height: 100%;
}
</style>
