<template>
	<view>
		<mt-navbar fixed title="Step" emit="true" :config="pagenav" @backClick="baseClick"></mt-navbar>
		<view class="step">
			<ry-title>
				<mt-step v-for="(v, index) in dutyRecordList" :key="index" :time="v.createTime">
					<view class="dutyListSteps">
						所属组织：{{v.organName}}
					</view>
				</mt-step>
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
				dutyRecordList: [{
					organName: "电化厂",
					createTime: "时间：2022-10-01",
				}, {
					organName: "电化厂",
					createTime: "时间：2022-10-01",
				}, {
					organName: "电化厂",
					createTime: "时间：2022-10-01",
				}],
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dutyListSteps {
		padding: 10rpx 20rpx;
		font-size: 28rpx;
		line-height: 80rpx;
		font-weight: 500;
		color: #F4787E;
		text-shadow: 0px 3px 4px rgba(244, 124, 127, 0.3);
	}
  .step {
    padding: 15px 0;
    background: #fff;
  }
</style>
