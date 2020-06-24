<template>
  <div class="feed">
    <Header />
    <CardWrapper />
  </div>
</template>

<script>
import CardWrapper from "./CardWrapper.vue";
import Header from "./Header.vue";
export default {
  name: "FeedWrapper",
  data() {
    return {};
  },
  components: {
    CardWrapper,
    Header
  },
  mounted() {
    this.$store.dispatch(
      "getRSS",
      "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"
    );
  }
};
</script>


<style scoped>
.feed {
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 5;
}
</style>
