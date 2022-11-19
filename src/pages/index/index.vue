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
					title: 'Box 容器',
					path: '/pages/box'
				}, {
					title: 'Button 按钮',
					path: '/pages/button'
				}, {
					title: 'Card 卡片',
					path: '/pages/card'
				}, {
					title: 'Form 表单',
					path: '/pages/form'
				}, {
					title: 'Grid 宫格',
					path: '/pages/grid'
				}, {
					title: 'Modal 模态框',
					path: '/pages/modal'
				}, {
					title: 'Navbar 导航栏',
					path: '/pages/navbar'
				}, {
					title: 'Popup 弹窗',
					path: '/pages/popup'
				}, {
					title: 'Rate 评分',
					path: '/pages/rate'
				}, {
					title: 'Search 搜索框',
					path: '/pages/search'
				}, {
					title: 'Step 流程图',
					path: '/pages/step'
				}, {
					title: 'Tabbar 标签栏',
					path: '/pages/tabbar'
				}, {
					title: 'Tabs 标签页',
					path: '/pages/tabs'
				}, {
					title: 'Tag 标签',
					path: '/pages/tag'
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
