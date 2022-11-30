<template>
	<view>
		<mt-navbar title="Popup" emit="true" :config="pagenav" @backClick="baseClick"></mt-navbar>
		<view class="comp">
			<ry-title>
				<mt-popup ref="popup">
					<view style="width: 100%;height: 200px;background: #fff;">
						bottom
					</view>
				</mt-popup>
				<mt-button @click="openModal('popup')">显示底部模态框</mt-button>
			</ry-title>


			<ry-title title="type: center">
				<mt-popup ref="popup1" type="center">
					<view style="width: 100%;height: 200px;background: #fff;">
						center
					</view>
				</mt-popup>
				<mt-button @click="openModal('popup1')">显示中间模态框</mt-button>
			</ry-title>

			<ry-title title="type: top">
				<mt-popup ref="popup2" type="top">
					<view style="width: 100%;height: 200px;background: #fff;">
						center
					</view>
				</mt-popup>
				<mt-button @click="openModal('popup2')">显示顶部模态框</mt-button>
			</ry-title>
		</view>
	</view>
</template>

<script>
	import common from "../../common/common.js";
	export default {
		mixins: [common],
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
