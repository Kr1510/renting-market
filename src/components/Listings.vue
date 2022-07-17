<script setup lang="ts">
defineProps<{
	listingType: string,
	listings: Array<{ id: number, name: string }>,
}>()
</script>

<template>
	<div class="about">
		<h1>View all {{ listingType }}s listed</h1>

		<el-space wrap>
			<el-card v-for="listing in listings" :to="`/${listingType.toLowerCase()}s/${listing.id}`">
				<img height="200" width="200" />
				<div>{{ listing.name }}</div>
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
