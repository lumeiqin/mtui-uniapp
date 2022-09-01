<template>
	<view class="mt-text">
		<view v-if="type === 'diy'" :style="{
  fontSize: size,
  color: color,
  lineHeight: lh,
  fontWeight: fw
}">
			<slot />
		</view>
		<view :class="'mt-text-' + type" v-else>
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		name: "mt-text",
		props: {
			type: {
				type: String,
				default: "normal"
			},
			size: {
				type: String,
				default: "4.27vw"
			},
			lh: {
				type: String,
				default: "8vw"
			},
			fw: {
				type: [Number, String],
				default: 400
			},
			color: {
				type: String,
				default: "#252525"
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../mt-theme/mt-text.scss";
</style>
