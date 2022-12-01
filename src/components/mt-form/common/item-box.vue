<template>
  <view v-show="!showItem.hide" :class="{
		'item-textarea': showItem.type == 'textarea',
		'item-code': showItem.type == 'code',
		'item-picker': showItem.type == 'radio',
		'item-box': showItem.type != 'textarea',

		error: showItem.check,
		colStyle: showItem.styleType == 'col' }">
    <view :class="{
			'item-textarea-icon': showItem.type == 'textarea',
			'item-box-icon': showItem.type != 'textarea'}" v-if="showItem.icon">
      <image :src="showItem.icon"></image>
    </view>

    <slot name="key">
      <view :class="{
					'item-textarea-key': showItem.type == 'textarea',
					'item-box-key': showItem.type != 'textarea',

					isvalidate: showItem.validate && !showItem.only && showItem.isEdit,
					isonlyshow: !showItem.isEdit}">
        {{ showItem.text }}
      </view>
    </slot>

    <view :class="{
				'item-textarea-value': showItem.type == 'textarea',
				'item-box-value': showItem.type != 'textarea',
				'item-code-value': showItem.type == 'code',

				isdetailshow: showItem.detailshow,
				textareaNocount: showItem.type == 'textarea' && !showCount}">
      <slot name="value"></slot>

      <view :class="{
					'item-textarea-value-count': showItem.type == 'textarea',
					'item-box-value-count': showItem.type != 'textarea'}" v-if="showCount && showItem.isEdit">
        {{ showItem.valueShow && showItem.valueShow.length || 0 }}/{{ showItem.maxlength }}
      </view>

      <view class="item-box-value-image">
        <i class="iconfont icon-xiala1"
           v-if="(showItem.type == 'multiChoose' ||
					showItem.type == 'multiCustom' ||
					showItem.type == 'multiSelector' ||
					showItem.type == 'selector') && showItem.isEdit"></i>
        <i class="iconfont icon-danse_gengduojiantou" v-else-if="showItem.type == 'click'"></i>
        <i class="iconfont icon-dingwei" v-else-if="showItem.type == 'location' && showItem.isEdit"></i>
        <i class="iconfont icon-calendar-v2-full" v-else-if="showItem.type == 'date' && showItem.isEdit"></i>
      </view>
    </view>
  </view>
</template>

<script>
import mixin from "./js/mixin.js";

export default {
  name: "item-box",
  mixins: [mixin]
};
</script>
