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
      <div class="feed-dropdown">
        <el-dropdown @command="changeView">
          <span class="el-dropdown-link">
            Feed View: {{view}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="dropdown-items">
            <el-dropdown-item command="Unread">Unread</el-dropdown-item>
            <el-dropdown-item command="Bookmarked">Bookmarked</el-dropdown-item>
            <el-dropdown-item command="Read">Read</el-dropdown-item>
            <el-dropdown-item command="All">All</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
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
  props: {
    value: Array
  },
  components: {},
  methods: {
    getFeed(link) {
      this.$store.dispatch("getRSS", link);
    },
    changeView(updatedView) {
      this.view = updatedView;
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
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 0.5rem;
}

.feed-dropdown {
  margin-left: 3rem;
  font-weight: bold;
  color: #314455;
}

.dropdown-items {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
