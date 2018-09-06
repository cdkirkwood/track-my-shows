<template>
  <form class="searchContainer" v-on:submit.prevent="findShow($event)">
    <h1>Search</h1>
    <input 
      type="text" 
      placeholder="search show" 
      name="search"
      >
    <button type="submit"></button>
  </form>
</template>

<script>
export default {
  methods: {
    findShow(event) {
      const show = event.target.search.value
      this.$http.get(`/api/find?show=${show}`)
        .then(response => console.log(response.data))
    }
  }
};
</script>
