<template>
	<view>
		<mt-navbar fixed title="Card" emit="true" :config="pagenav" @backClick="baseClick"></mt-navbar>
		<view class="comp">
			<ry-title title="基础用法">
				<mt-card :title="title" :notes="noteArr"></mt-card>
			</ry-title>

			<ry-title title="图文卡片 + 显示小标签">
				<mt-card :title="title" :notes="noteArr" :tags="tagArr" :thumb="item.thumb" :config="item.config"
					:clickable="true" @click="cardEvent(item)" v-for="(item, index) in imgCardList" :key="index">
				</mt-card>
			</ry-title>

			<ry-title title="显示checkbox多选框 + 显示大标签">
				<mt-card :title="title" :notes="noteArr" :bottomBadges="bottomBadgesArr" :config="item.config"
					:checkItem="item.checkItem" @checkChange="checkChange" v-for="(item, index) in checkCardList"
					:key="index"></mt-card>
			</ry-title>

			<ry-title title="显示右侧开关 + 箭头">
				<mt-card :title="title" :notes="noteArr" :config="item.config"
					@switchChange="switchChange($event, item)" v-for="(item, index) in switchCardList" :key="index">
				</mt-card>
			</ry-title>

			<ry-title title="显示右侧文字 + 单按钮">
				<mt-card :title="title" :notes="noteArr" :btnGroup="oneButtonArr" rightText="右侧文字"></mt-card>
			</ry-title>

			<ry-title title="显示右侧标签 + 多按钮">
				<mt-card :title="title" :notes="noteArr" :btnGroup="moreButtonArr" badgeText="2" @btnClick="btnEvent">
				</mt-card>
			</ry-title>

			<ry-title title="禁用模式">
				<mt-card :title="title" :notes="noteArr" :btnGroup="moreButtonArr" badgeText="2" disabled></mt-card>
			</ry-title>
		</view>
	</view>
</template>

<script>
	import common from "../../common/common.js";
	export default {
		mixins: [common],
		data() {
			return {
				title: "江苏省无锡市滨湖区具区路与缘溪道交汇处融创茂",
				// notes
				noteArr: [{
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
				// tags
				tagArr: [{
					name: "测试tag",
					color: "#2194F2",
					size: "24rpx",
					lineHeight: "24rpx",
					border: "1px solid #2194F2",
					padding: "6rpx 16rpx",
					bg: "#fff",
					radius: "20rpx",
					scale: 0.9
				}],
				// btnGroup
				oneButtonArr: [{
					name: '删除', // 按钮名字
					value: 'delete', // 按钮标识
					color: '#2194F2', // 按钮颜色
					radius: '30px', // 按钮圆角
					height: '30px', // 按钮高度
					fontsize: '14px', // 按钮字体大小
					noBorder: true, // 是否无边框（type=hollow）
					shadow: 'none' // 按钮阴影
				}],
				moreButtonArr: [{
					type: 'default', // 按钮类型
					name: '详情', // 按钮名字
					value: 'delete', // 按钮标识
					color: '#2194F2', // 按钮颜色
					radius: '34px', // 按钮圆角
					height: '34px', // 按钮高度
					fontsize: '14px', // 按钮字体大小
					noBorder: false, // 是否无边框（type=hollow）
					shadow: '0px 3px 8px 0px rgba(0,0,0,0.1)' // 按钮阴影
				}, {
					name: '删除', // 按钮名字
					value: 'delete', // 按钮标识
					color: '#2194F2', // 按钮颜色
					radius: '34px', // 按钮圆角
					height: '34px', // 按钮高度
					fontsize: '14px', // 按钮字体大小
					noBorder: false, // 是否无边框（type=hollow）
					shadow: '0px 3px 8px 0px rgba(0,0,0,0.1)' // 按钮阴影
				}],
				// bottomBadges
				bottomBadgesArr: [{
					badgeLabel: '事项大类123',
					badgeText: '事项大类',
					valueKey: 'badgeLabel',

					color: "#f0ad4e",
					size: "24rpx",
					lineHeight: "24rpx",
					border: "1px solid #f0ad4e",
					padding: "6rpx 16rpx",
					bg: "transparent",
					radius: "20rpx"
				}],
				// 图文卡片 + 显示小标签
				imgCardList: [{
					config: {
						thumbType: 'square',
						thumbSize: 'lg'
					},
					thumb: 'http://www.gaoimg.com/uploads/allimg/221023/1-221023114252925.jpg',
				}],
				// 显示checkbox多选框 + 显示大标签
				checkCardList: [{
					config: {
						showCheck: true,
						ellipsis: 1
					},
					checkItem: {
						value: '1',
						checked: false
					}
				}],
				// 显示右侧开关 + 箭头
				switchCardList: [{
					config: {
						showArrow: true,
						showSwitch: true
					}
				}],
			}
		},
		methods: {
			cardEvent(value) {
				console.log(value)
			},
			checkChange(value) {
				console.log(value)
			},
			switchChange(e, item) {
				console.log(e, item)
			},
			btnEvent(value) {
				console.log(value)
			},
		}
	}
</script>
