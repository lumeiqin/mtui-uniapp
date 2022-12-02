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
					title: '基础',
					path: '/pages/index/base'
				}, {
					title: '表单',
					path: '/pages/index/form'
				}, {
					title: '弹出层',
					path: '/pages/index/popup'
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
