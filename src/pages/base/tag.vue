<template>
	<view>
		<mt-navbar fixed title="Tag" emit="true" :config="pagenav" @backClick="baseClick"></mt-navbar>
		<view class="comp">
			<ry-title>
				<mt-tag>标签1</mt-tag>
			</ry-title>

			<ry-title title="自定义参数">
				<mt-tag :config="tagConfig">标签2</mt-tag>
			</ry-title>
		</view>
	</view>
</template>

<script>
	import common from "../../common/common.js";
	export default {
		mixins: [common],
		data() {
			return {
				tagConfig: {
					color: "#2194F2",
					border: "1px solid #2194F2",
					padding: "10rpx 30rpx",
					radius: "30rpx",
					bg: "#fff",
					scale: "1.2"
				},
			}
		}
	}
</script>
