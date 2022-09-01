<template>
	<uni-popup ref="popup" type="bottom">
		<view class="select-box">
			<view class="select-box-header" @touchmove.stop.prevent catchtouchmove="true">
				<view class="select-box-header-btn" @click="_onCancel">取消</view>
				<view class="select-box-header-btn select-box-header-submit" @click="_onSubmit" v-show="noConfirm">确定
				</view>
			</view>
			<view class="select-box-body">
				<slot name="picker"></slot>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	export default {
		name: "select-box",
		props: {
			noConfirm: {
				type: Boolean,
				default: true
			},
		},
		methods: {
			open() {
				this.$refs.popup.open();
			},
			close() {
				this.$refs.popup.close();
			},
			_onCancel(from) {
				this.$emit("cancel", from)
			},
			_onSubmit(e) {
				this.$emit("submit", e)
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "./css/index.scss";
</style>
