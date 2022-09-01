<template>
	<view class="app">
		<div style="width: 100%">
			<mt-button @click="btnEvent('default')">普通按钮</mt-button>
			<mt-button name="hollow" @click="btnEvent('hollow')">镂空按钮</mt-button>
		</div>
		<mt-box bg="#e7f1f5" border="true">
			<mt-text>
				金城留旬浃，兀兀醉歌舞。
				出门览民风，惨惨愁肺腑。
				去年夏秋旱，七月黍穟吐。
				一昔营幕来，天明但平土。
			</mt-text>
		</mt-box>
		<br>
		<mt-box bg="#e7f1f5" border="true">
			<mt-text type="diy" fw="900" color="red" lh="50px" size="4.8vw">
				金城留旬浃，兀兀醉歌舞。
				出门览民风，惨惨愁肺腑。
				去年夏秋旱，七月黍穟吐。
				一昔营幕来，天明但平土。
			</mt-text>
		</mt-box>
		<br>
		<mt-box bg="#e7f1f5" border="true">
			<mt-text type="title">
				金城留旬浃，兀兀醉歌舞。
				出门览民风，惨惨愁肺腑。
				去年夏秋旱，七月黍穟吐。
				一昔营幕来，天明但平土。
			</mt-text>
		</mt-box>
		<br>
		<mt-box bg="#e7f1f5" border="true">
			<mt-text type="subtitle">
				金城留旬浃，兀兀醉歌舞。
				出门览民风，惨惨愁肺腑。
				去年夏秋旱，七月黍穟吐。
				一昔营幕来，天明但平土。
			</mt-text>
		</mt-box>
		<br>
		<mt-box bg="#e7f1f5" border="true">
			<mt-text type="paragraph">
				金城留旬浃，兀兀醉歌舞。
				出门览民风，惨惨愁肺腑。
				去年夏秋旱，七月黍穟吐。
				一昔营幕来，天明但平土。
			</mt-text>
		</mt-box>
	</view>
</template>

<script>
	export default {
		name: 'examples',
		methods: {
			btnEvent(type) {
				uni.showToast({
					title: type
				})
			}
		}
	}
</script>
