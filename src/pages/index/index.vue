<template>
	<view style="padding: 30px 20px;">
		<block v-for="(item, index) in compArr" :key="index">
			<mt-button @click="jumpPage(item.path)">{{item.title}}</mt-button>
			<br>
			<br>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				compArr: [{
					title: '基础组件',
					path: '/pages/index/base'
				}, {
					title: '表单组件',
					path: '/pages/index/form'
				}]
			}
		},
		methods: {
			jumpPage(path) {
				uni.navigateTo({
					url: path
				})
			},
		}
	}
</script>
