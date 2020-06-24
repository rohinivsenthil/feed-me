<template>
  <div class="card">
    <div class="card-image">
      <img src="@/assets/logo.png" style="height: auto; max-width: 100%;" />
    </div>
    <CardContent :content="content" />
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
  display: flex;
  width: 70%;
  height: auto;
  margin: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  padding-top: 1.5rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.card-image {
  height: 10rem;
  margin-right: 2rem;
  width: 25%;
  overflow: hidden;
}
</style>
