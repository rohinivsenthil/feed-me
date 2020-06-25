<template>
  <div class="card">
    <CardContent :content="content" />
    <div class="card-action">
      <el-button icon="el-icon-collection-tag" size="mini" title="Bookmark" circle></el-button>
      <el-button icon="el-icon-check" size="mini" title="Mark as read" circle></el-button>
    </div>
  </div>
</template>

<script>
import CardContent from "./CardContent.vue";

export default {
  name: "Card",
  props: {
    content: Object
  },
  components: {
    CardContent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background: #fafafa;
  display: flex;
  width: 70%;
  height: auto;
  margin: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  padding-top: 1.5rem;
  padding-left: 2rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-action {
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 15%;
}
</style>
