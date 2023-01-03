<template>
  <view>
    <mt-navbar fixed title="Text" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
    <view class="comp">
      <ry-title>

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
    }
  },
  methods: {
  }
}
</script>
