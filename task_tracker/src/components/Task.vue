<template>
	<div class="flex justify-between items-start bg-gray-100 py-4 px-6 mb-3 shadow-md">
		<div>
			<h3 class="text-lg">
				{{task.text}}
			</h3>
			<p class="text-md mt-1">
				{{task.day}}
			</p>
		</div>
		<i
			class="fa fa-times fill-current text-red-600 cursor-pointer"
			@click="this.$emit('deleteTask', task.id)"
			aria-hidden="true"
		></i>
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