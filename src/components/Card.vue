<template>
  <div class="card">
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 10rem;
  margin: 0.5rem;
  margin-left: 3rem;
  border: 1px solid #e0e0e0;
}
</style>
