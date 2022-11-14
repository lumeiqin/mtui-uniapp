<template>
	<view class="mt-box"
		:style="{backgroundColor: selfConfig.bg, padding: selfConfig.padding, borderRadius: selfConfig.radius}"
		:class="{'mt-box--flip': flip, 'mt-box--border': border}">
		<view :style="{
			color: selfConfig.color,
			fontSize: selfConfig.fontsize
		}" :class="{'mt-box--center': center}">
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		name: "mt-box",
		props: {
			flip: {
				type: [Boolean, String],
				default: false
			},
			center: {
				type: [Boolean, String],
				default: false
			},
			border: {
				type: [Boolean, String],
				default: false
			},
			config: {
				type: Object,
				default () {
					return {}
				}
			},
		},
		data() {
			return {
				selfConfig: {
					radius: '10rpx',
					padding: '30rpx',
					bg: '#fff',
					fontsize: "30rpx",
					color: "#333"
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
	}
</script>
