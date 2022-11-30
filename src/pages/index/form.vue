<template>
  <view>
    <mt-navbar title="表单组件" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
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
        title: 'Form 表单',
        path: '/pages/form/form'
      }, {
        title: 'text 文本',
        path: '/pages/form/datePicker'
      },


        {
          title: '时间选择器',
          path: '/pages/datePicker'
        },]
    }
  },
  methods: {
    jumpPage(path) {
      uni.navigateTo({
        url: path
      })
    },
  }
}
</script>
