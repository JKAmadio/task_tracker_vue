<template>
	<button 
		class="px-6 py-2 rounded-full"
		:style="{background: bgColor, color: txtColor}"
		@click="this.$emit('refreshList')"
	>
		{{text}}
	</button>
</template>

<script>
export default {
	name:'Button',
	props: {
		text: {type: String, required:false, default: 'Click me'},
		bgColor: {type: String, required:false, default: 'black'},
		txtColor: {type: String, required:false, default: 'white'},
	}
}
</script>