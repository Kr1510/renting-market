<script lang="ts">
import Listings from '@/components/Listings.vue';

export default {
  name: "OfficesView",
  data() {
    return {
      listings: [
        { name: "Office test" },
        { name: "test1" }
      ]
    }
  },
  components: {
    Listings
  }
}
</script>

<template>
  <div class="about">
    <Listings listingType="Offices" :listings="listings" />
  </div>
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
