<template>
  <view>
    <mt-navbar fixed title="Tabbar" emit="true" :config="pagenav" @backClick="baseClick"></mt-navbar>
    <view class="comp">
      <!-- 基础用法 -->
      <mt-tabbar :data="tabbarData"></mt-tabbar>
    </view>
  </view>
</template>

<script>
import common from "../../common/common.js";

export default {
  mixins: [common],
  data() {
    return {
      tabbarData: [{
        isactive: 1,
        path: "",
        icon: '../../static/tab/tab0.png',
        selectedIcon: '../../static/tab/itab0.png',
        iconWidth: '45px',
        iconHeight: '45px'
      }, {
        path: "",
        icon: '../../static/tab/tab1.png',
        selectedIcon: '../../static/tab/itab1.png',
        iconWidth: '45px',
        iconHeight: '45px'
      }, {
        path: "",
        icon: '../../static/tab/tab2.png',
        selectedIcon: '../../static/tab/itab2.png',
        iconWidth: '45px',
        iconHeight: '45px'
      }, {
        path: "",
        icon: '../../static/tab/tab3.png',
        selectedIcon: '../../static/tab/itab3.png',
        iconWidth: '45px',
        iconHeight: '45px'
      }],
    }
  },
  methods: {}
}
</script>
