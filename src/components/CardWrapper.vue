<template>
  <div class="cardwrapper">
    <div v-for="(item,idx) in feed" :key="idx">
      <Card :content="item" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "CardWrapper",
  data() {
    return {};
  },
  props: {},
  computed: {
    feed() {
      return this.$store.state.feed;
    }
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
  margin-left: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  overflow: scroll;
}
</style>
