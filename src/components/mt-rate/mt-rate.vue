<template>
	<view class="mt-rate">
		<text class="mt-rate-item" v-for="(item,index) in count" :key="index" :class="'iconfont ' + icon" :style="{
			fontSize: size,
			marginRight: margin,
			'color': checkedVal<(index+1)? '#f1f1f1': '#fecf48'
		}" @click="checkItem(index+1)"></text>
	</view>
</template>

<script>
	export default {
		name: 'mt-rate',
		props: {
			value: {
				type: Number,
				default: 0
			},
			count: {
				type: Number,
				default: 5
			},
			icon: {
				type: String,
				default: "icon-xingxing"
			},
			size: {
				type: String,
				default: '40rpx'
			},
			margin: {
				type: String,
				default: '20rpx'
			},
			readonly: {
				type: [Boolean,String],
				default: false
			},
		},
		data() {
			return {
				checkedVal: 0,
			}
		},
		created() {
			this.checkedVal = this.value;
		},
		watch: {
			value(newvalue) {
				this.checkedVal = newvalue;
			},
		},
		methods: {
			checkItem(index) {
				if (!this.readonly) {
					this.checkedVal = index;
					this.$emit("change", this.checkedVal);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mt-rate {
		display: flex;
		justify-content: flex-start;

		&-item {
			vertical-align: middle;
		}
	}
</style>
