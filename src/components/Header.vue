<template>
  <div class="header">
    <div class="feedme-title">Feed Me: RSS feed reader</div>
    <div
      class="feedme-subtitle"
    >Subscribe to your favorite sites to create a personalized feed with its latest updates</div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>


<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 20%;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
}
.feedme-title {
  font-size: 2rem;
  font-weight: bolder;
  margin-left: 1rem;
  margin-top: 3rem;
  color: #314455;
}
.feedme-subtitle {
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: bolder;
  color: #9e5a63;
}
</style>
