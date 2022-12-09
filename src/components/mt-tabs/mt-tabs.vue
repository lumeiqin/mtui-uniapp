<template>
	<view class="mt-tabs" :style="{
		borderBottom: selfConfig.border,
		background: selfConfig.bg,
		height: selfConfig.height,
		'line-height': selfConfig.height
	}">
		<view class="mt-tabs-box" v-if="type === 'scroll'">
			<scroll-view id="scrollBox" class="scrollBox" :scroll-x="true" :scroll-left="scrollLeft">

				<view class="scrollBox-main">
					<block v-for="(item, index) in tabList" :key="index">
						<view class="scroll-item" :id="'itemTab_' + index" :class="{ _active: tabIndex === index }"
							:style="{
								color: tabIndex == index ? selfConfig.selectedColor : selfConfig.color,
								fontSize: tabIndex == index ?selfConfig.selectedSize: selfConfig.fontsize,
								fontWeight:  tabIndex == index ?selfConfig.selectedWeight: 400,
							 }" @click="tabToCenter(item, index)">
							{{ item[showValue.value] || item }}
							<view class="underline" :style="{ background: selfConfig.selectedColor }"
								v-if="selfConfig.underline"></view>
						</view>
					</block>
				</view>

			</scroll-view>
		</view>

		<view class="base-tab" v-else>
			<view class="base-tab-box">
				<block v-for="(item, index) in tabList" :key="index">
					<view class="base-tab-item" :class="{ _active: tabIndex === index }" :style="{
							color: tabIndex == index ? selfConfig.selectedColor : selfConfig.color,
							fontSize: tabIndex == index ?selfConfig.selectedSize: selfConfig.fontsize,
							fontWeight:  tabIndex == index ?selfConfig.selectedWeight: 400,
							 }" @click="tabClick(item, index)">
						{{ item[showValue.value] || item }}
						<view class="underline" :style="{ background: selfConfig.selectedColor }"
							v-if="selfConfig.underline"></view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'mt-tabs',
		props: {
			tabData: {
				type: Array,
				default () {
					return [{
							id: 0,
							title: "未审核",
						},
						{
							id: 1,
							title: "审核通过",
						}
					]
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			},
			type: {
				type: String,
				default: 'default'
			},
			showValue: {
				type: Object,
				default () {
					return {
						value: "title",
						key: "id"
					}
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
				scorll: {},
				scrollLeft: 0,
				tabList: [],
				tabIndex: 0,
				selfConfig: {
					border: "1px solid #e4e4e4",
					color: "#333",
					selectedColor: "#2194F2",
					fontsize: "30rpx",
					selectedSize: "30rpx",
					selectedWeight: 600,
					underline: true,
					bg: "#fff",
					height: "90rpx"
				}
			}
		},
		mounted() {
			if (this.type === "scroll") {
				this.$nextTick(() => {
					this.calcScrollPosition();
				});
			}
		},
		watch: {
			tabData(value) {
				this.initTab();
			},
			activeIndex(value) {
				this.tabIndex = value;
			},
			config(value) {
				this.selfConfig = {
					...this.selfConfig,
					...value
				}
				this.tabIndex = this.activeIndex;
				this.initTab();
			}
		},
		created() {
			this.selfConfig = {
				...this.selfConfig,
				...this.config
			}
			this.tabIndex = this.activeIndex;
			this.initTab();
		},
		methods: {
			initTab() {
				let data = [];
				if (typeof this.tabData[0] == 'string') {
					this.tabData.forEach((item, index) => {
						data.push({
							[this.showValue.value]: item,
							[this.showValue.key]: item
						});
					});
				} else {
					data = this.tabData;
				}
				this.tabList = data;
				this.$set(this.tabList)
			},

			tabClick(item, index) {
				this.tabIndex = index;
				this.$emit('click', item, index);
			},
			calcScrollPosition() {
				const query = uni.createSelectorQuery().in(this);
				query
					.select("#scrollBox")
					.boundingClientRect((res) => {
						this.scorll = res;
						this.updateTabWidth();
					})
					.exec();
			},
			updateTabWidth(index = 0) {
				if (this.tabList.length == 0) return false;

				const query = uni.createSelectorQuery().in(this);
				query
					.select("#itemTab_" + index)
					.boundingClientRect((res) => {
						this.tabList[index].infos = {
							width: res.width,
							left: res.left,
							scrollLeft: res.left - (this.tabList[index - 1] ? this.tabList[index - 1].infos.width :
								0),
						};

						if (this.tabIndex == index) {
							this.tabToCenter(this.tabIndex);
						}

						index++;
						if (this.tabList.length > index) {
							this.updateTabWidth(index);
						}
					})
					.exec();
			},
			tabToCenter(item, index) {
				if (!this.tabList[index]) return;

				let infos = this.tabList[index].infos;
				let boxLeft = this.scorll.left || 0;

				this.scrollLeft = infos.scrollLeft - boxLeft < 0 ? 0 : infos.scrollLeft - boxLeft;

				this.tabClick(item, index)
			}
		}
	};
</script>
