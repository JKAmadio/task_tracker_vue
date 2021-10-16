<template>
  <form @submit="handleSubmit" class="flex flex-col items-center bg-gray-200 shadow-md p-5 mt-4">
    <div class="flex flex-col w-full mb-4">
			<div class="flex items-end justify-between mb-1">
				<label for="text" class="font-semibold leading-5">Task</label>
				<p v-if=error class="text-xs text-red-600">campo obrigatorio</p>
			</div>
			<input v-model="text" type="text" id="text" class="py-1 px-2 text-sm rounded" :class="error ? 'border border-solid border-red-600': 'border-0'"/>
    </div>
    <div class="flex flex-col w-full mb-4">
			<div class="flex items-end justify-between mb-1">
				<label for="day" class="font-semibold leading-5">Date & Time</label>
				<p v-if=error class="text-xs text-red-600">campo obrigatorio</p>
			</div>
			<input v-model="day" type="text" id="day" class="py-1 px-2 text-sm rounded" :class="error ? 'border border-solid border-red-600': 'border-0'"/>
    </div>
		<div class="flex flex-row items-center w-full mb-4">
			<input v-model="reminder" class="mr-3" type="checkbox" name="reminder" id="reminder">
			<label for="reminder">Add reminder</label>
		</div>
		<Button text="Save Task" bgColor="#409e17"/>
  </form>
</template>

<script>

import Button from './Button.vue'

export default {
  name: "FormNewTask",
	components: {
		Button
	},
	data() {
		return {
			id: '',
			text: '',
			day: '',
			reminder: false,
			error: false,
		}
	},
	methods: {
		handleSubmit(e){
			e.preventDefault();
			if (!this.text || !this.day) {
				this.error = true;
				return;
			}
			this.id = Math.floor(Math.random() * 100)
			const newTask = {
				id: this.id,
				text: this.text,
				day: this.day,
				reminder: this.reminder,
			}
			this.text = '';
			this.day = '';
			this.reminder = false;
			this.error = false;
			this.$emit('saveTask', newTask);
		}
	}
};
</script>