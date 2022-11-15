<template>
	<view class="mt-card" :class="{ 'mt-card--disabled': disabled }"
		:hover-class="(!clickable && !link) || disabled || showSwitch ? '' : 'mt-card--hover'">

		<view class="mt-card-item" @click.stop="onClick">
			<view class="itemBox"
				:class="{ 'itemBox--right': showArrow || link, 'itemBox--column': direction === 'column' }">

				<slot name="left">
					<view class="leftBox" v-if="showCheck || thumb || showExtraIcon">
						<checkbox-group class="leftBox-check" v-if="showCheck" @change="checkboxChange">
							<checkbox :disabled="disabled" :value="checkItem.value" :checked="checkItem.checked" />
						</checkbox-group>

						<view v-if="thumb" class="left_thumb">
							<image v-if="thumbTag" :src="thumbTag" class="left_thumb_tag"
								:class="{'left_thumb_tag-sm': thumbTagSM}"></image>
							<image :src="thumb" class="left_thumb_img"
								:class="['left_thumb_img-' + thumbSize, 'left_thumb_img-'+ thumbType]" />
						</view>

						<view v-else-if="showExtraIcon" class="left_diyicon">
							<uni-icons :color="extraIcon.color" :size="extraIcon.size" :type="extraIcon.type" />
						</view>
					</view>
				</slot>

				<slot name="middle">
					<view class="middleBox"
						:class="{ 'middleBox-center': thumb || showExtraIcon || showBadge || showSwitch }">
						<view v-if="title" class="middle_title">
							<text :class="[ellipsis && ellipsis != 0 ? 'ell-' + ellipsis : '']">
								{{ title }}
							</text>
						</view>

						<view v-if="Array.isArray(notes) && notes.length > 0" class="middle_note"
							:class="[note.ellipsis && note.ellipsis != 0 ? 'ell-' + note.ellipsis : '']"
							v-for="(note,index) in notes" :key="index">
							<image v-if='note.icon' :src="note.icon" />
							<text>{{ note.noteLabel ? note.noteLabel + ': ' : '' }}</text>
							<text>{{ note.noteText || note[note.valueKey] }}</text>
						</view>

						<view v-if="tags.length > 0" class="middle_tags">
							<mt-tag v-for="(tag, index) in tags" :key="index" class="badgeItem" :config="{
								color: tag.color || '#333',
								size: tag.size || '24rpx',
								lineHeight: tag.lineHeight || '24rpx',
								border: tag.border || '1px solid #CCC9C9',
								padding: tag.padding || '6rpx 10rpx',
								bg: tag.bg || '#CCC9C9',
								radius: tag.radius || '20rpx',
								scale: tag.scale || 1
							}">
								{{ tag.name }}
							</mt-tag>
						</view>
					</view>
				</slot>

				<slot name="right">
					<view v-if="rightText || showBadge || showSwitch" class="rightBox"
						:class="{ 'initial': direction === 'column' }">
						<text v-if="rightText">{{ rightText }}</text>
						<mt-tag v-if="showBadge" class="tag" :config="{
								color: '#fff',
								border: 'none',
								padding: '6rpx 12rpx',
								bg: '#dd524d',
								radius: '50%'
							}">
							{{ badgeText }}
						</mt-tag>
						<switch v-if="showSwitch" :disabled="disabled || showCheck || canSwitch"
							:checked="switchChecked" @change="onSwitchChange" />
					</view>
				</slot>
			</view>

			<uni-icons v-if="showArrow || link" :size="16" class="itemArrow" color="#bbb" type="arrowright" />
		</view>

		<view class="mt-card-badge" v-if="showBottomBadge">
			<mt-tag v-for="(tag, index) in bottomBadges" :key="index" class="badgeItem" :config="{
				color: tag.color || '#333',
				size: tag.size || '24rpx',
				lineHeight: tag.lineHeight || '24rpx',
				border: tag.border || '1px solid #CCC9C9',
				padding: tag.padding || '6rpx 10rpx',
				bg: tag.bg || '#CCC9C9',
				radius: tag.radius || '20rpx',
				scale: tag.scale || 1
			}">{{ tag[tag.valueKey] }}
			</mt-tag>
		</view>

		<view class="mt-card-button" :class="btnGroup.length > 1? 'mt-card-button-more': 'mt-card-button-one'"
			v-if="btnGroup.length > 0">
			<mt-button v-for="(item,index) in btnGroup" :key="index" :name="item.type || 'hollow'"
				:disabled="disabled || showCheck"
				:class="btnGroup.length > 1? 'mt-card-button-more-btn': 'mt-card-button-one-btn'" :config="{
					color: item.color || '#2194F2',
					radius: item.radius || '34px',
					height: item.height || '34px',
					fontsize: item.fontsize || '14px',
					noBorder: item.noBorder || false,
					shadow: item.shadow || '0px 3px 8px 0px rgba(0,0,0,0.1)'
				}" @click="btnClick(item)">
				{{ item.name }}
			</mt-button>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'mt-card',
		props: {
			direction: {
				type: String,
				default: 'row'
			},
			disabled: {
				type: [Boolean, String],
				default: false
			},
			// 点击相关参数
			clickable: {
				type: Boolean,
				default: false
			},
			link: {
				type: [Boolean, String],
				default: ""
			},
			url: {
				type: String,
				default: ''
			},
			showArrow: {
				type: [Boolean, String],
				default: false
			},
			// checkbox
			showCheck: {
				type: [Boolean, String],
				default: false
			},
			checkItem: {
				type: Object,
				default () {
					return {
						value: 'exval',
						checked: false
					}
				}
			},
			// 左侧图片
			thumb: {
				type: String,
				default: ''
			},
			thumbSize: {
				type: String,
				default: 'md'
			},
			thumbType: {
				type: String,
				default: 'circle'
			},
			thumbTag: {
				type: String,
				default: ''
			},
			thumbTagSM: {
				type: Boolean,
				default: false
			},
			showExtraIcon: {
				type: [Boolean, String],
				default: false
			},
			extraIcon: {
				type: Object,
				default () {
					return {
						type: 'contact',
						color: '#000000',
						size: 20
					};
				}
			},

			title: {
				type: String,
				default: '标题'
			},
			ellipsis: {
				type: [Number, String],
				default: 2
			},
			notes: {
				type: Array | String,
				default () {
					return []
					// {
					// 	icon: "",
					// 	noteLabel: "创建时间",
					// 	noteText: "2020-10-17 12:30:47"
					// }
				}
			},
			tags: {
				type: Array,
				default () {
					return [{
						name: "测试tag",
						color: "#2194F2",
						size: "24rpx",
						lineHeight: "24rpx",
						border: "1px solid #2194F2",
						padding: "6rpx 16rpx",
						bg: "#fff",
						radius: "20rpx",
						scale: 0.9
					}]
				}
			},

			rightText: {
				type: String,
				default: ''
			},
			showSwitch: {
				type: [Boolean, String],
				default: false
			},
			switchChecked: {
				type: [Boolean, String],
				default: false
			},
			canSwitch: {
				type: [Boolean, String],
				default: false
			},

			showBadge: {
				type: [Boolean, String],
				default: false
			},
			badgeText: {
				type: String,
				default: '1' // 1
			},

			showBottomBadge: {
				type: [Boolean, String],
				default: false
			},
			bottomBadges: {
				type: Array,
				default () {
					return [{
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
					}]
				}
			},
			btnGroup: {
				type: Array,
				default () {
					return [{
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
					}]
				}
			},
		},
		methods: {
			onClick() {
				if (!this.showCheck) {
					if (this.url !== '') {
						this.openPage();
						return;
					}
					if (this.clickable || this.link) {
						this.$emit('click');
					}
				}
			},
			onSwitchChange(e) {
				this.$emit('switchChange', e.detail);
			},
			checkboxChange(e) {
				this.$emit("checkChange", e.target.value[0])
			},
			btnClick(item) {
				this.$emit("btnEvent", {
					btn: item
				});
			},
			openPage() {
				if (['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'].indexOf(this.link) !== -1) {
					this.pageApi(this.link);
				} else {
					this.pageApi('navigateTo');
				}
			},
			pageApi(api) {
				uni[api]({
					url: this.url,
					success: res => {
						this.$emit('click', {
							data: res
						});
					},
					fail: err => {
						this.$emit('click', {
							data: err
						});
						console.error(err.errMsg);
					}
				});
			}
		}
	};
</script>
