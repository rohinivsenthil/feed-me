<template>
  <div class="cardwrapper">
    <h1>card wrapper!</h1>
    <div v-for="name in abce" :key="name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "CardWrapper",
  data() {
    return { abce: ["name1", "name2", "name3"] };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardwrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  border: 0.25rem solid;
}
</style>
