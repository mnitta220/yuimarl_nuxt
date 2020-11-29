<template>
  <section class="container">
    <h1>Axios</h1>
    <p>全国観光スポット情報2</p>
    <p>base: {{ base }}</p>
    <p><nuxt-link to="/region">region</nuxt-link></p>
    <p><nuxt-link to="/greeting">greeting</nuxt-link></p>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      base: process.env.BASE_URL,
    };
  },
  async fetch({ store, params }) {
    console.log("***process.env.BASE_URL=" + process.env.BASE_URL);
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
