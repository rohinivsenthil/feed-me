<template>
  <div class="sidesnippet">
    <div class="link">www.thenytimes.com</div>
    <el-button icon="el-icon-close" size="mini" title="Unsubscribe" circle></el-button>
  </div>
</template>

<script>
export default {
  name: "SideSnippet"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidesnippet {
  display: flex;
  justify-content: space-between;
  width: 85%;
  padding: 0.2rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
}

.el-button--mini.is-circle {
  padding: 5px;
}

.el-button {
  border: none;
  color: #744248;
  margin-right: 0.5rem;
  background: none;
}

.el-button:hover {
  color: whitesmoke;
  background: none;
}
</style>
