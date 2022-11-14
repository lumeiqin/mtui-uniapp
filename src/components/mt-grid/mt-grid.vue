<template>
	<view class="mt-grid">
		<block v-if="name === 'default'">
			<view class="grid_default" :class="'icon-' + col" v-for="(item, index) in moduleArr" :key="index"
				@click="jumpIcon(item)">
				<image
					:style="{padding: selfConfig.iconPadding, width: selfConfig.iconSize, height: selfConfig.iconSize}"
					:src="item.icon" alt="">
					<view :style="{color: selfConfig.color, fontSize: selfConfig.fontsize}">{{ item.menuName }}</view>
			</view>
		</block>



		<block v-else-if="name === 'title'">
			<view class="grid_title" v-for="(item, index) in moduleArr" :key="index">
				<view class="grid_title_box">
					<text>{{ item.menuName }}</text>
				</view>

				<view class="grid_title_main"
					:style="{padding: Number(col) === 2? '36rpx 36rpx 2rpx 36rpx': '36rpx 0 2rpx 0'}"
					v-if="item.children && item.children.length > 0">

					<view class="grid_default" :class="'icon-' + col" v-for="(items, indexs) in item.children"
						:key="indexs" @click="jumpIcon(items)">
						<image
							:style="{padding: selfConfig.iconPadding, width: selfConfig.iconSize, height: selfConfig.iconSize}"
							:src="item.icon" alt="">
							<view :style="{color: selfConfig.color, fontSize: selfConfig.fontsize}">{{ item.menuName }}
							</view>
					</view>
				</view>

				<view class="grid_title_file" v-else>
					<slot></slot>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'mt-grid',
		props: {
			name: {
				type: String,
				default: "default"
			},
			col: {
				type: [String, Number],
				default: 4
			},
			data: {
				type: Array,
				default () {
					return [{
						icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
						menuName: "测试模块",
						url: ""
					}, {
						icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
						menuName: "测试模块",
						url: ""
					}, {
						icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
						menuName: "测试模块",
						url: ""
					}, {
						icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
						menuName: "测试模块",
						url: ""
					}, {
						icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
						menuName: "测试模块",
						url: ""
					}]
				}
			},
			config: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				moduleArr: [],
				selfConfig: {
					iconSize: "",
					iconPadding: "0 0 14rpx 0",
					color: "#424242",
					fontsize: "24rpx",
				}
			};
		},
		created() {
			this.moduleArr = this.data;
			this.selfConfig = {
				...this.selfConfig,
				...this.config
			}
		},
		watch: {
			data(newvalue) {
				this.moduleArr = newvalue;
			},
			config(value) {
				this.selfConfig = {
					...this.selfConfig,
					...value
				}
			}
		},
		methods: {
			jumpIcon(item) {
				if (item.type === "diy") {
					this.$emit("click", item)
					return
				}
				if (!item.url) {
					uni.showToast({
						title: "暂未开放"
					})
					return
				}
				uni.navigateTo({
					url: item.url
				})
			}
		}
	};
</script>
