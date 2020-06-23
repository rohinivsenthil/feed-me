<template>
  <div id="app">
    <SideBar />
    <FeedWrapper />
  </div>
</template>

<script>
import FeedWrapper from "./components/FeedWrapper.vue";
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    FeedWrapper,
    SideBar
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
