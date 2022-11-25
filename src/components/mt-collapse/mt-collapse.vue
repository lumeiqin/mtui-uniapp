<template>
  <view class="mt-collapse"
        :class="{
            'mt-collapse_disabled': disabled
        }"
        :style="{
            borderRadius: selfConfig.radius,
            background: selfConfig.bg
        }">

    <view class="mt-collapse_title"
          :class="{
            'title_after': selfConfig.titleBorder
          }"
          :style="{
            padding: selfConfig.padding,
            height: selfConfig.height,
            fontSize: selfConfig.fontSize
    }" @click="onClick(!isOpen)">

      <slot name="title">
        <view class="title_left">
          <image v-if="selfConfig.thumb"
                 :style="{
                    width: selfConfig.thumbSize,
                    height: selfConfig.thumbSize
                  }"
                 :src="selfConfig.thumb"/>
          <text>{{ title }}</text>
        </view>
      </slot>

      <view v-if="selfConfig.arrow"
            :class="{ 'title_right_active': isOpen }"
            class="title_right">
        <i class="iconfont icon-xiala1"></i>
      </view>
    </view>

    <view class="mt-collapse_wrap" :class="{'mt-collapse_wrap_active': isOpen}">
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'mt-collapse',
  props: {
    open: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isOpen: false,
      selfConfig: {
        bg: '#fff', // 盒子的背景色
        height: "48px", // 标题盒子的height
        padding: "0 12px", // 标题盒子的padding
        fontSize: "15px", // 标题盒子的字体大小
        radius: "4px 4px 0 0", // 盒子的圆角
        arrow: true, // 是否显示右箭头
        titleBorder: false,
        thumb: "",
        thumbSize: "20px" // 图片尺寸
      }
    }
  },
  watch: {
    open(newvalue) {
      this.isOpen = newvalue
      this.onClick(newvalue)
    },
    config(newvalue) {
      this.selfConfig = {
        ...this.selfConfig,
        ...newvalue
      }
    }
  },
  created() {
    this.isOpen = this.open;
    this.selfConfig = {
      ...this.selfConfig,
      ...this.config
    }
  },
  methods: {
    onClick(isOpen) {
      if (this.disabled) return
      this.isOpen = isOpen
    },
  }
}
</script>
