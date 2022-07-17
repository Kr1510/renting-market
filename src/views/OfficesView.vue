<script lang="ts">
import Listings from '@/components/Listings.vue';
import { gql } from "apollo-boost";

export const OFFICES = gql`
  query Offices {
    offices {
      id
      building
      address
      sqm
    }
  }
`;

export default {
  name: "OfficesView",
  components: {
    Listings
  },
  apollo: {
    offices: {
      query: OFFICES,
      update(data: any) {
        return data.offices?.map((office: any) => {
          return {
            ...office,
            name: `${office.sqm}sqm ${office.building} at ${office.address.substring(0, 20)}...`
          };
        });
      }
    }
  }
}
</script>

<template>
  <div class="about">
    <Listings listingType="Office" :listings="listings" />
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
