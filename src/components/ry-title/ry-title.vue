<template>
	<view class="product_title">
		<view>
			<image :src="'../../static/product/square.png'" mode=""></image> {{title}}
		</view>

		<view class="titleRight" v-if="type == 0">
			<slot></slot>
		</view>

		<view class="titleRight" v-else-if="type == 1">
			<text :class="current === item.id? 'act': ''" v-for="(item, index) in choseList" :key="index"
				@click="changeDate(item)">{{item.title}}</text>
		</view>

		<view class="titleRight" v-else-if="type == 2">
			<image :src="'../../static/product/left.png'" mode="" v-if="status === 'start'"></image>
			<image :src="'../../static/product/ileft.png'" mode="" v-else @click="startEvent"></image>
			<image :src="'../../static/product/right.png'" mode="" v-if="status === 'end'"></image>
			<image :src="'../../static/product/iright.png'" mode="" v-else @click="endEvent"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
			}
		},
		props: {
			title: {
				type: String,
				default: ""
			},
			type: {
				type: String | Number,
				default: 0
			},
			status: {
				type: String,
				default: ''
			},
			choseList: {
				type: Array,
				default () {
					return [{
						id: 0,
						key: 'day',
						title: '日'
					}, {
						id: 1,
						key: 'month',
						title: '月'
					}, {
						id: 2,
						key: 'year',
						title: '年'
					}]
				}
			}
		},
		methods: {
			changeDate(item) {
				this.current = item.id;
				this.$emit('change', item.key)
			},
			startEvent() {
				this.$emit("start")
			},
			endEvent() {
				this.$emit("end")
			},
		}
	}
</script>

<style lang="scss" scoped>
	.product_title {
		line-height: 60rpx;
		font-size: 30rpx;
		font-weight: 500;
		border-bottom: 1px solid #F4F5F8;
		padding: 12rpx 30rpx;
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 24rpx;

		image {
			width: 16rpx;
			height: 16rpx;
			margin-right: 18rpx;
			vertical-align: 2px;
		}

		.titleRight {
			display: flex;
			align-items: center;
			justify-content: flex-end;

			text {
				font-weight: 400;
				color: $themecolor;
				margin-left: 22rpx;
				display: inline-block;
				padding: 0 22rpx;
			}

			text.act {
				height: 46rpx;
				line-height: 46rpx;
				background: linear-gradient(138deg, #21DDF2 0%, #2194F2 100%);
				border-radius: 8rpx;
				color: #fff;
			}

			image {
				width: 40rpx;
				height: 40rpx;
				margin: 0 0 0 18rpx;
			}
		}
	}
</style>
