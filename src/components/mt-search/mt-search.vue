<template>
	<view class="mt-search" :style="{
			padding: selfConfig.padding,
			borderBottom: selfConfig.border
		}">
		<slot name="left"></slot>

		<view class="mt-search-box">
			<i :style="{
				color: selfConfig.iconColor,
				fontSize: selfConfig.iconSize
			}" class="iconfont icon-sousuo"></i>

			<input type="text" v-model="keyword" :disabled="disabled" :placeholder="selfConfig.placeholder" :style="{
				height: selfConfig.height,
				color: selfConfig.color,
				fontSize: selfConfig.fontsize,
				borderRadius: selfConfig.radius,
				background: selfConfig.background
			}" :placeholder-style="
				'color:' + selfConfig.placeholderColor + '; fontSize: ' +
				selfConfig.fontsize
			" @focus="focusFunc" @input="inputFunc" @blur="blurFunc" @click="clickFunc" />

			<view class="close" v-if="keyword.length > 0 && selfConfig.showClear" @click="clearInput">
				<i class="iconfont icon-guanbi"></i>
			</view>
		</view>

		<slot name="right"></slot>
	</view>
</template>

<script>
	export default {
		name: 'mt-search',
		props: {
			value: {
				type: String,
				default: "",
			},
			disabled: {
				type: [Boolean, String],
				default: false,
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
				selfConfig: {
					padding: "16rpx 30rpx",
					height: "64rpx",
					radius: "32rpx",
					placeholder: "请输入关键字",
					color: "#4C4D4D",
					placeholderColor: "#B1B1B1",
					fontsize: "28rpx",
					background: "#F6F6F6",
					iconColor: "#B1B1B1",
					iconSize: "36rpx",
					showClear: true,
					border: "1px solid #F4F5F8"
				},
				keyword: ""
			};
		},
		created() {
			this.keyword = this.value;
			this.selfConfig = {
				...this.selfConfig,
				...this.config
			}
		},
		watch: {
			value(newvalue, oldvalue) {
				this.keyword = newvalue;
			},
			config(newvalue) {
				this.selfConfig = {
					...this.selfConfig,
					...newvalue
				}
			}
		},
		methods: {
			focusFunc(e) {
				this.$emit("focus", e.detail.value);
			},
			blurFunc(e) {
				this.$emit("blur", e.detail.value);
			},
			inputFunc(e) {
				this.$emit("input", e.detail.value);
			},
      clickFunc(e) {
				this.$emit("click", e.detail.value);
			},
			clearInput() {
				this.keyword = '';
				this.$emit("input", this.keyword);
			},
		}
	};
</script>
