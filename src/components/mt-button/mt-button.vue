<template>
	<view style="width: 100%">
		<button v-if="name === 'default'" class="mt-button mt-button--default" :disabled="isDisabled" :loading="loading"
			@click="btnClick" :style="{
				'height': height,
					'background': color,
					'fontSize': fontsize,
					'borderRadius': radius}">
			<slot></slot>
		</button>

		<button v-else-if="name === 'hollow'" class="mt-button mt-button--hollow" :disabled="isDisabled"
			:loading="loading" @click="btnClick" :style="{
					'height': height,
					'border': noBorder? 'none': '1px solid ' + color,
					'color': color,
					'fontSize': fontsize,
					'borderRadius': radius}">
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
				type: Boolean,
				default: false,
			},
			loading: {
				type: Boolean,
				default: false,
			},
			height: {
				type: String,
				default: '42px'
			},
			noBorder: {
				type: Boolean,
				default: false,
			},
			color: {
				type: String,
				default: '#3490fc'
			},
			radius: {
				type: String,
				default: '4px'
			},
			fontsize: {
				type: String,
				default: "15px"
			},
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

<style lang="scss" scoped>
	@import "../mt-theme/mt-button.scss";
</style>
