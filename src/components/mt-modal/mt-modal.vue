<template>
	<mt-popup ref="modal" type="center">
		<view class="mt-modal">
			<slot name="title">
				<view v-if="title" class="mt-modal_header">{{title}}</view>
			</slot>

			<slot name="content">
				<view v-if="content" class="mt-modal_content" :style="{textAlign:selfConfig.align}" v-html="content"></view>
			</slot>

			<slot name="footer">
				<view class="mt-modal_footer">
					<view v-if="showCancel" class="mt-modal_footer-left" :style="{color: selfConfig.cancelColor}"
						@click="cancelEvent">
						{{cancelText}}
					</view>

					<view class="mt-modal_footer-right" :style="{color: selfConfig.confirmColor}" @click="confirmEvent">
						{{confirmText}}
					</view>
				</view>
			</slot>
		</view>
	</mt-popup>
</template>

<script>
	export default {
		name: 'mt-modal',
		props: {
			title: {
				type: String,
				default: '标题'
			},
			content: {
				type: String,
				default: '这里是正文内容'
			},
			cancelText: {
				type: String,
				default: '取消'
			},
			confirmText: {
				type: String,
				default: '确定'
			},
			showCancel: {
				type: [Boolean, String],
				default: false
			},
			diyEvent: {
				type: [Boolean, String],
				default: false
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
					confirmColor: '#2194F2',
					cancelColor: '#333333',
					align: 'left',
				}
			}
		},
		watch: {
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
		},
		methods: {
			open() {
				this.$refs.modal.open()
			},
			close() {
				this.$refs.modal.close()
			},
			cancelEvent() {
				let _this = this;
				setTimeout(() => {
					_this.$emit('cancel')
				}, 200)
				_this.close()
			},
			confirmEvent() {
				let _this = this;

				if (_this.diyEvent) {
					_this.$emit('confirm')
					return
				}
				setTimeout(() => {
					_this.$emit('confirm')
				}, 200)
				_this.close()
			},
		}
	}
</script>
