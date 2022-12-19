<template>
  <view>
    <mt-navbar fixed title="Pagination" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
    <view class="comp">
      <ry-title>
        <view style="padding: 40rpx 0">
          <mt-pagination :totalPage="totalPage" @change="changeEvent"></mt-pagination>
        </view>
      </ry-title>

      <ry-title title="不显示……">
        <view style="padding: 40rpx 0">
          <mt-pagination :showEll="false"></mt-pagination>
        </view>
      </ry-title>

      <ry-title title="简单模式">
        <view style="padding: 40rpx 0">
          <mt-pagination type="simple" :showEll="false"></mt-pagination>
        </view>
      </ry-title>

      <ry-title title="自定义参数">
        <view style="padding: 40rpx 0">
          <mt-pagination :config="pageConfig"></mt-pagination>
        </view>
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
      totalPage: 20,
      pageConfig: {
        color: '#6A59B1',
        radius: '10rpx',
        numRadius: "8rpx"
      }
    }
  },
  methods: {
    changeEvent(page) {
      uni.showToast({
        title: "当前页码为：" + page,
        icon: "none"
      })
    }
  }
}
</script>
