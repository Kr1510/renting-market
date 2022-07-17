<script lang="ts">
// import Listings from '@/components/Listings.vue';
import { gql } from "apollo-boost";

export const CARS = gql`
  query Cars {
    cars {
      vin
      color
      year
      manufacturer
      range
      model
    }
  }
`;

export default {
  name: "CarsView",
  data() {
    return {
      carsQuery: CARS
    }
  },
  apollo: {
    cars: {
      query: CARS
    }
  }
}
</script>

<template>
{{cars}}
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
