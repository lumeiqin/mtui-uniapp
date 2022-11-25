<template>
	<view>
		<mt-navbar title="Collapse" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
		<view class="comp">
			<ry-title>
				<mt-collapse title="基础用法">
					今人不见古时月，今月曾经照古人。
				</mt-collapse>
				<mt-collapse title="基础用法" open>
					今人不见古时月，今月曾经照古人。
				</mt-collapse>
			</ry-title>

			<ry-title title="禁用面板">
				<mt-collapse title="禁用面板 - 关闭状态" disabled>
					今人不见古时月，今月曾经照古人。
				</mt-collapse>

				<mt-collapse title="禁用面板 - 打开状态" disabled open>
					今人不见古时月，今月曾经照古人。
				</mt-collapse>
			</ry-title>

			<ry-title title="自定义参数">
				<mt-collapse title="自定义参数" :config="collapseConfig">
					今人不见古时月，今月曾经照古人。
				</mt-collapse>
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
				collapseConfig: {
					bg: "#b7c8da",
					height: "56px", // 标题盒子的height
					padding: "0 10px", // 标题盒子的padding
					fontSize: "18px", // 标题盒子的字体大小
					radius: "8px 8px 0 0", // 盒子的圆角
					arrow: false, // 是否显示右箭头
					titleBorder: true,
					thumb: "https://ts1.cn.mm.bing.net/th?id=OIP-C.4t6CKFcRe9zK8Kgw2uIAWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
					thumbSize: "30px" // 图片尺寸
				}
			}
		}
	}
</script>
