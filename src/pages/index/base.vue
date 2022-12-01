<template>
  <view>
    <mt-navbar fixed title="基础组件" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
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
        title: 'Box 容器',
        path: 'box'
      }, {
        title: 'Button 按钮',
        path: 'button'
      }, {
        title: 'Card 卡片',
        path: 'card'
      }, {
        title: 'Collapse 折叠面板',
        path: 'collapse'
      }, {
        title: 'Grid 宫格',
        path: 'grid'
      }, {
        title: 'Modal 模态框',
        path: 'modal'
      }, {
        title: 'Navbar 导航栏',
        path: 'navbar'
      }, {
        title: 'Popup 弹窗',
        path: 'popup'
      }, {
        title: 'Rate 评分',
        path: 'rate'
      }, {
        title: 'Search 搜索框',
        path: 'search'
      }, {
        title: 'Step 流程图',
        path: 'step'
      }, {
        title: 'Tabbar 标签栏',
        path: 'tabbar'
      }, {
        title: 'Tabs 标签页',
        path: 'tabs'
      }, {
        title: 'Tag 标签',
        path: 'tag'
      }]
    }
  },
  methods: {
    jumpPage(path) {
      uni.navigateTo({
        url: '/pages/base/' + path
      })
    },
  }
}
</script>
