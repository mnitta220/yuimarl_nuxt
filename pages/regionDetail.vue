<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }} ＞ {{ $store.state.currentRegion.regionName }}</p>
    <div v-for="location in $store.state.locations" :key="location.locationId">
      <div class="title location-title">{{ location.locationName }}</div>
      <div class="body-2 location-text">{{ location.note }}</div>
    </div>
    <div>
      <nuxt-link to="/">トップページに戻る</nuxt-link>
    </div>
  </section>
</template>

<script>
import axios from "~/plugins/axios";

export default {
  data: function () {
    return {
      title: "Axios",
      message: "全国観光スポット情報",
    };
  },
  async fetch({ store, params }) {
    console.log("***regionId=" + store.state.currentRegion.regionId);
    const resp = await axios.get(
      `/api/locations/region/${store.state.currentRegion.regionId}`
    );
    store.commit("locations", resp.data);
  },
};
</script>

<style scoped>
.location-title {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-decoration: underline;
}
.location-text {
  padding: 0.3em;
}
</style>
