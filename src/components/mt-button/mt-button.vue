<template>
	<view style="width: 100%">
		<button v-if="name === 'default'" class="mt-button mt-button--default" :disabled="isDisabled" :loading="loading"
			@click="btnClick" :style="{
				'height': selfConfig.height,
					'background': selfConfig.color,
					'fontSize': selfConfig.fontsize,
					'borderRadius': selfConfig.radius,
					'boxShadow': selfConfig.shadow}">
			<slot></slot>
		</button>
		<button v-else-if="name === 'hollow'" class="mt-button mt-button--hollow" :disabled="isDisabled"
			:loading="loading" @click="btnClick" :style="{
					'height': selfConfig.height,
					'border': selfConfig.noBorder? 'none': '1px solid ' + selfConfig.color,
					'color': selfConfig.color,
					'fontSize': selfConfig.fontsize,
					'borderRadius': selfConfig.radius,
					'boxShadow': selfConfig.shadow}">
			<slot></slot>
		</button>
	</view>
</template>

<script>
	export default {
		name: 'mt-button',
		props: {
			name: {
				type: String,
				default: "default"
			},
			disabled: {
				type: [Boolean, String],
				default: false,
			},
			loading: {
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
					radius: '8rpx',
					height: '84rpx',
					color: '#2194F2',
					fontsize: '30rpx',
					shadow: '0px 3px 8px 0px rgba(0,0,0,0.1)',
					noBorder: false,
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
		computed: {
			isDisabled() {
				return this.disabled || this.loading
			}
		},
		methods: {
			btnClick() {
				this.$emit("click");
			}
		}
	};
</script>
