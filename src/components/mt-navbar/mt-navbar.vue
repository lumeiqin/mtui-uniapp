<template>
	<view>
		<view class="mt-navbar" :class="{'mt-navbar--fixed': fixed}" :style="{
					background: selfConfig.nobg? 'transparent': selfConfig.bg,
					backgroundSize: '100%',
					paddingTop: statusBarHeight + 'px'}">

			<view class="mt-navbar-header"
				:style="{ height: customBar, color: selfConfig.color }">

				<slot name="left">
					<view class="backBtn" @click="onBackPage" v-if="selfConfig.back">
						<i class="iconfont icon-31fanhui1"></i>
					</view>
				</slot>

				<slot name="middle">
					<view class="title">{{ headTitle }}</view>
				</slot>

				<slot name="right">
					<view class="rightBtn"></view>
				</slot>
			</view>
		</view>

		<view :style="{paddingTop: statusBarHeight + 'px', height: customBar, boxSizing: 'content-box'}"
			v-if="!selfConfig.nobg" v-show="fixed">
		</view>
	</view>
</template>

<script>
	export default {
		name: "mt-navbar",
		props: {
			fixed: {
				type: [Boolean, String],
				default: false
			},
			emit: {
				type: [Boolean, String],
				default: false
			},
			title: {
				type: String,
				default: ''
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
				headTitle: '',
				statusBarHeight: 0,
				customBar: 0,

				selfConfig: {
					nobg: false,
					bg: "#2194F2",
					back: true,
					color: "#fff"
				}
			};
		},
		watch: {
			title(newValue, oldValue) {
				this.headTitle = newValue;
			},
			config(value) {
				this.selfConfig = {
					...this.selfConfig,
					...value
				}
			}
		},
		created() {
			this.selfConfig = {
				...this.selfConfig,
				...this.config
			}
			this.headTitle = this.title;


			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];

			// #ifdef MP-WEIXIN
			let info = uni.getMenuButtonBoundingClientRect();
			this.customBar = info.height + (info.top - this.statusBarHeight) * 2 + 'px';
			// #endif

			// #ifdef H5 || APP-PLUS
			this.customBar = '45px';
			// #endif
		},
		methods: {
			onBackPage() {
				if (this.emit) {
					this.$emit('backClick');
					return
				}
				uni.navigateBack({
					delta: 1
				})
			}
		}
	};
</script>
