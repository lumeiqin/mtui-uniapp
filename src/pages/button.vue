<template>
	<view class="comp">
		<ry-title>
			<mt-button @click="clickEvent">测试</mt-button>
		</ry-title>
		<ry-title title="name=hollow 基础使用">
			<mt-button name="hollow">测试</mt-button>
		</ry-title>

		<ry-title title="name=hollow 无边框">
			<mt-button name="hollow" :config="hollowConfig">测试</mt-button>
		</ry-title>

		<ry-title title="禁用按钮">
			<mt-button disabled>测试</mt-button>
		</ry-title>

		<ry-title title="显示loading图标">
			<mt-button loading>测试</mt-button>
		</ry-title>

		<ry-title title="自定义参数">
			<mt-button :config="buttonConfig">测试</mt-button>
			<br>
			<mt-button name="hollow" :config="buttonConfig">测试</mt-button>
		</ry-title>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hollowConfig: {
					radius: "60rpx",
					noBorder: true
				},
				buttonConfig: {
					radius: "80rpx",
					height: "100rpx",
					color: "#EF6D6D",
					fontsize: "36rpx",
					shadow: "0px 3px 4px rgba(244,124,127,0.3)"
				},
			}
		},
		methods: {
			clickEvent() {
				uni.showToast({
					title: "触发点击事件",
					icon: "none"
				})
			},
		}
	}
</script>
