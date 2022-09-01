<template>
	<view class="mt-card" :class="{ 'mt-card--disabled': disabled }"
		:hover-class="(!clickable && !link) || disabled || showSwitch ? '' : 'mt-card--hover'">

		<view class="mt-card-item" @click.stop="onClick">
			<view class="mt-card-item-box"
				:class="{ 'mt-card-item-box--right': showArrow || link, 'mt-card-item-box--column': direction === 'column' }">

				<slot name="left">
					<view class="mt-card-item-box-left" v-if="showCheck || thumb || showExtraIcon">
						<checkbox-group class="mt-card-item-box-left-check" v-if="showCheck" @change="checkboxChange">
							<checkbox :disabled="disabled" :value="checkItem.value" :checked="checkItem.checked" />
						</checkbox-group>

						<view v-if="thumb" class="mt-card-item-box-left-icon">
							<image v-if="thumbTag" :src="thumbTag" class="mt-card-item-box-left-icon-tag"
								:class="{'mt-card-item-box-left-icon-tag--sm': thumbTagSM}"></image>
							<image :src="thumb" class="mt-card-item-box-left-icon-img"
								:class="['mt-card-item-box-left-icon-img--' + thumbSize, 'mt-card-item-box-left-icon-img--'+ thumbType]" />
						</view>
						<view v-else-if="showExtraIcon" class="mt-card-item-box-left-diyicon">
							<uni-icons :color="extraIcon.color" :size="extraIcon.size" :type="extraIcon.type" />
						</view>
					</view>
				</slot>

				<slot name="middle">
					<view class="mt-card-item-box-middle"
						:class="{ 'mt-card-item-box-middle--center': thumb || showExtraIcon || showBadge || showSwitch }">
						<view v-if="title" class="mt-card-item-box-middle-title">
							<text class="mt-card-item-box-middle-title-text"
								:class="[ellipsis && ellipsis != 0 ? 'ell-' + ellipsis : '']">
								{{ title }}
							</text>
						</view>

						<view class="mt-card-item-box-middle-note"
							:class="[note.ellipsis && note.ellipsis != 0 ? 'ell-' + note.ellipsis : '']"
							v-for="(note,index) in notes" :key="index" v-if="Array.isArray(notes) && notes.length > 0">
							<image v-if='note.icon' :src="note.icon" class="mt-card-item-box-middle-note-icon" />
							<text>{{ note.noteLabel ? note.noteLabel + ': ' : '' }}</text>
							<text class="mt-card-item-box-middle-note-text">{{ note.noteText || note[note.valueKey] }}
							</text>
						</view>

						<view class="mt-card-item-box-middle-tags" v-if="tags.length > 0">
							<mt-tag v-for="(tag, index) in tags" :key="index" class="badgeItem"
								:size="tag.tagSize || 'normal'" :type="tag.tagType || 'default'">
								{{ tag.tagText }}
							</mt-tag>
						</view>
					</view>
				</slot>

				<slot name="right">
					<view v-if="rightText || showBadge || showSwitch" class="mt-card-item-box-right"
						:class="{ 'mt-card-item-box-right--initial': direction === 'column' }">
						<text v-if="rightText" class="mt-card-item-box-right-text">{{ rightText }}</text>
						<mt-tag v-if="showBadge" class="mt-card-item-box-right-tag" :type="badgeType" size="normal">
							{{ badgeText }}
						</mt-tag>
						<switch v-if="showSwitch" :disabled="disabled || showCheck || canSwitch"
							:checked="switchChecked" @change="onSwitchChange" />
					</view>
				</slot>
			</view>

			<uni-icons v-if="showArrow || link" :size="16" class="mt-card-item--arrow" color="#bbb" type="arrowright" />
		</view>

		<view class="mt-card-badge" v-if="showBottomBadge">
			<mt-tag v-for="(tag, index) in bottomBadges" :key="index" class="mt-card-badge-badgeItem" size="normal"
				:type="tag.type">{{ tag[tag.valueKey] }}
			</mt-tag>
		</view>

		<view class="mt-card-button" :class="btnGroup.length > 1? 'mt-card-button-more': 'mt-card-button-one'"
			v-if="btnGroup.length > 0">
			<mt-button v-for="(item,index) in btnGroup" :key="index" :name="item.type || 'hollow'"
				:disabled="disabled || showCheck"
				:class="btnGroup.length > 1? 'mt-card-button-more-btn': 'mt-card-button-one-btn'"
				:color="item.color || '#3490fc'" :radius="item.radius || '34px'" :noBorder="item.noBorder"
				:height="item.height || '34px'" :fontsize="item.fontsize || '14px'" @click="btnClick(item)">
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
				type: [Number],
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
					return []
					// {
					// 	tagType: "warning",
					// 	tagSize: "",
					// 	tagText: "测试"
					// }
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
				default: '' // 1
			},
			badgeType: {
				type: String,
				default: 'error'
			},

			showBottomBadge: {
				type: [Boolean, String],
				default: false
			},
			bottomBadges: {
				type: Array,
				default () {
					return []
					// {
					// 	badgeLabel: '事项大类',
					// 	type: 'primary',
					// 	badgeText: '事项大类',
					// 	valueKey: 'badgeText'
					// }
				}
			},
			btnGroup: {
				type: Array,
				default () {
					return []
					// {
					// 	name: '默认按钮',
					// 	noBorder: true,
					// 	value: '1',
					// }
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
				this.$emit("checkBoxs", e.target.value[0])
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

<style lang="scss" scoped>
	@import "../mt-theme/mt-card.scss";
</style>
