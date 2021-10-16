<template>
	<div class="flex w-full justify-between">
		<h1 class="font-sans font-semibold text-2xl w-44">{{title}}</h1>
		<Button 
			text="Add task"
			@refreshList="this.$emit('refreshList')"
		/>
	</div>
</template>

<script>

import Button from './Button.vue'

export default {
	name: 'Header',
	components: {
		Button,
	},
	props: {
		title: {type: String, require:true}
	}
}
</script>