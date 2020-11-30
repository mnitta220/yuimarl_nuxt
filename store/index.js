export const state = () => ({
  regions: null,
  prefectures: null,
  currentRegion: null,
  locations: null
})

export const mutations = {
  regions(state, regions) {
    state.regions = regions
  },
  prefectures(state, prefectures) {
    state.prefectures = prefectures
  },
  currentRegion(state, region) {
    state.currentRegion = region
  },
  clearCurrentRegion(state) {
    state.currentRegion = null
  },
  locations(state, locations) {
    state.locations = locations
  }
}
