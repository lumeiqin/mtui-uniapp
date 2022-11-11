<template>
	<view class="mt-box" :style="{backgroundColor: bg, padding: padding, borderRadius: radius}"
		:class="{'mt-box--flip': flip, 'mt-box--border': border}">
		<view class="mt-box-main" :class="{'mt-box--center': center}">
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		name: "mt-box",
		props: {
			bg: {
				type: String,
				default: "#ffffff"
			},
			padding: {
				type: String,
				default: "4vw"
			},
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
			radius: {
				type: String,
				default: ""
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
					radius: '1vw',
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

<style lang="scss" scoped>
	@import "../mt-theme/mt-box.scss";
</style>
