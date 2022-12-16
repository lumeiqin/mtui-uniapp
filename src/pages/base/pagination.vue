<template>
  <view>
    <mt-navbar fixed title="Pagination" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
    <view class="comp">
      <ry-title>
        <mt-pagination :totalPage="totalPage" @change="changeEvent"></mt-pagination>
      </ry-title>

      <ry-title title="不显示……">
        <mt-pagination :showEll="false"></mt-pagination>
      </ry-title>

      <ry-title title="变换主题色">
        <mt-pagination :config="{color: '#6A59B1'}"></mt-pagination>
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
      totalPage: 20
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
