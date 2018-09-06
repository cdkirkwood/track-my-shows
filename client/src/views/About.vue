<template>
  <div class="about">
    <Search />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
  data() {
    return {
      apiData: null
    }
  },
  components: {
    Search
  }
}
</script>
