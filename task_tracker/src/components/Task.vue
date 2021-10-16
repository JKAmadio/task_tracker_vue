<template>
	<div class="bg-red-100 py-4 px-6 mb-3 shadow">
		<h3 class="text-lg">
			{{task.text}}
		</h3>
		<p class="text-md">
			{{task.day}}
		</p>
	</div>
</template>

<script>
export default {
	name: 'Task',
	props: {
		task: {type: Object, required:true}
	},
}
</script>