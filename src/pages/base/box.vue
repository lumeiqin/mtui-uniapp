<template>
  <view>
    <mt-navbar fixed title="Box" emit="true" :config="pagenav" @backClick="baseClick"></mt-navbar>
    <view class="comp">
      <ry-title>
        <mt-box>
          今人不见古时月，今月曾经照古人。
        </mt-box>
      </ry-title>

      <ry-title title="内容居中 + 显示上下边框">
        <mt-box :center="true" :border="true">
          今人不见古时月，今月曾经照古人。
        </mt-box>
      </ry-title>

      <ry-title title="无数据状态">
        <mt-box :empty="true">
          今人不见古时月，今月曾经照古人。
        </mt-box>
      </ry-title>

      <ry-title title="上拉加载">
        <mt-box :config="pageConfig" @lower="lowerEvent" @upper="upperEvent">
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
          今人不见古时月，今月曾经照古人。<br>
        </mt-box>
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
      pageConfig: {
        height: "400rpx",
        padding: "30rpx",

        scrollY: true,
        scrollTop: 50
      }
    }
  },
  methods: {
    upperEvent(e) {
      uni.showToast({
        title: "到顶啦",
        icon: "none"
      })
    },
    lowerEvent(e) {
      uni.showToast({
        title: "到底啦",
        icon: "none"
      })
    }
  }
}
</script>
