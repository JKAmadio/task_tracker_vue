<template>
	<div class="my-6">
		<div :key="task.id" v-for="task in tasks">
			<Task 
				:task="task"
				@deleteTask="$emit('deleteTask', task.id)"
				@toggleReminder="$emit('toggleReminder', task.id)"
			/>
		</div>
	</div>
</template>

<script>

import Task from './Task.vue'

export default {
	name: 'Tasks',
	components: {
		Task,
	},
	props: {
		tasks: {type: Array, required:true}
	},
}
</script>