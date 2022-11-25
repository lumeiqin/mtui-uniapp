<template>
	<view>
		<mt-navbar title="Rate" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
		<view class="comp">
			<ry-title>
				<mt-rate :value="3" @change="rateChange"></mt-rate>
			</ry-title>

			<ry-title title="调整星星数量">
				<mt-rate :value="3" :count="8"></mt-rate>
			</ry-title>

			<ry-title title="只读模式">
				<mt-rate :value="3" readonly="true"></mt-rate>
			</ry-title>

			<ry-title title="自定义icon">
				<mt-rate :value="3" icon="icon-gougou"></mt-rate>
			</ry-title>

			<ry-title title="调整尺寸距离">
				<mt-rate :value="3" size="60rpx" margin="30rpx"></mt-rate>
			</ry-title>
		</view>
	</view>
</template>

<script>
	import common from "../common/common.js";
	export default {
		mixins: [common],
		data() {
			return {}
		},
		methods: {
			rateChange(value) {
				console.log("当前value为：" + value)
			},
		}
	}
</script>
