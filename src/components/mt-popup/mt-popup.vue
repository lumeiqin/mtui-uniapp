<template>
	<view class="mt-popup" :class="{'mt-popup-center': type === 'center'}" v-show="popupShow"
		@touchmove.stop.prevent="clear">
		<view class="mt-popup-mask" @click="maskEvent"></view>
		<mtPopupTransition ref="mtPopupTransition" :show="transitionShow" :type="type">
			<slot></slot>
		</mtPopupTransition>
	</view>
</template>

<script>
	import mtPopupTransition from "./mt-popup-transition";
	export default {
		name: 'mtPopup',
		components: {
			mtPopupTransition
		},
		props: {
			show: {
				type: [Boolean, String],
				default: false
			},
			type: {
				type: String,
				default: 'bottom'
			},
			isMaskClick: {
				type: [Boolean, String],
				default: true
			}
		},
		data() {
			return {
				popupShow: false,
				transitionShow: false,
				timer: ''
			}
		},
		watch: {
			show(newvalue) {
				this.popupShow = newvalue
				this.transitionShow = newvalue
			}
		},
		created() {
			this.popupShow = this.show
			this.transitionShow = this.show
		},
		methods: {
			clear(e) {
				e.stopPropagation()
			},
			maskEvent() {
				if (this.isMaskClick) {
					this.close()
				}
			},
			open() {
				this.popupShow = true
				this.transitionShow = true
			},
			close() {
				this.transitionShow = false
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					this.popupShow = false
				}, 200)
			}
		}
	}
</script>
