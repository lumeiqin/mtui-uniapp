<template>
	<view>
		<view class="mt-tabbar" :style="{
					background: bg,
					height: height}">


			<view class="mt-tabbar-item" :style="{ 
				color: item.isactive === 1? selectedColor: color }" v-for="(item, index) in data" :key="index"
				@click="jumpPage(item)">

				<uni-icons :style="{margin: item.spaceing}" :color="item.isactive === 1? selectedColor: color"
					:type="item.icontype" :size="item.iconWidth || 24" v-if="item.icontype"></uni-icons>

				<image v-else :style="{
					width: item.iconWidth || '24px',
					height: item.iconHeight || '24px',
					margin: item.spaceing || 0
				}" :src="item.isactive === 1?item.selectedIcon: item.icon"></image>


				<text :style="{'font-size': fontSize}" v-if="item.text">{{item.text}}</text>

			</view>


		</view>
		<view :style="{ height: height}"></view>
	</view>
</template>

<script>
	export default {
		name: "mt-tabbar",
		props: {
			bg: {
				type: String,
				default: "#fff"
			},
			height: {
				type: String,
				default: "64px"
			},
			color: {
				type: String,
				default: "#333"
			},
			selectedColor: {
				type: String,
				default: "#0762ed"
			},
			fontSize: {
				type: String,
				default: "12px"
			},
			data: {
				type: Array,
				default () {
					return []
				}
			},
		},
		methods: {
			jumpPage(item) {
				if (item.path) {
					uni.navigateTo({
						url: item.path
					})
				} else {
					uni.showToast({
						title: "路径有误",
						icon: "none"
					})
				}
			}
		}
	};
</script>
