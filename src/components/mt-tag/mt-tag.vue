<template>
	<text :style="{
			color: selfConfig.color,
			fontSize: selfConfig.size,
			lineHeight: selfConfig.lineHeight,
			border: selfConfig.border,
			padding: selfConfig.padding,
			background: selfConfig.bg,
			borderRadius: selfConfig.radius,
			transform: 'scale(' + selfConfig.scale + ')',
			'display': 'inline-block'
		}" @click="onClick">
		<slot />
	</text>
</template>

<script>
	export default {
		name: 'mt-tag',
		props: {
			config: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				selfConfig: {
					color: "#333",
					size: "24rpx",
					lineHeight: "24rpx",
					border: "1px solid #CCC9C9",
					padding: "6rpx 10rpx",
					bg: "#CCC9C9",
					radius: "20rpx",
					scale: 1
				}
			}
		},
		watch: {
			config(value) {
				this.selfConfig = {
					...this.selfConfig,
					...value
				}
			}
		},
		created() {
			this.selfConfig = {
				...this.selfConfig,
				...this.config
			}
		},
		methods: {
			onClick() {
				this.$emit('click');
			}
		}
	};
</script>
