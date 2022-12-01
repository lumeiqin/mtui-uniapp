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
        path: 'form'
      }, {
        title: 'Text 文本',
        path: 'text'
      }, {
        title: 'ID 身份证',
        path: 'id'
      }, {
        title: 'Tel 手机号',
        path: 'tel'
      }, {
        title: 'Number 数字',
        path: 'number'
      }, {
        title: 'Password 密码',
        path: 'password'
      }, {
        title: 'Click 点击',
        path: 'click'
      }, {
        title: 'Location 地图',
        path: 'location'
      }, {
        title: 'Code 验证码',
        path: 'code'
      }, {
        title: 'Textarea 文本框',
        path: 'textarea'
      }, {
        title: 'Radio 单选',
        path: 'radio'
      }, {
        title: 'Selector 单选',
        path: 'selector'
      }, {
        title: 'MultiSelector 多级联动',
        path: 'multiSelector'
      }, {
        title: 'MultiCustom 联动面板',
        path: 'multiCustom'
      }, {
        title: 'MultiChoose 多选',
        path: 'multiChoose'
      }, {
        title: 'List 列表',
        path: 'list'
      }, {
        title: 'Date 日期',
        path: 'date'
      }, {
        title: 'File 附件',
        path: 'file'
      }]
    }
  },
  methods: {
    jumpPage(path) {
      uni.navigateTo({
        url: '/pages/form/' + path
      })
    },
  }
}
</script>
