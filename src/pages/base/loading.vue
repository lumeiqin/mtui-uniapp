<template>
  <view>
    <mt-navbar fixed title="Tag" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
    <view class="comp">
      <ry-title>
        <mt-loading>加载中…</mt-loading>
      </ry-title>
      <ry-title title="点 loading">
        <mt-loading type="dot"></mt-loading>
      </ry-title>
      <ry-title title="线 loading">
        <mt-loading type="line"></mt-loading>
      </ry-title>
      <ry-title title="自定义参数">
        <mt-loading :config="loadConfig">
          <text style="color: #2194F2">加载中…</text>
        </mt-loading>
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
      loadConfig: {
        color: '#2194F2',
        fontSize: "30px",
        marginRight: '18rpx'
      },
    }
  }
}
</script>
