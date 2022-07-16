<script setup lang="ts">
defineProps<{
	listingType: string,
	listings: Array<{ name: string }>,
}>()
</script>

<template>
	<div class="about">
		<h1>View all {{ listingType }} listed</h1>

		<el-row :gutter="20">
			<el-col v-for="listing in listings" :span="4">
				<el-card>
					<img height="200" width="200" />
					<div>{{ listing.name }}</div>
				</el-card>
			</el-col>
		</el-row>
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
