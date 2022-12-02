<template>
  <view>
    <mt-navbar fixed title="Pagination" emit="true" :config="pagenav" @backClick="baseClick"></mt-navbar>
    <view class="comp">
      <ry-title>
        <mt-pagination></mt-pagination>
      </ry-title>
    </view>
  </view>
</template>

<script>
import common from "../../common/common.js";

export default {
  mixins: [common],
  data() {
    return {}
  },
  methods: {}
}
</script>
