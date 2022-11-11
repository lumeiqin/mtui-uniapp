<template>
	<view>
		<view class="mt-grid" v-if="name === 'default'">
			<view :class="'mt-grid-icon ' + 'icon-' + col" v-for="(item, index) in moduleArr" :key="index"
				@click="jumpIcon(item)">
				<image class="mt-grid-icon-img" :src="item.icon" alt="">
					<view class="mt-grid-icon-text">{{ item.menuName }}</view>
			</view>
		</view>

		<view class="mt-grid" v-else-if="name === 'title'">
			<view class="mt-grid-title" v-for="(item, index) in moduleArr" :key="index">
				<view class="mt-grid-title-text">
					<text class="mt-grid-title-text-name">{{ item.menuName }}</text>
				</view>
				<view class="mt-grid-title-box" :style="{padding: Number(col) === 2? '18px 18px 0 18px': 0}"
					v-if="item.children && item.children.length > 0">
					<view :class="'mt-grid-icon ' + 'icon-' + col" v-for="(items, indexs) in item.children"
						:key="indexs" @click="jumpIcon(items)">
						<image class="mt-grid-icon-img" :src="item.icon" alt="">
							<view class="mt-grid-icon-text">{{ item.menuName }}</view>
					</view>
				</view>
				<view class="mt-grid-title-box" v-else>
					<slot></slot>
				</view>
			</view>
		</view>
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
				type: [Number, String],
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
			}
		},
		data() {
			return {
				moduleArr: []
			};
		},
		created() {
			this.moduleArr = this.data;
		},
		watch: {
			data(newvalue) {
				this.moduleArr = newvalue;
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
