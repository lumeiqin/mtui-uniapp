<template>
  <view>
    <mt-navbar fixed title="弹出层" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
    <view style="padding: 30px 20px;">
      <block v-for="(item, index) in compArr" :key="index">
        <mt-button @click="jumpPage(item.path)">{{ item.title }}</mt-button>
        <br>
        <br>
      </block>
    </view>
  </view>
</template>

<script>
import common from "../../common/common";

export default {
  mixins: [common],
  data() {
    return {
      compArr: [{
        title: 'Popup 弹窗',
        path: 'popup'
      }, {
        title: 'Modal 模态框',
        path: 'modal'
      }]
    }
  },
  methods: {
    jumpPage(path) {
      uni.navigateTo({
        url: '/pages/popup/' + path
      })
    },
  }
}
</script>
