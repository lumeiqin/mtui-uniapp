<template>
	<view style="background: transparent">
		<view class="title">{{title}}</view>
		<view class="content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: "基础用法"
			}
		}
	}
</script>
<style lang="scss" scoped>
	.title {
		line-height: 40rpx;
		font-size: 30rpx;
		font-weight: 500;
		padding: 10rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-left: 4px solid #848687;
	}
	.content {
		padding: 40rpx;
	}
</style>
