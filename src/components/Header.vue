<template>
  <div class="header">
    <div class="feedme-title">
      <img src="@/assets/download.png" height="25" width="25" />
      Feed Me: RSS feed reader
    </div>
    <div
      class="feedme-subtitle"
    >Subscribe to your favorite sites to create a personalized feed with its latest updates</div>
    <el-button v-on:click="getFeed">Click me</el-button>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      response: null
    };
  },
  props: {
    value: Array
  },
  components: {},
  methods: {
    getFeed() {
      this.$store.dispatch(
        "getRSS",
        "http://feeds.bbci.co.uk/news/world/rss.xml"
      );
    }
  }
};
</script>


<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 20%;
  width: 100%;
  padding-left: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;
}
.feedme-title {
  font-size: 2rem;
  font-weight: bolder;
  margin-top: 3rem;
  color: #314455;
}
.feedme-subtitle {
  font-size: 1rem;
  font-weight: bolder;
  color: #97aabd;
}
</style>
