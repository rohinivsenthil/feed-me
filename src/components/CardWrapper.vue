<template>
  <div class="cardwrapper">
    <div v-for="(item,idx) in feed" :key="idx">
      <Card :content="item" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
let Parser = require("rss-parser");
let parser = new Parser();

export default {
  name: "CardWrapper",
  data() {
    return {
      abce: ["name1", "name2", "name3", "name1", "name2", "name3"],
      response: null,
      feed: []
    };
  },
  components: {
    Card
  },
  async mounted() {
    this.response = await parser.parseURL(
      "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"
    );
    this.feed = [...this.feed, ...this.response.items];
    console.log(this.feed);
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
