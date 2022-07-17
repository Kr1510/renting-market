<script lang="ts">
import { gql } from "apollo-boost";

export const CAR = gql`
  query Car($id: Int!) {
    car(id: $id) {
      vin
      color
      year
      manufacturer
      range
      model
      listingId
    }
  }
`;

export const LISTING = gql`
  query Listing($id: Int!) {
    listing(id: $id) {
      costPerDay
      listingDate
    }
  }
`

export const BOOK_CAR = gql`
  mutation BookCar($listingId: Int!, $startDate: Date!, $endDate: Date!, $totalCost: Float!, $renterId: Int!) {
    bookCar(listingId: $listingId, startDate: $startDate, endDate: $endDate, totalCost: $totalCost, renterId: $renterId) {
      success
    }
  }
`;

export default {
  name: "CarView",
  data() {
    return {
      form: {},
      showForm: false,
      listing: null
    }
  },
  computed: {
    days() {
      return 4; //hard-code for now
    },
    totalCost() {
      return (this as any).car.costPerDay * (this as any).days;
    }
  },
  methods: {
    onSubmit() {
      (this as any).$apollo.mutate({
        mutation: BOOK_CAR,
        variables() {
          return {
            startDate: (this as any).form.startDate,
            endDate: (this as any).form.endDate,
            totalCost: (this as any).totalCost,
            renterId: 1 //hard-code for now
          }
        }
      });
    }
  },
  apollo: {
    car: {
      query: CAR,
      fetchPolicy: "network-only",
      variables() {
        let id = (this as any).$route.params?.id;
        return {
          id: parseInt(id)
        };
      }
    },
    // listing: {
    //   query: LISTING,
    //   fetchPolicy: "network-only",
    //   variables() {
    //     return {
    //       id: parseInt((this as any).car?.listingId)
    //     }
    //   },
    //   skip() {
    //     return !(this as any).car?.listingId;
    //   }
    // }
  }
}
</script>

<template>
  <div v-if="!$apollo.loading && car">
    <!-- &&listing-->
    <el-row>
      <el-col :span="8">
        Color:
      </el-col>
      <el-col :span="16">
        {{ car.color }}
      </el-col>
    </el-row>
    <el-divider />
    <el-row>
      <el-col :span="8">
        Make:
      </el-col>
      <el-col :span="16">
        {{ car.manufacturer }}
      </el-col>
    </el-row>
    <el-divider />
    <el-row>
      <el-col :span="8">
        Range:
      </el-col>
      <el-col :span="16">
        {{ car.range }}
      </el-col>
    </el-row>
    <el-divider />
    <el-row>
      <el-col :span="8">
        Model:
      </el-col>
      <el-col :span="16">
        {{ car.model }}
      </el-col>
    </el-row>
    <div v-if="listing">
      <el-row>
        <el-col :span="8">
          Listed:
        </el-col>
        <el-col :span="16">
          {{ listing.listingDate }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          Cost per day:
        </el-col>
        <el-col :span="16">
          <h3>R{{ listing.costPerDay }}</h3>
        </el-col>
      </el-row>
    </div>
    <el-button @click="showForm = true;">
      Book this car
    </el-button>

    <el-form v-if="showForm" :model="form">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-date-picker v-model="form.startDate" type="date" placeholder="Book from" style="width: 100%" />
        </el-col>
        <el-col :span="12">
          <el-date-picker v-model="form.endDate" type="date" placeholder="Book to" style="width: 100%" />
        </el-col>
      </el-row>

      <div>
        <h3>Total Cost:</h3> R1950
        <!-- R{{ listing.costPerDay * days }} -->
      </div>

      <el-button type="primary" @click="onSubmit">Create</el-button>
    </el-form>
  </div>
</template>
