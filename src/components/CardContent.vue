<template>
  <div class="cardcontent">
    <a :href="content.link" style="text-decoration: none" target="_blank">
      <div class="card-title">{{content.title}}</div>
    </a>
    <div class="card-date">🕐{{format(content.isoDate)}}</div>
    <div class="card-description">{{content.contentSnippet}}</div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "CardContent",
  props: {
    content: Object
  },
  methods: {
    format(time) {
      return moment(time).format("DD MMM YYYY, h:mm A");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardcontent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: scroll;
  width: 85%;
  height: 100%;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #314455;
}

.card-description {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  text-align: left;
}

.card-date {
  font-size: 0.8rem;
  color: #bdbdbd;
}
</style>
