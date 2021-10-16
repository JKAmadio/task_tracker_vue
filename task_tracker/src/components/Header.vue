<template>
	<div class="flex w-full justify-between">
		<h1 class="font-sans font-semibold text-2xl w-44">Task Tracker</h1>
		<Button text="Add task"/>
	</div>
</template>

<script>

import Button from './Button.vue'

export default {
	name: 'Header',
	components: {
		Button,
	},
}
</script>