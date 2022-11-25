<template>
	<view>
		<mt-navbar title="Search" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
		<view class="comp">
			<ry-title>
				<mt-search @focusEvent="focusEvent" @blurEvent="blurEvent" @inputEvent="inputEvent"></mt-search>
			</ry-title>

			<ry-title title="自定义参数">
				<mt-search style="background: #fff;" :config="searchConfig"></mt-search>
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
				searchConfig: {
					padding: "20rpx 30rpx",
					radius: "60rpx",
					height: "68rpx",
					background: "#F6F6F6",
					iconSize: "32rpx",
					placeholder: "输入搜索内容",
					border: "none"
				},
			}
		},
		methods: {
			focusEvent(value) {
				console.log("获取焦点事件：" + value)
			},
			blurEvent(value) {
				console.log("失去焦点事件：" + value)
			},
			inputEvent(value) {
				console.log("输入事件：" + value)
			},
		}
	}
</script>
