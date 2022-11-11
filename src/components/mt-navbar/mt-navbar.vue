<template>
	<view>
		<view class="mt-navbar" :class="{'mt-navbar--fixed': fixed}" :style="{
					background: nobg? 'transparent': bg,
					backgroundSize: '100%',
					paddingTop: statusBarHeight + 'px'}">

			<view class="mt-navbar-header" :style="{ height: customBar, color: nobg? '#333': '#fff' }">

				<slot name="left">
					<view class="backBtn" @click="onBackPage">
						<i class="iconfont icon-31fanhui1" v-if="back"></i>
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
		<view :style="{paddingTop: statusBarHeight + 'px', height: customBar, boxSizing: 'content-box'}" v-if="!nobg"
			v-show="fixed">
		</view>
	</view>
</template>

<script>
	export default {
		name: "mt-navbar",
		props: {
			fixed: {
				type: Boolean,
				default: false
			},
			back: {
				type: Boolean,
				default: true
			},
			emit: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: ''
			},
			nobg: {
				type: Boolean,
				default: false
			},
			bg: {
				type: String,
				default: "#0762ed"
			}
		},
		data() {
			return {
				headTitle: '',
				statusBarHeight: 0,
				customBar: 0
			};
		},
		created() {
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
		watch: {
			title(newValue, oldValue) {
				this.headTitle = newValue;
			}
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
