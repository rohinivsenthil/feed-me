<template>
  <div class="sidebar">
    <div class="sidebar-title">SUBSCRIBED SITES ({{subscribed.length}})</div>
    <div class="sidebar-snippets">
      <div v-for="(item,idx) in subscribed" :key="idx">
        <SideSnippet :site="item" />
      </div>
    </div>
    <el-button>
      <i class="el-icon-plus"></i>
      SUBSCRIBE
    </el-button>
  </div>
</template>

<script>
import SideSnippet from "./SideSnippet.vue";
export default {
  name: "SideBar",
  components: {
    SideSnippet
  },
  computed: {
    subscribed() {
      return this.$store.state.subscribed;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background: #9e5a63;
}

.sidebar-title {
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 100%;
  color: white;
  border-bottom: 1px solid #744248;
}

.sidebar-snippets {
  display: flex;
  height: 80%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  width: 100%;
}

.el-button {
  min-width: 10rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  border: none;
  color: #fafafa;
  background-color: rgba(255, 255, 255, 0.2);
}

.el-icon-plus {
  margin-right: 0.5rem;
}
</style>
