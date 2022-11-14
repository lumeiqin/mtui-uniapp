<template>
	<view class="mt-step">
		<view class="process_box">
			<view class="dot"></view>
			<view class="time">{{time}}</view>

			<view class="mainBox">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'mt-step',
		props: {
			time: {
				type: String,
				default: "2022-10-10"
			}
		}
	}
</script>
