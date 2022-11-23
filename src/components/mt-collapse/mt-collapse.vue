<template>
  <view class="mt-collapse" :style="{
        borderBottom: selfConfig.border,
    }">
    <view class="mt-collapse_title"
          :class="{
            'mt-collapse_disabled': disabled
          }"
          :style="{
            height: selfConfig.height,
            borderRadius: selfConfig.radius
    }" @click="openBox">
      {{ title }}
      <!--      <view class="mt-collapse__title-wrap">-->
      <!--        <slot name="title">-->
      <!--          <view class="mt-collapse__title-box" :class="{'is-disabled':disabled}">-->
      <!--            <image v-if="thumb" :src="thumb" class="mt-collapse__title-img"/>-->
      <!--            <text class="mt-collapse__title-text">{{ title }}</text>-->
      <!--          </view>-->
      <!--        </slot>-->
      <!--      </view>-->
      <!--      <view v-if="showArrow"-->
      <!--            :class="{ 'mt-collapse__title-arrow-active': isOpen, 'mt-collapse&#45;&#45;animation': showAnimation === true }"-->
      <!--            class="mt-collapse__title-arrow">-->
      <!--        <uni-icons :color="disabled?'#ddd':'#bbb'" size="14" type="bottom" />-->
      <!--      </view>-->
    </view>

    <view class="mt-collapse_wrap" :class="{showWrap: isOpen}">
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
      isOpen: true,
      selfConfig: {
        height: "40px",
        radius: "4px 4px 0 0",
        border: "1px solid #ebeef5",
        arrow: true
      }
    }
  },
  watch: {
    open(newvalue) {
      this.isOpen = newvalue
    },
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
    openBox() {
      if (this.disabled) return
      this.isOpen = !this.isOpen
    },
  }
}
</script>

<style lang="scss">
</style>
