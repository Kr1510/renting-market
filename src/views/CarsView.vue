<script lang="ts">
import Listings from '@/components/Listings.vue';

export default {
  name: "CarsView",
  data() {
    return {
      listings: [
        { name: "test"},
        { name: "test1"}
      ]
    }
  },
  components: {
    Listings
  }
}
</script>

<template>
  <Listings listingType="Cars" :listings="listings" />
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
