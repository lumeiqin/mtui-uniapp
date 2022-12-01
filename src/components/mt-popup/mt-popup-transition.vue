<template>
	<view class="mt-popup-transition" :class="isShow? type+'-show': type">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'mt-popup-transition',
		props: {
			show: {
				type: [Boolean, String],
				default: false
			},
			type: {
				type: String,
				default: 'bottom'
			}
		},
		data() {
			return {
				isShow: false
			}
		},
		watch: {
			show(newvalue) {
				this.isShow = newvalue
			}
		},
		created() {
			this.isShow = this.show
		}
	}
</script>

<style lang="scss" scoped>
	.mt-popup-transition {
		transition: all .3s;
		position: fixed;
		left: 0;
		right: 0;
		@extend %flex-center;
	}

	// center
	.center {
		transform: scale(0);
	}

	.center-show {
		transform: scale(1);
		animation: centerShow .2s ease;
	}

	@keyframes centerShow {
		0% {
			transform: scale(.5);
		}

		100% {
			transform: scale(1);
		}
	}

	// bottom
	.bottom {
		bottom: 0;
		transform: translateY(100%);
	}

	.bottom-show {
		bottom: 0;
		transform: translateY(0);
		animation: bottomShow .2s ease;
	}

	@keyframes bottomShow {
		0% {
			transform: translateY(100%);
		}

		100% {
			transform: translateY(0);
		}
	}


	// top
	.top {
		top: 0;
		transform: translateY(-100%);
	}

	.top-show {
		top: 0;
		transform: translateY(0);
		animation: topShow .2s ease;
	}

	@keyframes topShow {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(0);
		}
	}
</style>
