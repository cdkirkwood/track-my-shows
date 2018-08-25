<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getData">get data</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: null
    }
  },
  methods: {
    getData() {
      this.$http.get('/api/poop')
      .then(response => console.log(response.data))
    }
  }
}
</script>
