<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <p>{{ json_data.id }}: {{ json_data.content }}</p>
  </section>
</template>

<script>
import axios from "~/plugins/axios";

export default {
  data: function () {
    return {
      title: "Axios",
      message: "axios sample.",
    };
  },
  asyncData: async function () {
    let result = await axios.get("/api/greeting");
    return { json_data: result.data };
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
