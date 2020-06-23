<template>
  <div class="feed">
    <div class="intro">Hello, this is the feed!</div>
    <CardWrapper />
  </div>
</template>

<script>
import CardWrapper from "./CardWrapper.vue";

export default {
  name: "FeedWrapper",
  components: {
    CardWrapper
  }
};
</script>


<style scoped>
.intro {
  height: 10%;
}
.feed {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 4;
  border: 0.25rem solid;
}
</style>
