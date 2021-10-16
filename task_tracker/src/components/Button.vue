<template>
	<button class="px-6 py-2 rounded-full bg-green-600 text-white">
		{{text}}
	</button>
</template>

<script>
export default {
	name:'Button',
	props: {
		text: {type: String, require:false, default: 'Click me'}
	}
}
</script>