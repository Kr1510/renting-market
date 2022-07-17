<script lang="ts">
export default {
	name: "Listings",
	props: {
		listingType: {
			type: String,
			required: true
		},
		listings: {
			type: Array<{ id: Number, name: String }>,
			required: true
		},
		withLink: {
			type: Boolean,
			default: false
		}
	},
}
</script>

<template>
	<div class="about">
		<h1>View all {{ listingType }}s listed</h1>

		<el-space wrap>
			<el-card v-for="listing in listings">
				<router-link v-if="withLink" :to="{ name: listingType.toLowerCase(), params: {id: listing.id} }">
					<img height="200" width="200" />
					<div>{{ listing.name }}</div>
				</router-link>
				<div v-else>
					<img height="200" width="200" />
					<div>{{ listing.name }}</div>
				</div>
			</el-card>
		</el-space>
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
