<template>
  <div class="sidesnippet">
    <div class="link">{{shortenSite(site)}}</div>
    <el-button
      v-on:click="removeSubscription(site)"
      icon="el-icon-close"
      size="mini"
      title="Unsubscribe"
      circle
    ></el-button>
  </div>
</template>

<script>
export default {
  name: "SideSnippet",
  props: {
    site: String
  },
  methods: {
    shortenSite(site) {
      return site.slice(0, 25) + "...";
    },
    removeSubscription(site) {
      this.$store.commit("removeFromSubscribed", site);
      this.$store.commit("removeFromFeed", site);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidesnippet {
  display: flex;
  justify-content: space-between;
  width: 85%;
  padding: 0.2rem;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
  border-radius: 0.5rem;
  color: whitesmoke;
  background-color: rgba(255, 255, 255, 0.2);
}

.el-button--mini.is-circle {
  padding: 5px;
}

.el-button {
  border: none;
  color: #744248;
  background: none;
}

.el-button:hover {
  color: whitesmoke;
  background: none;
}
</style>
