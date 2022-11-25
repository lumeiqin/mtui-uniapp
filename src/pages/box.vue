<template>
	<view>
		<mt-navbar title="Box" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
		<view class="comp">
			<ry-title>
				<mt-box>
					今人不见古时月，今月曾经照古人。
				</mt-box>
			</ry-title>

			<ry-title title="容器翻转">
				<mt-box flip="true">
					今人不见古时月，今月曾经照古人。
				</mt-box>
			</ry-title>

			<ry-title title="内容居中">
				<mt-box center="true">
					今人不见古时月，今月曾经照古人。
				</mt-box>
			</ry-title>

			<ry-title title="显示上下边框">
				<mt-box border="true">
					今人不见古时月，今月曾经照古人。
				</mt-box>
			</ry-title>

			<ry-title title="自定义参数">
				<mt-box :config="boxConfig">
					今人不见古时月，今月曾经照古人。
				</mt-box>
			</ry-title>
		</view>
	</view>
</template>

<script>
	import common from "../common/common.js";
	export default {
		mixins: [common],
		data() {
			return {
				boxConfig: {
					radius: "20rpx",
					padding: "40rpx",
					bg: "#EF6D6D",
					fontsize: "34rpx",
					color: "#fff"
				},
			}
		}
	}
</script>
