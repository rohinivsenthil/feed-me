<template>
  <div class="feed">
    <Header />
    <CardWrapper />
  </div>
</template>

<script>
import CardWrapper from "./CardWrapper.vue";
import Header from "./Header.vue";

export default {
  name: "FeedWrapper",
  components: {
    CardWrapper,
    Header
  }
};
</script>


<style scoped>
.feed {
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 5;
}
</style>
