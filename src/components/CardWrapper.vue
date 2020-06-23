<template>
  <div class="cardwrapper">
    <div v-for="name in abce" :key="name">
      <Card v-bind:title="name" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "CardWrapper",
  data() {
    return { abce: ["name1", "name2", "name3", "name1", "name2", "name3"] };
  },
  components: {
    Card
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardwrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding-top: 5rem;
  padding-bottom: 2rem;
  overflow: scroll;
}
</style>
