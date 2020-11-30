<template>
  <section class="container">
    <h1>Axios</h1>
    <p>全国観光スポット情報</p>
    <div
      v-for="prefecture in $store.state.prefectures"
      :key="prefecture.prefectureNo"
    >
      <div class="display-1 region-link">{{ prefecture.name }}</div>
    </div>
  </section>
</template>

<script>
import axios from "~/plugins/axios";

export default {
  async fetch({ store, params }) {
    const resp = await axios.get("/api/prefectures");
    store.commit("prefectures", resp.data._embedded.prefectureList);
  },
  data: function () {
    return {};
  },
};
</script>

<style scoped>
ul {
  margin: 0 10px;
  background-color: aliceblue;
}

li {
  padding: 10px;
  font-size: 16pt;
}

input {
  font-size: 14pt;
}

button {
  font-size: 14pt;
}

tr th {
  width: 150px;
  background-color: darkblue;
  color: white;
  font-size: 16pt;
}

tr td {
  padding: 5px 10px;
  background-color: #eef;
  font-size: 14pt;
}

.container {
  padding: 5px 10px;
}

h1 {
  font-size: 60pt;
  color: #345980;
}

p {
  padding-top: 5px;
  font-size: 20pt;
}

pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
  white-space: pre-wrap;
}

hr {
  margin: 10px 0;
}
</style>
