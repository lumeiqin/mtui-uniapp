<template>
	<view class="comp">
		<ry-title>
			<mt-navbar title="基础用法"></mt-navbar>
		</ry-title>

		<ry-title title="右侧插槽">
			<mt-navbar title="右侧插槽">
				<template slot="right">新增</template>
			</mt-navbar>
		</ry-title>

		<ry-title title="触发自定义方法">
			<mt-navbar title="触发自定义方法" emit="true" @backClick="navbarEvent"></mt-navbar>
		</ry-title>

		<ry-title title="自定义参数">
			<mt-navbar title="自定义参数" :config="navbarConfig"></mt-navbar>
		</ry-title>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navbarConfig: {
					bg: "#EF6D6D",
					back: false,
				},
			}
		},
		methods: {
			navbarEvent() {
				console.log("触发自定义方法")
			},
		}
	}
</script>
