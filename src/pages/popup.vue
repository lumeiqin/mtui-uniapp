<template>
	<view class="comp">
		<ry-title>
			<mt-popup ref="popup">
				<view style="width: 100%;height: 200px;background: #fff;">
					这是模态框
				</view>
			</mt-popup>
			<mt-button @click="openModal('popup')">显示模态框</mt-button>
		</ry-title>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			openModal(type) {
				this.$refs[type].open()
			},
		}
	}
</script>
