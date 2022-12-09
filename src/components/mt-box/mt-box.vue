<template>
  <scroll-view class="mt-box" :class="{ 'mt-box--border': border }"

               :scroll-y="selfConfig.scrollY"
               :upper-threshold="selfConfig.upper"
               :lower-threshold="selfConfig.lower"
               :scroll-top="selfConfig.scrollTop"

               :style="{
                 height: selfConfig.height,
                 backgroundColor: selfConfig.bg,
                 padding: selfConfig.padding,
                 borderRadius: selfConfig.radius
               }"

               @scroll="scrollFun"
               @scrolltoupper="upperFun"
               @scrolltolower="lowerFun">

    <view class="mt-box--empty" v-if="empty"> 暂无数据</view>
    <view v-else :class="{ 'mt-box--center': center }">
      <slot/>
    </view>
  </scroll-view>
</template>

<script>
export default {
  name: "mt-box",
  props: {
    center: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data() {
    return {
      selfConfig: {
        height: 'auto',
        radius: '10rpx',
        padding: '30rpx',
        bg: '#fff',

        scrollY: false,
        upper: 50,
        lower: 50,
        scrollTop: 0
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
    scrollFun(e) {
      this.$emit('scroll', e)
    },
    upperFun(e) {
      this.$emit('upper', e)
    },
    lowerFun(e) {
      this.$emit('lower', e)
    }
  }
}
</script>
