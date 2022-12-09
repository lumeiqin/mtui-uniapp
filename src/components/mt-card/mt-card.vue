<template>
	<view class="mt-card" :class="{ 'mt-card--disabled': disabled }"
		:hover-class="(!clickable && !link) || disabled || selfConfig.showSwitch ? '' : 'mt-card--hover'">

		<view class="mt-card-item" @click.stop="onClick">
			<view class="itemBox"
				:class="{ 'itemBox--right': selfConfig.showArrow || link, 'itemBox--column': selfConfig.direction === 'col' }">

				<slot name="left">
					<view class="leftBox" v-if="selfConfig.showCheck || thumb || selfConfig.showExtraIcon">
						<checkbox-group class="leftBox-check" v-if="selfConfig.showCheck" @change="checkboxChange">
							<checkbox :disabled="disabled" :value="checkItem && checkItem.value" :checked="checkItem && checkItem.checked" />
						</checkbox-group>

						<view v-if="thumb" class="left_thumb">
							<image v-if="thumbTag" :src="thumbTag" class="left_thumb_tag"
								:class="{'left_thumb_tag-sm': selfConfig.thumbTagSM}"></image>
							<image :src="thumb" class="left_thumb_img"
								:class="['left_thumb_img-' + selfConfig.thumbSize, 'left_thumb_img-'+ selfConfig.thumbType]" />
						</view>

						<view v-else-if="selfConfig.showExtraIcon" class="left_diyicon">
							<uni-icons :color="selfConfig.extraIcon.color" :size="selfConfig.extraIcon.size"
								:type="selfConfig.extraIcon.type" />
						</view>
					</view>
				</slot>

				<slot name="middle">
					<view class="middleBox"
						:class="{ 'middleBox-center': thumb || selfConfig.showExtraIcon || badgeText || selfConfig.showSwitch }">
						<view v-if="title" class="middle_title">
							<text
								:class="[selfConfig.ellipsis && selfConfig.ellipsis != 0 ? 'ell-' + selfConfig.ellipsis : '']">
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
					<view v-if="rightText || badgeText || selfConfig.showSwitch" class="rightBox"
						:class="{ 'initial': selfConfig.direction === 'col' }">
						<text v-if="rightText">{{ rightText }}</text>
						<mt-tag v-if="badgeText" class="tag" :config="{
								color: '#fff',
								border: 'none',
								padding: '6rpx 12rpx',
								bg: '#dd524d',
								radius: '50%'
							}">
							{{ badgeText }}
						</mt-tag>
						<switch v-if="selfConfig.showSwitch"
							:disabled="disabled || selfConfig.showCheck || selfConfig.canSwitch"
							:checked="switchChecked" @change="onSwitchChange" />
					</view>
				</slot>
			</view>

			<i v-if="selfConfig.showArrow || link" class="iconfont icon-danse_gengduojiantou itemArrow"></i>
		</view>

		<view class="mt-card-badge" v-if="bottomBadges && bottomBadges.length">
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
				:disabled="disabled || selfConfig.showCheck"
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
			disabled: {
				type: [Boolean, String],
				default: false
			},
			// 点击相关参数
			clickable: {
				type: [Boolean,String],
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

			// checkbox
			checkItem: {
				type: Object,
				default () {
					return {}
				}
			},
			// 左侧图片
			thumb: {
				type: String,
				default: ''
			},
			thumbTag: {
				type: String,
				default: ''
			},

			title: {
				type: String,
				default: '标题'
			},
			notes: {
				type: Array,
				default () {
					return []
				}
			},
			tags: {
				type: Array,
				default () {
					return []
				}
			},

			rightText: {
				type: String,
				default: ''
			},
			switchChecked: {
				type: [Boolean, String],
				default: false
			},
			badgeText: {
				type: String,
				default: ''
			},
			bottomBadges: {
				type: Array,
				default () {
					return []
				}
			},
			btnGroup: {
				type: Array,
				default () {
					return []
				}
			},
			config: {
				type: Object,
				default () {
					return {

					}
				}
			}
		},
		data() {
			return {
				selfConfig: {
					direction: 'row',
					thumbSize: 'md',
					thumbType: 'circle',
					thumbTagSM: false,
					showExtraIcon: false,
					extraIcon: {
						type: 'contact',
						color: '#000000',
						size: 20
					},
					ellipsis: 2,
					showArrow: false,
					showCheck: false,
					showSwitch: false,
					canSwitch: false
				}
			}
		},
		watch: {
			config(value) {
				this.selfConfig = {
					...this.selfConfig,
					...value
				}
			}
		},
		created() {
			this.selfConfig = {
				...this.selfConfig,
				...this.config
			}
		},
		methods: {
			onClick() {
				if (!this.selfConfig.showCheck) {
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
				this.$emit("checkChange", e.target.value)
			},
			btnClick(item) {
				this.$emit("btnClick", {
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
