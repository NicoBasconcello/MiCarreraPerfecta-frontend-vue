<template>
  <div id="app">
    <Navbar />
    <HomeSection />
    <!-- <DataDisplay />
    <router-view /> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HomeSection from './components/HomeSection.vue';
// import DataDisplay from './components/DataDisplay.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    HomeSection,
    // DataDisplay
  }
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Raleway", sans-serif;
}
#app {
  height: 100%;
}
</style>
