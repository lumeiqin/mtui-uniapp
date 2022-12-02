<template>
	<mt-popup ref="popup" type="bottom">
		<view class="select-box">
			<view class="select-box-header" @touchmove.stop.prevent catchtouchmove="true">
				<view class="select-box-header-btn" @click="_onCancel">取消</view>
        <view class="select-box-header-title" v-if="title">{{title}}</view>
				<view class="select-box-header-btn select-box-header-submit" @click="_onSubmit" v-show="noConfirm">确定
				</view>
			</view>
			<view class="select-box-body">
				<slot name="picker"></slot>
			</view>
		</view>
	</mt-popup>
</template>

<script>
	export default {
		name: "select-box",
		props: {
      title: {
				type: String,
				default: ""
			},
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
			_onCancel() {
				this.$emit("cancel")
			},
			_onSubmit() {
				this.$emit("submit")
			}
		}
	};
</script>
