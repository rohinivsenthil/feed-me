<template>
  <div class="sidebar">
    <div class="sidebar-title">SUBSCRIBED SITES</div>
    <div class="sidebar-snippets">
      <div v-for="(item,idx) in subscribed" :key="idx">
        <SideSnippet :site="item" />
      </div>
    </div>
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
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  width: 100%;
}
</style>
