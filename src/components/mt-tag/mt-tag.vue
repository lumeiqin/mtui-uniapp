<template>
	<text
		:class="[inverted ? 'mt-tag--' + type + ' mt-tag--' + size + ' mt-tag--' + type + '-inverted' : 'mt-tag--' + type + ' mt-tag--' + size, noBorder? 'mt-tag--noborder': '']"
		class="mt-tag" @click="onClick">
		<slot />
	</text>
</template>

<script>
	export default {
		name: 'mt-tag',
		props: {
			type: {
				type: String,
				default: 'default'
			},
			inverted: {
				type: Boolean,
				default: false
			},
			noBorder: {
				type: Boolean,
				default: true,
			},
			size: {
				type: String,
				default: 'normal'
			}
		},
		methods: {
			onClick() {
				this.$emit('click');
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "../mt-theme/mt-tag.scss";
</style>