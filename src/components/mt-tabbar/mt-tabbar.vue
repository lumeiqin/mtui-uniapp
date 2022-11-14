<template>
	<view>
		<view class="mt-tabbar" :style="{
					background: selfConfig.bg,
					height: selfConfig.height}">


			<view class="mt-tabbar-item" :style="{ 
				color: item.isactive === 1? selfConfig.selectedColor: selfConfig.color }" v-for="(item, index) in data"
				:key="index" @click="jumpPage(item)">

				<uni-icons :style="{margin: item.spaceing}"
					:color="item.isactive === 1? selfConfig.selectedColor: selfConfig.color" :type="item.icontype"
					:size="item.iconWidth || 24" v-if="item.icontype"></uni-icons>

				<image v-else :style="{
					width: item.iconWidth || '24px',
					height: item.iconHeight || '24px',
					margin: item.spaceing || 0
				}" :src="item.isactive === 1?item.selectedIcon: item.icon"></image>


				<text :style="{'font-size': selfConfig.fontsize}" v-if="item.text">{{item.text}}</text>

			</view>
		</view>
		<view :style="{ height: selfConfig.height}"></view>
	</view>
</template>

<script>
	export default {
		name: "mt-tabbar",
		props: {
			emit: {
				type: [Boolean, String],
				default: false
			},
			config: {
				type: Object,
				default () {
					return {}
				}
			},
			data: {
				type: Array,
				default () {
					return []
				}
			},
		},
		data() {
			return {
				selfConfig: {
					bg: "#fff",
					height: "128rpx",
					color: "#333",
					selectedColor: "#2194F2",
					fontsize: "24rpx"
				}
			}
		},
		created() {
			this.selfConfig = {
				...this.selfConfig,
				...this.config
			}
		},
		watch: {
			config(value) {
				this.selfConfig = {
					...this.selfConfig,
					...value
				}
			}
		},
		methods: {
			jumpPage(item) {
				if (this.emit) {
					this.$emit("click", item)
					return
				}
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
