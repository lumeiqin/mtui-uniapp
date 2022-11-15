<template>
	<view class="index">
		<!-- mt-navbar -->
		<mt-navbar title="通讯录"></mt-navbar>

		<view v-if="false">
			<!-- mt-tabs -->
			<mt-tabs :tabData="tabData"></mt-tabs>

			<!-- mt-box -->
			<mt-box border="true" center="true">
				金城留旬浃，兀兀醉歌舞。
			</mt-box>

			<!-- mt-button -->
			<mt-button>测试</mt-button>
			<mt-button name="hollow">测试1</mt-button>

			<!-- mt-grid -->
			<mt-grid name="title" :col="2" :data="title2"></mt-grid>
			<mt-grid></mt-grid>
			<mt-grid name="title" :data="titleDiy">
				协议资料
			</mt-grid>

			<!-- mt-search -->
			<mt-search></mt-search>

			<!-- mt-popup -->
			<mt-popup ref="popup">
				<view style="width: 100%;height: 200px;background: #fff;">
					这是模态框
				</view>
			</mt-popup>
			<mt-button @click="openModal">显示模态框</mt-button>

			<!-- mt-tag -->
			<mt-tag>生产监控</mt-tag>

			<!-- mt-form -->
			<mt-form></mt-form>
		</view>

		<!-- mt-card -->
		<mt-card :notes="notes" :title="title"></mt-card>

		<!-- mt-tabbar -->
		<mt-tabbar :data="tabbarData"></mt-tabbar>
	</view>
</template>

<script>
	import result from "./index.js";
	export default {
		name: 'examples',
		data() {
			return {
				...result,
			}
		},
		methods: {
			openModal() {
				this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
		min-height: 100vh;
		background: #fff;
	}
</style>
