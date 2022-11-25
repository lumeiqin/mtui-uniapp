<template>
	<view>
		<mt-navbar title="Grid" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
		<view class="comp">
			<ry-title title="基础用法">
				<mt-grid></mt-grid>
			</ry-title>

			<ry-title title="name=title 基础用法">
				<mt-grid name="title" :data="titleData" @click="gridEvent"></mt-grid>
			</ry-title>


			<ry-title title="5列">
				<mt-grid col="5"></mt-grid>
			</ry-title>
			<ry-title title="3列">
				<mt-grid col="3"></mt-grid>
			</ry-title>
			<ry-title title="2列">
				<mt-grid col="2"></mt-grid>
			</ry-title>

			<ry-title title="diy内容">
				<mt-grid name="title" :data="titleDiy">
					协议资料
				</mt-grid>
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
				titleData: [{
					icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
					menuName: "测试模块2",
					children: [{
						icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
						menuName: "测试模块",
						url: ""
					}, {
						icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
						menuName: "diy模块",
						type: "diy",
						url: ""
					}, {
						icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
						menuName: "diy模块",
						type: "diy",
						url: ""
					}, {
						icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
						menuName: "diy模块",
						type: "diy",
						url: ""
					}],
					url: ""
				}],
				titleDiy: [{
					icon: "https://t11.baidu.com/it/u=2446819114,1498509809&fm=58",
					menuName: "测试模块",
					type: "diy",
					url: ""
				}],
			}
		},
		methods: {
			gridEvent(item) {
				console.log("当前点击的模块：" + item)
			},
		}
	}
</script>
