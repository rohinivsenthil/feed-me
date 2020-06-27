<template>
  <div class="feedme-quickadd">
    <div class="feedme-quickadd-title">
      Quick Add
      <i class="el-icon-arrow-right"></i>
    </div>
    <el-button
      title="NY Times"
      v-on:click="getFeed('https://rss.nytimes.com/services/xml/rss/nyt/World.xml', 'nytimes')"
      circle
      size="mini"
      :disabled="disabled.nytimes"
    >
      <img src="@/assets/nytimes.png" height="25" width="25" />
    </el-button>
    <el-button
      v-on:click="getFeed('https://www.espn.com/espn/rss/nba/news', 'espn')"
      circle
      size="mini"
      title="ESPN"
      :disabled="disabled.espn"
    >
      <img src="@/assets/espn.png" height="25" width="25" />
    </el-button>
    <el-button
      title="Slashdot"
      v-on:click="getFeed('http://rss.slashdot.org/slashdot/slashdotMain?format=xml', 'slashdot')"
      circle
      size="mini"
      :disabled="disabled.slashdot"
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
      view: "Unread",
      disabled: {
        nytimes: false,
        espn: false,
        slashdot: false
      }
    };
  },
  methods: {
    getFeed(link, name) {
      this.$store.commit("addToSubscribed", link);
      this.$store.dispatch("getRSS", link);
      if (name !== undefined) {
        this.disabled[name] = true;
      }
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
