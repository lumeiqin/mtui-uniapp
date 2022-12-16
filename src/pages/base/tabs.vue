<template>
	<view>
		<mt-navbar fixed title="Tabs" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
		<view class="comp">
			<ry-title>
				<mt-tabs></mt-tabs>
			</ry-title>

			<ry-title title="无限制模式">
				<mt-tabs type="scroll" :tabData="scrollTabData"></mt-tabs>
			</ry-title>

			<ry-title title="自定义参数">
				<mt-tabs :config="tabConfig"></mt-tabs>
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
				scrollTabData: [{
					id: 0,
					title: "生产监控"
				}, {
					id: 1,
					title: "装置负荷"
				}, {
					id: 2,
					title: "库存分析"
				}, {
					id: 3,
					title: "发货分析"
				}, {
					id: 4,
					title: "原材料"
				}, {
					id: 5,
					title: "生产计划"
				}],
				tabConfig: {
					bg: "#2194F2",
					color: "#e4e4e4",
					selectedSize: "18px",
					selectedColor: "#f6f6f6",
					selectedWeight: 900,
					underline: false,
				},
			}
		}
	}
</script>
