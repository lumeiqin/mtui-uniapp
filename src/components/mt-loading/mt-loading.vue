<template>
  <view class="mtLoading">
    <block v-if="type === 'normal'">
      <i :style="selfConfig" class="iconfont icon-loading"></i>
      <slot></slot>
    </block>

    <block v-else-if="type === 'dot'">
      <i :style="selfConfig" class="iconfont icon-loading1"></i>
      <slot></slot>
    </block>

    <block v-else-if="type === 'line'">
      <i :style="selfConfig" class="iconfont icon-loading3"></i>
      <slot></slot>
    </block>
  </view>
</template>

<script>
export default {
  name: "mt-loading",
  props: {
    type: {
      type: String,
      default: 'normal'
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
      selfConfig: {
        color: "#424242",
        fontSize: '28px',
        marginRight: '16rpx'
      }
    }
  },
  watch(newvalue) {
    this.selfConfig = {
      ...this.selfConfig,
      ...newvalue
    }
  },
  created() {
    this.selfConfig = {
      ...this.selfConfig,
      ...this.config
    }
  }
}
</script>
