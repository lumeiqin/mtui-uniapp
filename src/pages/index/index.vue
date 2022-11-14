<template>
	<view class="index">
		<!-- mt-navbar -->
		<mt-navbar title="通讯录"></mt-navbar>
		
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
		
		<mt-search></mt-search>



		<!-- <mt-box bg="#fff" border="true">
			<mt-text>
				金城留旬浃，兀兀醉歌舞。
				出门览民风，惨惨愁肺腑。
				去年夏秋旱，七月黍穟吐。
				一昔营幕来，天明但平土。
			</mt-text>
		</mt-box> -->
		
		<mt-tabbar :data="tabbarData"></mt-tabbar>
	</view>
</template>

<script>
	import result from "./index.js";
	export default {
		name: 'examples',
		data() {
			return {
				...result
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
