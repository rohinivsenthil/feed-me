<template>
  <div class="header">
    <div class="feedme-title">
      <img src="@/assets/feedme.png" height="25" width="25" />
      Feed Me: RSS feed reader
    </div>
    <div
      class="feedme-subtitle"
    >Subscribe to your favorite sites to create a personalized feed with its latest updates</div>
    <div class="feedme-actions">
      <el-button
        title="NY Times"
        v-on:click="getFeed('https://rss.nytimes.com/services/xml/rss/nyt/World.xml')"
        circle
        size="mini"
      >
        <img src="@/assets/nytimes.png" height="25" width="25" />
      </el-button>
      <el-button
        v-on:click="getFeed('https://www.espn.com/espn/rss/nba/news')"
        circle
        size="mini"
        title="ESPN"
      >
        <img src="@/assets/espn.png" height="25" width="25" />
      </el-button>
      <el-button
        title="Slashdot"
        v-on:click="getFeed('http://rss.slashdot.org/slashdot/slashdotMain?format=xml')"
        circle
        size="mini"
      >
        <img src="@/assets/slashdot.png" height="25" width="25" />
      </el-button>
    </div>
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
    getFeed(link) {
      this.$store.dispatch("getRSS", link);
    }
  }
};
</script>


<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 10rem;
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

.feedme-actions {
  margin-top: 0.5rem;
}
</style>
