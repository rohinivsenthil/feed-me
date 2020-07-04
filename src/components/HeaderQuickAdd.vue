<template>
  <div class="feedme-quickadd">
    <div class="feedme-quickadd-title">
      Quick Add
      <i class="el-icon-arrow-right"></i>
    </div>
    <el-button
      title="NY Times"
      v-on:click="getFeed('https://rss.nytimes.com/services/xml/rss/nyt/World.xml')"
      circle
      size="mini"
      :disabled="isSubscribed('https://rss.nytimes.com/services/xml/rss/nyt/World.xml')"
    >
      <img src="@/assets/nytimes.png" height="25" width="25" />
    </el-button>
    <el-button
      v-on:click="getFeed('https://www.espn.com/espn/rss/nba/news')"
      circle
      size="mini"
      title="ESPN"
      :disabled="isSubscribed('https://www.espn.com/espn/rss/nba/news')"
    >
      <img src="@/assets/espn.png" height="25" width="25" />
    </el-button>
    <el-button
      title="Slashdot"
      v-on:click="getFeed('http://rss.slashdot.org/slashdot/slashdotMain?format=xml')"
      circle
      size="mini"
      :disabled="isSubscribed('http://rss.slashdot.org/slashdot/slashdotMain?format=xml')"
    >
      <img src="@/assets/slashdot.png" height="25" width="25" />
    </el-button>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      view: "Unread"
    };
  },
  methods: {
    getFeed(site) {
      this.$store.commit("addToSubscribed", site);
      this.$store.dispatch("getRSS", site);
    },
    isSubscribed(site) {
      return this.$store.state.subscribed.includes(site);
    }
  }
};
</script>


<style scoped>
.feedme-quickadd {
  display: flex;
  align-items: center;
}

.feedme-quickadd-title {
  margin-right: 0.5rem;
  font-size: 14px;
  color: #606266;
  font-weight: bold;
}
</style>
