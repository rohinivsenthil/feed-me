<template>
  <div class="cardcontent">
    <div class="card-title">This is the card title {{title}}</div>
    <div class="card-date">🕐 Thu, 12 Nov 2015</div>
    <div
      class="card-description"
    >This is the card description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
  </div>
</template>

<script>
export default {
  name: "CardContent",
  props: ["title"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardcontent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
  color: #314455;
}

.card-description {
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: left;
}

.card-date {
  font-size: 1rem;
  color: #bdbdbd;
}
</style>
