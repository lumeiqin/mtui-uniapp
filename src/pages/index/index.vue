<template>
	<view class="index">
		<mt-box bg="#fff" border="true">
			<mt-text>
				金城留旬浃，兀兀醉歌舞。
				出门览民风，惨惨愁肺腑。
				去年夏秋旱，七月黍穟吐。
				一昔营幕来，天明但平土。
			</mt-text>
			<div style="width: 100%; padding: 20px 0">
				<mt-button @click="btnEvent('default')">普通按钮</mt-button>
				<mt-button name="hollow" @click="btnEvent('hollow')">镂空按钮</mt-button>
			</div>
			<mt-tag type="primary">type: primary</mt-tag><br>
			<mt-tag type="primary" :inverted="true">type: primary</mt-tag><br>
			<mt-tag type="primary" :noBorder="false" :inverted="true">type: primary</mt-tag><br>
			<mt-tag type="primary" size="small">type: primary</mt-tag><br>
			<br>
			<br>
		</mt-box>

		<mt-card :notes="notes" :title="title" :tags="[]" :btnGroup="btnGroup1"></mt-card>


		<mt-card :showExtraIcon="true" :extraIcon="extraIcon" :notes="notes" :title="title" :tags="[]" :btnGroup="[]">
		</mt-card>

		<mt-card :thumb="thumb" :thumbTag="thumbTag" thumbSize="lg" thumbType="square" :ellipsis="1" :title="title"
			:btnGroup="btnGroup">
		</mt-card>

		<mt-card :thumb="thumb" :rightText="rightText" :showBottomBadge="true" :bottomBadges="bottomBadges" :tags="[]"
			:title="title" :btnGroup="[]">
		</mt-card>

		<mt-card :showCheck="true" :checkItem="checkItem" :showArrow="true" :title="title" :btnGroup="[]" :tags="[]"
			@click="clickCard">
		</mt-card>

		<mt-card :title="title" :showSwitch="true" :switchChecked="true" :canSwitch="true" :clickable="true"
			:btnGroup="[]" :tags="[]" @click="clickCard">
		</mt-card>

		<mt-card>
			<template slot="middle">
				我是自定义卡片哦，啥参数也没有
			</template>
		</mt-card>


	</view>
</template>

<script>
	export default {
		name: 'examples',
		data() {
			return {

				title: "江苏省无锡市滨湖区具区路与缘溪道交汇处融创茂内二楼",
				thumb: "https://s.cn.bing.net/th?id=OIP-C.cT1RA85bYHiJ0erDaDQpiwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
				thumbTag: "data:image/png;base64,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",
				extraIcon: {
					type: 'staff-filled',
					color: '#000000',
					size: 40
				},
				checkItem: {
					value: 'exval',
					checked: true
				},
				rightText: "右侧文字",
				notes: [{
					noteLabel: '使用现状',
					noteText: '闲置',
					valueKey: 'noteText',
					icon: ""
				}, {
					noteLabel: '建筑名称',
					noteText: '市网格中心办公大楼',
					valueKey: 'noteText',
					icon: ""
				}, {
					noteLabel: '建筑地址',
					noteText: '江苏省无锡市梁溪区北大街道北创科技大厦',
					valueKey: 'noteText',
					icon: ""
				}],
				bottomBadges: [{
					badgeLabel: '纠纷调解',
					type: 'primary',
					badgeText: '家庭纠纷',
					valueKey: 'badgeText'
				}, {
					badgeLabel: '家庭纠纷',
					type: 'primary',
					badgeText: '家庭纠纷',
					valueKey: 'badgeText'
				}],
				btnGroup: [{
					name: '删除',
					color: '#ff3b00',
					noBorder: true,
					value: '1',
				}],
				btnGroup1: [{
					name: '删除',
					color: '#ff3b00',
					value: '1',
				}, {
					name: '常住',
					value: '2',
				}]
			}
		},
		methods: {
			btnEvent(type) {
				uni.showToast({
					title: type
				})
			},
			clickCard() {
				uni.showToast({
					title: "当前卡片会触发点击事件哦",
					icon: "none"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
		min-height: 100vh;
		background: #f5f5f5;
	}
</style>
