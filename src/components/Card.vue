<template>
  <div class="card">
    <div class="card-image">
      <img src="@/assets/logo.png" style="height: auto; max-width: 100%;" />
    </div>
    <CardContent :title="title" />
  </div>
</template>

<script>
import CardContent from "./CardContent.vue";

export default {
  name: "Card",
  props: ["title"],
  components: {
    CardContent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: flex;
  width: 60%;
  height: 10rem;
  margin: 0.5rem;
  margin-bottom: 2rem;
}

.card-image {
  height: 10rem;
  margin-right: 2rem;
  width: 35%;
  overflow: hidden;
}
</style>
