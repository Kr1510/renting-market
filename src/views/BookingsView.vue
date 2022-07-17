<script lang="ts">
import { gql } from "apollo-boost";

export const BOOKINGS = gql`
  query Bookings($userId: Int!) {
    bookings(userId: $userId) {
      id
      startDate
      endDate
      totalCost
      discount
    }
  }
`;

export default {
  name: "BookingsView",
  apollo: {
    offices: {
      query: BOOKINGS,
      variables() {
        return {
          userId: 1 //hard-coded for now
        }
      }
    }
  }
}
</script>

<template>
  <div class="about">
    <h1>My Bookings</h1>
    <div v-for="booking in bookings">
      {{booking}}
    </div>
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
