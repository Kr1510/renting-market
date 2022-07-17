<script lang="ts">
import Listings from '@/components/Listings.vue';
import { gql } from "apollo-boost";

export const CARS = gql`
  query Cars {
    cars {
      id
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
  components: {
    Listings
  },
  apollo: {
    cars: {
      query: CARS,
      fetchPolicy: "network-only",
      update(data: any) {
        return data.cars?.map((car: any) => {
          return {
            ...car,
            name: `${car.color} ${car.year} ${car.manufacturer} ${car.range}`
          };
        });
      }
    }
  }
}
</script>

<template>
  <Listings v-if="!$apollo.loading" :withLink="true" listingType="Car" :listings="cars" />
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
